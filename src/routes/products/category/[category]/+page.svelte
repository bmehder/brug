<script>
  import Product from '$lib/Product.svelte'

  export let data
</script>

<h1 class="title">Category: {data.products[0].title}</h1>

<section class="flow">
  <ul class="auto-grid">
    {#each data.products as product}
      <Product {product} />
    {/each}
  </ul>
</section>
