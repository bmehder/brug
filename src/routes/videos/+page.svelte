<script>
import Sveltetube from '$lib/Sveltetube.svelte';
import Vimeo from '$lib/Vimeo.svelte';
</script>

<h1 class="title">Videos</h1>

<section class="flow">
  <div class="auto-grid">
    <div class="flow">
      <h2>YouTube</h2>
      <Sveltetube />
    </div>
    <div class="flow">
      <h2>Vimeo</h2>
      <Vimeo />
    </div>
  </div>
</section>