export const trailingSlash = 'always'
export const prerender = 'auto'

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
					{ name: 'Screen Recorder', url: '/about/recorder' },
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
				name: 'Top Secret',
				url: '/top-secret/',
				auth: true,
			},
			{
				name: 'Account',
				url: '/account/',
				// children: [
				// 	{ name: 'Register', url: '/register' },
				// 	{ name: 'Magic Link', url: '/magic-link' },
				// 	{ name: 'SSO', url: '/sso' },
				// ],
			},
			{
				name: 'Contact',
				url: '/contact/',
			},
		],
		threePosts: fetch('https://rfh-api.com/wp-json/wp/v2/posts?_embed&per_page=3')
			.then(x => x.json())
			.catch(console.error),
	}
}
