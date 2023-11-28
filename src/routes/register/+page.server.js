export const prerender = false
import { fail } from '@sveltejs/kit'

export const actions = {
  default: async ({ request, url, locals: { supabase } }) => {
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${url.origin}/account/callback/`,
      },
    })

    if (error) {
      return fail(500, {
        message: 'Server error. Try again later.',
        success: false,
        email,
      })
    }

    return {
      message: 'Please check your email for a magic link to log into the website.',
      success: true,
    }
  },
}
