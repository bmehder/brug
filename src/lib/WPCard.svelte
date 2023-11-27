<script>
	export let item
</script>

<!-- <div class="card" style="background-color: white;">
	<a href="/posts/{item.slug}">
		<img class="square" src="{item._embedded['wp:featuredmedia'][0].source_url}" alt="{item.title.rendered}">
	</a>
	<div class="padding flow content">
		<h3><a href="/posts/{item.slug}">{@html item.title.rendered}</a></h3>
		<div class="flow">{@html item.excerpt.rendered}</div>
    <a href="/posts/{item.slug}" class="button block center">Read More</a>
	</div>
</div> -->

<article class="flow">
	{#if item._embedded['wp:featuredmedia']?.[0]}
		<a href="/posts/{item.slug}">
			<img
				class="square"
				src={item._embedded['wp:featuredmedia'][0].source_url}
				alt={item.title.rendered}
			/>
		</a>
	{/if}
	<div class="flow">
		<h3><a href="/posts/{item.slug}">{@html item.title.rendered}</a></h3>
		<div>{@html item.excerpt.rendered}</div>
	</div>
	<a class="button" href="/posts/{item.slug}">Read More</a>
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-bottom: var(--size);
		border: 1px solid #ddd;
	}

	article > div {
		padding-inline: var(--size);
		margin-block-end: auto;
	}

	article div div :global(> * + *) {
		margin-block-start: var(--size);
	}

	.button {
		margin-inline: var(--size);
	}
</style>
