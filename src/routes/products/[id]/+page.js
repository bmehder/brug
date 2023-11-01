export const load = async ({ fetch, params }) => ({
  product: fetch(`https://dummyjson.com/products/${params.id}`)
    .then(x => x.json())
    .catch(x => console.error(x)),
})
