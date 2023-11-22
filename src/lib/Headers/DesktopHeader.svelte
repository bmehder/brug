<script>
  import { page } from '$app/stores'
  import menuItems from '$lib/Headers/menuItems'

  export let logo = 'Add Logo Prop!'
</script>

<header class="content-grid">
  <a class="skip-nav-link" href="#main-content">skip navigation</a>
  <div class="flex align-center">
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
</header>

<style>
  header {
    padding-block: var(--size);
    background-color: var(--accent);
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
    background-color: var(--accent);
  }

  a {
    color: var(--light);
    text-underline-offset: var(--size-0-5);
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
