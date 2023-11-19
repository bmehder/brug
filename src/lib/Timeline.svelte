<script>
	import { observer } from '$lib/utils'

	export let timeline = []

	const callbacks = {
		in: x => {
			x.target.style.opacity = 1
			x.target.style.translate = '0 calc(var(--size-2) * -1.5)'
		},
		out: x => x,
	}

	const options = {
		threshold: 0.5,
	}
</script>

<section class="timeline">
	<div class="center half-flow">
		<h2 class="h1">Timeline</h2>
		<p class="balance">
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, reiciendis.
			Eligendi cum sit numquam?
		</p>
	</div>

	<div class="content">
		{#each timeline as { title, content, date }}
			<div class="item" use:observer={{ callbacks, options }}>
				<div class="text half-flow">
					<h3 class="balance">{title}</h3>
					<p>{content}</p>
					<span class="circle">{date}</span>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.timeline {
		position: relative;
		padding-block: var(--size);
	}

	.content {
		display: flex;
		flex-direction: column;
		position: relative;
		margin-block-start: var(--size-2);
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
		margin-block: var(--size-2);
		opacity: 0;
		transition: opacity 400ms ease-out, translate 400ms ease-out;
	}

	.item:nth-of-type(1) {
		margin-block-start: var(--size-5);
	}

	.text {
		padding-inline-start: var(--size-4);
	}

	.circle {
		width: 100%;
		max-width: var(--size-3);
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

		.item:nth-child(odd) .text {
			padding-inline-start: var(--size-2);
			padding-inline-end: var(--size-6);
		}

		.item:nth-child(even) .text {
			padding-inline-start: var(--size-6);
			padding-inline-end: var(--size-2);
			text-align: right;
		}

		.text {
			width: 50%;
		}

		.circle {
			max-width: var(--size-4);
			left: 50%;
		}
	}
</style>
