const id = new Date().getTime()
console.log(id)

const ports = new Set()

const work = (duration) => {
    // sync code (no promise, async, no setTimeout)
    const start = new Date().getTime()
    const end = start + duration
    let current = start
    while (current < end) {
        current = new Date().getTime()
    }
}

self.addEventListener('connect', (ev) => {
    const [port] = ev.ports
    ports.add(port)

    port.start()
    port.addEventListener('message', (ev) => {
        if (ev.data === 'disconnect') {
            ports.delete(port)
            return
        }

        console.log(ev)
        work(5000)
        for (const port of ports) {
            port.postMessage(ports.size)
        }
    })
})