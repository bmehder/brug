<script>
  export let data
</script>

<h1>Posts</h1>

{#each data.postsByCategories as posts, idx}
  <h2 class="title">{data.categories[idx].name} Category</h2>
  {#each posts as post}
    <h3><a href="/posts/{post.slug}">{@html post.title.rendered}</a></h3>
    <div>{@html post.excerpt.rendered}</div>
  {/each}  
{/each}

<style>
  div :global(> * + *) {
    margin-block-start: var(--size);
  }
</style>