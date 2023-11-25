<script>
	import Post from '$lib/Post.svelte'

	export let data
</script>

<h1>Posts</h1>

<section class="flow">
	{#each data.postsByCategories as posts, idx}
		<h2 class="title">
			<a href="/posts/category/{data.categories[idx].slug}"
				>{data.categories[idx].name} Category</a
			>
		</h2>
		<div class="auto-grid">
			{#each posts as item}
				<Post {item} />
			{/each}
		</div>
	{/each}
</section>
