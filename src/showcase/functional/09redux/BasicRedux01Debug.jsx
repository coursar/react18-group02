import { useState } from "react"
import { Provider, useSelector, useDispatch } from "react-redux"
import { combineReducers, legacy_createStore } from "redux"

// 1. store
// 2. reducer -> pure function: action -> new state
// 3. useSelector(), useDispatch()

// global state:
// const state = {
//     files: {loading: true, value: [], error: null},
//     issue: {loading: true, value: [], error: null},
//     commiters: {loading: true, value: [], error: null},
// }

/*
global state shape: reducer
{
    counter: {value: 0, loading: false, error: null} // counterReducer
}
*/

const initialCounterState = {value: 0, loading: false, error: null}

const counterSelector = (state) => state.counter

// state -> undefined 
const counterReducer = (state = initialCounterState, action) => {
    // action -> plain JS object, type: 'text'
    switch (action.type) {
        case 'INCREMENT': 
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

const BasicRedux01Debug = () => {
    return (
        <>
            <Provider store={store}>
                <Child></Child>
            </Provider>
        </>
    )
}

const Child = () => {
    const {value, loading, error} = useSelector(counterSelector)
    const dispatch = useDispatch()

    const handleClick = (ev) => {
        dispatch({
            type: 'INCREMENT'
        })
    }

    return (
        <>
            Child
            {value}
            <button onClick={handleClick}>Click Me</button>
        </>
    )
}

export default BasicRedux01Debug