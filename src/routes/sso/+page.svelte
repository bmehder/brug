<script>
  export let data

  let err = null

  const handleSSOLogin = async provider => {
    err = null

    const { error } = await data.supabase.auth.signInWithOAuth({
      provider
    })

    if (error) {
      err = error
    }
  }

  const handleSignOut = async () => {
    err = null

    const { error } = await data.supabase.auth.signOut()

    if (error) {
      err = error
    }
  }
</script>

<h1 class="title">SSO</h1>

{#if err}
  <p>Something went wrong.</p>
{/if}

{#if !data.session}
  <p>Register or sign in with:</p>
  <form>
    <button on:click={() => handleSSOLogin('github')}>GitHub</button>
    <button on:click={() => handleSSOLogin('google')}>Google</button>
  </form>
{:else}
  <form>
    <button on:click={handleSignOut}>Signout</button>
  </form>
{/if}