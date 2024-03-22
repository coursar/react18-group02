import { forwardRef, memo, useState } from "react"

const BasicCallback01ParentChild = () => {
    const [state, setState] = useState(0)

    const handleClick = () => {
        setState(prev => prev + 1)
    }

    return (
        <>
            <Child></Child>
            <button onClick={handleClick}>{state} Click Me</button>
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

export default BasicCallback01ParentChild