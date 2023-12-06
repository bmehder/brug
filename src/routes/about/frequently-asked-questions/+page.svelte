<script>
	import Faq from '$lib/FAQ.svelte'
	import RadioDisclosure from '$lib/RadioDisclosure.svelte'

	export let data
</script>

<h1 class="title">Frequently Asked Questions</h1>

<section class="section flow">
  <h2>Many Open at Once</h2>
	<ul>
    {#each data.faqs as { question, answer }}
    <li>
      <Faq {question} {answer} />
    </li>
		{/each}
	</ul>
</section>

<section class="section flow">
  <h2>One Open at a Time</h2>
	<ul>
		<RadioDisclosure items={data.faqs} />
	</ul>
</section>