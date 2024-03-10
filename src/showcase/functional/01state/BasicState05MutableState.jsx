import { useState } from "react"

const BasicState05MutableState = () => {
    const [fake, setFake] = useState(false)
    const [state, setState] = useState({
        value: 'initial'
    })

    const handleClick = () => {
        // state.value = 'changed'
        setState({...state, value: 'changed'}) // setter -> re-render
        // setFake(prevState => prevState)
    }

    return (
        <>
            <span>{state.value}</span>
            <button onClick={handleClick}>Click Me</button>
        </>
    )
}

export default BasicState05MutableState