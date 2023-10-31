export async function load({ fetch }) {
  const CATEGORIES = 'https://rfh-api.com/wp-json/wp/v2/categories'
  const POSTS = 'https://rfh-api.com/wp-json/wp/v2/posts?_embed&per_page=100'

  const categoriesResponse = await fetch(CATEGORIES)

  const categories = await categoriesResponse.json()

  const postsResponses = await Promise.all(
    categories.map(category => fetch(`${POSTS}&categories=${category.id}`))
  )

  const postsByCats = await Promise.all(
    postsResponses.map(postsResponse => postsResponse.json())
  )

  return {
    categories,
    postsByCats,
  }
}
