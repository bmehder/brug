/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  // Endpoints
  const CATEGORIES = 'https://rfh-api.com/wp-json/wp/v2/categories'
  const POSTS = 'https://rfh-api.com/wp-json/wp/v2/posts?per_page=100'

  // Helper callback function
  const toJSON = x => x.json()

  // Get Post Categories
  const categories = await fetch(CATEGORIES).then(toJSON)

  // Get Posts By Categories
  const postsByCategories = Promise.all(
    categories.map(({ id }) => fetch(`${POSTS}&categories=${id}`).then(toJSON))
  )

  return {
    categories,
    postsByCategories,
  }
}
