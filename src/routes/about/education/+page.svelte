<script>
  import { cubicInOut } from 'svelte/easing'
  import Animacounter from '$lib/Animacounter.svelte'
</script>

<h1 class="title">Education</h1>

<Animacounter
  endingNumber={40_300_000}
  tweenOptions={{
    duration: 1500,
    easing: cubicInOut,
  }}
  startingNumber={32}
  >This is some content.
</Animacounter>

<div style="height: 100vh;" />

<Animacounter
  endingNumber={32_323_232}
  tweenOptions={{
    duration: 1_000,
    easing: cubicInOut,
  }}
  placeholder="🌎"
  >This is the content
</Animacounter>

<style>
  :global(.animacounter) {
    width: fit-content;
    padding: var(--double-size);
    background-color: var(--accent);
    text-align: center;
  }
</style>
