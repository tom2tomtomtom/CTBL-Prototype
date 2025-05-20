export async function anthropicCompletion(prompt: string): Promise<string> {
  console.log('Sending to Anthropic:', prompt)
  return Promise.resolve('Anthropic response for: ' + prompt)
}
