import { Component, createRef, forwardRef, useRef } from "react"

// const instance = new Input(props)
// instance.render()
const BasicRef15ForwardedRefClassBased = () => {
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

const Input = forwardRef((props, forwardRef) => {
    return (
        <>
            <InputOriginal {...props} inputRef={forwardRef}></InputOriginal>
        </>
    )
})

class InputOriginal extends Component {
    constructor(props) { // props {inputRef <- ref}
        super(props)
    }

    render() {
        return (
            <>
                <label>Label</label>
                <input ref={this.props.inputRef}></input>
            </>
        )
    }
}

export default BasicRef15ForwardedRefClassBased