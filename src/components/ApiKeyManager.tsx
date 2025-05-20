import React from 'react'
import { ApiKeyInput } from './ApiKeyInput'

const providers = ['openai', 'anthropic', 'mistral'] as const

type Provider = typeof providers[number]

export const ApiKeyManager: React.FC = () => {
  return (
    <div className="space-y-2">
      {providers.map(p => (
        <ApiKeyInput key={p} provider={p as Provider} />
      ))}
    </div>
  )
}
