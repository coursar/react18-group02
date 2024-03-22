import { forwardRef, memo, useMemo, useState } from "react"

const BasicCallback03ParentChildProps = () => {
    const [state, setState] = useState(0)
    const [childState, setChildState] = useState(0)

    const handleChangeState = () => {
        setState(prev => prev + 1)
    }

    const handleChangeChildState = () => {
        setChildState(prev => prev + 1)
    }

    const style = useMemo(() => ({
        color: 'red'
    }), [])

    return (
        <>
            <Child style={style} value={childState}></Child>
            <button onClick={handleChangeState}>{state} Change State</button>
            <button onClick={handleChangeChildState}>{childState} Change Child State</button>
        </>
    )
}

const Child = memo(forwardRef(function Child(props, forwardedRef) {
    return (
        <>
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

export default BasicCallback03ParentChildProps