import create from 'zustand'
import { persist } from 'zustand/middleware'

interface State {
  brandText: string
  tone: string
  prompt: string
  provider: 'openai' | 'anthropic' | 'mistral'
  setBrandText: (t: string) => void
  setTone: (t: string) => void
  setPrompt: (p: string) => void
  setProvider: (p: 'openai' | 'anthropic' | 'mistral') => void
}

export const useStore = create<State>(persist((set) => ({
  brandText: '',
  tone: '',
  prompt: '',
  provider: 'openai',
  setBrandText: (brandText) => set({ brandText }),
  setTone: (tone) => set({ tone }),
  setPrompt: (prompt) => set({ prompt }),
  setProvider: (provider) => set({ provider }),
}), { name: 'btc-store' }))
