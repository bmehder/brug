<script>
  import { tweened } from 'svelte/motion'
  import { observer } from '$lib/utils.js'

  export let startingNumber = null
  export let endingNumber = 0
  export let placeholder = ''
  export let tweenOptions = {
    duration: 2000,
    easing: cubicOut,
  }

  const end = tweened(startingNumber, tweenOptions)

  const callbacks = {
    in: () => {
      end.set(endingNumber)
    },
    out: () => {
      end.set(startingNumber ?? 0)
    },
  }
</script>

<div use:observer={callbacks} class="animacounter">
  <div class="animacounter__outer">
    <div class="animacounter__inner">
      {#if $end === 0}
        <div class="animacounter__inner-number">{placeholder || startingNumber}</div>
      {:else}
        <div class="animacounter__inner-number">{parseInt($end).toLocaleString()}</div>
      {/if}
      <div><slot /></div>
    </div>
  </div>
</div>

<style>
  /* .countup {
    padding: var(--size);
  } */
</style>
