<script>
  import DesktopHeader from '$lib/Headers/DesktopHeader.svelte'
  import MobileHeader from '$lib/Headers/MobileHeader.svelte'

  // export let logo = '<img src="/logo.png" alt="Restore Wound Care Logo" />'
  export let mobileThreshold = 768
  export let menuItems = []

  let innerWidth
</script>

<svelte:window bind:innerWidth />

{#if innerWidth < mobileThreshold}
  <MobileHeader {menuItems}>
    <slot />
  </MobileHeader>
{:else}
  <DesktopHeader {menuItems}>
    <slot />
  </DesktopHeader>
{/if}
