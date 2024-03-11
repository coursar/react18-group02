import { useRef } from "react"

const BasicRef05UploadTask = () => {
    const handleClick = (ev) => {
        ev.preventDefault()
        // TODO: open file chooser
    }

    return (
        <>
            <input type="file"></input>
            <button>Click Me</button>
        </>
    )
}

export default BasicRef05UploadTask