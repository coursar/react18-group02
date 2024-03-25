import { useEffect, useState } from "react"
import { Provider, useSelector, useDispatch, useStore } from "react-redux"
import { combineReducers, legacy_createStore } from "redux"
import { API_URL } from "../../../constants"

// action types
const INCREMENT_REQUEST = 'INCREMENT_REQUEST' // counter/increment
const INCREMENT_SUCCESS = 'INCREMENT_SUCCESS' // counter/increment
const INCREMENT_FAIL = 'INCREMENT_FAIL' // counter/increment

// Flux -> payload, meta, error
// action creaters
const incrementRequest = () => ({
    type: INCREMENT_REQUEST,
    payload: {},
})
const incrementSuccess = (payload) => ({
    type: INCREMENT_SUCCESS,
    payload,
})
const incrementFail = (error) => ({ // new File, Blob, Image, Error, Date
    type: INCREMENT_FAIL,
    payload: {},
    error,
})

// async action creator
const increment = async (dispatch) => {
    try {
        dispatch(incrementRequest())
        const response = await fetch(`${API_URL}`)
        const data = await response.json()
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        // data.errors.code GitHub Style
        dispatch(incrementSuccess(data))
    } catch (e) {
        dispatch(incrementFail(e)) // FIXME: Error
    }
}


const initialCounterState = {value: 0, loading: false, error: null}

const counterSelector = (state) => state.counter

// state -> undefined 
const counterReducer = (state = initialCounterState, action) => {
    // action -> plain JS object, type: 'text'
    switch (action.type) {
        case INCREMENT_REQUEST: 
            // state.loading = true
            // state.error = null
            return {...state, loading: true, error: null}
        case INCREMENT_SUCCESS: 
            return {...state, value: action.payload.value, loading: false, error: null}
        case INCREMENT_FAIL: 
            return {...state, loading: false, error: action.error}
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

const BasicRedux05SideEffects = () => {
    return (
        <>
            <Provider store={store}>
                <Child></Child>
            </Provider>
        </>
    )
}

const Child = () => {
    // const store = useStore()
    const {value, loading, error} = useSelector(counterSelector)
    const dispatch = useDispatch()

    useEffect(() => {
        increment(dispatch)
    }, [])

    const handleClick = async (ev) => {
        // dispatch(actionCreator())
        increment(dispatch)
    }

    return (
        <>
            {loading && <>Loading...</>}
            {value}
            <button onClick={handleClick}>Click Me</button>
        </>
    )
}

export default BasicRedux05SideEffects