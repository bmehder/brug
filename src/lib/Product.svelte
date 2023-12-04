<script>
	export let product = {}

	const { id, title, description, thumbnail } = product
</script>

<li class="flow light shadow">
	<a href="/products/{id}"
		><img class="square" src={thumbnail} alt={title} /></a
	>
	<div class="half-flow">
		<h2 class="balance"><a href="/products/{id}">{title}</a></h2>
		<p>{description}</p>
	</div>
</li>

<style>
	li {
		padding-block-end: calc(var(--size) + 0.5rem);
	}
	a {
		text-decoration: none;
		color: var(--accent);
		
		&:hover {
			text-decoration: underline;
		}
	}
	img {
		border: none;
	}
	.half-flow {
		margin-inline: calc(var(--size) * 1.5);
	}
</style>
