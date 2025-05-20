import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrandUploader } from '../components/BrandUploader'
import { ToneGenerator } from '../components/ToneGenerator'
import { PromptBuilder } from '../components/PromptBuilder'
import { CopyOutput } from '../components/CopyOutput'
import { LLMSelector } from '../components/LLMSelector'
import { ApiKeyManager } from '../components/ApiKeyManager'
import { useStore } from '../store'
import '../index.css'

const App: React.FC = () => {
  const setBrandText = useStore(s => s.setBrandText)
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">BrandToneCraft</h1>
      <BrandUploader onUpload={setBrandText} />
      <ToneGenerator />
      <PromptBuilder />
      <LLMSelector />
      <ApiKeyManager />
      <CopyOutput />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
