<script>
  import Product from '$lib/Product.svelte'

  export let data

  export const formatName = x => {
    const splitWords = x.split('-').join(' ')

    return splitWords[0].toUpperCase() + splitWords.slice(1)
  }
</script>

<h1 class="title">Category: {formatName(data.category)}</h1>

<section class="flow">
  <ul class="auto-grid">
    {#each data.products as product}
      <Product {product} />
    {/each}
  </ul>
</section>
