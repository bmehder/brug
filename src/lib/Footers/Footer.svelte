<script>
	import { getCurrentYear } from '$lib/utils'
</script>

<footer class="content-grid light">
	<div class="full-width">
		<div class="inner flow">
			<p>Copyright © 2021-{getCurrentYear} Tom Foolery. All shenanigans reserved.</p>
			<p>
				<a class="social" href="/" target="_blank" aria-label="Facebook">
					<iconify-icon icon="bi:facebook" width="3rem"></iconify-icon>
				</a>
				<a class="social" href="/" target="_blank" aria-label="LinkedIn">
					<iconify-icon icon="bi:linkedin" width="3rem"></iconify-icon>
				</a>
				<a class="social" href="https://github.com/bmehder/brug" target="_blank" aria-label="GitHub">
					<iconify-icon icon="bi:github" width="3rem"></iconify-icon>
				</a>
			</p>
		</div>
	</div>
</footer>

<style>
	footer {
		& .social {
			padding-inline: calc(var(--size-0-5) / 2);
		}
	}
</style>
