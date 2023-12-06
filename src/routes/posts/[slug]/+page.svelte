<script>
	export let data

	const post = data.post[0]
</script>

<section class="section flow">
	<h1>{@html post.title.rendered}</h1>

	<div>{@html post.content.rendered}</div>
</section>

<style>
	.section {
		max-width: 48em;
	}
	div :global(> * + *) {
		margin-block-start: var(--size);
	}

	div :global(img:first-child) {
		aspect-ratio: 16 / 9;
		object-fit: cover;
		object-position: center;
	}

	div :global(ul) {
		list-style: initial;
		padding-inline-start: var(--size);
	}

	div :global(li) {
		line-height: 2.5;
	}

	div :global(iframe) {
		display: block;
		width: 100%;
		height: 100%;
		aspect-ratio: 2 / 1;
		object-fit: cover;
	}
</style>
