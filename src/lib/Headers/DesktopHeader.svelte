<script>
  import { page } from '$app/stores'
  import HomeHero from '$lib/HomeHero.svelte'
  import menuItems from '$lib/Headers/menuItems'

  export let logo = 'Add Logo Prop!'
</script>

<header>
  <a class="skip-nav-link" href="#main-content">skip navigation</a>
  <div class="inner">
    <div class="logo">
      <a href="/">{@html logo}</a>
    </div>
    <nav>
      <ul>
        {#each menuItems as { name, url, children, auth }}
          {#if !auth}
            <li>
              <a aria-current={$page.url.pathname === url} href={url}>{name}</a>
              {#if children}
                <ul class="flow">
                  {#each children as { name, url }}
                    <li>
                      <a aria-current={$page.url.pathname === url} href={url}>{name}</a>
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
                      <a aria-current={$page.url.pathname === url} href={url}>{name}</a>
                    </li>
                  {/each}
                </ul>
              {/if}
            </li>
          {/if}
        {/each}
      </ul>
    </nav>
  </div>
  {#if $page.route.id === '/'}
    <HomeHero image="/abstract.jpg" />
  {/if}
</header>

<style>
  header {
    background-color: var(--accent);
    /* Hack to prevent seeing a flash of Desktop nav */
    /* max-height: 6em; */
    /* overflow-y: hidden; */
  }

  .skip-nav-link {
    position: absolute;
    left: var(--half-size);
    background-color: black;
    padding-block: var(--half-size);
    padding-inline: var(--size);
    text-decoration: underline;
    text-underline-offset: calc(var(--half-size) / 2);
    transform: translateY(-120%);
  }

  .skip-nav-link:focus {
    transition: transform 200ms ease-in;
    transform: translateY(0);
  }

  .inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: var(--size);
  }

  .logo {
    max-width: 12em;
  }

  ul {
    display: flex;
    gap: var(--size);
  }

  ul li ul {
    display: none;
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
    background-color: var(--accent);
  }

  a {
    color: var(--light);
    text-underline-offset: var(--half-size);
    text-decoration-thickness: calc(var(--size) / 12);
  }

  a:hover {
    text-decoration-color: var(--alt-one);
  }

  a[aria-current='true'] {
    text-decoration: underline;
    text-decoration-color: var(--light);
    text-decoration-thickness: calc(var(--size) / 8);
  }
</style>
