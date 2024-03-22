import { forwardRef, memo, useCallback, useEffect, useState } from "react"

const BasicCallback06PropsChildren = () => {
    return (
        <>
            <Parent>
                <Child></Child>
            </Parent>
        </>
    )
}

const Parent = (props) => {
    const [state, setState] = useState(0)

    const handleChangeState = () => {
        setState(prev => prev + 1)
    }

    return (
        <>
            {props.children}
            <button onClick={handleChangeState}>{state} Change State</button>
        </>
    )
}

const Child = (props) =>  {

    return (
        <>
            <div>Child</div>
        </>
    )
}

export default BasicCallback06PropsChildren