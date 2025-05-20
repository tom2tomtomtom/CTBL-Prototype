export async function mistralCompletion(prompt: string): Promise<string> {
  console.log('Sending to Mistral:', prompt)
  return Promise.resolve('Mistral response for: ' + prompt)
}
