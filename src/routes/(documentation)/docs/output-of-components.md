# Output of components/layouts

Gardenjs respects the directory structure of your project: Several components can be bundled in one folder, in separate directories and in subfolders. Gardenjs is currently styled up to the 3rd level. You only have to store one or more roots of your component in garden.config.js.

To output components in Gardenjs, you don't need to change anything in the component file itself, so your component remains pure. Now create a component.das.js for each component you want to display in Garden. For example, this file looks like this:

```js
export default {
  name: 'Chapter',
  file: './Chapter.svelte',
  description: 'Main chapter intro with h2 title and paragraph.'
}
```

The description is optional. As an alternative to the description text, you can also use markdown or specify a markdown file (see chapter "write docs").

In the next step, you also write the stories for the respective component in this file (see chapter "strories").
