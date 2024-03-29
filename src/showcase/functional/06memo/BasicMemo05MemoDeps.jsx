import { useEffect, useLayoutEffect, useState, useMemo } from "react"

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
const BasicMemo05MemoDeps = () => {
    const [state, setState] = useState(0)
    // [] -> filter, reduce, map

    const handleClick = () => {
        setState(prev => prev + 1)
    }

    return (
        <>
            <Child time={state}></Child>
            <button onClick={handleClick}>{state} Click Me</button>
        </>
    )
}

const Child = (props) => {
    const result = useMemo(() => work(props.time * 1000), [props.time]) // props based
    return (
        <>
            <span>result: {result}</span>
        </>
    )
}

export default BasicMemo05MemoDeps