<script>
  import { dev } from '$app/environment'
	import { goto } from '$app/navigation'

	export let dialogElement = null
	export let delay = 0
	export let cookieName = 'brug_modal_cookie'
	export let cookieValue = 'yes'
	export let expirationDays = 0
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

	const init = node => {
		// Callbacks
		const showModal = () => node.showModal()
		const closeModal = () => {
			node.close('closed with button')
			redirect && goto(redirect)
		}
		const logReturnValue = () => console.log(node.returnValue)
		const handleBackdropClick = ({ target: dialog }) =>
			dialog.nodeName === 'DIALOG' && dialog.close('light dismiss')

		// Inner DOM node
		const closeButton = node.querySelector('button')

		// Event Listeners
		node.addEventListener('click', handleBackdropClick)
		node.addEventListener('close', logReturnValue)
		closeButton?.addEventListener('click', closeModal)

    const removeEventListeners = () => {
			node.removeEventListener('click', handleBackdropClick)
			node.removeEventListener('close', logReturnValue)
			closeButton?.removeEventListener('click', closeModal)
		}

    if (getCookie(cookieName)) {
			removeEventListeners()
			return
		}

		// Timer
		setTimeout(() => {
			showModal()
      setCookie(cookieName, cookieValue, expirationDays)
		}, delay)

		return {
			destroy() {
				removeEventListeners()
			},
		}
	}
</script>

<dialog
	bind:this={dialogElement}
	use:init
	aria-labelledby="dialog-heading"
	aria-describedby="dialog-content"
>
	<div id="dialog-heading">
		<slot name="heading">Heading goes here</slot>
	</div>
	<div id="dialog-content">
		<slot name="content">Content goes here</slot>
	</div>
	<div id="dialog-footer">
		<slot name="footer">Button goes here</slot>
	</div>
</dialog>

<style>
	dialog {
		max-inline-size: var(--width, 16rem);
		margin: auto;
		padding: 2rem;
		animation: appear 300ms forwards;

		&[open] {
			display: grid;
			gap: 1rem;
		}

		&::backdrop {
			background: rgba(0, 0, 0, 0.8);
			backdrop-filter: blur(5px);
		}

		& #dialog-heading {
			text-wrap: balance;

			& h2 {
				color: var(--dark);
			}
		}

		& #dialog-content {
			text-wrap: pretty;
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
