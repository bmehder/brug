<script>
	export let item
	console.log(item)
</script>

<div class="card" style="background-color: white;">
	<a href={item.url}>
		<img class="square" src={item.src} alt={item.alt} />
	</a>
	<div class="padding flow">
		<h3><a href="{item.url}">{item.title}</a></h3>
		<div>{item.content}</div>
    <a href="/" class="button block center">Go Here</a>
	</div>
</div>