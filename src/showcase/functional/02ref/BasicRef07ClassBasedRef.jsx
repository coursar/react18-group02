import { Component, createRef, useRef } from "react"

// const instance = new Input(props)
// instance.render()
const BasicRef07ClassBasedRef = () => {
    const ref = useRef(null)

    const handleClick = () => {
        ref.current.setFocus()
    }

    return (
        <>
            <Input ref={ref}></Input>
            <button onClick={handleClick}>Click</button>
        </>
    )
}

// const instance = new Input()
// instance.render()
// ref.current = instance

class Input extends Component {
    constructor(props) {
        super(props)
        this.inputRef = createRef(null)
        this.secret = 'top secret'
    }

    setFocus = () => {
        this.inputRef.current.focus()
    }

    render() {
        return (
            <>
                <input ref={this.inputRef}></input>
            </>
        )
    }
}

export default BasicRef07ClassBasedRef