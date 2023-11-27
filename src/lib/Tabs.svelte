<script context="module">
	import { writable } from 'svelte/store'

	const index = writable(0)
</script>

<script>
	export let items = []

	const setIndex = idx => {
		$index = idx
	}
</script>

<div class="container">
	{#each items as item, idx}
		<button class:active={idx === $index} on:click={() => setIndex(idx)}
			>{item.heading}</button
		>
	{/each}
	<div class="content">{items[$index].content}</div>
</div>

<style>
	.container {
		filter: drop-shadow(0 0 1px #939393);

		& button {
			padding: var(--size);
			background-color: white;
			color: var(--text-color);
			font-family: var(--fonts);
			font-size: 1rem;
			font-weight: normal;
			text-transform: none;
			border: none;
			outline: none;

			&:focus-visible {
				outline: 1px solid;
			}
		}
		& div {
			padding: var(--size);
			background-color: white;
			color: var(--text-color);
		}

		& .active {
			background-color: var(--accent);
			color: white;
		}
	}
</style>
