import { useState } from "react"

const BasicState02Snapshot = () => {
    debugger
    const [state, setState] = useState(0) // state = 0

    const handleClick = () => {
        debugger
        setState(state + 1) // 1
        setState(state + 2) // 2 != 3
    }

    return (
        <>
            <button onClick={handleClick}>{state} Click Me</button>
        </>
    )
}

export default BasicState02Snapshot