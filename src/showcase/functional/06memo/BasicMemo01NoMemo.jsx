import { useEffect, useLayoutEffect, useState } from "react"

const work = (duration) => {
    // sync code (no promise, async, no setTimeout)
    const start = new Date().getTime()
    const end = start + duration
    let current = start
    while (current < end) {
        current = new Date().getTime()
    }

    return 1
}

// 1. Render
// 2. Handler
// 3. useEffect
// 4. useLayoutEffect
const BasicMemo01NoMemo = () => {
    const [state, setState] = useState(0)

    useEffect(() => {
        work(1000)
    }, [])

    useLayoutEffect(() => {
        work(2000)
    }, [])

    const handleClick = () => {
        setState(prev => prev + 1)
    }

    return (
        <>
            <button onClick={handleClick}>{state} Click Me</button>
        </>
    )
}

export default BasicMemo01NoMemo