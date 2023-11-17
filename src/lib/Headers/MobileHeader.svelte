<script>
	import { page } from '$app/stores'
	import { slide } from 'svelte/transition'
	import menuItems from '$lib/Headers/menuItems'
	import Hamburger from '$lib/icons/Hamburger.svelte'
	import Close from '$lib/icons/Close.svelte'

	export let logo = 'Add Logo Prop!'

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
			{#if isOpen}
				<Close on:click={toggleMenu} />
			{:else}
				<Hamburger on:click={toggleMenu} />
			{/if}
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
		background-color: var(--accent);
		color: var(--light);
	}

	.top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--size);
	}

	.logo {
		max-width: 12em;
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

	/* :global(body:has(.isOpen)) {
    position: fixed;
    inset: 0;
  } */
</style>
