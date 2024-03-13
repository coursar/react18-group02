import './App.css'
import { ErrorBoundary, ErrorOnRender } from './components/shared/ErrorBoundary' // from './components/shared/ErrorBoundary/index.js(ts)'
import BasicRef12Audio from './showcase/functional/02ref/BasicRef12Audio'

function App() {
  return (
    <>
      <ErrorBoundary fallback={<div>main ooops!</div>}>
        <BasicRef12Audio></BasicRef12Audio>
      </ErrorBoundary>
    </>
  )
}

export default App
