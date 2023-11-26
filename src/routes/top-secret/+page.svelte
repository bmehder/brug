<script>
  export let data
</script>

<h1 class="title">Top Secret 🕵️</h1>

<section>
  {#if data.session}
    <p>The secret is 42</p>
  {:else}
    <p>You can't handle the truth!</p>
  {/if}
</section>