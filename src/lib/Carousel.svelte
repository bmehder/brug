<script>
	// import carousel1 from '$lib/assets/1.jpg?enhanced'
	// import carousel2 from '$lib/assets/2.jpg?enhanced'
	// import carousel3 from '$lib/assets/3.jpg?enhanced'
	import carousel1 from '$lib/assets/1.jpg'
	import carousel2 from '$lib/assets/2.jpg'
	import carousel3 from '$lib/assets/3.jpg'

	export const carouselItems = [
		{
			src: carousel1,
			alt: 'Hiker standing on mountain peak overlooking mountain range',
		},
		{
			src: carousel2,
			alt: 'Looking across bridge in a forest',
			text: 'Here is some text!',
		},
		{
			src: carousel3,
			alt: 'Trees and side of a mountain',
			text: 'Here is some more text that is longer!',
		},
	]

	let index = 0
	let items = carouselItems
	let intervalId = null
	let isPlaying = true
	let delay = 10

	const setIndex = idx => {
		if (idx < 0) {
			index = items.length - 1
			return
		}

		if (idx > items.length - 1) {
			index = 0
			return
		}

		index = idx
	}

	const autoplay = () => {
		intervalId = setInterval(() => setIndex(index + 1), delay * 1000)

		return {
			destroy() {
				clearInterval(intervalId)
			},
		}
	}

	const togglePlay = () => {
		if (isPlaying) {
			isPlaying = false
			clearInterval(intervalId)
		} else {
			isPlaying = true
			autoplay()
		}
	}

	const handleClick = direction => {
		isPlaying = false
		clearInterval(intervalId)
		direction === 'prev' ? setIndex(index - 1) : setIndex(index + 1)
	}
</script>

<div class="carousel full-width" use:autoplay>
	<div>
		<button class="prev" on:click={() => handleClick('prev')}>
			<iconify-icon width="1.5rem" icon="fluent:chevron-left-24-filled" />
		</button>
		<button class="next" on:click={() => handleClick('next')}>
			<iconify-icon width="1.5rem" icon="fluent:chevron-right-24-filled" />
		</button>
		<button class="pause" on:click={togglePlay}>
			{#if isPlaying}
				<iconify-icon icon="solar:pause-bold" />
			{:else}
				<iconify-icon icon="bxs:right-arrow" />
			{/if}
		</button>
		<ul>
			{#each items as item, idx}
				<li class:active={index === idx}>
					<!-- <enhanced:img src="{item.src}" alt={item.alt} /> -->
					<img src="{item.src}" alt={item.alt} />
					{#if item.text}
						<div class="h1">{item.text}</div>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.carousel {
		width: 100dvw;
		height: 85dvh;
		position: relative;

		& img {
			height: 100%;
			object-fit: cover;
			object-position: center;
			border: none;
		}

		& li {
			position: absolute;
			inset: 0;
			opacity: 0;
			transition: 200ms opacity ease-in-out;
			transition-delay: 200ms;
		}

		& .active {
			opacity: 1;
			transition-delay: 0ms;
			z-index: 1;
			color: transparent;
			background-color: transparent;
		}

		& :is(.prev, .next) {
			display: grid;
			place-content: center;
			position: absolute;
			top: 50%;
			translate: 0 -50%;
			z-index: 2;
		}

		& .prev {
			left: 0;
			padding-inline: 0.75rem 1rem;
		}

		& .next {
			right: 0;
			padding-inline: 1rem 0.75rem;
		}

		& .pause {
			position: absolute;
			padding-inline: 1rem;
			top: var(--size-0-5);
			right: var(--size-0-5);
			z-index: 2;
			border-radius: 50%;
		}

		& button:is(:hover, :focus) {
			background-color: var(--accent);
			color: white;
		}

		& .h1 {
			position: absolute;
			inset: 0;
			transition: 200ms opacity ease-in-out;
			color: white;
			inset: 15%;
			display: grid;
			place-content: center;
			text-align: center;
			font-size: calc(4vw + 1rem);
			font-weight: 700;
		}
	}
</style>
