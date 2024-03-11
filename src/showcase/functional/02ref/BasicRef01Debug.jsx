import { useRef, useState } from "react"

const BasicRef01Debug = () => {
    const ref = useRef(100) // {current: 100}

    const handleClick = () => {
        ref.current++
        console.log(ref)
    }

    return (
        <>
            <button onClick={handleClick}>Click Me</button>
        </>
    )
}

export default BasicRef01Debug