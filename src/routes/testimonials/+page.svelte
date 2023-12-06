<script>
  import Quote from '$lib/Quote.svelte';
  export let data
</script>

<h1 class="title">Testimonials</h1>

<section class="section auto-grid">
  {#each data.quotes as quote}
    <Quote {quote} />
  {/each}
</section>