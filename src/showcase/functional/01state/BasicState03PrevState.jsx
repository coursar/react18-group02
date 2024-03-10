import { useState } from "react"

const BasicState03PrevState = () => {
    debugger
    const [state, setState] = useState(0) // state = 0

    const handleClick = () => {
        debugger
        setState(prevState => prevState + 1)
        setState(prevState => prevState + 2)
    }

    return (
        <>
            <button onClick={handleClick}>{state} Click Me</button>
        </>
    )
}

export default BasicState03PrevState