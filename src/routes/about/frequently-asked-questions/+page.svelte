<script>
  import './faqs.css'
  import Faq from '$lib/FAQ.svelte'

  export let data
</script>

<h1 class="title">Frequently Asked Questions</h1>

<section class="flow">
  <ul>
    {#each data.faqs as { question, answer }}
      <li>
        <Faq {question} {answer} />
      </li>
    {/each}
  </ul>
</section>