# Output of components/layouts

Gardenjs respects the directory structure of your project: Several components can be bundled in one folder, in separate folders and in subfolders. First you have to define one or more root directories of your components in garden.config.js, e.g.:

```js
 "structure": {
    "layouts": "/src/layout/",
    "components": "/src/components/",
  },
```

To output components in Gardenjs, you don't need to change anything in the component file itself, so your component remains pure. Now create a component.das.js for each component you want to display in Garden. For example, this file looks like this:

```js
export default {
  name: 'Foo',
  file: './Foo.svelte',
  description: 'Some description.'
}
```

The description is optional and is output in the panel under the component in the "Notes" tab. As an alternative to the description text, you can also use markdown or specify a markdown file like `description: "./foo.md",` (see chapter "write docs").

In the next step, you also write the stories for the respective component in this file (see chapter "strories").
