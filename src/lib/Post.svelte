<script>
  export let item
</script>

<div class="card flow">
  <a href="/posts/{item.slug}">
    <img class="square" src="{item._embedded['wp:featuredmedia'][0].source_url}" alt="{item.title.rendered}">
  </a>
  <h3><a href="/posts/{item.slug}">{@html item.title.rendered}</a></h3>
  <div class="flow">{@html item.excerpt.rendered}</div>
</div>