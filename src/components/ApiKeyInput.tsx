import React from 'react'
import { saveKey, loadKey } from '../utils/storage'

interface Props {
  provider: 'openai' | 'anthropic' | 'mistral'
}

export const ApiKeyInput: React.FC<Props> = ({ provider }) => {
  const [key, setKey] = React.useState('')

  React.useEffect(() => {
    setKey(loadKey(provider))
  }, [provider])

  const handleSave = () => {
    saveKey(provider, key)
    alert('Key saved')
  }

  return (
    <div className="flex space-x-2 items-center">
      <input
        type="password"
        className="flex-1 p-2 border rounded"
        placeholder={`${provider} API key`}
        value={key}
        onChange={e => setKey(e.target.value)}
      />
      <button className="px-3 py-1 bg-blue-600 text-white" onClick={handleSave}>
        Save
      </button>
    </div>
  )
}
