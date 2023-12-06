<script>
  export let data
</script>

<h1 class="title">Category: {data.category}</h1>

<section class="section flow">
  {#each data.posts as post}
    <h3><a href="/posts/{post.slug}">{@html post.title.rendered}</a></h3>
    <div>{@html post.excerpt.rendered}</div>
  {/each}
</section>
