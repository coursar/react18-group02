import { useRef } from "react"

const BasicRef06DownloadTask = () => {
    const handleClick = (ev) => {
        ev.preventDefault()
        // download blob
    }

    return (
        <>
            <a name="ghost"></a>
            <button onClick={handleClick}>Click Me</button>
        </>
    )
}

export default BasicRef06DownloadTask