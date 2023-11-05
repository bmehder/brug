<script>
  import { slide } from 'svelte/transition'

  export let question = 'Question'
  export let answer = 'Answer'
  export let openIcon
  export let closeIcon
  export let classNames = ''

  let isOpen

  const handleClick = () => (isOpen = !isOpen)
</script>

<div class="flow faq">
  <button
    class="{classNames} question"
    class:isOpen
    on:click|preventDefault={handleClick}
  >
    <span>{question}</span>
    <span>
      <svelte:component this={isOpen ? closeIcon : openIcon} />
    </span>
  </button>
  {#if isOpen}
    <div class="flow answer" aria-expanded={isOpen} transition:slide>{@html answer}</div>
  {/if}
</div>

<style>
  .question {
    all: unset;
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: var(--size);
    font-weight: 500;
    cursor: pointer;
  }

  .question:is(:focus), .isOpen {
    background-color: var(--accent);
    color: var(--light);
  }

  .answer {
    padding-inline-end: var(--size);
  }
</style>
