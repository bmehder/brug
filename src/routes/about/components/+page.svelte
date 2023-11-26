<script>
	import Animacounter from '$lib/Animacounter.svelte'
	import Timeline from '$lib/Timeline.svelte'
	import Tabs from '$lib/Tabs.svelte'

	export let data
</script>

<h1 class="title">UI Components</h1>

<section class="auto-grid">
	{#each data.stats as item}
		<Animacounter {...item} />
	{/each}
</section>

<Timeline timeline={data.timeline} />

<Tabs items={data.tabItems} />
