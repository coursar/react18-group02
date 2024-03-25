import './App.css'
import { ErrorBoundary, ErrorOnRender } from './components/shared/ErrorBoundary' // from './components/shared/ErrorBoundary/index.js(ts)'
import BasicRedux10Auth from './showcase/functional/09redux/BasicRedux10Auth'

function App() {
  return (
    <>
      <ErrorBoundary fallback={<div>main ooops!</div>}>
        <BasicRedux10Auth></BasicRedux10Auth>
      </ErrorBoundary>
    </>
  )
}

export default App
