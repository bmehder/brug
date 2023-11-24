<script>
	import Card from '$lib/Card.svelte'

	export let data
</script>

<h1>Posts</h1>

{#each data.postsByCategories as posts, idx}
	<h2 class="title">
		<a href="/posts/category/{data.categories[idx].slug}"
			>{data.categories[idx].name} Category</a
		>
	</h2>
	<div class="auto-grid">
		{#each posts as item}
			<Card {item} />
		{/each}
	</div>
{/each}
<!-- 
<style>
	div :global(> * + *) {
		margin-block-start: var(--size);
	}
</style> -->
