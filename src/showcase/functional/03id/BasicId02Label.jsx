import { useId, useState } from "react"

const BasicId02Label = () => {
    const textId = useId()
    const checkboxId = useId()

    return (
        <>
            <div>
                <label htmlFor={textId}>Username</label>
                <input id={textId}></input>
            </div>

            <div>
                <label>
                    <input type="checkbox"></input> Some input
                </label>
            </div>

            <div>
                <input id={checkboxId} type="checkbox"></input>
                <label htmlFor={checkboxId}>
                    Some input
                </label>
            </div>
        </>

    )
}

export default BasicId02Label