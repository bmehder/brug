<script>
  export let data

  const { id, title, thumbnail, description, price, brand, rating, stock, category } =
    data.product

  const formatMoney = num => (Math.round(num * 100) / 100).toLocaleString()
</script>

<div class="flow">
  <h1 class="title">{title}</h1>
  <p>
    <a href="/products">Products</a> &raquo; <a href=/products/category/{category}>{category}</a> &raquo; {title}
  </p>
  <div class="flex">
    <img src={thumbnail} alt={title} />
    <div class="flow">
      <h3>Description:</h3>
      <p>{description}</p>
      <p>
        <strong>Brand:</strong>
        {brand}<br />
        <strong>Rating:</strong>
        {rating}<br />
        <strong>Stock:</strong>
        {stock}
      </p>
      <h3>Price: <span class="price">${formatMoney(price)}</span></h3>
      <button>Buy Now</button>
      <p>Category: <a href="/products/category/{category}">{category}</a></p>
    </div>
  </div>
</div>

<style>
  .price {
    color: var(--accent);
  }
  img {
    object-fit: cover;
  }
</style>
