<script>
  export let container
</script>

<div class="cards-container breakout">
	<button class="prev" on:click={container.scrollBy({ left: -300, behavior: 'smooth' })}>
		<iconify-icon width="1.5rem" icon="fluent:chevron-left-24-filled" />
	</button>
	<div class="cards" bind:this={container}>
		<img src="https://source.unsplash.com/ndN00KmbJ1c" alt="" />
		<img src="https://source.unsplash.com/eOpewngf68w" alt="" />
		<img src="https://source.unsplash.com/78A265wPiO4" alt="" />
		<img src="https://source.unsplash.com/ndN00KmbJ1c" alt="" />
		<img src="https://source.unsplash.com/eOpewngf68w" alt="" />
		<img src="https://source.unsplash.com/78A265wPiO4" alt="" />
	</div>
	<div>
		<button class="next" on:click={container.scrollBy({ left: 300, behavior: 'smooth' })}>
			<iconify-icon width="1.5rem" icon="fluent:chevron-right-24-filled" />
		</button>
	</div>
</div>

<style>
	.cards-container {
		display: flex;
		align-items: center;
		gap: var(--size-0-5);
	}

	.cards {
		display: flex;
		gap: var(--size);
		overflow: scroll;
		scroll-snap-type: x mandatory;
	}

	.cards > * {
		max-width: 23rem;
		scroll-snap-align: center;
	}

	.prev, .next {		
		padding: var(--size-0-5);
	}
</style>