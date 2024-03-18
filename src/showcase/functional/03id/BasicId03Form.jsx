import { useId, useState } from "react"

const BasicId03Form = () => {
    const formId = useId()

    const handleSubmit = (ev) => {
        ev.preventDefault()
        debugger
    }

    return (
        <>
            <div>
                <form id={formId} onSubmit={handleSubmit}>
                    <input type="text" name="username" />
                </form>
            </div>

            <div>
                <button form={formId}>Send</button>
            </div>
        </>

    )
}

export default BasicId03Form