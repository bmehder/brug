export const load = ({ fetch, params }) => ({
  post: fetch(`https://rfh-api.com/wp-json/wp/v2/posts?slug=${params.slug}`)
    .then(x => x.json())
    .catch(console.error),
})
