/**
 * Fetches a resource from an API endpoint and returns the response as JSON.
 */
export const fetchApiResource = async (input: RequestInfo | URL, init = {} as RequestInit): Promise<JSON> => {
  const response = await fetch(input, init)
  return await response.json()
}
