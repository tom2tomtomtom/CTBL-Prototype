import React from 'react'
import { useStore } from '../store'
import { openaiCompletion } from '../lib/llmAdapters/openai'

export const CopyOutput: React.FC = () => {
  const prompt = useStore(s => s.prompt)
  const [output, setOutput] = React.useState('')

  const handleRun = async () => {
    const res = await openaiCompletion(prompt)
    setOutput(res)
  }

  return (
    <div className="space-y-2">
      <button className="px-4 py-2 bg-green-600 text-white" onClick={handleRun}>
        Run Prompt
      </button>
      <pre className="p-2 border bg-white whitespace-pre-wrap">{output}</pre>
    </div>
  )
}
