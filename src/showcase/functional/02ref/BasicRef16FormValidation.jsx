import { useRef } from "react"

const forbiddedNames = ['admin', 'root']

const BasicRef16FormValidation = () => {
    const handleSubmit = (ev) => {
        ev.preventDefault()
    }

    const handleLoginChange = (ev) => {
        const {target} = ev
        // clean value
        if (forbiddedNames.includes(target.value)) {
            target.setCustomValidity('Запрещённое имя')
            return
        }
        target.setCustomValidity('')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input name="name" required></input>
                <input name="login" required onChange={handleLoginChange}></input>
                <button type="submit">Register</button>
                <button type="reset">Reset</button>
            </form>
        </>
    )
}

export default BasicRef16FormValidation