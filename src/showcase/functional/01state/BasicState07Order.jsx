import { useState } from "react"

const BasicState07Order = () => {
    const [state, setState] = useState(100)

    let first, setFirst
    let second, setSecond

    if (state % 2 === 0) {
        [first, setFirst] = useState(11)
    } else {
        debugger
        [second, setSecond] = useState(22)
    }

    const handleClick = () => {
        setState(prevState => prevState + 1)
    }

    return (
        <>
            <span>{state}</span>
            <button onClick={handleClick}>Click Me</button>
        </>
    )
}

export default BasicState07Order