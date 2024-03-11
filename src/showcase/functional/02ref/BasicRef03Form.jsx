import { useRef } from "react"

const BasicRef02FormWithoutRef = () => {
    const inputRef = useRef(null) // {current: null}

    const handleClick = (ev) => {
        ev.preventDefault()
        inputRef.current.focus() // el.focus() DOM API
    }

    // ref:
    //  1. ref={inputRef}
    //  2. ref={el => inputRef.current = el}
    return (
        <>
            <input ref={inputRef} id="document" name="name"></input>
            <button onClick={handleClick}>Click Me</button>
        </>
    )
}

export default BasicRef02FormWithoutRef