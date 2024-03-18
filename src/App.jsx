import './App.css'
import { ErrorBoundary, ErrorOnRender } from './components/shared/ErrorBoundary' // from './components/shared/ErrorBoundary/index.js(ts)'
import BasicEffect01Debug from './showcase/functional/05effect/BasicEffect01Debug'
import BasicEffect01Showcase from './showcase/functional/05effect/BasicEffect01Showcase'

function App() {
  return (
    <>
      <ErrorBoundary fallback={<div>main ooops!</div>}>
        <BasicEffect01Debug></BasicEffect01Debug>
      </ErrorBoundary>
    </>
  )
}

export default App
