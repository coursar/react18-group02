import http from 'node:http';
import { WebSocketServer } from 'ws';

const slow = (next) => (req, res) => {
  setTimeout(() => next(req, res), 5000);
};

// http localhost 5173 <-!-> http localhost 9999
const cors = (next) => (req, res) => {
  const { origin } = req.headers;
  if (!origin) {
    next(req, res);
    return;
  }

  // simple solution. see note for fetch: https://fetch.spec.whatwg.org/#http-new-header-syntax
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*',
  };

  if (req.method !== 'OPTIONS') {
    Object.entries(headers).forEach(([k, v]) => res.setHeader(k, v));
    try {
      next(req, res);
      return;
    } catch (e) {
      e.headers = { ...e.headers, ...headers };
      throw e;
    }
  }

  Object.entries(headers).forEach(([k, v]) => res.setHeader(k, v));
  res.statusCode = 204;
  res.end();
};

const json = (next) => (req, res) => {
  if (!req.headers['content-type']?.startsWith('application/json')) {
    next(req, res);
    return;
  }

  const body = [];
  req.on('data', (chunk) => body.push(chunk));
  req.on('end', () => {
    try {
      req.body = JSON.parse(Buffer.concat(body).toString());
      req.bodyType = 'json';
    } catch (e) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'invalid json' }));
      return;
    }
    next(req, res);
  });
};

// state on server
let counter = 0;

setInterval(() => {
  counter++;
}, 5000);

const handler = (req, res) => {
  counter++;

  // /sse
  if (req.headers['accept'] === 'text/event-stream') {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.flushHeaders();

    const intervalId = setInterval(() => {
      /*
      data: ...data(JSON)...\n\n
      */
      res.write(`data: ${JSON.stringify({value: counter})}\n\n`);
    }, 5000);

    res.on('close', (ev) => {
      clearInterval(intervalId);
    });
    res.on('end', (ev) => {
      clearInterval(intervalId);
    });

    return;
  }

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({value: counter}));
};

// middleware
const server = http.createServer(cors(slow(json(handler))));
server.on('connection', (conn) => {
  conn.pipe(process.stdout);
});

const wss = new WebSocketServer({server});
wss.on('connection', (ws) => {
  ws.on('message', (ev) => {
    counter++
    ws.send(JSON.stringify({value: counter}));
  });

  setInterval(() => {
    ws.send(JSON.stringify({value: counter}));
  }, 5000);
})

const port = process.argv[2] ?? 9999;
server.listen(port, () => {
  console.log(`server started on localhost:${port}`);
});