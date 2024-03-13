import { useRef, useState } from "react"


/* js:
const audio = new Audio('/tg_msg_incoming.mp3')
setTimeout(() => {
  audio.play()
}, 5000)
*/
const BasicRef12Audio = () => {

    const handleClick = () => {
        // TODO: play sound
    }

    return (
        <>
            <button onClick={handleClick}>Play</button>
        </>
    )
}

export default BasicRef12Audio