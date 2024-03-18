import { useId, useState } from "react"

const BasicId01Debug = () => {
    const id = useId()
    const [state, setState] = useState(0)

    const handleClick = () => {
        setState(prev => prev + 1)
    }

    return (
        <>
            <div id={id}>Some content</div>
            <button onClick={handleClick}>Click me</button>
        </>
    )
}

export default BasicId01Debug