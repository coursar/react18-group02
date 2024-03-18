import { useSyncExternalStore } from "react"

const store = {
    state: JSON.parse(localStorage.getItem('state')),
    listeners: new Set(), // react "listener"
}

const subscribe = (listener) => {
    store.listeners.add(listener)
    return () => {
        store.listeners.delete(listener)
    }
}

const getSnapshot = () => {
    return store.state
}

const update = () => {
    store.state = {now: new Date().toUTCString()} // string, number, boolean, object, arrays, null
    localStorage.setItem('state', JSON.stringify(store.state))
    store.listeners.forEach(listener => listener())   
}

// not fired on page where localStorage.X()
window.addEventListener('storage', (ev) => {
    // TODO: check ev
    store.state = JSON.parse(localStorage.getItem('state'))
    store.listeners.forEach(listener => listener())   
})

const BasicExternalStore02LocalStorage = () => {
    const snapshot = useSyncExternalStore(subscribe, getSnapshot)

    const handleClick = () => {
        update()
    }

    return (
        <>
            <div>{snapshot?.now}</div>
            <button onClick={handleClick}>Update</button>
        </>
    )
}

export default BasicExternalStore02LocalStorage