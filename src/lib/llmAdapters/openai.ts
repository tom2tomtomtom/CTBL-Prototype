import { loadKey } from '../../utils/storage'

export async function openaiCompletion(prompt: string): Promise<string> {
  const key = loadKey('openai')
  const res = await fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      model: 'text-davinci-003',
      prompt,
      max_tokens: 200,
    }),
  })
  const data = await res.json()
  return data.choices?.[0]?.text?.trim() || ''
}
