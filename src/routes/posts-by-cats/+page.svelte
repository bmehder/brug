<script>
  export let data
</script>

<h1 class="title">Posts by Categories</h1>

{#each data.postsByCats as posts, idx}
  <h2>{data.categories[idx].name}</h2>
  {#each posts as post}
    <h3>{@html post.title.rendered}</h3>
  {/each}  
{/each}