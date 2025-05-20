import { loadKey } from '../../utils/storage'

export async function anthropicCompletion(prompt: string): Promise<string> {
  const key = loadKey('anthropic')
  const res = await fetch('https://api.anthropic.com/v1/complete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': key,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-instant-1',
      prompt,
      max_tokens_to_sample: 200,
    }),
  })
  const data = await res.json()
  return data.completion?.trim() || ''
}
