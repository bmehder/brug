export async function load({ fetch }) {
  const categories = await fetch('https://rfh-api.com/wp-json/wp/v2/categories')
    .then(x => x.json())
    .catch(console.error)

  const postsByCategories = Promise.all(
    categories.map(({ id }) =>
      fetch(`https://rfh-api.com/wp-json/wp/v2/posts?_embed&per_page=100&categories=${id}`)
        .then(x => x.json())
        .catch(console.error)
    )
  )

  return {
    categories,
    postsByCategories,
  }
}
