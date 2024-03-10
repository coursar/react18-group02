import { Component, useState } from "react"

const initialState = {
    value: 'initial'
}

class BasicState06MutableStateForceUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = initialState;
    }

    handleClick = () => {
        // Bad code
        this.state.value = 'changed'
        this.forceUpdate()
    }

    render() {
        return (
            <>
                <span>{this.state.value}</span>
                <button onClick={this.handleClick}>Click Me</button>
            </>
        )
    }
}

export default BasicState06MutableStateForceUpdate