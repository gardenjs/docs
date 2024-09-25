# Write a plugin for another framework

Gardenjs currently supports <a href="https://github.com/gardenjs/render-plugin-svelte" target="_blank" title="Go to the Svelte renderer Repository">Svelte</a>, <a href="https://github.com/gardenjs/render-plugin-vue" target="_blank" title="Go to the Vue renderer Repository">Vue</a> and <a href="https://github.com/gardenjs/render-plugin-react" target="_blank" title="Go to the React renderer Repository">React</a> - also in multi-framework projects. In order to make Gardenjs compatible with other frameworks and template languages, a corresponding render must be added as a plugin.

A renderer must export a `create` function which returns an object with two functions: `destroy` and `updateComponent`. The `updateComponent` function accepts an object with following properties:

- `component`: Component, the component which should be rendered.
- `decorators`: A list of decorator components, which are rendered recursively, and the component must be rendered inside.
- `selectedExample`: Object, configured in the das file. It contains the input parameters for the component
- `afterRenderHook`: Function, this function must be called after the component is mounted

```js
async function create() {
// optional create render component and mount to #garden_app
// alternatively inside updateComponent
...custom code...

    return {
      destroy: () => {
        // unmount render component
        ...custom code...
      }
      updateComponent: (props) => {
        // reset app and render new component
        // or just unmount app and create new app with new component
        // pass the afterRenderHook, decorators and props to the render component
        ...custom code...
      },
    }

}

export default { create }

```

It is often efficient enough and causes fewer errors to destroy the app and recreate and remount inside `updateComponent`.

The render component is responsible for calling the `afterRenderHook` function and embedding the component within the decorators.

Normally this can be done by recursively calling the render component. Usually, each frontend framework has a special component tag to create a component dynamically, e.g. Svelte has `<svelte:component>` and React has `<DynamicComponent>`

```jsx
let props //passed from outside

onMount(() => {
  props.afterRenderHook()
})

{ if (props.decorators.length > 0) }

  <framework:Component component=decorators[0]>
    <framework:Component component=self {...props, decorators: decorator.slice(0) />
  </framework:Component>

{ else }

  <framework:Component component=props.component {...props} />

{ end }
```

<br>

Also take a look at how the existing renderers solve this...

<br>

**Let us know if you have written a new renderer for another framework. We will be happy to refer to it.**
