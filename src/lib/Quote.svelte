<script>
  export let quote
</script>

<figure class="bg-light block flow shadow">
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