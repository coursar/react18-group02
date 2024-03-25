import { useState } from "react"
import { Provider, useSelector, useDispatch, useStore } from "react-redux"
import { combineReducers, legacy_createStore } from "redux"

// action types
const INCREMENT = 'INCREMENT' // counter/increment

// Flux -> payload, meta, error
// action creaters
const increment = () => ({
    type: INCREMENT,
    payload: {}
})

const initialCounterState = {value: 0, loading: false, error: null}

const counterSelector = (state) => state.counter

// state -> undefined 
const counterReducer = (state = initialCounterState, action) => {
    // action -> plain JS object, type: 'text'
    switch (action.type) {
        case INCREMENT: 
            return {...state, value: state.value + 1}
        default:
            return state
    }
}

const reducer = combineReducers({
    counter: counterReducer,
    // issues: issuesReducer
})

// in separate file
const store = legacy_createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// in separate file

const BasicRedux04Hooks = () => {
    return (
        <>
            <Provider store={store}>
                <Child></Child>
            </Provider>
        </>
    )
}

let remain = 3
const intervalId = setInterval(() => {
    remain--
    if (remain <= 0) {
        clearInterval(intervalId)
    }
    store.dispatch(increment())
}, 5000)

const Child = () => {
    // const store = useStore()
    const {value, loading, error} = useSelector(counterSelector)
    const dispatch = useDispatch()

    const handleClick = (ev) => {
        dispatch(increment())
    }

    return (
        <>
            Child
            {value}
            <button onClick={handleClick}>Click Me</button>
        </>
    )
}

export default BasicRedux04Hooks