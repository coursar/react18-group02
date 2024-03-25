import { useSyncExternalStore } from "react"
import { combineReducers, legacy_createStore } from "redux"

const initialCounterState = {value: 0, loading: false, error: null}

const counterReducer = (state = initialCounterState, action) => {
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

let remain = 3
const intervalId = setInterval(() => {
    remain--
    if (remain <= 0) {
        clearInterval(intervalId)
    }
    store.dispatch({type: 'INCREMENT'})
}, 5000)

// Provider Redux Store
const BasicRedux03ExternalStore = () => {
    const snapshot = useSyncExternalStore(store.subscribe, store.getState)

    const handleClick = () => {
        store.dispatch({type: 'INCREMENT'})
    }

    return (
        <>
            <button onClick={handleClick}>{snapshot?.counter?.value} Click Me</button>
        </>
    )
}

const Child = () => {
    return (
        <>
            Child
        </>
    )
}

export default BasicRedux03ExternalStore