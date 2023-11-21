<script>
	import Carousel from '$lib/Carousel.svelte'
	import FAQ2 from '$lib/FAQ2.svelte'
	import faqs2 from "./faqs2";

	let container
</script>

<div class="full-width carousel" style="margin-block-start: calc(var(--size-2) * -1.75);">
	<Carousel />
</div>

<h1 class="title">About</h1>

<section class="flow">
	<FAQ2 items={faqs2}/>
</section>

<section class="flow">
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
</section>

<!-- TODO: Move to component -->
<section class="full-width accent content-grid">
	<h2>Slider</h2>
	<div class="cards-container breakout">
		<button class="prev" on:click={container.scrollBy({ left: -300, behavior: 'smooth' })}>
			<iconify-icon width="1.5rem" icon="fluent:chevron-left-24-filled" />
		</button>
		<div class="cards" bind:this={container}>
			<img src="https://source.unsplash.com/ndN00KmbJ1c" alt="" />
			<img src="https://source.unsplash.com/eOpewngf68w" alt="" />
			<img src="https://source.unsplash.com/78A265wPiO4" alt="" />
			<img src="https://source.unsplash.com/ndN00KmbJ1c" alt="" />
			<img src="https://source.unsplash.com/eOpewngf68w" alt="" />
			<img src="https://source.unsplash.com/78A265wPiO4" alt="" />
		</div>
		<div>
			<button class="next" on:click={container.scrollBy({ left: 300, behavior: 'smooth' })}>
				<iconify-icon width="1.5rem" icon="fluent:chevron-right-24-filled" />
			</button>
		</div>
	</div>
</section>

<section class="flow">
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
</section>

<style>
	.cards-container {
		display: flex;
		align-items: center;
		gap: var(--size-0-5);
	}

	.cards {
		display: flex;
		gap: var(--size);
		overflow: scroll;
		scroll-snap-type: x mandatory;
	}

	.cards > * {
		max-width: 23rem;
		scroll-snap-align: center;
	}

	.prev, .next {		
		padding: var(--size-0-5);
	}
</style>
