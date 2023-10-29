import { json, error } from '@sveltejs/kit'

export const GET = async ({ locals: { supabase, getSession } }) => {
  const session = await getSession()
  if (!session) {
    // the user is not signed in
    throw error(401, { message: 'Unauthorized' })
  }

  return json([32, 42, 52, 73, 74] )
}