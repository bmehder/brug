export const trailingSlash = 'always'
// export const prerender = true

import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public'
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit'

export const load = async ({ fetch, data, depends }) => {
	depends('supabase:auth')

	const supabase = createSupabaseLoadClient({
		supabaseUrl: PUBLIC_SUPABASE_URL,
		supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
		event: { fetch },
		serverSession: data.session,
	})

	const {
		data: { session },
	} = await supabase.auth.getSession()

	return {
		supabase,
		session,
		menuItems: [
			{
				name: 'Home',
				url: '/',
			},
			{
				name: 'About',
				url: '/about/',
				children: [
					{ name: 'FAQs', url: '/about/frequently-asked-questions' },
					{ name: 'Components', url: '/about/components' },
				],
			},
			{
				name: 'Videos',
				url: '/videos/',
			},
			{
				name: 'Products',
				url: '/products/',
			},
			{
				name: 'Posts',
				url: '/posts/',
			},
			{
				name: 'Testimonials',
				url: '/testimonials/',
			},
			{
				name: 'Account',
				url: '/account/',
				children: [
					{ name: 'Register', url: '/register' },
					{ name: 'Magic Link', url: '/magic-link' },
					{ name: 'SSO', url: '/sso' },
				],
			},
			{
				name: 'Top Secret',
				url: '/top-secret/',
				auth: true,
			},
			{
				name: 'Contact',
				url: '/contact/',
			},
		],
	}
}
