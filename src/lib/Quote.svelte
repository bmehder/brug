<script>
  export let quote
</script>

<figure class="light padding flow shadow">
  <blockquote>
    <q>
      {quote.quote}
    </q>
  </blockquote>
  <figcaption>
    —
    <cite>{quote.author}</cite>
  </figcaption>
</figure>

<style>
  figure {
    border-radius: var(--half-size);
  }
</style>