<script>
	import { dev } from '$app/environment'

	let email
	let message = null

	export let data

	const signInWithEmail = async () => {
		message = null

		const { error } = await data.supabase.auth.signInWithOtp({
			email: email,
			options: {
				shouldCreateUser: true,
				emailRedirectTo: dev
					? 'http://localhost:5173/account/'
					: 'https://brug-theme.vercel.app/account/',
			},
		})

		if (error) {
			message = 'Something went wrong'
		} else {
			message = 'Check your email for a link to login.'
		}

		email = null
	}
</script>

<div class="flow">
	{#if message}
		<p>{message}</p>
	{/if}

	<form on:submit={signInWithEmail}>
		<div class="flow">
			<div class="grid half-flow">
				<label for="email">Enter email</label>
				<input type="text" name="email" id="email" bind:value={email} />
			</div>
			<button>Submit</button>
		</div>
	</form>
</div>
