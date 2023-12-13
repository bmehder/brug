<script>
	import { page } from '$app/stores'
	// import DarkMode from '$lib/DarkMode.svelte'
	import DarkModeCookie from '$lib/DarkModeCookie.svelte'

	export let menuItems = []
	// export let logo = 'Add Logo Prop!'
</script>

<header class="content-grid">
	<a class="skip-nav-link" href="#main-content">skip navigation</a>
	<div class="flex align-center">
		<div class="logo">
			<a href="/">
				<!-- {@html logo} -->
				<slot />
			</a>
		</div>
		<nav>
			<ul class="align-center">
				{#each menuItems as { name, url, children, auth }}
					{#if !auth}
						<li>
							<a aria-current={$page.url.pathname === url} href={url}>{name}</a>
							{#if children}
								<ul class="flow">
									{#each children as { name, url }}
										<li>
											<a aria-current={$page.url.pathname.includes(url)} href={url}>{name}</a>
										</li>
									{/each}
								</ul>
							{/if}
						</li>
					{/if}
					{#if auth === true && $page.data.session}
						<li>
							<a aria-current={$page.url.pathname === url} href={url}>{name}</a>
							{#if children}
								<ul class="flow">
									{#each children as { name, url }}
										<li>
											<a aria-current={$page.url.pathname.includes(url)} href={url}>{name}</a>
										</li>
									{/each}
								</ul>
							{/if}
						</li>
					{/if}
				{/each}
				<li class="dark-mode-toggle">
          <!-- <DarkMode /> -->
          <DarkModeCookie />
				</li>
			</ul>
		</nav>
	</div>
</header>

<style>
	header {
		position: fixed;
		width: 100%;
		z-index: 3;
		padding-block: var(--size-0-5);
		background-color: var(--dark);
		border-bottom: 1px solid var(--text-color);
		box-shadow: 0 1px 2px rgba(255, 255, 255, 0.1);
	}

	.skip-nav-link {
		position: absolute;
		left: var(--size-0-5);
		background-color: black;
		padding-block: var(--size-0-5);
		padding-inline: var(--size);
		text-decoration: underline;
		text-underline-offset: calc(var(--size-0-5) / 2);
		transform: translateY(-180%);
	}

	.skip-nav-link:focus {
		transition: transform 200ms ease-in;
		transform: translateY(0);
	}

	.logo {
		max-width: 12em;

		& h1 {
			color: var(--light) !important;
		}
	}

	ul {
		display: flex;
		justify-content: end;
		gap: var(--size);
	}

	ul li ul {
		display: none;
		z-index: 2;
	}

	ul li {
		position: relative;
	}

	ul li:hover ul {
		width: max-content;
		position: absolute;
		left: calc(var(--size) * -1);
		display: block;
		padding: var(--size);
		background-color: var(--dark);
	}

	a {
		color: var(--light);
		position: relative;
		text-decoration: none;
	}
	
	a[aria-current='true']::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: calc(var(--size-0-5) * -0.025);
		width: 100%;
		height: 2px;
		background-color: white;
		view-transition-name: active-page;
	}

	.dark-mode-toggle {
		& label {
			border-radius: 34px;
			outline: 1px solid white;
		}
	}
</style>
