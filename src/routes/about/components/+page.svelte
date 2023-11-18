<script>
	import '$lib/styles/animacounter.css'
	import { stats, timeline } from './data'

	import Animacounter from '$lib/Animacounter.svelte'
	import Share from '$lib/Share.svelte'
	import Switch from '$lib/Switch.svelte'
	import Timeline from '$lib/Timeline.svelte'
</script>

<h1 class="title">UI Components</h1>

<section>
	<div class="auto-grid">
		{#each stats as item}
			<Animacounter {...item} />
		{/each}
	</div>
</section>

<section>
	<div>
		<Switch />
	</div>

	<!-- <Share
		icons={[
			{
				color: '#ff0000',
				href: 'https://youtube.com/',
				name: 'logo-youtube',
			},
			{
				color: '#1877f2',
				href: 'https://facebook.com/',
				name: 'logo-facebook',
			},
			{
				color: '#ea4c89',
				href: 'https://dribbble.com/',
				name: 'logo-dribbble',
			},
			{
				color: '#25d366',
				href: 'https://www.whatsapp.com/',
				name: 'logo-whatsapp',
			},
		]}
		--size="200px"
	/> -->
</section>

<section>
	<Timeline {timeline} />
</section>
