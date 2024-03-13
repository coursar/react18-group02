// Import our custom CSS
import '../../../styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import { useRef } from "react"

/* markup
<div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div className="toast-header">
    <img src="..." className="rounded me-2" alt="...">
    <strong className="me-auto">Bootstrap</strong>
    <small>11 mins ago</small>
    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div className="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>
*/

/*
const myToastEl = document.getElementById('myToastEl') => ref
const myToast = bootstrap.Toast.getOrCreateInstance(myToastEl) 
myToast.show()
*/

const BasicRef14ExternalBootstrap = () => {
    const toastElRef = useRef(null)
    const toastRef = useRef(null)

    const handleShow = () => {
        debugger
        // domEl.customProperty = toast
        // storage (domEl & toast)
        if (toastRef.current === null) { // бессмысленно
            toastRef.current = bootstrap.Toast.getOrCreateInstance(toastElRef.current) 
        }
        toast.show()
    }

    return (
        <>
            <div ref={toastElRef} className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <img src="..." className="rounded me-2" alt="..."></img>
                    <strong className="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div className="toast-body">
                    Hello, world! This is a toast message.
                </div>
            </div>
            <button classNameName='btn btn-primary' onClick={handleShow}>Show toast</button>
        </>
    )
}

export default BasicRef14ExternalBootstrap
