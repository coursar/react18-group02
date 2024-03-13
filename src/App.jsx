import './App.css'
import { ErrorBoundary, ErrorOnRender } from './components/shared/ErrorBoundary' // from './components/shared/ErrorBoundary/index.js(ts)'
import BasicRef14ExternalBootstrap from './showcase/functional/02ref/BasicRef14ExternalBootstrap'

function App() {
  return (
    <>
      <ErrorBoundary fallback={<div>main ooops!</div>}>
        <BasicRef14ExternalBootstrap></BasicRef14ExternalBootstrap>
      </ErrorBoundary>
    </>
  )
}

export default App
