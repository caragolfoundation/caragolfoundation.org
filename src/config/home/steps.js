// Configuration for the steps component on the homepage

const steps = {
  // Whether the component is enabled or not
  enabled: true,

  // The title text of the component
  title: 'How we operate',

  // Items to be displayed as steps
  items: [
    {
      title: 'Step 1: <span class="font-medium">Do a thing</span>',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula.',
      icon: 'tabler:package',
    },
    {
      title: 'Step 2: <span class="font-medium">Do a thing</em>',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.',
      icon: 'tabler:letter-case',
    },
    {
      title: 'Step 3: <span class="font-medium">Do a thing</span>',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.',
      icon: 'tabler:paint',
    },
    {
      title: 'Ready!',
      icon: 'tabler:check',
    },
  ],

  // The image to be displayed on the right side of the component
  image: {
    src: import('~/assets/images/hands-on-tree.jpg'),
    alt: 'Steps image',
  },
};

export default steps;
