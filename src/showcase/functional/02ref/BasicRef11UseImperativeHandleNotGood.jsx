import { Component, createRef, forwardRef, useImperativeHandle, useRef } from "react"

// const instance = new Input(props)
// instance.render()
const BasicRef10UseImperativeHandle = () => {
    const ref = useRef(null)

    const handleClick = () => {
        console.log(ref)
    }

    return (
        <>
            <Input ref={ref}></Input>
            <button onClick={handleClick}>Click</button>
        </>
    )
}

const Input = forwardRef((props, forwardRef) => {
    const inputRef = useRef(new Array(2))
    useImperativeHandle(
        forwardRef,
        () => ({
            inputs: inputRef.current
        }), // return {}
        []
    )

    return (
        <>
            <label>Label</label>
            <input ref={el => inputRef.current[0] = el}></input>
            <input ref={el => inputRef.current[1] = el}></input>
        </>
    )
})

export default BasicRef10UseImperativeHandle