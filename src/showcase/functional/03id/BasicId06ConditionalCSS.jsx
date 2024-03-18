import { useId, useState } from "react"

// <component key={...}></component>

const BasicId06ConditionalCSS = () => {
    const [state, setState] = useState(0)

    const handleClick = () => {
        setState(prev => prev + 1)
    }

    const style = {visibility: state % 2 === 0 ? 'visible' : 'hidden'}

    return (
        <>
            <Child style={style}></Child>
            <button onClick={handleClick}>Click me</button>
        </>
    )
}

const Child = ({style}) => {
    const id = useId()
    // ops: filer/map/reduce

    return (
        <>
            <div id={id} style={style}>Some content</div>
        </>
    )

}

export default BasicId06ConditionalCSS