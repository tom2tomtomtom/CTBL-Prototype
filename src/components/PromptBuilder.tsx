import React from 'react'
import { useStore } from '../store'

export const PromptBuilder: React.FC = () => {
  const tone = useStore(s => s.tone)
  const prompt = `Write marketing copy in the following tone: ${tone}`
  const setPrompt = useStore(s => s.setPrompt)

  React.useEffect(() => {
    setPrompt(prompt)
  }, [tone])

  return (
    <textarea
      className="w-full p-2 border"
      rows={4}
      value={prompt}
      readOnly
    />
  )
}
