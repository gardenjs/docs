# Output of components/layouts

Gardenjs respects the directory structure of your project. Several components can be bundled in one folder, in separate folders and in subfolders. This is how your components are output in Gardenjs:

## Step 1: Define the page tree structure for the component menu

First you have to define one or more root directories of your components in **garden.config.js**. Each entry creates a page tree in the components menu. Components in subfolders are displayed at a lower level in the page tree.

```js
 "structure": {
    "layouts": "/src/layout/",
    "components": "/src/components/",
  },
```

However, without the next step, nothing is output yet.

## Step 2: Register each component to view it

Now create a file **foo.das.js** for each component you want to display in Gardenjs. Name them like the components themselves and save each one next to the corresponding component. These files look like this:

```js
export default {
  name: 'Foo',
  file: './Foo.svelte',
  description: 'Some description.'
}
```

`description` is optional and is output in the panel under the component in the "Notes" tab. More infos <a href="/docs/add-notes">here</a>.

## Next: Register stories (optional)

Stories are optional and will also be managed in the registration files if required. More infos <a href="/docs/stories">here</a>.
