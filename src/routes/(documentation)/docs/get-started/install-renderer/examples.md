# Installing renderer plugins

If you have already selected a renderer during the installation, then there is nothing more to do here and you can continue with the next steps.

If you did not select a renderer during the installation, you must now install a renderer. Currently there are renderer plugins for <a href="https://github.com/gardenjs/render-plugin-svelte" target="_blank">Svelte</a>, <a href="https://github.com/gardenjs/render-plugin-vue" target="_blank">Vue</a> and <a href="https://github.com/gardenjs/render-plugin-react" target="_blank">React</a> (HTML snippets are already supported by Gardenjs.). These plugins are installed as NPM modules, e.g.:

```console
npm i @gardenjs/render-plugin-svelte
```

## Write a new renderer

If your framework is not included in the list, you must first write a renderer plugin. You can find more information in the chapter [Write new Renderer](/docs/renderer).

If you have created a new renderer plugin, you are welcome to contact us and we will list it here.
