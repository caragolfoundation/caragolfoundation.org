# caragolfoundation.org 🌍

[![deploy](https://github.com/caragolfoundation/caragolfoundation.org/actions/workflows/deploy.yml/badge.svg)](https://github.com/caragolfoundation/caragolfoundation.org/actions/workflows/deploy.yml) [![ci](https://github.com/caragolfoundation/caragolfoundation.org/actions/workflows/ci.yml/badge.svg)](https://github.com/caragolfoundation/caragolfoundation.org/actions/workflows/ci.yml) [![lint](https://github.com/caragolfoundation/caragolfoundation.org/actions/workflows/lint.yml/badge.svg)](https://github.com/caragolfoundation/caragolfoundation.org/actions/workflows/lint.yml) [![CodeQL](https://github.com/caragolfoundation/caragolfoundation.org/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/caragolfoundation/caragolfoundation.org/actions/workflows/codeql-analysis.yml)

The public [caragolfoundation.org](https://caragolfoundation.org) website and source code.

## Config Files

The core way this template is different from the original is that it heavily uses `.js` config files to configure data and content for its site.

Here are a few common config directories and what you will find there:

- [`src/config/site/*`](src/config/site) - Site configuration
  - [`config.js`](src/config/site/config.js) - Global site configuration
  - [`blog.js`](src/config/site/blog.js) - Blog configuration
- [`src/config/home/*`](src/config/home) - Home page configuration
  - [`featured-posts.js`](src/config/home/featured-posts.js) - Featured blog posts on the home page
  - [`hero.js`](src/config/home/hero.js) - Hero component configuration on the home page
  - [`content.js`](src/config/home/content.js) - Main content component configuration on the home page
- [`src/config/components/*`](src/config/components) - Component configuration
  - [`announcement.js`](src/config/components/announcement.js) - Announcement component configuration on all pages
  - [`footer.js`](src/config/components/footer.js) - Footer component configuration on all pages
  - [`header.js`](src/config/components/header.js) - Header component configuration on all pages
  - [`logo.js`](src/config/components/logo.js) - Logo (text) component configuration on all pages

## Project structure

Inside AstroWind template, you'll see the following folders and files:

```text
/
├── public/
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── styles/
│   │       └── base.css
│   ├── components/
│   │   ├── blog/
│   │   ├── common/
│   │   ├── widgets/
│   │   │   ├── Header.astro
│   │   │   └── ...
│   │   ├── CustomStyles.astro
│   │   └── Logo.astro
│   ├── config/
│   │   ├── components/
|   |   |   ├── announcement.js
|   |   |   ├── call-to-action.js
│   │   │   └── ...
│   │   ├── home/
|   |   |   ├── content.js
|   |   |   ├── faqs.js
│   │   │   └── ...
│   │   ├── site/
│   │   │   ├── blog.js
|   |   |   ├── config.js
│   │   │   └── ...
│   ├── content/
│   │   ├── post/
│   │   │   ├── post-slug-1.md
│   │   │   ├── post-slug-2.mdx
│   │   │   └── ...
│   │   └-- config.ts
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── ...
│   ├── pages/
│   │   ├── [...blog]/
│   │   │   ├── [category]/
│   │   │   ├── [tag]/
│   │   │   ├── [...page].astro
│   │   │   └── index.astro
│   │   ├── index.astro
│   │   ├── about.md
│   │   ├── 404.astro
│   │   ├-- rss.xml.ts
│   │   └── ...
│   ├── utils/
│   ├── config.mjs
│   └── data.js
├── package.json
├── astro.config.mjs
└── ...
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory if they do not require any transformation or in the `assets/` directory if they are imported directly.

## General Edits 📝

Brief documentation section around general website edits

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
href: getPermalink('/example');
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

## Commands

All commands are run from the root of the project, from a terminal:

| Command               | Action                                             |
| :-------------------- | :------------------------------------------------- |
| `npm install`         | Installs dependencies                              |
| `npm run dev`         | Starts local dev server at `localhost:3000`        |
| `npm run build`       | Build your production site to `./dist/`            |
| `npm run preview`     | Preview your build locally, before deploying       |
| `npm run format`      | Format codes with Prettier                         |
| `npm run lint:eslint` | Run Eslint                                         |
| `npm run astro ...`   | Run CLI commands like `astro add`, `astro preview` |

## Development

Here are some basic commands to get you up and running to develop with this template:

1. Install `npm` dependencies

   ```bash
   npm i
   ```

2. Start the development server

   ```bash
   npm run dev
   ```

3. View your site at [`localhost:3000`](http://localhost:3000/)

> Live reload is enabled by default, so any changes you make will be reflected in the browser.

## Deployment

> Deployment docs for GitHub Pages

When you `push` changes to this repository, GitHub will automatically build and deploy your site through GitHub Actions + GitHub Pages.

### Branch Deploy

This repository also comes bundled with the [branch-deploy](https://github.com/github/branch-deploy) Action. Please ensure you view the [`branch-deploy.yml`](.github/workflows/branch-deploy.yml) file for reference.

The `branch-deploy` Action will allow you to trigger branch deployments from pull requests by using comments such as `.deploy`.

## Build Cache

This templates also uses a custom GitHub Actions build cache to help speed things up in CI when processing images. If you make any changes to images when working on a project using this template, please ensure to run `npm run build` before deploying to ensure your `cache.json` file is updated.

## Making Changes

This section goes into details on how you can make changes to the template.

## Live Commit Examples

Actual examples in the form of commits to this repository:

- [Adding a new page](https://github.com/grantbirki/astrowind/commit/6836c11a3140181a65f252e3709e398f67e632c4)

## Acknowledgements

This theme is based off the template by [onwidget](https://github.com/onwidget/astrowind)
