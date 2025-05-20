import React from 'react'
import { useStore } from '../store'
import { generateTone } from '../lib/promptTemplates'

export const ToneGenerator: React.FC = () => {
  const brandText = useStore(s => s.brandText)
  const setTone = useStore(s => s.setTone)

  const handleGenerate = () => {
    if (!brandText) return
    setTone(generateTone(brandText))
  }

  return (
    <button className="px-4 py-2 bg-blue-600 text-white" onClick={handleGenerate}>
      Generate Tone
    </button>
  )
}
