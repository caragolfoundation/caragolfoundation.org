// Configuration for the footer component on all pages

// ----------- imports -----------
import { getPermalink, getBlogPermalink } from '~/utils/permalinks';
// ----------- imports -----------

const footerData = {
  // List of links to be displayed in the footer
  links: [
    {
      // The title of the section
      title: 'Resources',
      // List of links to be displayed in the section
      links: [
        { text: 'Team', href: '#' },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Open Source', href: 'https://github.com/caragolfoundation' },
      ],
    },
    {
      title: 'Projects',
      links: [{ text: 'Coming soon...', href: '#' }],
    },
    {
      title: 'Contact',
      links: [{ text: 'Contact Page', href: getPermalink('/contact') }],
    },
  ],

  // Secondary links to be displayed in the footer
  secondaryLinks: [
    // { text: 'Terms', href: getPermalink('/terms') },
    // { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],

  // A list of social links to be displayed in the footer
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    {
      ariaLabel: 'Github',
      icon: 'tabler:brand-github',
      href: 'https://github.com/caragolfoundation/caragolfoundation.org',
    },
  ],

  // The footnote to be displayed in the footer (can contain HTML)
  footNote: `
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" target="_blank" href="https://github.com/caragolfoundation"> The Caragol Foundation</a> with ❤️
  `,
};

export default footerData;
