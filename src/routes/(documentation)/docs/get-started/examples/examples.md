# Examples

An "example" - other tools call this "story" - refers to a single state or variation of a UI component that you want to showcase. "Examples" are used to document and demonstrate how a component looks and behaves in different scenarios or states. Each "example" represents a specific use case or variant of the component. "Examples" are created somewhere in the source directory or directly next to the component itself in the **D**escription **A**nd **S**pecification file ***.das.js**.

## Create the description and specification file

Create a file ***.das.js** for each component you want to display in Gardenjs. Name them like the components themselves and save each one next to the corresponding component. These files look like this:

```js
export default {
  name: 'Foo',
  file: './Foo.svelte', // path to the component
  description: 'Some description.' // optional
}
```

`description` is optional and is output in the panel under the component in the "Notes" tab. The path to a Markdown file or Markdown is also possible. More infos <a href="/docs/add-notes">here</a>.

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
    {title: "Section intro with superscript, H2 heading and intro text", input: {superscript: "Superscript", heading: "This is the section title", teaser: "This is the text. This is the text. This is the text. This is the text. This is the text."}},
    {title: "Section intro with H2 heading and intro text", input: {heading: "This is the section title", teaser: "This is the text. This is the text. This is the text. This is the text. This is the text."}},
    {title: "Section intro with H2 heading with superscript", input: {superscript: "Superscript", heading: "This is the section title"}},
    {title: "Section intro with H2 heading", input: { heading: "This is the section title"}}
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