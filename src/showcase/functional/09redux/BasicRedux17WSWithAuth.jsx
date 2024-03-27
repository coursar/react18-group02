import { useEffect, useRef } from "react"
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
    authSlice,
    counterSlice, // counter(name): counterSlice.reducer
)

const rootReducer = (state, action) => {
    if (logout.match(action)) {
        return appReducer(undefined, action)
    }

    return appReducer(state, action)
}

const store = configureStore({
    reducer: rootReducer
})

// in separate file
const BasicRedux17WSWithAuth = () => {
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
    const {authenticated} = useSelector(authSlice.selectSlice)
    const {value, loading, error} = useSelector(counterSlice.selectSlice)
    const dispatch = useDispatch()
    const wsRef = useRef(null)

    useEffect(() => {
        if (!authenticated) {
            return
        }

        const ws = new WebSocket('ws://localhost:9999')
        wsRef.current = ws
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
            dispatch(update(data))
        })

        return () => {
            console.log('clean')
            ws.close()
            wsRef.current = null
        }

    }, [authenticated])

    const handleClick = async (ev) => {
        wsRef.current?.send('message')
    }

    return (
        <>
            <Navbar></Navbar>
            <div>{loading && <>Loading...</>}</div>
            <div>{error && <>{error.message}</>}</div>
            <div>
                {authenticated && <button disabled={loading} onClick={handleClick}>{value} Click Me</button>}
            </div>
        </>
    )
}

const Navbar = () => {
    // const store = useStore()
    const {authenticated} = useSelector(authSlice.selectSlice)
    const dispatch = useDispatch()

    const handleClick = async (ev) => {
        dispatch(!authenticated ? login() : logout())
    }

    return (
        <>
            <div>
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


export default BasicRedux17WSWithAuth
