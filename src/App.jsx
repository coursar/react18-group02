import './App.css'
import { ErrorBoundary, ErrorOnRender } from './components/shared/ErrorBoundary' // from './components/shared/ErrorBoundary/index.js(ts)'

function App() {
  return (
    <>
      <ErrorBoundary fallback={<div>main ooops!</div>}>
      </ErrorBoundary>
    </>
  )
}

export default App
