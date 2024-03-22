import './App.css'
import { ErrorBoundary, ErrorOnRender } from './components/shared/ErrorBoundary' // from './components/shared/ErrorBoundary/index.js(ts)'
import BasicRedux01Debug from './showcase/functional/09redux/BasicRedux01Debug'

function App() {
  return (
    <>
      <ErrorBoundary fallback={<div>main ooops!</div>}>
        <BasicRedux01Debug></BasicRedux01Debug>
      </ErrorBoundary>
    </>
  )
}

export default App
