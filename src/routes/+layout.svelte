<script>
	import { invalidate } from '$app/navigation'
	import { onMount } from 'svelte'
	import 'iconify-icon'
	import '$lib/styles/app.css'
	import '$lib/styles/skins.css'
	import '$lib/styles/layouts.css'
	import '$lib/styles/utilities.css'
	import '$lib/styles/misc.css'
	// import '@fontsource/poppins/600.css'
	// import '@fontsource/poppins/700.css'
	// import "@fontsource/open-sans";
	// import "@fontsource/open-sans/600.css";
	// import "@fontsource/open-sans/700.css";
	import Logo from '$lib/assets/logo.svelte'
	import ScrollIndicator from '$lib/ScrollIndicator.svelte'
	import Header from '$lib/Headers/Header.svelte'
	import Footer from '$lib/Footers/Footer.svelte'
	import Popover from '$lib/Popover.svelte'
	import DialogModal from '$lib/DialogModal.svelte'
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

	// Modal Stuff
	let dialogElement = null

	const openModal = () => dialogElement?.showModal()
</script>

<ViewTransition />

<ScrollIndicator />
<div class="wrapper">
	<Header {mobileThreshold} menuItems={data.menuItems}>
		<Logo />
	</Header>

	<main id="main-content" class="content-grid">
		<slot />
	</main>

	<Footer />
</div>

<DialogModal
	bind:dialogElement
	delay={2000}
  cookieName="visited_within_24_hours"
  cookieValue="yes"
  expirationDays={1}
	--width="32rem"
>
	<div slot="heading">
		<h2>Greetings, one and all!</h2>
	</div>
	<div slot="content">
		<p>The dialog HTML element represents a modal or non-modal dialog box or other interactive component, such as a dismissible alert, inspector, or subwindow.</p>
	</div>
	<div slot="footer">
		<button class="button">Close</button>
	</div>
</DialogModal>

<!-- <Popover
  delay={2000}
  cookieName="visited_within_48_hours"
  cookieValue="yes"
  expirationDays={2}
  --background="#161616"
  --color="#f1f1f1"
	--width="32rem";
>
  <h2 id="dialog-heading" class="heading">This heading is a bit long, but it is balanced.</h2>
  <p id="dialog-content" class="content">
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
		grid-template-rows: 1fr auto;
		align-items: start;
	}

	main {
		/* margin-block: var(--size-2); */
		margin-block: calc(var(--size-2) * 1.25);
		line-height: 1.6;

		@media (min-width: 1120px) {
			margin-block-start: var(--size-6);
		}
	}
</style>
