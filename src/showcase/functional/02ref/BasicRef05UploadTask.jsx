import { useRef } from "react"

const BasicRef05UploadTask = () => {
    const uploadRef = useRef(null)

    const handleClick = (ev) => {
        ev.preventDefault()
        uploadRef.current.click()
    }

    return (
        <>
            <input ref={uploadRef} type="file"></input>
            <button onClick={handleClick}>Click Me</button>
        </>
    )
}

export default BasicRef05UploadTask