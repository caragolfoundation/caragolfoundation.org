// Hero configuration on the homepage

import { getPermalink } from '~/utils/permalinks';

const hero = {
  // If the entire hero section should be enabled or not
  enabled: true,

  // Hero title with HTML support
  title: {
    enabled: true, // If the title should be enabled or not
    text: `<span class="dark:text-white highlight">Caragol Foundation</span>`,
  },

  // Hero subtitle with HTML support
  subtitle: {
    enabled: true, // If the subtitle should be enabled or not
    text: `<span class="hidden sm:inline">
    The <span class="font-semibold">Caragol Foundation</span> is a 501(c) non-profit organization that helps to protect the environment and support vulnerable populations.</span
  >`,
  },

  // First CTA block
  callToAction: {
    // Enable or disable first CTA
    enabled: true,
    // CTA text
    text: 'Learn more',
    // CTA link
    href: getPermalink('/about'),
    // Target html <a> tag
    target: '_self',
    // Rel html <a> tag
    rel: [],
    // CTA icon
    icon: 'tabler:book',
  },

  // Second CTA block (optional)
  callToAction2: {
    // Enable or disable second CTA
    enabled: false,
    // CTA text
    text: 'Learn more',
    // CTA link
    href: '#features',
    // Target html <a> tag
    target: '_blank',
    // Rel html <a> tag
    rel: 'noopener',
    icon: 'tabler:book',
  },

  // Hero image
  image: {
    // If the image should be enabled or not
    enabled: true,
    // Image source
    src: import('~/assets/images/hero.jpg'),
    // Image alt text
    alt: 'caragolfoundation hero image',
  },
};

export default hero;
