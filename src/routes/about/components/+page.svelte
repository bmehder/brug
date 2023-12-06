<script>
	import Animacounter from '$lib/Animacounter.svelte'
	import Timeline from '$lib/Timeline.svelte'
	import Tabs from '$lib/Tabs.svelte'

	export let data
</script>

<h1 class="title">UI Components</h1>

<section class="section auto-grid accent animacounter">
	<div class="flex">
		{#each data.stats as item}
			<Animacounter
				{...item}
				tweenOptions={{
					duration: 1200,
				}}
			/>
		{/each}
	</div>
</section>

<section class="section">
	<Timeline timeline={data.timeline} />
</section>

<section class="section">
	<Tabs items={data.tabItems} />
</section>

<style>
	.animacounter {
		margin-block-start: var(--size-2);
	}
</style>