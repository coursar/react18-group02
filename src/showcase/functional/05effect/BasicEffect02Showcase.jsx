import { useEffect, useLayoutEffect, useState } from "react"

const work = (duration) => {
    // sync code (no promise, async, no setTimeout)
    const start = new Date().getTime()
    const end = start + duration
    let current = start
    while (current < end) {
        current = new Date().getTime()
    }
}

// 1. Render
// 2. Handler
// 3. useEffect
// 4. useLayoutEffect
const BasicEffect02Showcase = () => {
    const [height, setHeight] = useState(0)

    useLayoutEffect(() => {
        work(2000)
        if (height === 0) {
            setHeight(100)
        }
        if (height === 100) {
            setHeight(200)
        }
        if (height === 200) {
            setHeight(300)
        }
    }, [height])

    const style = {height, backgroundColor: 'green'}

    return (
        <>
            <div style={style}>some content</div>
        </>
    )
}

export default BasicEffect02Showcase