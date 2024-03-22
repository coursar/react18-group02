import './App.css'
import { ErrorBoundary, ErrorOnRender } from './components/shared/ErrorBoundary' // from './components/shared/ErrorBoundary/index.js(ts)'
import BasicCallback02ParentChildProps from './showcase/functional/07callback/BasicCallback02ParentChildProps'

function App() {
  return (
    <>
      <ErrorBoundary fallback={<div>main ooops!</div>}>
        <BasicCallback02ParentChildProps></BasicCallback02ParentChildProps>
      </ErrorBoundary>
    </>
  )
}

export default App
