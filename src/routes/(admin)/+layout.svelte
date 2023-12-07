<script>
	import { page } from '$app/stores'

	export let data

	let { supabase } = data
	$: ({ supabase } = data)

	const titleLookup = new Map([
		['/account/', 'Account'],
		['/magic-link/', 'Magic Link'],
		['/register/', 'Register'],
		['/sso/', 'Single Sign-on (SSO)'],
		['/update-password/', 'Update Password'],
	])

	const handleSignOut = async () => {
		await supabase.auth.signOut()
	}
</script>

<div class="flow">
	<h1 class="title">{titleLookup.get($page.url.pathname)}</h1>

	<div class="layout">
		<slot />

		<aside class="light half-flow">
			<h3>Account Pages</h3>
			<nav>
				<ul class="half-flow">
					<li>
						<a href="/account">
							{data.session ? 'Account' : 'Login'}
						</a>
					</li>
					{#if !data.session}
						<li><a href="/register">Register</a></li>
						<li><a href="/magic-link">Magic Link</a></li>
						<li><a href="/sso">Single Sign-on</a></li>
					{:else}
						<li><a href="/update-password">Update Password</a></li>
						<li><button class="a" on:click={handleSignOut}>Sign out</button></li>
					{/if}
				</ul>
			</nav>
		</aside>
	</div>
</div>

<style>
	.layout {
		display: grid;
		gap: var(--size-2);

		& aside {
			padding-block: var(--size);
			padding-inline: var(--size);
		}

		@media (min-width: 48rem) {
			grid-template-columns: 3fr 1fr;
		}
	}
</style>
