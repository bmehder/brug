export const load = async ({ fetch }) => {
  const { quotes } = await fetch('https://dummyjson.com/quotes/')
    .then(x => x.json())
    .catch(console.error)

  return { quotes }
}
