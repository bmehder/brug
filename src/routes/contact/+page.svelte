<script>
  import FormSparkAsync from '$lib/FormSparkAsync.svelte'

  const FORMSPARK_ID = ''
  const BOTPOISON_KEY = ''
</script>

<h1 class="title">Contact</h1>

<section>
  <FormSparkAsync id={FORMSPARK_ID} botpoisonKey={BOTPOISON_KEY} />
</section>