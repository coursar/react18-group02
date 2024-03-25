import { useEffect, useState } from "react"
import { Provider, useSelector, useDispatch } from "react-redux"
import { combineReducers, legacy_createStore, applyMiddleware } from "redux"
import { API_URL } from "../../../constants"
import { thunk } from "redux-thunk"

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
// increment() -> fn(dispatch)
const increment = () => async (dispatch) => {
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

const logger = (store) => (next) => (action) => {
    console.log('dispatching', action)
    return next(action)
}

const middleware = [logger, thunk]

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
      })
    : compose

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
)

// in separate file
const store = legacy_createStore(
    reducer,
    enhancer,
)

// in separate file

const BasicRedux07Thunk = () => {
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
        dispatch(increment())
    }, [])

    const handleClick = async (ev) => {
        // dispatch(actionCreator())
        // increment(dispatch)
        dispatch(increment())
    }

    return (
        <>
            {loading && <>Loading...</>}
            <button disabled={loading} onClick={handleClick}>{value} Click Me</button>
        </>
    )
}

export default BasicRedux07Thunk