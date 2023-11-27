<script>
	import Card from '$lib/Card.svelte'
</script>

<section class="full-width flow light">
	<h2>Cards</h2>
	<div class="auto-grid">
		<Card
			item={{
				url: '/',
				src: 'https://source.unsplash.com/ndN00KmbJ1c',
				alt: 'Hiker looking standing on mountain peak overlooking mountain range',
				title: 'One Thing',
				content:
					'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sit.',
			}}
		/>
		<Card
			item={{
				url: '/',
				src: 'https://source.unsplash.com/eOpewngf68w',
				alt: 'Looking across bridge in a forest',
				title: 'Another Thing',
				content:
					'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sit.',
			}}
		/>
		<Card
			item={{
				url: '/',
				src: 'https://source.unsplash.com/78A265wPiO4',
				alt: 'Trees and side of a mountain',
				title: 'More Things, Still',
				content:
					'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sit.',
			}}
		/>
	</div>
</section>
