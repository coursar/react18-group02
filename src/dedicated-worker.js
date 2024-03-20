// console.log(globalThis) // page -> globalThis -> Window
const work = (duration) => {
    // sync code (no promise, async, no setTimeout)
    const start = new Date().getTime()
    const end = start + duration
    let current = start
    while (current < end) {
        current = new Date().getTime()
    }
}


self.addEventListener('message', (ev) => {
    console.log(ev)
    work(5000)
    self.postMessage(new Date())
})

// self.close()