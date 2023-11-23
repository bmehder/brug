<script>
	export let item
	export let isOpen = false
</script>

<details class="flow" open={isOpen}>
	<summary>{@html item.summary}</summary>
	<div class="flow">{@html item.detail}</div>
</details>

<style>
	div {
		padding: var(--size);
		padding-block-end: 0;
		border: 1px solid;
	}
</style>
