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

// Download file:
//  1. redirect <a href="..."></a> -> Content-Type: application/octet-stream Content-Disposition
//  2. Ajax (fetch) -> body -> download

// const resp = await fetch()
// const data = await resp.json()
//  resp.blob() -> Blob
const data = new Blob([
  `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-backpack2-fill" viewBox="0 0 16 16">
  <path d="M5 13h6v-3h-1v.5a.5.5 0 0 1-1 0V10H5z"/>
  <path d="M6 2v.341C3.67 3.165 2 5.388 2 8v1.191l-1.17.585A1.5 1.5 0 0 0 0 11.118V13.5A1.5 1.5 0 0 0 1.5 15h1c.456.607 1.182 1 2 1h7c.818 0 1.544-.393 2-1h1a1.5 1.5 0 0 0 1.5-1.5v-2.382a1.5 1.5 0 0 0-.83-1.342L14 9.191V8a6 6 0 0 0-4-5.659V2a2 2 0 1 0-4 0m2-1a1 1 0 0 1 1 1v.083a6 6 0 0 0-2 0V2a1 1 0 0 1 1-1m0 3a4 4 0 0 1 3.96 3.43.5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14A4 4 0 0 1 8 4M4.5 9h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5"/>
</svg>`
], {type: 'image/svg+xml'})

const url = window.URL.createObjectURL(data)
const hrefEl = document.createElement('a') // in React -> JSX
hrefEl.href = url
hrefEl.download = 'image.svg'
// hrefEl.click()
setTimeout(() => {
  window.URL.revokeObjectURL(url)
}, 60 * 1000)