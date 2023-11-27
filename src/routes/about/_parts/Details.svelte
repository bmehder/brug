<script>
	import Details from '$lib/Details.svelte'
	
  export let details

  let isOpen = false

	const toggleIsOpen = () => (isOpen = !isOpen)
</script>

<section class="full-width flow">
	<div class="flex">
		<h2>Details</h2>
		<button style="flex: initial" on:click={toggleIsOpen}>
			{#if isOpen}
				Close All
			{:else}
				Open All
			{/if}
		</button>
	</div>
	<ul class="flow">
		{#each details as item}
			<li>
				<Details {item} {isOpen} />
			</li>
		{/each}
	</ul>
</section>
