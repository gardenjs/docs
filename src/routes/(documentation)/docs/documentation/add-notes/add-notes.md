# Add notes

You can add text to each component, for example a short note or a detailed documentation. Also code blocks with text highlighting is possible. These texts are then displayed in the panel at "Description".

You can either write plain text or markdown directly into foo.da.js, or you can specify a path to a markdown file.

```js
export default {
  name: 'Foo',
  file: './Foo.svelte',
  description: "./foo.md",
}
```

You can also display static files that you create in addition to the app components for documentation purposes only. For example, a file to display a color palette, the typography or the grids. These files will then also be displayed in the page tree. You do this as described in chapter "Output".
