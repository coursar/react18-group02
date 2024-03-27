import { useEffect } from "react"
import { Provider, useSelector, useDispatch } from "react-redux"
import { API_URL } from "../../../constants"
import { combineSlices, configureStore, createAction, createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit"

// separate file
const initialCounterState = {value: 0, loading: false, error: null}
// helper, redux-react, immer, thunk, ...
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        // automatically generated action creators
        update: (state, action) => {
            state.value = action.payload.value;
        }
    },
})

const {update} = counterSlice.actions

const appReducer = combineSlices(
    counterSlice, // counter(name): counterSlice.reducer
)

const store = configureStore({
    reducer: appReducer
})

const ws = new WebSocket('ws://localhost:9999')
ws.addEventListener('open', (ev) => {
  console.log('open', ev)
})
ws.addEventListener('error', (ev) => {
  console.log('error', ev)
})
ws.addEventListener('close', (ev) => {
  console.log('close', ev)
})
ws.addEventListener('message', (ev) => {
    const data = JSON.parse(ev.data)
    store.dispatch(update(data))
})

const send = (data) => (dispatch) => {
    ws.send(data)
}

// in separate file
const BasicRedux16WS = () => {
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

    const handleClick = async (ev) => {
        dispatch(send('message'))
    }

    return (
        <>
            <div>{loading && <>Loading...</>}</div>
            <div>{error && <>{error.message}</>}</div>
            <div>
                <button disabled={loading} onClick={handleClick}>{value} Click Me</button>
            </div>
        </>
    )
}

export default BasicRedux16WS
