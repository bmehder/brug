<script>
	import { enhance } from '$app/forms'
	export let form
</script>

<h1 class="title">Register</h1>

<form method="post" use:enhance>
  <div class="frm-group flow">
    <div class="half-flow">
      <label for="email">Email</label>
      <input name="email" if="email" value={form?.email ?? ''} />
    </div>
    <div class="half-flow">
      <label for="password">Password</label>
      <input type="password" name="password" id="password" />
    </div>
    <button>Sign up</button>
  </div>
</form>

{#if form?.success}
  <div class="h3">{form.message}</div>
{/if}

<style>
  .frm-group {
    display: grid;
  }
</style>