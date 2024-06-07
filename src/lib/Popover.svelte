<script>
	import { dev } from '$app/environment'
	import { goto } from '$app/navigation'

	export let delay = 0
	export let expirationDays = null
	export let cookieName = 'brug-default-cookie'
	export let cookieValue = 'yes'
	export let redirect = ''

	const getCookie = name => {
		try {
			return document.cookie.match(`(?<=${name}=)[^;]*`)[0] // Will throw TypeError if cookie is not found
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

	const popover = (node, ms) => {
		if (!HTMLElement.prototype.hasOwnProperty('popover')) return

		const showModal = () => node.showPopover()
		
    const closeModal = () => {
			node.hidePopover()
			goto(redirect)
		}

		const button = node.querySelector('button')

		button.addEventListener('click', closeModal)

    const removeListener = () => button.removeEventListener('click', closeModal)

		if (getCookie(cookieName)) {
			removeListener()
			return
		}

		setTimeout(() => {
			showModal()
			setCookie(cookieName, cookieValue, expirationDays)
		}, ms)

		return {
			destroy() {
				removeListener()
			},
		}
	}
</script>

<div
	use:popover={delay}
	id="demo-modal"
	class="modal"
	role="dialog"
	aria-labelledby="dialog-heading"
	aria-describedby="dialog-content"
	aria-modal="true"
	popover
>
	<slot>Fallback content</slot>
	<button>Close</button>
</div>

<style>
  .modal {
		max-inline-size: var(--width);
    margin: auto;
		padding: 2rem;
    background-color: var(--background);
    line-height: 1.5;
    color: var(--color);
		animation: appear 300ms forwards;
		
		&::backdrop {
			background-color: rgba(0,0,0,0.6);
			backdrop-filter: blur(5px);
		}
		
		& .heading {
			text-wrap: balance;
		}
		
		& .content {
			text-wrap: pretty;
		}

		& > * + * {
			margin-block-start: 1rem;
		}
	}

	@keyframes appear {
		from {
			translate: 0 -50vh;
		}
		
		to {
			translate: 0 0;
		}
	}
</style>
