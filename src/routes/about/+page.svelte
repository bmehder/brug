<script>
	import Carousel from './_parts/Carousel.svelte'
	import Details from './_parts/Details.svelte'
	import Slider from './_parts/Slider.svelte'
	import TextImage1 from './_parts/TextImage1.svelte'
	import TextImage2 from './_parts/TextImage2.svelte'

	export let data
</script>

<Carousel />

<h1 class="title">About</h1>

<Details details={data.details} />

<Slider sliderImages={data.sliderImages} />

<TextImage1 />

<TextImage2 />