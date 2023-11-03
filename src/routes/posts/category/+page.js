export async function load({ fetch }) {
  const categories = await fetch(`https://rfh-api.com/wp-json/wp/v2/categories`)
    .then(x => x.json())
    .catch(console.error)

  return {
    categories,
  }
}
