export const load = async ({ fetch, params }) => {
  const endpoint = `https://rfh-api.com/wp-json/wp/v2/posts?slug=${params.slug}`

  const response = await fetch(endpoint)
  const post = await response.json()

  return { post }
}
