<script>
	import HomeHero from '$lib/HomeHero.svelte'
	import Carousel from '$lib/Carousel.svelte'

	export let data
</script>

<Carousel />

<!-- <HomeHero image="/abstract.jpg" /> -->

<section class="flow" style="padding-block-end: var(--size-2);">
	<h2 class="center" style="padding-block-end: var(--size);">
		Auto-grid ipsum dolor sit, amet consectetur adipisicing elit.
	</h2>
	<div class="auto-grid">
		<div class="light flow padding">
			<h3>Register</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam est iure itaque
				esse? Doloribus, accusantium suscipit.
			</p>
			{#if data.session}
				<a href="/top-secret" class="animabutton">Secret Numbers</a>
			{:else}
				<a href="/register" class="animabutton">Register</a>
			{/if}
		</div>
		<div class="light flow padding">
			<h3>Subheading</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. <a href="/"
					>Quibusdam est</a
				> iure itaque esse? Doloribus, accusantium suscipit.
			</p>
			<a href="/" class="animabutton">Lorem Ipsum</a>
		</div>
		<div class="light flow padding">
			<h3>Subheading</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam est iure itaque
				esse? Doloribus, accusantium suscipit.
			</p>
			<a href="/" class="animabutton">Lorem Ipsum</a>
		</div>
	</div>
</section>
<section class="full-width accent">
	<div class="content flow">
		<h2>Heading</h2>
		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id illo saepe ratione
			autem, eos laboriosam quis maxime fugiat tenetur nemo quidem veniam veritatis,
			explicabo facere vero dolores harum atque officiis a suscipit facilis consequatur,
			amet quia! Accusamus possimus illum assumenda iste esse autem sit. Fugit est,
			aliquam, possimus error iste exercitationem tempora omnis similique provident
			reprehenderit incidunt corrupti. Quos fugiat obcaecati nobis! Provident voluptate
			eligendi rem inventore dolorem ad alias, sit harum pariatur! Iste voluptatem
			incidunt corrupti laboriosam necessitatibus pariatur suscipit culpa fugit atque at
			doloremque repellat reprehenderit fugiat ratione <a href="/"
				>provident perspiciatis</a
			>, ea odio quasi aut quos. Voluptates, nihil ratione.
		</p>
		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id illo saepe ratione
			autem, eos laboriosam quis maxime fugiat tenetur nemo quidem veniam veritatis,
			explicabo facere vero dolores harum atque officiis a suscipit facilis consequatur,
			amet quia! Accusamus possimus illum assumenda iste esse autem sit. Fugit est,
			aliquam, possimus error iste exercitationem tempora omnis similique provident
			reprehenderit incidunt corrupti. Quos fugiat obcaecati nobis! Provident voluptate
			eligendi rem inventore dolorem ad alias, sit harum pariatur! Iste voluptatem
			incidunt corrupti laboriosam necessitatibus pariatur suscipit culpa fugit atque at
			doloremque repellat reprehenderit fugiat ratione provident perspiciatis, ea odio
			quasi aut quos. Voluptates, nihil ratione.
		</p>
		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id illo saepe ratione
			autem, eos laboriosam quis maxime fugiat tenetur nemo quidem veniam veritatis,
			explicabo facere vero dolores harum atque officiis a suscipit facilis consequatur,
			amet quia! Accusamus possimus illum assumenda iste esse autem sit. Fugit est,
			aliquam, possimus error iste exercitationem tempora omnis similique provident
			reprehenderit incidunt corrupti. Quos fugiat obcaecati nobis! Provident voluptate
			eligendi rem inventore dolorem ad alias, sit harum pariatur! Iste voluptatem
			incidunt corrupti laboriosam necessitatibus pariatur suscipit culpa fugit atque at
			doloremque repellat reprehenderit fugiat ratione provident perspiciatis, ea odio
			quasi aut quos. Voluptates, nihil ratione.
		</p>
		<p><a href="/" class="button">Lorem Ipsum</a></p>
	</div>
</section>
<section>
	<p>
		Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, labore distinctio.
		Ipsum earum, rerum dignissimos laudantium, eaque consequuntur impedit quia officiis
		atque facilis similique praesentium perspiciatis eum dolorem ex culpa tempore,
		voluptatem repellendus beatae. Id, nisi omnis dolores deleniti reprehenderit
		exercitationem esse sunt repudiandae ipsum, aliquam minus fugit accusamus ab modi
		harum in sit, rerum necessitatibus dolor sequi suscipit nostrum. Unde nihil corporis
		laudantium quod aliquid dolore eum quas, obcaecati quibusdam maxime magnam voluptatem
		quaerat fugiat, autem eveniet. Quidem, aperiam iure accusantium expedita tempora
		perspiciatis. Sunt earum consectetur autem, deserunt molestiae illo facilis, similique
		iusto nam, nisi suscipit ex commodi?
	</p>
</section>
<section class="breakout flow italic light">
	<p>
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id illo saepe ratione autem,
		eos laboriosam quis maxime fugiat tenetur nemo quidem veniam veritatis, explicabo
		facere vero dolores harum atque officiis a suscipit facilis consequatur, amet quia!
		Accusamus possimus illum assumenda iste esse autem sit.
	</p>
</section>
<section>
	<p>
		Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, labore distinctio.
		Ipsum earum, rerum dignissimos laudantium, eaque consequuntur impedit quia officiis
		atque facilis similique praesentium perspiciatis eum dolorem ex culpa tempore,
		voluptatem repellendus beatae. Id, nisi omnis dolores deleniti reprehenderit
		exercitationem esse sunt repudiandae ipsum, aliquam minus fugit accusamus ab modi
		harum in sit, rerum necessitatibus dolor sequi suscipit nostrum. Unde nihil corporis
		laudantium quod aliquid dolore eum quas, obcaecati quibusdam maxime magnam voluptatem
		quaerat fugiat, autem eveniet. Quidem, aperiam iure accusantium expedita tempora
		perspiciatis. Sunt earum consectetur autem, deserunt molestiae illo facilis, similique
		iusto nam, nisi suscipit ex commodi?
	</p>
</section>
<section class="flow full-width light">
	<h2>Columns</h2>
	<div class="columns" style="--gap: 1.5em">
		<p>
			Quos fugiat obcaecati nobis! Provident voluptate eligendi rem inventore dolorem ad
			alias, sit harum pariatur! Iste voluptatem incidunt corrupti laboriosam
			necessitatibus pariatur suscipit culpa fugit atque at doloremque repellat
			reprehenderit fugiat ratione provident perspiciatis, ea odio quasi aut quos.
			Voluptates, nihil ratione.
		</p>
		<p>
			Quos fugiat obcaecati nobis! Provident voluptate eligendi rem inventore dolorem ad
			alias, sit harum pariatur! Iste voluptatem incidunt corrupti laboriosam
			necessitatibus pariatur suscipit culpa fugit atque at doloremque repellat
			reprehenderit fugiat ratione <a href="/">provident perspiciatis</a>, ea odio quasi
			aut quos. Voluptates, nihil ratione.
		</p>
		<p>
			Quos fugiat obcaecati nobis! Provident voluptate eligendi rem inventore dolorem ad
			alias, sit harum pariatur! Iste voluptatem incidunt corrupti laboriosam
			necessitatibus pariatur suscipit culpa fugit atque at doloremque repellat
			reprehenderit fugiat ratione provident perspiciatis, ea odio quasi aut quos.
			Voluptates, nihil ratione.
		</p>
	</div>
	<p><a href="/" class="button">Lorem Ipsum</a></p>
</section>
<section class="flow">
	<h2>Heading</h2>
	<p>
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id illo saepe ratione autem,
		eos laboriosam quis maxime fugiat tenetur nemo quidem veniam veritatis, explicabo
		facere vero dolores harum atque officiis a suscipit facilis consequatur, amet quia!
		Accusamus possimus illum assumenda iste esse autem sit. Fugit est, aliquam, possimus
		error iste exercitationem tempora omnis similique provident reprehenderit incidunt
		corrupti. Quos fugiat obcaecati nobis! Provident voluptate eligendi rem inventore
		dolorem ad alias, sit harum pariatur! Iste voluptatem incidunt corrupti laboriosam
		necessitatibus pariatur suscipit culpa fugit atque at doloremque repellat
		reprehenderit fugiat ratione provident perspiciatis, ea odio quasi aut quos.
		Voluptates, nihil ratione.
	</p>
	<p>
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id illo saepe ratione autem,
		eos laboriosam quis maxime fugiat tenetur nemo quidem veniam veritatis, explicabo
		facere vero dolores harum atque officiis a suscipit facilis consequatur, amet quia!
		Accusamus possimus <a href="/">illum assumenda</a> iste esse autem sit. Fugit est, aliquam,
		possimus error iste exercitationem tempora omnis similique provident reprehenderit incidunt
		corrupti. Quos fugiat obcaecati nobis! Provident voluptate eligendi rem inventore dolorem
		ad alias, sit harum pariatur! Iste voluptatem incidunt corrupti laboriosam necessitatibus
		pariatur suscipit culpa fugit atque at doloremque repellat reprehenderit fugiat ratione
		provident perspiciatis, ea odio quasi aut quos. Voluptates, nihil ratione.
	</p>
	<p>
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id illo saepe ratione autem,
		eos laboriosam quis maxime fugiat tenetur nemo quidem veniam veritatis, explicabo
		facere vero dolores harum atque officiis a suscipit facilis consequatur, amet quia!
		Accusamus possimus illum assumenda iste esse autem sit. Fugit est, aliquam, possimus
		error iste exercitationem tempora omnis similique provident reprehenderit incidunt
		corrupti. Quos fugiat obcaecati nobis! Provident voluptate eligendi rem inventore
		dolorem ad alias, sit harum pariatur! Iste voluptatem incidunt corrupti laboriosam
		necessitatibus pariatur suscipit culpa fugit atque at doloremque repellat
		reprehenderit fugiat ratione provident perspiciatis, ea odio quasi aut quos.
		Voluptates, nihil ratione.
	</p>
	<a href="/" class="button">Lorem Ipsum</a>
</section>
