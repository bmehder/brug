<script>
	import Abstract from '$lib/assets/abstract.jpg?enhanced';
	import Placeholder from '$lib/assets/5.jpg?enhanced';
	import Hero from './Hero.svelte'
	import Columns from './Columns.svelte'
	import Banana from './Banana.svelte'
	import Cards from './Cards.svelte'
	import TextImage from './TextImage.svelte'
	import FullWidthGlass from './FullWidthGlass.svelte'
	import TextBreakout from './TextBreakout.svelte'
</script>

<Hero image={Abstract} />

<Columns />

<Banana />

<Cards />

<TextImage image={Placeholder} />

<FullWidthGlass />

<TextBreakout />
