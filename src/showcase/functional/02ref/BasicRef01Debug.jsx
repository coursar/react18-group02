import { useRef, useState } from "react"

const BasicRef08Debug = () => {
    debugger
    const [state, setState] = useState(0)
    const ref = useRef(100) // {current: 100}

    const handleClick = () => {
        ref.current++
        console.log(ref)
        setState(prevState => prevState + 1)
    }

    return (
        <>
            <button onClick={handleClick}>Click Me</button>
        </>
    )
}

export default BasicRef08Debug