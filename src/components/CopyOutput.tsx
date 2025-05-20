import React from 'react'
import { useStore } from '../store'
import { openaiCompletion } from '../lib/llmAdapters/openai'
import { anthropicCompletion } from '../lib/llmAdapters/anthropic'
import { mistralCompletion } from '../lib/llmAdapters/mistral'

export const CopyOutput: React.FC = () => {
  const prompt = useStore(s => s.prompt)
  const provider = useStore(s => s.provider)
  const [output, setOutput] = React.useState('')

  const handleRun = async () => {
    let res = ''
    if (provider === 'openai') {
      res = await openaiCompletion(prompt)
    } else if (provider === 'anthropic') {
      res = await anthropicCompletion(prompt)
    } else {
      res = await mistralCompletion(prompt)
    }
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
