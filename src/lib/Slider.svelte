<script>
	export let items

	let container

	const rightArrow = 'fluent:chevron-right-24-filled'
	const leftArrow = 'fluent:chevron-left-24-filled'

	const handleClick = x => {
		container.scrollBy({ left: x === 'prev' ? -300 : 300, behavior: 'smooth' })
	}
</script>

<div class="breakout container">
	<button class="prev" on:click={() => handleClick('prev')}>
		<iconify-icon width="3rem" icon={leftArrow} />
	</button>
	<div class="items" bind:this={container}>
		{#each items as { src, alt }}
			<img {src} {alt} />
		{/each}
	</div>
	<button class="next" on:click={() => handleClick('next')}>
		<iconify-icon width="3rem" icon={rightArrow} />
	</button>
</div>

<style>
	.container {
		display: flex;
		align-items: center;
		gap: var(--size-0-5);
		padding: var(--size) 0;
	}

	.items {
		display: flex;
		gap: var(--size);
		overflow: scroll;
		scroll-snap-type: x mandatory;

		& img {
			border: none;
			
			@media (min-width: 32em) {
				width: unset;
			}
		}
	}

	.items > * {
		--max: 20rem;
		max-width: var(--max);
		scroll-snap-align: center;
	}

	button {
		all: unset;

		&:is(:hover, :focus) {
			outline: none;
		}

		&:focus-visible {
			outline: 4px solid;
		}
	}
</style>
