<script>
  import '$lib/styles/animacounter.css'
  import data from './data'

  import Animacounter from '$lib/Animacounter.svelte'
  import Share from '$lib/Share.svelte'
  import Switch from '$lib/Switch.svelte'
</script>

<h1 class="title">UI Components</h1>

<div class="auto-grid">
  {#each data as item}
    <Animacounter {...item} />
  {/each}
</div>

<div>
  <Switch />
</div>

<Share
  icons={[
    {
      color: '#ff0000',
      href: 'https://youtube.com/',
      name: 'logo-youtube',
    },
    {
      color: '#1877f2',
      href: 'https://facebook.com/',
      name: 'logo-facebook',
    },
    {
      color: '#ea4c89',
      href: 'https://dribbble.com/',
      name: 'logo-dribbble',
    },
    {
      color: '#25d366',
      href: 'https://www.whatsapp.com/',
      name: 'logo-whatsapp',
    },
  ]}
  --size="200px"
/>
