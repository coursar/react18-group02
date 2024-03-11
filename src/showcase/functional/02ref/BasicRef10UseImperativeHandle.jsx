import { Component, createRef, forwardRef, useImperativeHandle, useRef } from "react"

// const instance = new Input(props)
// instance.render()
const BasicRef10UseImperativeHandle = () => {
    const ref = useRef(null)

    const handleClick = () => {
        if (Math.random() > 0.5) {
            ref.current.setFocus1() // ref.current -> object {setFocus}
            return
        }
        ref.current.setFocus2()
    }

    return (
        <>
            <Input ref={ref}></Input>
            <button onClick={handleClick}>Click</button>
        </>
    )
}

const Input = forwardRef((props, forwardRef) => {
    const input1Ref = useRef(null)
    const input2Ref = useRef(null)
    useImperativeHandle(
        forwardRef,
        () => ({
            setFocus1,
            setFocus2,
        }), // return {}
        []
    )

    const setFocus1 = () => {
        input1Ref.current.focus()
    }

    const setFocus2 = () => {
        input2Ref.current.focus()
    }

    return (
        <>
            <label>Label</label>
            <input ref={input1Ref}></input>
            <input ref={input2Ref}></input>
        </>
    )
})

export default BasicRef10UseImperativeHandle