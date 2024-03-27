import { useEffect } from "react"
import { Provider, useSelector, useDispatch } from "react-redux"
import { API_URL } from "../../../constants"
import { combineSlices, configureStore, createAction, createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit"

const initialAuthState = {authenticated: false}
const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login: (state) => { // dispatch(login(anything)) => {payload: anything}
            state.authenticated = true
        },
        logout: (state) => {
            state.authenticated = false
        }
    }
})

const {login, logout} = authSlice.actions

const initialLocalState = {value: 0}
const localSlice = createSlice({
    name: 'local',
    initialState: initialLocalState,
    reducers: {
        incrementLocal: (state) => {
            state.value++
        },
    }
})

const {incrementLocal} = localSlice.actions

// separate file
const initialCounterState = {value: 0, loading: false, error: null}
// helper, redux-react, immer, thunk, ...
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
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

// const increment = () => async (dispatch) => {
//     try {
//         dispatch(incrementRequest({}))
//         const response = await fetch(`${API_URL}`)
//         const data = await response.json()
//         if (!response.ok) {
//             throw new Error(response.statusText)
//         }
//         // data.errors.code GitHub Style
//         dispatch(incrementSuccess(data))
//     } catch (e) {
//         dispatch(incrementFail(e)) // FIXME: Error
//     }
// }

const increment = createAsyncThunk(
    `${counterSlice.name}/increment`, // typePrefix
    // typePrefix/pending
    // typePrefix/fulfilled
    // typePrefix/rejected
    // pending
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
    authSlice,
    localSlice,
    counterSlice, // counter(name): counterSlice.reducer
)

const rootReducer = (state, action) => {
    if (logout.match(action)) {
        return appReducer(undefined, action)
    }

    return appReducer(state, action)

    // switch(action.type) {
    //     case logout.type: // logout -> actionCreator -> createAction -> createSlice
    //         return appReducer(undefined, action)
    //     default:
    //         return appReducer(state, action)
    // }
}

const store = configureStore({
    reducer: rootReducer
})

// in separate file
const BasicRedux13ToolkitCreateAsyncThunk = () => {
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
        dispatch(incrementLocal())
        dispatch(increment())
    }

    return (
        <>
            <Navbar></Navbar>
            <div>{loading && <>Loading...</>}</div>
            <div>{error && <>{error.message}</>}</div>
            {!loading && <>data</>}
            <div>
                <button disabled={loading} onClick={handleClick}>{value} Click Me</button>
            </div>
        </>
    )
}

const Navbar = () => {
    // const store = useStore()
    const {authenticated} = useSelector(authSlice.selectSlice)
    const {value} = useSelector(localSlice.selectSlice)
    const dispatch = useDispatch()

    const handleClick = async (ev) => {
        dispatch(!authenticated ? login() : logout())
    }

    return (
        <>
            <div>
                {value}
                <button onClick={handleClick}>
                    {!authenticated && <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"/>
                            <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                        </svg>
                    </>}
                    {authenticated && <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0z"/>
                            <path fillRule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
                        </svg>
                    </>}
                </button>
            </div>
        </>
    )
}

export default BasicRedux13ToolkitCreateAsyncThunk
