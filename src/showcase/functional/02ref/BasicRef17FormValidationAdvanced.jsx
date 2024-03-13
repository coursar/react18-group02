import { useRef, useState } from "react"

const forbiddedNames = ['admin', 'root']

const BasicRef17FormValidationAdvanced = () => {
    const [validated, setValidated] = useState(false)
    const elRefs = useRef([])

    const handleSubmit = (ev) => {
        ev.preventDefault()

        const valid = ev.target.checkValidity()
        if (!valid) {
            // TODO:
            // +1. highlight all errors
            // 2. focus on first invalid
            // Array.from(ev.target.elements)
            //     .find(el => el.validity.valid === false)
            //     ?.focus()

            for (const el of elRefs.current) {
                if (!el.validity.valid) { // custom obj
                    el.focus()
                    break
                }
            }
        }

        setValidated(true)
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

    let nextIdx = 0

    // {array.map((a, idx) => <El ref={el => elRefs.current[idx] = el}></E>)}

    return (
        <>
            <form className={validated ? 'form-validated' : 'form-notvalidated' } onSubmit={handleSubmit} noValidate>
                <input ref={el => elRefs.current[nextIdx++] = el} name="name" required></input>
                <input ref={el => elRefs.current[nextIdx++] = el} name="login" required onChange={handleLoginChange}></input>
                <button type="submit">Register</button>
                <button type="reset">Reset</button>
            </form>
        </>
    )
}

export default BasicRef17FormValidationAdvanced