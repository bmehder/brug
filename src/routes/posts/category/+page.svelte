<script>
  export let data

</script>

<h1 class="title">Post Category</h1>

<section class="section">
  <ul class="list flow">
    {#each data.categories as category}
      <li><a href="/posts/category/{category.slug}">{category.name}</a></li>
    {/each}
  </ul>
</section>