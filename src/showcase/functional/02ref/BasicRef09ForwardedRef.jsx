import { Component, createRef, forwardRef, useRef } from "react"

// const instance = new Input(props)
// instance.render()
const BasicRef09ForwardedRef = () => {
    const ref = useRef(null)

    const handleClick = () => {
        ref.current.focus() // ref.current -> DOM input
    }

    return (
        <>
            <Input ref={ref}></Input>
            <button onClick={handleClick}>Click</button>
        </>
    )
}

debugger
const Input = forwardRef((props, forwardRef) => {
    return (
        <>
            <label>Label</label>
            <input ref={forwardRef}></input>
        </>
    )
})

export default BasicRef09ForwardedRef