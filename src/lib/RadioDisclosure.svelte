<script>
	import { slide } from 'svelte/transition'

	export let items = []
	
	let index = null

	const handleClick = idx => {
		if (idx === index) {
			index = null
			return
		}
		index = idx
	}
</script>

<li class="flow faq">
	{#each items as item, idx}
		<button class="question" on:click={() => handleClick(idx)}>
			<span>{item.question}</span>
			<span>
				{#if idx === index}
					<iconify-icon icon="uiw:caret-down"></iconify-icon>
				{:else}
					<iconify-icon icon="uiw:caret-right"></iconify-icon>
				{/if}
			</span>
		</button>
		{#if idx === index}
			<div class="flow answer" transition:slide>{@html item.answer}</div>
		{/if}
	{/each}
</li>

<style>
	.question {
		all: unset;
		width: 100%;
		display: flex;
		justify-content: space-between;
		gap: var(--size);
		font-weight: 500;
		cursor: pointer;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}

	.question span {
		padding: var(--size);
	}

	.question:is(:focus) {
		background-color: var(--accent);
		color: var(--light);
	}

	.answer {
		padding-inline-end: var(--size);
		padding: var(--size);
		padding-block-start: 0;
	}
</style>
