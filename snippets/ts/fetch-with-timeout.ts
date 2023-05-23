export const fetchWithTimeout = async (input: RequestInfo | URL, options: RequestInit & { timeout?: number } = {}): Promise<Response> => {
  const controller = new AbortController()
  const id = setTimeout(() => controller.abort(), options.timeout || 1000)
  const response = await fetch(input, { ...options, signal: controller.signal })
  clearTimeout(id)
  return response
}
