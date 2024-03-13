// Import our custom CSS
import '../../../styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import { useRef } from "react"

/* markup
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <img src="..." class="rounded me-2" alt="...">
    <strong class="me-auto">Bootstrap</strong>
    <small>11 mins ago</small>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
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

    const handleShow = () => {
        // TODO: write code
    }

    return (
        <>
            {/* markup */}
            <button className='btn btn-primary' onClick={handleShow}>Show toast</button>
        </>
    )
}

export default BasicRef14ExternalBootstrap
