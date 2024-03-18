import { useSyncExternalStore } from "react"

const channel = new BroadcastChannel('changes')

const store = {
    state: null,
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
    store.state = {now: new Date()}
    channel.postMessage(store.state)
    store.listeners.forEach(listener => listener())   
}

channel.addEventListener('message', (ev) => {
    // ev.data
    store.state = ev.data
    store.listeners.forEach(listener => listener())   
})

const BasicExternalStore03BroadcastChannel = () => {
    const snapshot = useSyncExternalStore(subscribe, getSnapshot)

    const handleClick = () => {
        update()
    }

    return (
        <>
            <div>{snapshot?.now.toUTCString()}</div>
            <button onClick={handleClick}>Update</button>
        </>
    )
}

export default BasicExternalStore03BroadcastChannel