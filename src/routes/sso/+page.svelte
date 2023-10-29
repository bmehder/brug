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
    await data.supabase.auth.signOut()
  }
</script>

<h1 class="title">SSO</h1>

{#if !data.session}
  <p>RESGISTER or SIGNIN with:</p>
  <form>
    <button on:click={() => handleSSOLogin('gitub')}>GitHub</button>
    <button on:click={() => handleSSOLogin('google')}>Google</button>
  </form>
{:else}
  <form>
    <button on:click={handleSignOut}>Signout</button>
  </form>
{/if}