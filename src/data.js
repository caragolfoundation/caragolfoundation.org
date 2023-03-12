import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Pages',
      links: [
        {
          text: 'About',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        }
      ],
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ]
};
  
export const footerData = {
  links: [
    {
      title: 'Resoures',
      links: [
        { text: 'Team', href: '#' },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Open Source', href: 'https://github.com/caragolfoundation' },
      ],
    },
    {
      title: 'Projects',
      links: [
        { text: 'Coming soon...', href: '#' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { text: 'Contact Page', href: getPermalink('/contact') },
      ],
    }
  ],
  secondaryLinks: [
    // { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/caragolfoundation' },
  ],
  footNote: `
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://github.com/caragolfoundation/caragolfoundation.org"> The Caragol Foundation</a> with ❤️
  `,
};
