import React from 'react'
import ReactDOM from 'react-dom/client'
import { useStore } from '../store'
import { openaiCompletion } from '../lib/llmAdapters/openai'
import { anthropicCompletion } from '../lib/llmAdapters/anthropic'
import { mistralCompletion } from '../lib/llmAdapters/mistral'
import '../index.css'

const App: React.FC = () => {
  const prompt = useStore(s => s.prompt)
  const [results, setResults] = React.useState<Record<string, string>>({})

  const handleRun = async () => {
    setResults({
      openai: await openaiCompletion(prompt),
      anthropic: await anthropicCompletion(prompt),
      mistral: await mistralCompletion(prompt),
    })
  }

  return (
    <div className="p-4 space-y-4">
      <button className="px-4 py-2 bg-blue-600 text-white" onClick={handleRun}>
        Compare Models
      </button>
      {Object.entries(results).map(([key, val]) => (
        <div key={key} className="border p-2">
          <strong>{key}</strong>
          <pre>{val}</pre>
        </div>
      ))}
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
