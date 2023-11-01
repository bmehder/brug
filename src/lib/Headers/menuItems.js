export default [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'About',
    url: '/about/',
    children: [
      { name: 'FAQs', url: '/about/frequently-asked-questions' },
      { name: 'Education', url: '/about/education' },
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
]
