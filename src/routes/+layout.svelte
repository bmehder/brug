<script>
  import { invalidate } from '$app/navigation'
  import { onMount } from 'svelte'
  import { page } from '$app/stores'
  import '$lib/styles/app.css'
  import '$lib/styles/theme.css'
  import Analytics from '$lib/Analytics.svelte'
  import Header from '$lib/Headers/Header.svelte'
  import PageTransition from '$lib/PageTransition.svelte'
  import HomeHero from '$lib/HomeHero.svelte'
  import Footer from '$lib/Footers/Footer.svelte'
  import Popover from '$lib/Popover.svelte'
  import BackToTop from '$lib/BackToTop.svelte'

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

<!-- <Analytics /> -->

<div class="wrapper">
  <Header {mobileThreshold} logo="<h1>Logo</h1>" />

  <!-- <PageTransition key={$page.route.id}> -->
  {#if $page.route.id === '/'}
    <HomeHero image="/abstract.jpg" />
  {/if}

  <main id="main-content" class="flow">
    <slot />
  </main>
  <!-- </PageTransition> -->

  <Footer />
</div>

<Popover delay={2000} cookieName="visited_within_48_hours" expirationDays={2}>
  <h3>Heading</h3>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nisi dolorem
    consequatur cum aperiam id earum aliquid non autem molestiae. Corporis non nulla natus
    vitae accusantium recusandae, tenetur repellendus commodi ducimus? Minus.
  </p>
</Popover>

<BackToTop --bg-color="black" --color="var(--light)" threshold="500" />

<style>
  .wrapper {
    min-height: 100dvh;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }

  main {
    width: var(--width);
    max-width: var(--max-width);
    padding-block: var(--double-size);
    margin-inline: auto;
    line-height: 1.5;
  }
</style>
