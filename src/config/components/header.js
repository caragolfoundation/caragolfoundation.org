// Configuration for the header component on all pages

// ----------- imports -----------
import { getPermalink, getBlogPermalink } from '~/utils/permalinks';
// ----------- imports -----------

const headerData = {
  // List of links to be displayed in the header
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
        },
        {
          text: 'Team',
          href: getPermalink('/team'),
        },
        {
          text: 'Gallery',
          href: getPermalink('/gallery'),
        },
      ],
    },

    // The blog link is a special case, it uses the getBlogPermalink function
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],

  // List of buttons to be displayed in the header
  // actions: [
  //   {
  //     // text to display on the button
  //     text: 'Download',
  //     // link to go to when the button is clicked
  //     href: 'https://github.com/grantbirki/astrowind',
  //     // can be 'button', 'primary', or 'ghost'
  //     type: 'button',
  //     // HTML rel attribute
  //     rel: '',
  //     // HTML target attribute
  //     target: '_blank',
  //   },
  // ],
};

export default headerData;
