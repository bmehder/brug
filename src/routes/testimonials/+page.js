export const load = async ({ fetch }) => {
  const endpoint = 'https://dummyjson.com/quotes/'

  const response = await fetch(endpoint)
  const { quotes } = await response.json()

  return { quotes }
}
