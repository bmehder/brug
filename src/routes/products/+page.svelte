<script>
  import Product from './Product.svelte'
  
  export let data
</script>

<h1 class="title">Products</h1>

<section>
  <ul class="auto-grid">
    {#each data.products as product}
      <Product {product} />
    {/each}
  </ul>
</section>