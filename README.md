# COMPONENT LIBRARY

{Link to the library deployed on Github Pages}[https://aperezm85.github.io/Component-library/]

Component library based on the UBER base library found in [FIGMA community](https://www.figma.com/community/file/805195278314519508/base-gallery)

Project created using Vite 7 + React

[Getting started](https://vite.dev/guide/)

Using Tailwind version 4

[Tailwindcss](https://tailwindcss.com/)

Integrated storybook

[Storybook](https://storybook.js.org/)

Project just for fun to add into my portfolio and a good opportunity to use the latest versions of the tailwind and storybook libraries.

Icons library
[iconoir-css](https://iconoir.com/docs/packages/css)

Deploying Storybook on Guthub pages
I followed this blog https://www.bitovi.com/blog/deploy-storybook-to-github-pages-with-github-actions

# Problems I found

### Tailwind classes (like colors) cannot be use dynamically.

For example `text-${color}` will not work.
Tailwind needs to find the whole class to import the values to the css.

### Path alias

I added path alias into the `tsconfig.app`. That made storybook break, so I needed to add this package `vite-tsconfig-paths` and this code in the `main.ts` to allow the paths to work for storybook

```ts
viteFinal: async (config) => {
    config?.plugins?.push(
      /** @see https://github.com/aleclarson/vite-tsconfig-paths */
      tsconfigPaths({
        projects: [
          path.resolve(
            path.dirname(path.dirname(new URL(import.meta.url).pathname)),
            "tsconfig.json"
          ),
        ],
      })
    );
    return config;
  },
```

### Icons library

I added the icons library [Iconoir](https://iconoir.com/)
To decided to use the css version, so I needed to add their style CDN into our html app

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css"
/>
```

And also I needed to create the file `.storybook/preview-head.html` with the style CDN to allow storybook to use the icons

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css"
/>
```
