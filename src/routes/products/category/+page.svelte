<script>
  export let data

  export const formatName = x => {
    const splitWords = x.split('-').join(' ')

    return splitWords[0].toUpperCase() + splitWords.slice(1)
  }
</script>

<h1 class="title">Categories ({data.categories.length})</h1>

<ol class="list">
  {#each data.categories as category}
    <li><a href="/products/category/{category}">{formatName(category)}</a></li>
  {/each}
</ol>

<style>
  .list {
    list-style-type: decimal;
  }
</style>
