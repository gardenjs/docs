# Examples

An "example" - other tools call this "story" - refers to a single state or variation of an UI component that you want to showcase. "Examples" are used to document and demonstrate how a component looks and behaves in different scenarios or states. Each "example" represents a specific use case or variant of the component. "Examples" are created somewhere in the source directory or directly next to the component itself in the **D**escription **A**nd **S**pecification file ***.das.js**.

## Create the description and specification file

Create a file ***.das.js** for each component you want to display in Gardenjs. Name them like the components themselves and save each one next to the corresponding component. These files look like this:

```js
export default {
  name: 'Foo',  // optional, is generated automatically and can be overwritten
  file: './Foo.svelte', // optional, path to the component
  description: 'Some description.' // optional
}
```

`description` is optional and is output in the panel under the component in the "Notes" tab. The path to a Markdown file or Markdown is also possible. More infos <a href="/docs/notes">here</a>.

## Create "examples"

To define "examples", you now need to add `examples` here as shown in the example below.

```js
examples: [
    {title: "Default", input: {foo: "Lorem", bar: "ipsum dolor", foobar: "sit amet",}},
    {title: "Something", input: {foo: "Lorem ipsum", bar: "dolor sit amet"}},
    {title: "Something else", input: {foo: "Lorem"}},
  ]
```

Created "Examples" are available for selection in the “Examples” tab of the panel below the component.

## Example of a complete "das" file

The example shows a UI component for displaying a section heading with an optional heading addition and an optional teaser text. In this example, the file ***.das.js** is called **Sectionintro.das.js**:

```js
export default {
  name: 'Sectionintro',
  file: './Sectionintro.svelte',
  description: 'Section intro with H2 heading, optional with superscript and teaser text.',
  examples: [
    {title: "H2, superscript & intro text", input: {superscript: "Superscript", heading: "This is the section title", teaser: "This is the text...."}},
    {title: "H2 & intro text", input: {heading: "This is the section title", teaser: "This is the text..."}},
    {title: "H2 with superscript", input: {superscript: "Superscript", heading: "This is the section title"}},
    {title: "H2", input: { heading: "This is the section title"}}
  ]
}
```

While "title" is used as navigation title in the panel, you define the value of the respective fields with "input".

<br>

The component **Sectionintro.svelte** file itself could look like this:

```js
<section class="section-intro">
  {#if superscript}
    <div class="section-intro_superscript">{superscript}</div>
  {/if}
  <h2 class="section-intro_heading">{heading}</h2>
  {#if intro}
    <p class="section-intro_teaser">{teaser}</p>
  {/if}
</section>
```

## Display components with slots

Components with a slot cannot be displayed directly, the slot remains empty. If you want to fill the slot with content, an "auxiliary component" is required (e.g. Foo.example.svelte).
If the component has properties, the auxiliary component must also have these properties and pass them on to the component or at least set them permanently.

An example using a svelte component: **Layout.example.svelte**

```svelte
<script>
  import Layout from './Layout.svelte';

  export let columns
  const fixBgColor = 'white'
</script>

<Layout columns={columns} bgColor={fixBgColor}>
  <div>Slot...</div>
</Layout>

<style>
  div {
    padding: 1rem;
    border: 1px solid red;
  }
</style>
```

<br>

The **Layout.das.js**:

```js
export default {
  name: 'Layout',
  file: './Layout.example.svelte',
  examples: [
    {
      title: '1 column',
      input: {
        columns: 1,
      }
    },
    {
      title: '3 columns',
      input: {
        columns: 3,
      }
    }
  ]
}
```
