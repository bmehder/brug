<script>
	import { page } from '$app/stores'
	import { slide } from 'svelte/transition'
	
	export let logo = 'Add Logo Prop!'
	export let menuItems = []

	let isOpen = false

	const toggleMenu = () => (isOpen = !isOpen)
	const closeMenu = () => (isOpen = false)
</script>

<header class:isOpen class="content-grid">
	<div class="top">
		<div class="logo">
			<a on:click={closeMenu} href="/">{@html logo}</a>
		</div>
		<div class="trigger">
			<button on:click={toggleMenu}>
				{#if isOpen}
					<iconify-icon icon="octicon:x-12" width="2.5rem"></iconify-icon>
				{:else}
					<iconify-icon icon="mdi:hamburger-menu" width="2.5rem"></iconify-icon>
				{/if}
			</button>
		</div>
	</div>
	{#if isOpen}
		<nav id="header-nav" aria-label="Main Navigation" transition:slide>
			<ul>
				{#each menuItems as { name, url, children, auth }}
					{#if !auth}
						<li>
							<a aria-current={$page.url.pathname === url} on:click={closeMenu} href={url}
								>{name}</a
							>
						</li>
						{#if children}
							{#each children as { name, url }}
								<li class="child">
									<a
										aria-current={$page.url.pathname === url}
										on:click={closeMenu}
										href={url}>{name}</a
									>
								</li>
							{/each}
						{/if}
					{/if}
					{#if auth === true && $page.data.session}
						<li>
							<a aria-current={$page.url.pathname === url} on:click={closeMenu} href={url}
								>{name}</a
							>
						</li>
						{#if children}
							{#each children as { name, url }}
								<li class="child">
									<a
										aria-current={$page.url.pathname === url}
										on:click={closeMenu}
										href={url}>{name}</a
									>
								</li>
							{/each}
						{/if}
					{/if}
				{/each}
			</ul>
		</nav>
	{/if}
</header>

<style>
	header {
		padding-block: var(--size);
		background-color: var(--dark);
		color: var(--light);
	}

	.top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--size);
	}

	.logo.logo, .logo a {
		max-width: 12em;
		color: white;
	}

	ul {
		min-height: 100dvh;
		display: flex;
		flex-direction: column;
		gap: var(--size);
		padding-block-start: var(--size);
		font-size: calc(var(--size) - 0.25rem);
		list-style: none;
	}

	li {
		padding-block-end: calc(var(--size));
		border-bottom: 2px solid var(--light);
	}

	.child {
		padding-inline-start: var(--size);
	}

	a {
		display: block;
		color: inherit;
	}

	a[aria-current='true'] {
		color: var(--alt-one);
	}

	button {
		all: unset;
		color: white;

		&:focus-visible {
			outline: 1px solid;
		}
	}

	/* :global(body:has(.isOpen)) {
    position: fixed;
    inset: 0;
  } */
</style>
