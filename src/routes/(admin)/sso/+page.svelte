<script>
	import { dev } from '$app/environment'

	export let data

	let err = null

	const handleSSOLogin = async (provider) => {
		err = null

		const { error } = await data.supabase.auth.signInWithOAuth({
			provider,
			options: {
				redirectTo: dev
					? `http://localhost:5173/account/`
					: 'https://brug-theme.vercel.app/account/',
			},
		})

		if (error) {
			err = error
		}
	}

	const handleSignOut = async () => {
		err = null

		const { error } = await data.supabase.auth.signOut()

		if (error) {
			err = error
		}
	}
</script>

<div class="flow">
	{#if err}
		<p>Something went wrong.</p>
	{/if}

	{#if !data.session}
		<p>Register or sign in with:</p>
		<form>
			<button on:click={() => handleSSOLogin('github')}>GitHub</button>
			<button on:click={() => handleSSOLogin('google')}>Google</button>
		</form>
	{:else}
		<form on:submit|preventDefault={handleSignOut}>
			<button>Sign out</button>
		</form>
	{/if}
</div>
