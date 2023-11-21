<script>
	export let items = []
</script>

<h2>Details Accordion</h2>
{#each items as item}
	<details class="flow">
		<summary><h3>{item.question}</h3></summary>
		<div class="flow">{@html item.answer}</div>
	</details>
{/each}

<style>
  h3 {
    font-size: 1.25rem;
    padding-inline-start: var(--size-0-5);
  }
	div {
		padding: var(--size);
		padding-block-end: 0;
		border: 1px solid;
	}
</style>
