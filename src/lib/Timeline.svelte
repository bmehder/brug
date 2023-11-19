<script>
	import { observer } from '$lib/utils'

	export let timeline = []

	const callbacks = {
		in: x => {
			x.target.style.opacity = 1
			x.target.style.translate = '0 calc(var(--double-size) * -1.5)'
		},
		out: _ => {},
	}

	const options = {
		threshold: 0.5,
	}
</script>

<section class="timeline-section">
	<div class="container">
		<div class="timeline__header">
			<h2>Timeline</h2>

			<p class="heading--title balance">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, reiciendis.
				Eligendi cum sit numquam?
			</p>
		</div>

		<div class="timeline__content">
			{#each timeline as item, idx}
				<div class="timeline__item" use:observer={{callbacks, options}}>
					<div class="timeline__text">
						<h3>{item.title}</h3>
						<p>{item.content}</p>
						<span class="circle">{idx + 1}</span>
					</div>
					<h3 class="timeline__date">{item.date}</h3>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	h2 {
		font-size: 4rem;
	}

	h3 {
		font-size: 1.6rem;
		padding: 1.2rem 0;
	}

	.timeline-section {
		padding-block: var(--size);
		position: relative;
	}

	.timeline__header {
		text-align: center;
		margin-bottom: var(--size);
	}

	.timeline__content {
		display: flex;
		flex-direction: column;
		position: relative;
	}

	.timeline__content::after {
		background-color: var(--accent);
		content: '';
		position: absolute;
		left: calc(50% - 2px);
		width: 0.4rem;
		height: 97%;
		z-index: -5;
	}

	.timeline__item {
		display: flex;
		justify-content: flex-end;
		position: relative;
		margin: clamp(2rem, 2vh, 5rem) 0;
		margin: 5rem 0;
		width: 100%;
		align-items: center;
		position: relative;
		opacity: 0;
    translate: 0 calc(var(--size) * -1);
		transition: opacity 400ms ease-out, translate 400ms ease-out;
	}
	
  .timeline__item:nth-of-type(1) {
		margin-block-start: 8rem;
	}

	.timeline__text,
	.timeline__date {
		width: 50%;
	}

	.timeline__item .timeline__date {
		padding-right: 4rem;
	}

	.timeline__item .timeline__text {
		padding-left: 4rem;
	}
	.timeline__item .timeline__text {
		padding-right: 4rem;
	}
	.timeline__item .timeline__date {
		padding-left: 4rem;
	}

	@media (min-width: 49em) {
		.timeline__item:nth-child(even) {
			flex-direction: row-reverse;
		}
		.timeline__item:nth-child(even) .timeline__date {
			text-align: right;
			padding-right: 8.3rem;
		}

		.timeline__item:nth-child(even) .timeline__text {
			padding-left: 8.3rem;
		}
		.timeline__item:nth-child(odd) .timeline__text {
			text-align: right;
			align-items: flex-end;
			padding-right: 8.3rem;
		}
		.timeline__item:nth-child(odd) .timeline__date {
			padding-left: 8.3rem;
		}
	}

	.circle {
		position: absolute;
		background: var(--accent);
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		max-width: 3.4rem;
		width: 100%;
		aspect-ratio: 1/ 1;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 3;
		font-size: 1.6rem;
	}

	@media (min-width: 49em) {
		.circle {
			max-width: 6.8rem;
		}
	}
</style>
