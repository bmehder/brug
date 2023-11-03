export const load = async ({ fetch }) => {
  const categories = fetch(`https://dummyjson.com/products/categories`)
    .then(x => x.json())
    .catch(console.error)

  return {
    categories,
  }
}
