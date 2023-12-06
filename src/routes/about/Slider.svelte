<script>
	import Slider from '$lib/Slider.svelte'

  export let sliderImages
</script>

<section class="section content-grid full-width accent">
	<h2>Slider</h2>
	<Slider items={sliderImages} />
</section>