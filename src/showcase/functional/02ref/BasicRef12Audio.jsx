import { useRef, useState } from "react"


/* js:
const audio = new Audio('/tg_msg_incoming.mp3')
setTimeout(() => {
  audio.play()
}, 5000)
*/

class FakeAudio {
    constructor() {console.log('created')}
    play() {}
}

// 0. new in handle - bad
// 1. lazy-init in handler (good) 
// 2. load on render 
// 3. load out of component (may be error)
// 4. init: const audioRef = useRef(new Audio('/tg_msg_incoming.mp3')) // {current: null}
//   4.1. mount -> new Audio -> current = new Audio
//   4.2. update -> new Audio & drop it

// v3.
// const audio = new Audio('/tg_msg_incoming.mp3')

const BasicRef12Audio = () => {
    const audioRef = useRef(null) // {current: null}
    // v2.
    if (audioRef.current === null) {
        audioRef.current = new Audio('/tg_msg_incoming.mp3')
    }

    const handleClick = () => {
        // v1.
        // if (audioRef.current === null) {
        //     audioRef.current = new Audio('/tg_msg_incoming.mp3')
        // }
        audioRef.current.play()
        // TODO: play sound
    }

    return (
        <>
            <button onClick={handleClick}>Play</button>
        </>
    )
}

export default BasicRef12Audio
