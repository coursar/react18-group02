import './App.css'
import { ErrorBoundary, ErrorOnRender } from './components/shared/ErrorBoundary' // from './components/shared/ErrorBoundary/index.js(ts)'
import BasicRef17FormValidationAdvanced from './showcase/functional/02ref/BasicRef17FormValidationAdvanced'

function App() {
  return (
    <>
      <ErrorBoundary fallback={<div>main ooops!</div>}>
        <BasicRef17FormValidationAdvanced></BasicRef17FormValidationAdvanced>
      </ErrorBoundary>
    </>
  )
}

export default App
