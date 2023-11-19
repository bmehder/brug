<script>
	import { enhance } from '$app/forms'
	export let form
</script>

<h1 class="title">Register</h1>

<section>
	<form method="post" use:enhance>
		<div class="flow">
			<div class="grid half-flow">
				<label for="email">Email</label>
				<input name="email" id="email" value={form?.email ?? ''} autocomplete="true" />
			</div>
			<div class="grid half-flow">
				<label for="password">Password</label>
				<input type="password" name="password" id="password" autocomplete="current-password" />
			</div>
			<button>Sign up</button>
		</div>
	</form>
	
	{#if form?.success}
		<div class="h3">{form.message}</div>
	{/if}
</section>
