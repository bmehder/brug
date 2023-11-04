<script>
  import { page } from '$app/stores'

  import DesktopHeader from '$lib/Headers/DesktopHeader.svelte'
  import MobileHeader from '$lib/Headers/MobileHeader.svelte'
  import HomeHero from '$lib/HomeHero.svelte'

  export let logo = '<img src="/logo.png" alt="Restore Wound Care Logo" />'

  export let mobileThreshold = 768

  let innerWidth
</script>

<svelte:window bind:innerWidth />

{#if innerWidth < mobileThreshold}
  <MobileHeader {logo} />
{:else}
  <DesktopHeader {logo} />
{/if}

<!-- {#if $page.route.id === '/'}
  <HomeHero image="/abstract.jpg" />
{/if} -->
