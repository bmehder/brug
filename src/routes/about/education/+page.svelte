<script>
  import '$lib/styles/animacounter.css'
  import data from './data'

  import Animacounter from '$lib/Animacounter.svelte'
</script>

<h1 class="title">Education</h1>

<div class="auto-grid">
  {#each data as item}
    <Animacounter {...item} />
  {/each}
</div>

<style>
  .auto-grid {
    min-height: 100dvh;
    align-items: start;
  }
</style>
