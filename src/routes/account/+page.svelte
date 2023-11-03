<script>
  export let data

  let { supabase } = data
  $: ({ supabase } = data)

  let email
  let password
  let err = null
  let message = null

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

  const handlePasswordReset = async () => {
    message = null
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: dev
        ? `http://localhost:5173/update-password`
        : 'https://brug-theme.vercel.app/update-password',
    })

    if (error) {
      message = 'Something went wrong.'
    } else {
      message = 'Please check your email for a link to update your password.'
    }
  }
</script>

<h1 class="title">Login</h1>

{#if err}
  <div class="h3">{err.message}</div>
{/if}

{#if message}
  <p>{message}</p>
{/if}

{#if data.session}
  <div class="h3">You are logged in as {data.session.user.email}</div>
  <button on:click={handleSignOut}>Sign out</button>
{:else}
  <form on:submit={handleSignIn}>
    <div class="flow">
      <div class="frm-group half-flow">
        <label for="email">Email</label>
        <input name="email" id="email" bind:value={email} />
      </div>
      <div class="frm-group half-flow">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" bind:value={password} />
      </div>
      <button type="submit">Sign in</button>
    </div>
  </form>
{/if}

{#if !data.session && email}
  <button on:click={handlePasswordReset}>Forgot Password?</button>
{/if}

<style>
  .frm-group {
    display: grid;
  }
</style>
