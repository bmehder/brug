<script>
	import { tweened } from 'svelte/motion'
	import { observer } from '$lib/utils.js'

	export let startingNumber = 0
	export let endingNumber = 0
	export let beforeNumber = ''
	export let afterNumber = ''
	export let tweenOptions = {
		duration: 2000,
		easing: null,
	}
	export let text = ''

	const end = tweened(startingNumber, tweenOptions)

	const callbacks = {
		in: () => {
			end.set(endingNumber)
		},
		out: () => {
			end.set(startingNumber)
		},
	}

	const options = {
		threshold: 0.9,
	}
</script>

<div class="animacounter" use:observer={{ callbacks, options }}>
	<div class="number">
		<span>{beforeNumber}</span>
		<span>{parseInt($end).toLocaleString()}</span>
		<span>{afterNumber}</span>
	</div>
	<div class="text">{text}</div>
</div>

<style>
	.animacounter {
		padding-inline: var(--size);
		text-align: center;

		& .number {
			font-size: var(--size-2);
		}

		& .text {
			font-size: var(--size);
		}
	}
</style>
