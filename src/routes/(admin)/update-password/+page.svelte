<script>
	export let data

	let newPassword = null
	let message = null

	export const updatePassword = async () => {
		message = null

		const { error } = await data.supabase.auth.updateUser({ password: newPassword })

		if (error) {
			message = 'Something went wrong.'
		} else {
			message = 'You are logged in, and your password has been updated.'
		}
	}
</script>

<!-- <h1 class="title">Update Password</h1> -->

{#if data.session}
	<div class="flow">
		{#if message}
			<p>{message}</p>
		{/if}

		<form on:submit={updatePassword}>
			<div class="flow">
				<div class="grid half-flow">
					<label for="password">Choose new password</label>
					<input type="password" name="password" id="password" bind:value={newPassword} />
				</div>
				<button>Change Password</button>
			</div>
		</form>
	</div>
{:else}
	<div class="flow">
		<p>You need to be logged in to change your password.</p>
		<a href="/account" class="button">Login</a>
	</div>
{/if}
