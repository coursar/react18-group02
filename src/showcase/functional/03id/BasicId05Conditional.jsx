import { useId, useState } from "react"

// <component key={...}></component>

const BasicId05Conditional = () => {
    const [state, setState] = useState(0)

    const handleClick = () => {
        setState(prev => prev + 1)
    }

    return (
        <>
            {state % 2 === 0 && <Child></Child>}
            <button onClick={handleClick}>Click me</button>
        </>
    )
}

const Child = () => {
    const id = useId()
    // ops: filer/map/reduce

    return (
        <>
            <div id={id}>Some content</div>
        </>
    )

}

export default BasicId05Conditional