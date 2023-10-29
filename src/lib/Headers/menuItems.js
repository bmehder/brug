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
    name: 'Testimonials',
    url: '/testimonials/',
  },
  {
    name: 'Login',
    url: '/login/',
  },
  {
    name: 'Contact',
    url: '/contact/',
  },
]
