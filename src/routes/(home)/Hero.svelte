<script>
	export let image = ''
</script>

<div class="full-width hero" style="margin-block-start: calc(var(--size-2) * -1.25);">
	<div class="flex align-center swap">
		<div>
			<enhanced:img src="{image}" alt="hero">
		</div>
		<div class="flow">
			<div class="h2 balance">Lorem <span class="highlight">ipsum</span> dolor sit amet jonsectetur.</div>
			<p class="balance">Lorem ipsum dolor sit, amet Čonsectetur adipisicing elit. Itaque, placeat perspiciatis impedit in magnam sed.</p>
			<a href="/" class="button">Learn more</a>
		</div>
	</div>
</div>

<style>
	.hero {
		padding-block: var(--size-4);

		& .h2 {
			font-size: var(--size-2);
			line-height: 1.2;
			font-weight: 700;
		}
		
		& .highlight {
			color: var(--accent);
		}
		
		& img {
			border-radius: 4px;
		}

		@media (max-width: 48em) {
			padding-block: var(--size-2);

			& .balance {
				text-wrap: unset
			}
		}
	}
</style>
