import { loadKey } from '../../utils/storage'

export async function mistralCompletion(prompt: string): Promise<string> {
  const key = loadKey('mistral')
  const res = await fetch('https://api.mistral.ai/v1/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      model: 'mistral-tiny',
      prompt,
      max_tokens: 200,
    }),
  })
  const data = await res.json()
  return data.choices?.[0]?.text?.trim() || ''
}
