<script>
  import { page } from '$app/stores'
  import '$lib/styles/app.css'
  import '$lib/styles/theme.css'
  import Analytics from '$lib/Analytics.svelte'
  import Header from '$lib/Headers/Header.svelte'
  import HomeHero from '$lib/HomeHero.svelte'
  import Footer from '$lib/Footers/Footer.svelte'
  import BackToTop from '$lib/BackToTop.svelte'
  import PageTransition from '../lib/PageTransition.svelte'

  const mobileThreshold = 800
</script>

<!-- <Analytics /> -->

<div class="wrapper">
  <Header {mobileThreshold} logo="<h1>Logo</h1>" />

  <PageTransition key={$page.route.id}>
    {#if $page.route.id === '/'}
      <HomeHero image="/abstract.jpg" />
    {/if}

    <main id="main-content" class="flow">
      <slot />
    </main>
  </PageTransition>

  <Footer />
</div>

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
