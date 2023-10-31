<script>
  export let data

  const post = data.post[0]
</script>

<h1 class="title">{@html post.title.rendered}</h1>

<section>
  <div>{@html post.content.rendered}</div>
</section>

<style>
  div :global(> * + *) {
    margin-block-start: var(--size);
  }

  div :global(ul) {
    list-style: initial;
    padding-inline-start: var(--size);
  }

  div :global(li) {
    line-height: 2.5;
  }

  div :global(img) {
    display: block;
    width: 100%;
    height: 100%;
    aspect-ratio: 2 / 1;
    object-fit: cover;
  }
</style>
