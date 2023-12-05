<script>
	import { invalidate } from '$app/navigation'
	import { onMount } from 'svelte'
	import 'iconify-icon'
	import '$lib/styles/app.css'
	import '$lib/styles/skins.css'
	import '$lib/styles/layouts.css'
	import '$lib/styles/utilities.css'
	import '$lib/styles/misc.css'
	import '@fontsource/poppins/600.css'
	import '@fontsource/poppins/700.css'
	import "@fontsource/open-sans";
	import "@fontsource/open-sans/600.css";
	import "@fontsource/open-sans/700.css";
	import Logo from '$lib/assets/logo.svelte'
	import Header from '$lib/Headers/Header.svelte'
	import Footer from '$lib/Footers/Footer.svelte'
	import Popover from '$lib/Popover.svelte'
	import BackToTop from '$lib/BackToTop.svelte'
	import ViewTransition from '$lib/ViewTransition.svelte'

	const mobileThreshold = 1120

	export let data

	let { supabase, session } = data
	$: ({ supabase, session } = data)

	onMount(() => {
		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth')
			}
		})

		return () => subscription.unsubscribe()
	})
</script>

<ViewTransition />

<div class="wrapper">
	<Header {mobileThreshold} menuItems={data.menuItems}>
		<Logo />
	</Header>

	<main id="main-content" class="content-grid">
		<slot />
	</main>

	<Footer />
</div>

<!-- <Popover
  delay={2000}
  cookieName="visited_within_48_hours"
  cookieValue="yes"
  expirationDays={2}
  redirect={'/about'}
  --background="#161616"
  --color="#f1f1f1"
>
  <h3>Heading</h3>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nisi dolorem
    consequatur cum aperiam id earum aliquid non autem molestiae. Corporis non nulla natus
    vitae accusantium recusandae, tenetur repellendus commodi ducimus? Minus.
  </p>
</Popover> -->

<BackToTop --color="var(--accent)" --bg-color="var(--light)" threshold="500" />

<style>
	.wrapper {
		min-height: 100dvh;
		display: grid;
		grid-template-rows: auto 1fr auto;
		align-items: start;
	}

	main {
		margin-block: var(--size-2);
		line-height: 1.6;
	}
</style>
