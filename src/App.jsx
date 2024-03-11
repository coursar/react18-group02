import './App.css'
import { ErrorBoundary, ErrorOnRender } from './components/shared/ErrorBoundary' // from './components/shared/ErrorBoundary/index.js(ts)'
import BasicRef05UploadTask from './showcase/functional/02ref/BasicRef05UploadTask'

function App() {
  return (
    <>
      <ErrorBoundary fallback={<div>main ooops!</div>}>
        <BasicRef05UploadTask></BasicRef05UploadTask>
      </ErrorBoundary>
    </>
  )
}

export default App
