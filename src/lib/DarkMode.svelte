<script>
	import Switch from '$lib/Switch.svelte'
  
	let isDark = false

	const getThemeOption = () => localStorage.getItem('brug-theme')

	const isDarkMode = () => !!getThemeOption() && JSON.parse(getThemeOption() ?? false)

	const handleClick = () => {
		document.body.classList.toggle('dark-mode')
		isDark = !isDark
		localStorage.setItem('brug-theme', JSON.stringify(isDark))
	}

	const init = _ => {
		isDark = isDarkMode()
		isDark
			? document.body.classList.add('dark-mode')
			: document.body.classList.remove('dark-mode')
	}
</script>

<div use:init>
	<Switch on:click={handleClick} isChecked={isDark} />
</div>
