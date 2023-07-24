<script>
  import Facebook from '$lib/icons/Facebook.svelte'
  import LinkedIn from '$lib/icons/LinkedIn.svelte'

  const currentYear = new Date().getFullYear()
</script>

<footer class="bg-light">
  <div class="inner flow">
      <!-- <p>To book an evaluation, please call: <a href="tel:7206789868">(720) 678-9868</a></p>
      <p>Patient Fax Line: <a href="tel:7206789860">(720) 678-9860</a></p>
      <p>NPI: 1770259061</p> -->
      <p>
        Copyright © 2021-{currentYear} Tom Foolery. All shenanigans reserved.
      </p>
      <p>
        <a href="/" target="_blank" aria-label="Facebook">
          <Facebook />
        </a>
        <a href="/" target="_blank" aria-label="LinkedIn">
          <LinkedIn />
        </a>
      </p>
  </div>
</footer>

<style>
  div {
    padding-block-start: var(--double-size);
  }
</style>
