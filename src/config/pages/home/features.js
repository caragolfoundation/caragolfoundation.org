// Configuration for the features component on the homepage

const features = {
  // If the features component should be enabled or not on the homepage
  enabled: true,

  // highlight text for the features component
  highlight: 'Mission Goals',

  // Title for the features component
  title: 'What are the Goals of the Foundation?',

  // Subtitle for the features component
  subtitle: 'The following areas are the main goals of the Foundation and our primary focus.',

  // List of features to display with HTML support
  items: [
    [
      {
        title: 'The Environment',
        description:
          'Environmental sustainability and conservation is a key focus of the Foundation. We are committed to protecting the environment and the planet for future generations.',
        icon: 'tabler:plant',
      },
      {
        title: 'Education',
        description:
          'Education is a key focus of the Foundation. We are committed to providing education to those who need it most.',
        icon: 'tabler:book',
      },
      {
        title: 'Vulnerable Populations',
        description:
          'Vulnerable populations often go without the basic necessities of life. We are committed to providing support to those who need it most.',
        icon: 'tabler:heart',
      },
    ],
    [
      {
        title: 'Peace and Justice',
        description:
          'Peace and justice are key to a healthy society. We are committed to promoting peace and justice in our communities.',
        icon: 'tabler:peace',
      },
      {
        title: 'XYZ',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.',
        icon: 'tabler:arrows-right-left',
      },
      {
        title: 'ABC',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.',
        icon: 'tabler:bulb',
      },
    ],
  ],
};

export default features;
