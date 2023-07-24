<script>
  import {fly} from 'svelte/transition'
  
  export let transition = fly
  export let key
  export let amount
  export let easing
  export let axis
  export let start
  export let delay = 100
  export let duration = 300
  export let x = -1000
  export let y = null
  export let opacity= 0

  const options = { delay, duration, x, y, opacity, amount, easing, axis, start }
</script>

{#key key}
  <div class="flow" in:transition={options}>
    <slot />
  </div>
{/key}
