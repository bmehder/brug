<script>
	import HomeHero from '$lib/HomeHero.svelte'
	import Card from '../lib/Card.svelte'
</script>

<HomeHero image="/abstract.jpg" />

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
			reprehenderit fugiat ratione <a href="/">provident perspiciatis</a>, ea odio quasi
			aut quos. Voluptates, nihil ratione.
		</p>
	</div>
	<p><a href="/" class="button">Lorem Ipsum</a></p>
</section>

<section class="full-width center banana" style="--gap: 4rem">
	<div class="flow">
		<h2>Mission & Vision Statement</h2>
		<div class="sep"></div>
		<p class="subtitle">
			We use a multi-modality approach to first identify the hurdles facing a patient’s
			health, and then identify methods to effectively build a better picture of health.
		</p>
	</div>
	<div class="auto-grid cols">
		<div class="grid flow">
			<div class="icons accent">
				<iconify-icon width="4rem" icon="healthicons:pharmacy"></iconify-icon>
			</div>
			<h3>Our Mission</h3>
			<p>
				We use a multi-modality approach to first identify the hurdles facing a patient’s
				health, and then identify methods to effectively build a better picture of health.
			</p>
		</div>
		<div class="grid flow">
			<div class="icons accent">
				<iconify-icon width="4rem" icon="healthicons:pharmacy-alt"></iconify-icon>
			</div>
			<h3>Vision Statement</h3>
			<p>
				Our programs are co-developed by doctors and fitness specialists, aiming to
				empower our patients with the collective knowledge of our multidisciplinary team.
			</p>
		</div>
		<div class="grid flow">
			<div class="icons accent">
				<iconify-icon width="4rem" icon="healthicons:pharmacy-outline"></iconify-icon>
			</div>
			<h3>Clinic Principles</h3>
			<p>
				We are committed to principles to aligning operations and strategies with
				universally accepted principles in the areas of human rights, and environment.
			</p>
		</div>
	</div>
</section>

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

<section class="flow">
	<h2>Heading</h2>
	<img
		class="float-right shadow"
		style="border-radius: 4px;"
		src="https://picsum.photos/500/380"
		alt="placeholder"
	/>

	<p>
		Fugit est, aliquam, possimus error iste exercitationem tempora omnis similique
		provident reprehenderit incidunt corrupti. Quos fugiat obcaecati nobis! Provident
		voluptate eligendi rem inventore dolorem ad alias, sit harum pariatur!
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

<section
	class="flow full-width balance"
	style="
					padding-block: var(--size-6);
					background-image: url('https://picsum.photos/id/127/2000');
					background-size: cover;
					background-position: center;
				"
>
	<div class="glass center flow">
		<div class="h1">Lorem ipsum dolor</div>
		<p class="balance" style="max-width: 48rem">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa sint voluptatem enim
			velit dolores? Modi, quam?
		</p>
		<a class="button shadow" style="margin-inline: auto; font-size: 1.5rem;" href="/">
			Let's Go!
		</a>
	</div>
</section>

<section class="flow">
	<h2>Lorem, ipsum.</h2>
	<div class="columns">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat fuga nesciunt ab
			sapiente rem harum hic expedita aspernatur? Error veniam laudantium alias nesciunt
			mollitia tenetur, vero quod recusandae. Sint nobis sunt accusamus voluptate
			cupiditate ducimus repellat atque, aut quam rerum ipsa maiores, mollitia
			repellendus. Dolore dolorum non ut, possimus praesentium suscipit quia nobis eos,
			amet facilis corporis ipsa ad reiciendis.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat fuga nesciunt ab
			sapiente rem harum hic expedita aspernatur? Error veniam laudantium alias nesciunt
			mollitia tenetur, vero quod recusandae. Sint nobis sunt accusamus voluptate
			cupiditate ducimus repellat atque, aut quam rerum ipsa maiores, mollitia
			repellendus. Dolore dolorum non ut, possimus praesentium suscipit quia nobis eos,
			amet facilis corporis ipsa ad reiciendis.
		</p>
	</div>
</section>

<section class="breakout italic accent shadow">
	<div class="half-flow">
		<p class="h2 center">Lorem ipsum, dolor sit amet consectetur adipisicing elit!</p>
		<p class="center">
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex quia inventore aperiam
			dolores quasi accusamus dolore.
		</p>
	</div>
</section>

<section class="columns">
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat fuga nesciunt ab
		sapiente rem harum hic expedita aspernatur? Error veniam laudantium alias nesciunt
		mollitia tenetur, vero quod recusandae. Sint nobis sunt accusamus voluptate cupiditate
		ducimus repellat atque, aut quam rerum ipsa maiores, mollitia repellendus. Dolore
		dolorum non ut, possimus praesentium suscipit quia nobis eos, amet facilis corporis
		ipsa ad reiciendis.
	</p>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat fuga nesciunt ab
		sapiente rem harum hic expedita aspernatur? Error veniam laudantium alias nesciunt
		mollitia tenetur, vero quod recusandae. Sint nobis sunt accusamus voluptate cupiditate
		ducimus repellat atque, aut quam rerum ipsa maiores, mollitia repellendus. Dolore
		dolorum non ut, possimus praesentium suscipit quia nobis eos, amet facilis corporis
		ipsa ad reiciendis.
	</p>
</section>

<style>
	.banana {
		text-align: center;

		& .subtitle {
			max-width: 42rem;
			margin-inline: auto;
			text-wrap: balance;
		}

		& .sep {
			width: 4rem;
			height: 4px;
			margin-inline: auto;
			background-color: var(--accent);
		}

		& .cols {
			padding-block-start: var(--size-3);
		}

		& .icons {
			max-width: fit-content;
			margin-inline: auto;
			padding: 0.5rem;
			aspect-ratio: 1;
			border-radius: 50%;
			box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		}
	}
</style>
