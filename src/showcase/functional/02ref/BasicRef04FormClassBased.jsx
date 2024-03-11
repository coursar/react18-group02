import { Component, createRef, useRef } from "react"

// F2
class BasicRef04FormClassBased extends Component {
    constructor(props) {
        super(props)
        this.inputRef = createRef(null)
    }

    handleClick = (ev) => {
        ev.preventDefault()
        this.inputRef.current.focus()
    }

    render() {
        return (
            <>
                <input ref={el => { this.inputRef.current = el }} id="document" name="name"></input>
                <button onClick={this.handleClick}>Click Me</button>
            </>
        )
    }
}

export default BasicRef04FormClassBased