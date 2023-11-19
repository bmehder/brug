<script>
	import '$lib/styles/animacounter.css'
	import { stats, timeline } from './data'

	import Animacounter from '$lib/Animacounter.svelte'
	import Switch from '$lib/Switch.svelte'
	import Timeline from '$lib/Timeline.svelte'
</script>

<h1 class="title">UI Components</h1>

<section class="auto-grid">
	{#each stats as item}
		<Animacounter {...item} />
	{/each}
</section>

<Switch on:click={() => console.log('Switched')} />

<Timeline {timeline} />
