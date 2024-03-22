import './App.css'
import { ErrorBoundary, ErrorOnRender } from './components/shared/ErrorBoundary' // from './components/shared/ErrorBoundary/index.js(ts)'
import BasicMemo03MemoConditional from './showcase/functional/06memo/BasicMemo03MemoConditional'

function App() {
  return (
    <>
      <ErrorBoundary fallback={<div>main ooops!</div>}>
        <BasicMemo03MemoConditional></BasicMemo03MemoConditional>
      </ErrorBoundary>
    </>
  )
}

export default App
