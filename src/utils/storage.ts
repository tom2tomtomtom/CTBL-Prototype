export function saveKey(provider: string, key: string) {
  localStorage.setItem(`btc-key-${provider}`, key)
}

export function loadKey(provider: string): string {
  return localStorage.getItem(`btc-key-${provider}`) || ''
}
