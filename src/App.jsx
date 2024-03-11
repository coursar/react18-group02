import './App.css'
import { ErrorBoundary, ErrorOnRender } from './components/shared/ErrorBoundary' // from './components/shared/ErrorBoundary/index.js(ts)'
import BasicRef10UseImperativeHandle from './showcase/functional/02ref/BasicRef10UseImperativeHandle'

function App() {
  return (
    <>
      <ErrorBoundary fallback={<div>main ooops!</div>}>
        <BasicRef10UseImperativeHandle></BasicRef10UseImperativeHandle>
      </ErrorBoundary>
    </>
  )
}

export default App
