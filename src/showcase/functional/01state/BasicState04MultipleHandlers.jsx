import { useState } from "react"

const BasicState04MultipleHandlers = () => {
    debugger
    const [state, setState] = useState(10) // state = 0

    const handleParentClick = () => {
        debugger
        setState(prevState => prevState + 1)
    }

    const handleClick = () => {
        debugger
        setState(prevState => prevState * 2)
    }

    return (
        <>
            <div onClick={handleParentClick}>
                <button onClick={handleClick}>{state} Click Me</button>
            </div>
        </>
    )
}

export default BasicState04MultipleHandlers