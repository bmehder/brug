<script>
	export let image
</script>

<section class="section flow">
	<h2>Heading</h2>
	<enhanced:img class="float-right shadow" src={image} alt="placeholder" />

	<p>
		Fugit est, aliquam, possimus error exercitationem tempor omnis similique provident
		reprehenderit incidunt corrupti. Quos fugiat obcaecati nobis! Provident voluptate
		eligendi rem inventore dolorem ad alias, sit harum pariatur!
	</p>
	<p>
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id illo saepe ratione autem,
		eos laboriosam quis maxime fugiat tenetur nemo quidem veniam veritatis, explicabo
		facere vero dolores harum atque officiis a suscipit facilis consequatur, amet quia!
		Accusamus possimus illum assumenda iste esse autem sit.
	</p>
	<p>
		Iste voluptatem incidunt corrupti laboriosam necessitatibus pariatur suscipit culpa
		fugit atque at doloremque repellat reprehenderit fugiat ratione provident
		perspiciatis, ea odio quasi aut quos. Voluptates, nihil ratione.
	</p>
	<p>
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id illo saepe ratione autem,
		eos laboriosam quis maxime fugiat tenetur nemo quidem veniam veritatis, explicabo
		facere vero dolores harum atque officiis a suscipit facilis consequatur, amet quia!
		Accusamus possimus <a href="/">illum assumenda</a> iste esse autem sit. Fugit est, aliquam,
		possimus error iste exercitationem tempora omnis similique provident reprehenderit incidunt
		corrupti. Quos fugiat obcaecati nobis!
	</p>
	<p>
		Provident voluptate eligendi rem inventore dolorem ad alias, sit harum pariatur! Iste
		voluptatem incidunt corrupti laboriosam necessitatibus pariatur suscipit culpa fugit
		atque at doloremque repellat reprehenderit fugiat ratione provident perspiciatis, ea
		odio quasi aut quos. Voluptates, nihil ratione.
	</p>
</section>

<style>
	.float-right {
		scale: 0.8;
		opacity: 0.5;
		animation: fade-in linear forwards;
		animation-timeline: view();
		animation-range-start: cover;
		animation-range-end: contain -100px;

		@media (min-width: 48em) {
			min-width: 500px;
		}
	}

	@keyframes fade-in {
		to {
			scale: 1;
			opacity: 1;
		}
	}

	@media (prefers-reduced-motion) {
    .float-right {
			animation: none;
		}
  }
</style>
