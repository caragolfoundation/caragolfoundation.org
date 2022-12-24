# caragolfoundation.org 🌍

[![Netlify Status](https://api.netlify.com/api/v1/badges/f64102bc-a081-4779-9200-2e683dc31f62/deploy-status)](https://app.netlify.com/sites/incomparable-palmier-3b8ef3/deploys)

The public [caragolfoundation.org](https://caragolfoundation.org) website and source code

## General Edits 📝

General edits to the website's text can be accomplished mainly through the [`config.json`](src/config/config.json) file. This file contains the majority of the text on the homepage and contact page. You can also control which blog posts are "featured" on the homepage through this file. It does **not** contain any of the text related to blog posts.

## Blog Posts 📔

Blog posts are written in markdown and stored in the [`data/blog`](data/blog/) directory.

To create a new blog post, follow the general steps below:

1. Create a new markdown file in the [`data/blog/`](data/blog/) directory (ensure the filename is unique)
2. Add a header section to your blog post with some details (example below)

   ```markdown
    ---
    publishDate: 'Aug 08 2022'
    title: 'My super cool blog post'
    description: 'This is a description of my super cool blog post'
    image: '~/assets/images/cool-blog-post.jpg'
    category: 'Environment'
    tags: [environment, volunteering, sustainability]
    ---
   ```

3. Now that you have a header section, you can start writing your blog post in markdown!
4. When you are done, commit your changes and open a pull request

If you need help with formatting markdown, check out [this guide](https://www.markdownguide.org/cheat-sheet/) for help

## Development 🔨

This website is a SSR (server-side rendered) [Astro](https://astro.build/) application. To get started with development, follow the steps below:

1. Clone this repo
2. Run `npm install`
3. Run `npm run dev` to start the development server

## Deployment 🚀

This website is deployed to [Netlify](https://www.netlify.com/) and automatically deploys when changes are merged into the `main` branch. However, it is still suggested to commit all changes to a new branch and open a pull request before merging into `main`. This will ensure that all changes are reviewed before being deployed to production. You can also preview your changes since Netlify will automatically deploy a preview of your branch when you open a pull request.
