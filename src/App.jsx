import Resume from './components/Resume.jsx'
import { resumeData } from './data/resumeData.js'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="toolbar no-print">
        <div className="toolbar__text">
          <strong>{resumeData.name}</strong> — resume preview
        </div>
        <button className="toolbar__button" onClick={() => window.print()}>
          Download PDF
        </button>
      </div>

      <div className="page-shell">
        <Resume data={resumeData} />
      </div>
    </div>
  )
}

export default App
