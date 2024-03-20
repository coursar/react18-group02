import { useEffect, useLayoutEffect, useState } from "react"

const work = (duration) => {
    // sync code (no promise, async, no setTimeout)
    const start = new Date().getTime()
    const end = start + duration
    let current = start
    while (current < end) {
        current = new Date().getTime()
    }
}

// 1. Render
// 2. Handler
// 3. useEffect -> worker
const BasicEffect03DedicatedWorker = () => {
    const [state, setState] = useState(null)

    useEffect(() => {
        const worker = new Worker(new URL('../../../dedicated-worker.js', import.meta.url), {type: 'module'})

        worker.addEventListener('message', (ev) => {
            console.log(ev)
            setState(ev.data)
            // worker.terminate()
        })
        worker.postMessage('calculateDate')

        return () => { // cleaning function
            worker.terminate()
        }
    }, [])

    const handleClick = () => {
        // TODO: send task to worker
    }

    return (
        <>
            <div>{state === null ? '...' : state.toUTCString()}</div>
            {/* <button onClick={handleClick}>{state} Click Me</button> */}
        </>
    )
}

export default BasicEffect03DedicatedWorker