import { forwardRef, memo, useCallback, useEffect, useState } from "react"

const BasicCallback05CallbackDeps = () => {
    const [state, setState] = useState(0)

    const handleChangeState = () => {
        setState(prev => prev + 1)
    }

    return (
        <>
            <Child value={state}></Child>
            <button onClick={handleChangeState}>{state} Change State</button>
        </>
    )
}

const Child = memo(forwardRef(function Child(props, forwardedRef) {
    const fn = useCallback(() => { console.log('fn') }, [])

    // [fn] -> useEffect, useLayoutEffect, useMemo, useDeps, ...
    useEffect(() => {
        fn()
    }, [fn])

    return (
        <>
            <div>Child</div>
        </>
    )
}))

export default BasicCallback05CallbackDeps