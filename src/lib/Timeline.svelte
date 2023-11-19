<script>
	import { observer } from '$lib/utils'

	export let timeline = []

	const callbacks = {
		in: x => {
			x.target.style.opacity = 1
			x.target.style.translate = '0 calc(var(--double-size) * -1.5)'
		},
		out: x => x,
	}

	const options = {
		threshold: 0.5,
	}
</script>

<section class="timeline">
	<div class="center half-flow">
		<h2>Timeline</h2>
		<p class="balance">
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, reiciendis.
			Eligendi cum sit numquam?
		</p>
	</div>

	<div class="content">
		{#each timeline as item}
			<div class="item" use:observer={{ callbacks, options }}>
				<div class="text">
					<h3 class="balance">{item.title}</h3>
					<p>{item.content}</p>
					<span class="circle">{item.date}</span>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	h2 {
		font-size: var(--double-size);
	}

	h3 {
		padding: 1.25rem 0;
		font-size: var(--size);
	}

	.timeline {
		position: relative;
		padding-block: var(--size);
	}

	.content {
		display: flex;
		flex-direction: column;
		position: relative;
		margin-block-start: var(--double-size);
	}

	.content::after {
		width: 0.4rem;
		height: 100%;
		position: absolute;
		content: '';
		left: var(--size);
		background-color: var(--accent);
		z-index: -5;
	}

	.item {
		display: flex;
		position: relative;
		margin-block: var(--double-size);
		opacity: 0;
		transition: opacity 400ms ease-out, translate 400ms ease-out;
	}

	.item:nth-of-type(1) {
		margin-block-start: calc(var(--double-size) * 2);
	}

	.text {
		padding-inline-start: calc(var(--double-size) * 2);
	}

	.circle {
		width: 100%;
		max-width: calc(var(--size) * 3);
		position: absolute;
		top: 50%;
		left: var(--size);
		translate: -50% -50%;
		aspect-ratio: 1;
		background-color: var(--accent);
		font-size: var(--size);
		border-radius: 50%;
		display: grid;
		place-items: center;
		z-index: 3;
	}

	@media (min-width: 60em) {
		.content::after {
			left: calc(50% - 2px);
		}

		.item:nth-child(even) {
			flex-direction: row-reverse;
		}
		
		.text {
			width: 50%;
			padding-inline: calc(var(--double-size) * 2);
		}
		
		.circle {
			max-width: calc(var(--double-size) * 2);
			left: 50%;
		}
	}
</style>
