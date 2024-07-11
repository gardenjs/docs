# Decorators

Sometimes you want to embed your component inside a another component. E.g. all your components are meant to be rendered inside a global component. The global component might initalize a global context like an user object.
Or you want to embed your component in another component to check if it is correctly displayed when embedded in another div.

For this you can define decorators.

Decorators are component files with one `slot`, where the component should be rendered inside. How a slot is defined depends on the ui framework.

You can define global decorators. These are files with the file extension `das.decorator.[fwk-extension]`.
If you want to use a decorator only for a specific component, you can set the decorator filename inside the component description.

If you define more than one decorator, the decorators will be rendered recursively in the order how they are placed in the directory.

```

  decorator1 _______________________________
  |                                         |
  |   decorator2 ______________________     |
  |   |                                |    |
  |   |   component _______________    |    |
  |   |   |                       |    |    |
  |   |   |                       |    |    |
  |   |   |                       |    |    |
  |   |   |                       |    |    |
  |   |   |_______________________|    |    |
  |   |                                |    |
  |   |________________________________|    |
  |                                         |
  |_________________________________________|

```

## Using multiple frameworks

Decorator files are always written in the same ui framework like the component which should be displayed. If you have two components written in different frameworks, e.g. react and svelte, then you have to provide a decorator for the react component and a decorator for the svelte component. I.e. you can't use a react decorator for a svelte component.

## Example decorator file

company.das.decorator.svelte:

```svelte
<script>
let user = {name: 'Jane Doe', rights: ['read', 'write']}
</script>

<CompanyFrame user={user}>
  <slot> <!-- here will be rendered the component --></slot>
</CompanyFrame>
```
