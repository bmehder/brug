<script>
	export let item
	export let isOpen = false
</script>

<details class="flow" open={isOpen}>
	<summary>{item.question}</summary>
	<div class="flow">{@html item.answer}</div>
</details>

<style>
	div {
		padding: var(--size);
		padding-block-end: 0;
		border: 1px solid;
	}
</style>
