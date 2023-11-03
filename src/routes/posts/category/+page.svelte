<script>
  export let data

</script>

<h1 class="title">Post Category</h1>

<ul class="list">
  {#each data.categories as category}
    <li><a href="/posts/category/{category.slug}">{category.name}</a></li>    
  {/each}
</ul>