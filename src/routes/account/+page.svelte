<script>
  export let data

  let { supabase } = data
  $: ({ supabase } = data)

  let email
  let password
  let err = null

  $: console.log({ err })

  const handleSignIn = async () => {
    err = null

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      err = error
    }

    password = null
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
  }
</script>

<h1 class="title">Login</h1>

{#if err}
  <div class="h3">{err.message}</div>
{/if}

{#if data.session}
  <div class="h3">You are logged in as {data.session.user.email}</div>
  <button on:click={handleSignOut}>Sign out</button>
{:else}
  <form on:submit={handleSignIn}>
    <div class="flow">
      <div class="columns">
        <div class="frm-group half-flow">
          <label for="email">Email</label>
          <input name="email" id="email" bind:value={email} />
        </div>
        <div class="frm-group half-flow">
          <label for="password">Password</label>
          <input type="password" name="password" id="password" bind:value={password} />
        </div>
      </div>
      <button type="submit">Sign in</button>
    </div>
  </form>
  <a class="button" href="/register">Register</a>
{/if}

<style>
  .frm-group {
    display: grid;
  }
</style>
