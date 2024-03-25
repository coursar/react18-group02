import { useSyncExternalStore } from "react"

// external store
const store = {
    state: {now: new Date()},
    listeners: new Set(), // react "listener"
}

// subscribe:
//  listener = () => {} -> from react
//  1. eventTarget.addEventListener('type', listener)
//  2. () => { eventTarget.removeEventListener('type', listener) }
const subscribe = (listener) => {
    store.listeners.add(listener)
    return () => { // later called by react
        store.listeners.delete(listener)
    }
}

const getSnapshot = () => {
    return store.state // Object.is
}

// dispatch
const update = () => {
    store.state = {now: new Date()}
    store.listeners.forEach(listener => listener())   
}

setInterval(() => {
    update()
}, 3000)

const BasicExternalStore01Plain = () => {
    const snapshot = useSyncExternalStore(subscribe, getSnapshot)

    return (
        <>
            <div>{snapshot.now.toUTCString()}</div>
        </>
    )
}

export default BasicExternalStore01Plain