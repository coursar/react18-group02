import { useRef } from "react"

const BasicRef02FormWithoutRef = () => {
    const inputRef = useRef(null) // {current: null}

    const handleSubmit = (ev) => {
        ev.preventDefault()
        inputRef.current.focus()
        // ev.currentTarget.elements.name.focus()
        // bad:
        //  - document.querySelector(...) -> quick & dirty hack
        //  - window.nameInput
    }


    // ref:
    //  1. ref={inputRef}
    //  2. ref={el => inputRef.current = el}
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input ref={inputRef} id="document" name="name"></input>
                <button>Click Me</button>
                <div>comment</div>
            </form>
        </>
    )
}

export default BasicRef02FormWithoutRef