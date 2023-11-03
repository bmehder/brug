<script>
  import { dev } from '$app/environment'
  // import { goto } from '$app/navigation'

  export let delay = 0
  export let expirationDays = 1
  export let cookieName = 'brug-default-cookie'

  const getCookie = name => {
    const pattern = new RegExp(`(?<=${name}=)[^;]*`)

    try {
      return document.cookie.match(pattern)[0] // Will raise TypeError if cookie is not found
    } catch {
      return undefined
    }
  }

  const setCookie = (name, value = '', days) => {
    let expires = ''

    if (days) {
      const date = new Date()
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
      expires = '; expires=' + date.toUTCString()
    }
    document.cookie = name + '=' + value + expires + '; path=/; secure=' + !dev
  }

  const openModal = (elem, ms) => {
    if (!getCookie(cookieName)) {
      setTimeout(() => {
        elem.showPopover()
        setCookie(cookieName, 'yes', expirationDays)
      }, ms)
    }
  }

  const hideModal = evt => {
    evt.target.parentElement.hidePopover()
  }
</script>

<div class="flow" use:openModal={delay} popover>
  <slot>Fallback content</slot>
  <button on:click={hideModal}>Close</button>
</div>

<style>
  :global(body:has(:popover-open)) {
    position: fixed;
    inset: 0;
    filter: blur(3px);
  }

  div:popover-open {
    width: min(32em, 80%);
    display: grid;
    margin: auto;
    padding: var(--double-size);
    line-height: 1.5;
    border-radius: calc(var(--size) / 3);
    animation-delay: 400ms;
    animation: slideDown 400ms;
  }

  div::backdrop {
    background-color: black;
    opacity: 0.8;
    animation: fade 200ms;
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.8;
    }
  }

  @keyframes slideDown {
    0% {
      transform: translateY(-500%);
    }
    100% {
      transform: translateY(0%);
    }
  }
</style>
