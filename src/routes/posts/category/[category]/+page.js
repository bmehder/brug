export async function load({ fetch, params }) {
  const categories = await fetch('https://rfh-api.com/wp-json/wp/v2/categories')
    .then(x => x.json())
    .catch(console.error)

  const { id, name } = categories.find(x => x.slug === params.category)

  const posts = await fetch(`https://rfh-api.com/wp-json/wp/v2/posts?categories=${id}`)
    .then(x => x.json())
    .catch(console.error)

  return {
    category: name,
    posts,
  }
}
