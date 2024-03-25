import { useEffect } from "react"
import { Provider, useSelector, useDispatch } from "react-redux"
import { API_URL } from "../../../constants"
import { combineSlices, configureStore, createSlice } from "@reduxjs/toolkit"

// action:
//  type <-
//  payload <-

// separate file
const initialCounterState = {value: 0, loading: false, error: null}
// helper, redux-react, immer, thunk, ...
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        // state -> proxy
        incrementRequest: (state, action) => { // produce(_, state = draft) { ... }
            // return {...state, loading: true, error: null}
            state.loading = true
            state.error = null
        },
        incrementSuccess: (state, action) => {
            state.value = action.payload.value
            state.loading = false
            state.error = null
        },
        incrementFail: {
            reducer: (state, action) => { // action.error
                state.loading = false
                state.error = action.error
            },
            prepare: (error) => {
                return {payload: {}, error: {message: error.message}}
            },
        }
    }
})

const {incrementRequest, incrementSuccess, incrementFail} = counterSlice.actions

const increment = () => async (dispatch) => {
    try {
        dispatch(incrementRequest({}))
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

const reducer = combineSlices(
    counterSlice // counter(name): counterSlice.reducer
)

const store = configureStore({
    reducer: reducer
})

// in separate file
const BasicRedux09Toolkit = () => {
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
    const {value, loading, error} = useSelector(counterSlice.selectSlice)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(increment())
    }, [])

    const handleClick = async (ev) => {
        dispatch(increment())
    }

    return (
        <>
            {loading && <>Loading...</>}
            {error && <>{error.message}</>}
            <button disabled={loading} onClick={handleClick}>{value} Click Me</button>
        </>
    )
}

export default BasicRedux09Toolkit
