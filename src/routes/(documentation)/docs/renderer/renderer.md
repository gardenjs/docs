# Add a renderer plugin or write a plugin for another JS framework

Gardenjs currently supports Svelte, Vue and React - also in multi-framework projects. In order to make Gardenjs compatible with other JS frameworks, a corresponding render must be added as a plugin.

A renderer must export a create function.
It must return an object with two functions: destroy and updateComponent.
The updateComponent function accepts an object with follwing properties:

- component: Component, the component which should be rendered.
- decorators: A list of decorator components, which are rendered recursively and the component must be rendered inside.
- selectedExample: object, configured in the das file. It contains the input parameters for the component
- afterRenderHook: function, this function must be called after the component is mounted

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

Often it is efficient enough and causes less errors to destroy the app and recreate and remount inside updateComponent.

The render component is responsible for calling the afterRenderHook function, and embed the component inside the decorators.

Usually this can be done via recursively call the render component. Usually any frontend framework has a special component tag to dynamically create a Component.
e.g. svelte has `<svelte:component>` and react has `<DynamicComponent>`

```jsx
let props //passed from outside

{ if (props.decorators.length > 0) }

  <framework:Component component=decorators[0]>
    <framework:Component component=self {...props, decorators: decorator.slice(0) />
  </framework:Component>

{ else }

  <framework:Component component=props.component {...props} />

{ end }
```
