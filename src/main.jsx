import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// document.appendChild(...)

// const el = // <div></div> // babel -> 
// React.createElement(
//   'div',
//   {}, // props
// )
// console.dir(el)

// 1. Component -> fn, class, embed ('div', ...)
// 2. React Element (element * <-> 1 component)
//    class-based component:
//    2.1. const obj = new Component()
//    2.2. obj.render()

// 3. DOM Element

// 1. Phase -> Rendering: new component() <->.render(), fn()
// 2. Phase -> Commit (DOM)

/*
const obj = {
  type: 'div',
  _private: ... -> #private
}
*/

window.addEventListener('error', ev => {
  console.log(ev)
  // send error to server
})

// render -> pure function/method -> sin(in) -> out
// Dev mode differs from Prod
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
)

// Upload file:
//  1. input type="file" - not stylizable
//  2. DnD - Drag and Drop
//  3. Web API*