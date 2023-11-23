<script>
	import {getCurrentYear} from '$lib/utils';
</script>

<footer class="content-grid light">
	<div class="full-width flow">
		<p>
			Copyright © 2021-{getCurrentYear} Tom Foolery. All shenanigans reserved.
		</p>
		<p>
			<a class="social" href="/" target="_blank" aria-label="Facebook">
				<iconify-icon icon="bi:facebook" width="3rem"></iconify-icon>

			</a>
			<a class="social" href="/" target="_blank" aria-label="LinkedIn">
				<iconify-icon icon="bi:linkedin" width="3rem"></iconify-icon>
			</a>
		</p>
	</div>
</footer>

<style>
	div {
		padding-block-start: var(--size-2);
	}

	.social {
		color: inherit;
	}
</style>
