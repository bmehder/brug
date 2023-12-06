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
					? 'http://localhost:5173/'
					: 'https://brug-theme.vercel.app/',
			},
		})

		if (error) {
			message = 'Something went wrong'
		} else {
			message = 'Check your email for a link to login.'
		}
	}
</script>


<div class="flow">
	<!-- <h1 class="title">Magic Link</h1> -->

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
