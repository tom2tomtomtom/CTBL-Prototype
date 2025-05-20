import React from 'react'
import { useStore } from '../store'

const providers = ['openai', 'anthropic', 'mistral'] as const

export const LLMSelector: React.FC = () => {
  const provider = useStore(s => s.provider)
  const setProvider = useStore(s => s.setProvider)

  return (
    <select value={provider} onChange={e => setProvider(e.target.value as any)}>
      {providers.map(p => (
        <option key={p} value={p}>{p}</option>
      ))}
    </select>
  )
}
