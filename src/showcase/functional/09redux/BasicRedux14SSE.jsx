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
    extraReducers: (builder) => {
        builder
            // incrementRequest
            .addCase(increment.pending, (state, action) => {
                state.loading = true
                state.error = null
            })
            // incrementSuccess
            .addCase(increment.fulfilled, (state, action) => {
                state.value = action.payload.value
                state.error = null
            })
            // incrementFail + prepare -> action.error
            .addCase(increment.rejected, (state, action) => {
                state.error = action.error
            })
            // "finally analogue"
            .addMatcher(increment.settled, (state) => {
                state.loading = false
            })
      },
})

const {update} = counterSlice.actions

const increment = createAsyncThunk(
    `${counterSlice.name}/increment`, // typePrefix
    async (arg, api) => {
        const response = await fetch(`${API_URL}`)
        const data = await response.json()
        if (!response.ok) {
            throw new Error(response.statusText) // rejected
        }
        return data // fulfilled
    }
)

const appReducer = combineSlices(
    counterSlice, // counter(name): counterSlice.reducer
)

const store = configureStore({
    reducer: appReducer
})

const sse = new EventSource('http://localhost:9999')
sse.addEventListener('open', (ev) => {
  console.log('open', ev)
})
sse.addEventListener('message', (ev) => {
    const data = JSON.parse(ev.data)
    store.dispatch(update(data))
})
sse.addEventListener('error', (ev) => {
  console.log('error', ev)
})

// in separate file
const BasicRedux14SSE = () => {
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
            <div>{loading && <>Loading...</>}</div>
            <div>{error && <>{error.message}</>}</div>
            <div>
                <button disabled={loading} onClick={handleClick}>{value} Click Me</button>
            </div>
        </>
    )
}

export default BasicRedux14SSE
