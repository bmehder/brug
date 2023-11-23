<script>
	import { slide } from 'svelte/transition'

	export let question = 'Question'
	export let answer = 'Answer'
	export let classNames = ''

	let isOpen

	const handleClick = () => (isOpen = !isOpen)
</script>

<div class="flow faq">
	<button
		class="{classNames} question"
		class:isOpen
		on:click|preventDefault={handleClick}
	>
		<span>{question}</span>
		<span>
			{#if isOpen}
				<iconify-icon icon="uiw:caret-down"></iconify-icon>
			{:else}
				<iconify-icon icon="uiw:caret-right"></iconify-icon>
			{/if}
		</span>
	</button>
	{#if isOpen}
		<div class="flow answer" aria-expanded={isOpen} transition:slide>{@html answer}</div>
	{/if}
</div>

<style>
	.faq {
		background-color: var(--light);
		color: var(--text-color);
		box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.1);
	}
	
	.question {
		all: unset;
		width: 100%;
		display: flex;
		justify-content: space-between;
		gap: var(--size);
		font-weight: 500;
		cursor: pointer;
	}

	.question span {
		padding: var(--size);
	}

	.question:is(:focus),
	.isOpen {
		background-color: var(--accent);
		color: var(--light);
	}

	.answer {
		padding-inline-end: var(--size);
		padding: var(--size);
		padding-block-start: 0;
	}
</style>
