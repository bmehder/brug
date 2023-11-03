export const load = async ({ fetch, params }) => {
  const { products } = await fetch(
    `https://dummyjson.com/products/category/${params.category}`
  )
    .then(x => x.json())
    .catch(console.error)
  
  return {
    products,
    category: params.category
  }
}
