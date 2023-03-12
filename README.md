# caragolfoundation.org 🌍

[![Netlify Status](https://api.netlify.com/api/v1/badges/f64102bc-a081-4779-9200-2e683dc31f62/deploy-status)](https://app.netlify.com/sites/incomparable-palmier-3b8ef3/deploys)

The public [caragolfoundation.org](https://caragolfoundation.org) website and source code

## General Edits 📝

Brief documentation section around general website edits

### Common Files 📁

Here are some links to common files you may wish to edit and why:

- [`src/content/post/*.md`](src/content/post/) - Blog posts
- [`src/data.js`](src/data.js) - Footer and header links / data
- [`src/config.mjs`](src/config.mjs) - Site configuration
- [`src/pages/index.astro`](src/pages/index.astro) - Home page
- [`src/pages/about.md`](src/pages/about.md) - About page
- [`src/pages/contact.md`](src/pages/contact.md) - Contact page

### Images 🖼️

Images for `.md` files that are not blog posts are stored in the [`public/assets/`](public/assets/) directory.

Images for `.md|.mdx` blog posts, and other `.astro` files are stored in the [`src/assets/images/`](src/assets/images/) directory.

### Creating a New Page 📄

If you wish to create a new page, you have two options: advanced or simple.

#### Simple Pages 📄

Create a new `.md` in the `src/pages/` directory. This will create a new page with the same name as the file. For example, if you create a file called `example.md`, you will have a page at `/example` with the contents of `example.md`.

If you want to link out to this page from a `.astro` file, you can use the `getPermalink` function like so:

```astro
<a href={getPermalink('/example')}>Example Page</a>
```

You can also link out to this page from `.js` files where the `getPermalink` function is available. For example, in the `src/data.js` file:

```js
href: getPermalink('/example')
```

#### Advanced Pages 📄

If you want, you can also fully construct pages by using `.astro` files. This is useful if you want to use Astro components or other advanced features.

You best place is the official [Astro documentation](https://docs.astro.build/en/getting-started/)

## Blog Posts 📔

Blog posts are written in markdown and stored in the [`src/content/post`](src/content/post/) directory.

To create a new blog post, follow the general steps below:

1. Create a new markdown file (`<name>.md`) in the [`src/content/post`](src/content/post/) directory (ensure the filename is unique)
2. Add a header section to your blog post with some details (example below)

   ```markdown
   ---
   publishDate: 2023-01-06T00:00:00Z
   title: Example Post 1
   excerpt: Sint sit cillum pariatur eiusmod nulla pariatur ipsum. Sit laborum anim qui mollit tempor pariatur.
   image: ~/assets/images/colors.jpg
   tags:
   - project
   - blog
   - environment
   canonical: https://caragolfoundation.org/post-1
   draft: false
   ---
   ```

   > This section is called "frontmatter" in Astro. You can read more about it [here](https://docs.astro.build/en/guides/markdown-content/#frontmatter-layout)

3. Now that you have a header section, you can start writing your blog post in markdown!
4. When you are done, commit your changes and open a pull request

If you need help with formatting markdown, check out [this guide](https://www.markdownguide.org/cheat-sheet/) for help

It should be noted that you you can use a more advanced version of markdown with `.mdx` extensions. You can do all sorts of wild things with `.mdx` and an example can be found [here](src/content/post/markdown-elements-demo-post.mdx)

## Development 🔨

This website is a statically built website with [Astro](https://astro.build/). To get started with development, follow the steps below:

1. Clone this repo
2. Run `npm install`
3. Run `npm run dev` to start the development server

Your development server should now be running at [`localhost:3000`](http://localhost:3000) and will live reload when changes are made to the source code.

## Deployment 🚀

This website is deployed to [GitHub Pages](https://pages.github.com/) and automatically deploys when changes are merged into the `main` branch. However, it is still suggested to commit all changes to a new branch and open a pull request before merging into `main`. This will ensure that all changes are reviewed before being deployed to production.

## Theme 🎨

This website is based off the [AstroWind](https://github.com/onwidget/astrowind) astro theme
