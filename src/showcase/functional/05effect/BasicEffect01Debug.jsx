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
// 3. useEffect
// 4. useLayoutEffect
const BasicEffect01Debug = () => {
    // work(2000) <- hard work (useMemo, useCallback, ...): throw from event-loop: worker, browser API, server
    const [state, setState] = useState(0)

    useEffect(() => {
        work(5000)
    }) // every render

    useLayoutEffect(() => {
        work(5000)
    }) // every render

    const handleClick = () => {
        setState(prev => prev + 1)
        // work(2000) <- throw from event-loop
    }

    return (
        <>
            <button onClick={handleClick}>{state} Click Me</button>
        </>
    )
}

export default BasicEffect01Debug