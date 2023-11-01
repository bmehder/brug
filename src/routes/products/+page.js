export const load = async ({ fetch }) => {
  const { products } = await fetch('https://dummyjson.com/products/')
    .then(x => x.json())
    .catch(console.error)

  return { products }
}
