import { useState } from "react"

const BasicState01Debug = () => {
    debugger
    const [state, setState] = useState(0)

    const handleClick = () => {
        debugger
        setState(1)
    }

    return (
        <>
            <button onClick={handleClick}>{state} Click Me</button>
        </>
    )
}

export default BasicState01Debug