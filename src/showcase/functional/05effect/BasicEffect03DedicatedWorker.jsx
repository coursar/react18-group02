import { useEffect, useLayoutEffect, useRef, useState } from "react"

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
    const workerRef = useRef(null)
    if (workerRef.current === null) {
        workerRef.current = new Worker(new URL('../../../dedicated-worker.js', import.meta.url), {type: 'module'})
    }

    useEffect(() => {
        workerRef.current.addEventListener('message', (ev) => {
            console.log(ev)
            setState(ev.data)
            // worker.terminate()
        })
        workerRef.current.postMessage('calculateDate')

        return () => { // cleaning function
            workerRef.current.terminate()
        }
    }, [workerRef])

    const handleClick = () => {
        workerRef.current.postMessage('calculateDate')
        setState(null)
    }

    return (
        <>
            <div>{state === null ? '...' : state.toUTCString()}</div>
            <button onClick={handleClick}>Click Me</button>
        </>
    )
}

export default BasicEffect03DedicatedWorker