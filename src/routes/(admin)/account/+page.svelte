<script>
	import { dev} from '$app/environment'
	
	export let data

	let { supabase } = data
	$: ({ supabase } = data)

	let email
	let password
	let err = null
	let message = null

	const handleSignIn = async () => {
		err = null

		const { error } = await supabase.auth.signInWithPassword({
			email,
			password,
		})

		if (error) {
			err = error
		}

		password = null
	}

	const handleSignOut = async () => {
		await supabase.auth.signOut()
	}

	const handlePasswordReset = async () => {
		message = null
		const { error } = await supabase.auth.resetPasswordForEmail(email, {
			redirectTo: dev
				? `http://localhost:5173/update-password`
				: 'https://brug-theme.vercel.app/update-password',
		})

		if (error) {
			message = 'Something went wrong.'
		} else {
			message = 'Please check your email for a link to update your password.'
		}
	}
</script>


<div class="flow">
	<!-- <h1 class="title">Login</h1> -->

	{#if err}
		<div class="h3">{err.message}</div>
	{/if}

	{#if message}
		<p>{message}</p>
	{/if}

	{#if data.session}
		<div class="flow">
      <div class="h3">Hello, {data.session.user.user_metadata.full_name}</div>
			<img
				class="avatar"
				src={data.session.user.user_metadata.avatar_url}
				alt="profile avatar"
			/>
			<p>You are logged in as {data.session.user.email}</p>
			<button on:click={handleSignOut}>Sign out</button>
		</div>
	{:else}
		<form on:submit={handleSignIn}>
			<div class="flow">
				<div class="grid half-flow">
					<label for="email">Email</label>
					<input name="email" id="email" bind:value={email} autocomplete="username" />
				</div>
				<div class="grid half-flow">
					<label for="password">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						bind:value={password}
						autocomplete="current-password"
					/>
				</div>
				<button type="submit">Sign in</button>
			</div>
		</form>
	{/if}

	{#if !data.session && email}
		<button on:click={handlePasswordReset}>Forgot Password?</button>
	{/if}
</div>

<style>
  .avatar {
    max-width: 8rem;
  }
</style>