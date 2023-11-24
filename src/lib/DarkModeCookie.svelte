<script>
	import Switch from '$lib/Switch.svelte'
	
	let isChecked = false
	
	const init = _ => {		
		isChecked = document.documentElement.dataset.theme === 'dark-mode'
	}

	const toggle = () => {
		isChecked = !isChecked
		document.documentElement.dataset.theme = isChecked ? 'dark-mode' : 'light-mode'

		document.cookie = `siteTheme=${isChecked ? 'dark-mode' : 'light-mode'};max-age=31536000;path=/`
	}
</script>

<div use:init>
	<Switch on:click={toggle} {isChecked} />
</div>
