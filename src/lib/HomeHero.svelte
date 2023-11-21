<script>
	export let image = ''
</script>

<div
	class="inner balance full-width hero half-flow"
	style="background-image: url({image})"
>
	<div class="h2">The Brug Theme</div>
	<div class="h3">A minimal, but useful, SvelteKit theme.</div>
	<div>
		<a class="button" href="/">Lorem Ipsum Dolor</a>
	</div>
</div>

<style>
	.hero.hero {
		margin-block-start: calc(var(--size-2) * -1);
		padding-block: var(--size-6);
		background-position: center;
		background-size: cover;
		color: var(--light);
		font-weight: bold;
		line-height: 1.25;
		text-align: center;
		text-shadow: 6px 6px 30px rgba(0, 0, 0, 1);
		letter-spacing: 1px;
	}
	.h2 {
		color: var(--light);
		font-size: var(--size-3);
	}
	.h3 {
		color: var(--light);
		font-size: var(--size-2);
		line-height: 1.6;
	}
	.button {
		display: inline-block;
		margin-block-start: var(--size-0-5);
		font-size: calc(var(--size) - 0.25rem);
		box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.24);
	}
	.button:hover,
	.button:focus {
		color: var(--light);
		outline-color: var(--light);
	}
</style>
