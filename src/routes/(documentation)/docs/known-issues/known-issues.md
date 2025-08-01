# Known Issues

##  Vite 7: No support for relative paths on assets

**2025-08-01**

Since Vite 7, relative paths on assets, e.g. fonts, are no longer resolved correctly. Solution:

In both garden.vite.config.js and vite.config.js, an alias must be set to the base path of the assets folder:

```js
export default defineConfig(({ command, mode }) => {
  return {
    // ...
    resolve: {
      alias: [
        {
          find: '@assets',
          replacement: resolve(__dirname, 'src/assets'),
        },
      ],
    },
  };
});
```

Instead of a relative URL, the alias, e.g. ‘@asstes’, must be used in the project during import.

Example:

```css
@font-face {
  //...
  // before:
  src: url('../src/assets/fonts/SourceSans3-VariableFont_wght.woff2') format('woff2');

  // now:
  src: url('@assets/fonts/SourceSans3-VariableFont_wght.woff2') format('woff2');
}
```
