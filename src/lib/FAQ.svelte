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