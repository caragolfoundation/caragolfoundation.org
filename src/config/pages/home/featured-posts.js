// Configuration for the latest blog posts component on the homepage

const featuredPosts = {
  // Whether the component is enabled or not
  enabled: true,

  // The title of the component
  title: 'Find out more content in our Blog',

  // The description of the component / information
  information: `The Caragol Foundation Blog`,

  // The list of posts to be displayed
  // These ids are the file names of the posts in the content/post folder
  postIds: [
    'get-started-website-with-astro-tailwind-css.md',
    'how-to-customize-astrowind-to-your-brand.md',
    'useful-resources-to-create-websites.md',
    'astrowind-template-in-depth.md',
  ],
};

export default featuredPosts;
