<script>
	import Facebook from '$lib/icons/Facebook.svelte'
	import LinkedIn from '$lib/icons/LinkedIn.svelte'

	const currentYear = new Date().getFullYear()
</script>

<footer class="content-grid bg-light">
	<div class="full-width flow">
		<p>
			Copyright © 2021-{currentYear} Tom Foolery. All shenanigans reserved.
		</p>
		<p>
			<a href="/" target="_blank" aria-label="Facebook">
				<Facebook />
			</a>
			<a href="/" target="_blank" aria-label="LinkedIn">
				<LinkedIn />
			</a>
		</p>
	</div>
</footer>

<style>
	div {
		padding-block-start: var(--double-size);
	}
</style>
