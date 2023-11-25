<script>
	import Carousel from '$lib/Carousel.svelte'
	import Slider from '$lib/Slider.svelte'
	import Details from '$lib/Details.svelte'

	export let data 

	let isOpen = false

	const toggleIsOpen = () => (isOpen = !isOpen)
</script>

<div class="full-width carousel" style="margin-block-start: calc(var(--size-5) * -1);">
	<Carousel />
</div>

<h1 class="title">About</h1>

<section class="full-width flow">
	<div class="flex">
		<h2>Details</h2>
		<button style="flex: initial" on:click={toggleIsOpen}>
			{#if isOpen}
				Close All
			{:else}
				Open All
			{/if}
		</button>
	</div>
	<ul class="flow">
		{#each data.details as item}
			<li>
				<Details {item} {isOpen} />
			</li>
		{/each}
	</ul>
</section>

<section class="content-grid full-width accent">
	<h2>Slider</h2>
	<Slider items={data.sliderImages} />
</section>

<section class="full-width light">
	<div class="flow">
		<h2>Lorem Ipsum Dolor</h2>
		<img class="float-right" src="https://picsum.photos/500/380" alt="placeholder" />
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo impedit esse nobis,
			odio incidunt reprehenderit at? Suscipit, sit ducimus quidem quisquam tenetur libero
			accusamus ut necessitatibus omnis minus molestiae facere, repellendus fuga.
		</p>
		<p>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium fugiat natus
			nihil aperiam expedita eos qui odio totam autem! Animi, eligendi id perspiciatis
			ducimus adipisci quas dolores dicta ea, incidunt velit inventore, expedita illo odit?
			Nobis, ratione! Ex blanditiis at iure, et adipisci odio suscipit eveniet, atque
			consectetur, dolore dolorem ipsum sequi dolorum. Tempora aliquid, natus praesentium
			harum aut laborum eaque eveniet sequi distinctio?
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit exercitationem, in
			quis eveniet fugit ipsa possimus tempora sequi, ad consequatur a quibusdam harum
			tempore fuga laudantium recusandae deserunt reiciendis mollitia dolore accusamus
			quaerat, sint corporis quidem. Quibusdam obcaecati sunt rerum aspernatur eius sint,
			assumenda doloribus nesciunt. Fugit in, ducimus obcaecati quia, a impedit pariatur
			fugiat molestiae, vel repellat illo veritatis reiciendis quae excepturi et.
		</p>
	</div>
</section>

<section class="full-width">
	<div class="flow">
		<h2>Lorem Ipsum Consectetur</h2>
		<img class="float-right" src="https://picsum.photos/500/381" alt="placeholder" />
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo impedit esse nobis,
			odio incidunt reprehenderit at? Suscipit, sit ducimus quidem quisquam tenetur libero
			accusamus ut necessitatibus omnis minus molestiae facere, repellendus fuga.
		</p>
		<p>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium fugiat natus
			nihil aperiam expedita eos qui odio totam autem! Animi, eligendi id perspiciatis
			ducimus adipisci quas dolores dicta ea, incidunt velit inventore, expedita illo odit?
			Nobis, ratione! Ex blanditiis at iure, et adipisci odio suscipit eveniet, atque
			consectetur, dolore dolorem ipsum sequi dolorum. Tempora aliquid, natus praesentium
			harum aut laborum eaque eveniet sequi distinctio?
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit exercitationem, in
			quis eveniet fugit ipsa possimus tempora sequi, ad consequatur a quibusdam harum
			tempore fuga laudantium recusandae deserunt reiciendis mollitia dolore accusamus
			quaerat, sint corporis quidem. Quibusdam obcaecati sunt rerum aspernatur eius sint,
			assumenda doloribus nesciunt. Fugit in, ducimus obcaecati quia, a impedit pariatur
			fugiat molestiae, vel repellat illo veritatis reiciendis quae excepturi et.
		</p>
	</div>
</section>