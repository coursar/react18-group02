import { useState } from "react"
import { produce } from "immer"

const BasicState08Immer = () => {
    const [state, setState] = useState(0)

    const handleClick = () => {
        setState(1)
    }

    return (
        <>
            <button onClick={handleClick}>{state} Click Me</button>
        </>
    )
}

// "REAL":  {...state, value: state.value + 1}
// IN CODE: state.value += 1 

const state = {
    value: 0,
    loading: false,
    error: null,
}

const nextState = produce(state, (draft) => {
    draft.value++ // draft -- is proxy
})

console.log(state, nextState)

const target = {
    value: 0,
};
  
const handler = {
    get(target, prop, receiver) {
        console.log('get')
        return Reflect.get(...arguments);
    },
    set(target, prop, receiver) {
        console.log('set')
        return Reflect.set(...arguments);
    },

}
  
const proxy = new Proxy(target, handler);
// console.log(proxy.value)
console.log(proxy.value++)
  
export default BasicState08Immer