import './App.css'
import { ErrorBoundary, ErrorOnRender } from './components/shared/ErrorBoundary' // from './components/shared/ErrorBoundary/index.js(ts)'
import BasicMemo01NoMemo from './showcase/functional/06memo/BasicMemo01NoMemo'

function App() {
  return (
    <>
      <ErrorBoundary fallback={<div>main ooops!</div>}>
        <BasicMemo01NoMemo></BasicMemo01NoMemo>
        <BasicMemo01NoMemo></BasicMemo01NoMemo>
      </ErrorBoundary>
    </>
  )
}

export default App
