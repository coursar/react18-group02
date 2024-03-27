import './App.css'
import { ErrorBoundary, ErrorOnRender } from './components/shared/ErrorBoundary' // from './components/shared/ErrorBoundary/index.js(ts)'
import BasicRedux18ToolkitMiddleware from './showcase/functional/09redux/BasicRedux18ToolkitMiddleware'

function App() {
  return (
    <>
      <ErrorBoundary fallback={<div>main ooops!</div>}>
        <BasicRedux18ToolkitMiddleware></BasicRedux18ToolkitMiddleware>
      </ErrorBoundary>
    </>
  )
}

export default App
