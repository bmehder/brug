<script>
  import './faqs.css'
  import faqs from './faqs'
  import Faq from '$lib/FAQ.svelte'
  import CaretDown from '$lib/icons/CaretDown.svelte'
  import CaretRight from '$lib/icons/CaretRight.svelte'
</script>

<h1 class="title">Frequently Asked Questions</h1>

<section class="flow">
  {#each faqs as { question, answer }}
    <Faq {question} {answer} openIcon={CaretRight} closeIcon={CaretDown} />
  {/each}
</section>
