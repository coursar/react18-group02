import './App.css'
import { ErrorBoundary, ErrorOnRender } from './components/shared/ErrorBoundary' // from './components/shared/ErrorBoundary/index.js(ts)'
import BasicEffect03DedicatedWorker from './showcase/functional/05effect/BasicEffect03DedicatedWorker'

function App() {
  return (
    <>
      <ErrorBoundary fallback={<div>main ooops!</div>}>
        <BasicEffect03DedicatedWorker></BasicEffect03DedicatedWorker>
      </ErrorBoundary>
    </>
  )
}

export default App
