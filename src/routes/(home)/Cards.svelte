<script>
	import carousel1 from '$lib/assets/1.jpg?enhanced'
	import carousel2 from '$lib/assets/2.jpg?enhanced'
	import carousel3 from '$lib/assets/3.jpg?enhanced'
	import Card from '$lib/Card.svelte'
</script>

<section class="section full-width flow light">
	<h2>Cards</h2>
	<div class="auto-grid">
		<Card
			item={{
				url: '/',
				src: carousel1,
				alt: 'Hiker standing on mountain peak overlooking mountain range',
				title: 'One Thing',
				content:
					'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sit.',
			}}
		/>
		<Card
			item={{
				url: '/',
				src: carousel2,
				alt: 'Looking across bridge in a forest',
				title: 'Another Thing',
				content:
					'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sit.',
			}}
		/>
		<Card
			item={{
				url: '/',
				src: carousel3,
				alt: 'Trees and side of a mountain',
				title: 'More Things, Still',
				content:
					'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sit.',
			}}
		/>
	</div>
</section>

<style>
	.auto-grid {
		scale: 0.8;
		opacity: 0.5;
		animation: fade-in linear forwards;
		animation-timeline: view();
		animation-range: entry;
	}

	@keyframes fade-in {
		to {
			scale: 1;
			opacity: 1;
		}
	}

	@media (prefers-reduced-motion) {
    .auto-grid {
			animation: none;
		}
  }
</style>
