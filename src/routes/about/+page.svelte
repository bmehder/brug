<script>
	import Carousel from './Carousel.svelte'
	import Details from './Details.svelte'
	import Slider from './Slider.svelte'
	import TextImage1 from './TextImage1.svelte'
	import TextImage2 from './TextImage2.svelte'

	export let data
</script>

<Carousel />

<h1 class="title">About</h1>

<Details details={data.details} />

<Slider sliderImages={data.sliderImages} />

<TextImage1 />

<TextImage2 />