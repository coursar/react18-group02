import { forwardRef, memo, useCallback, useState } from "react"

const BasicCallback04Callback = () => {
    const [state, setState] = useState(0)
    const [childState, setChildState] = useState(0)

    // const handleChangeState = () => {
    //     setState(prev => prev + 1)
    // }
    // bad useCallback usage
    const handleChangeState = useCallback(() => {
        setState(prev => prev + 1)
    }, [])

    const handleChangeChildState = useCallback(() => {
        setChildState(prev => prev + 1)
    }, [])

    return (
        <>
            <Child onClick={handleChangeChildState} value={childState}></Child>
            <button onClick={handleChangeState}>{state} Change State</button>
        </>
    )
}

const Child = memo(forwardRef(function Child(props, forwardedRef) {
    return (
        <>
            <button onClick={props.handleChangeChildState}>Click me in child</button>
            <GrandChild></GrandChild>  
        </>
    )
}))

const GrandChild = () => {
    return (
        <>
            <div>content</div>
        </>
    )
}

export default BasicCallback04Callback