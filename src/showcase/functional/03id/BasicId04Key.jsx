import { useId, useState } from "react"

// <component key={...}></component>

const BasicId04Key = () => {
    const [state, setState] = useState(0)

    const handleClick = () => {
        setState(prev => prev + 1)
    }

    return (
        <>
            <Child key={state}></Child>
            <button onClick={handleClick}>Click me</button>
        </>
    )
}

const Child = () => {
    const id = useId()

    return (
        <>
            <div id={id}>Some content</div>
        </>
    )

}

export default BasicId04Key