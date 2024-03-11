import { Component, createRef, useRef } from "react"

// const instance = new Input(props)
// instance.render()
const BasicRef08FunctionalRef = () => {
    const ref = useRef(null)

    const handleClick = () => {
        console.log(ref.current)
    }

    return (
        <>
            <Input ref={ref}></Input>
            <button onClick={handleClick}>Click</button>
        </>
    )
}

const Input = () => {
    const inputRef = useRef(null)

    return (
        <>
            <input ref={inputRef}></input>
        </>
    )
}

export default BasicRef08FunctionalRef