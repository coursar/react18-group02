import './App.css'
import { ErrorBoundary, ErrorOnRender } from './components/shared/ErrorBoundary' // from './components/shared/ErrorBoundary/index.js(ts)'
import BasicRef06DownloadTask from './showcase/functional/02ref/BasicRef06DownloadTask'

function App() {
  return (
    <>
      <ErrorBoundary fallback={<div>main ooops!</div>}>
        <BasicRef06DownloadTask></BasicRef06DownloadTask>
      </ErrorBoundary>
    </>
  )
}

export default App
