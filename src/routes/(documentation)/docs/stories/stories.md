# Stories

The stories are defined outside the components in the **foo.das.js** registry files. These files have already been created for the <a href="/docs/get-started/output">output of the components</a>. To define stories, you now need to add `examples` here as shown in the example below.

Created stories are available for selection in the “Examples” tab of the panel below the component.

## Stories example

The **foo.das.js** file, in this example **Sectionintro.das.js**:

```js
export default {
  name: 'Sectionintro',
  file: './Sectionintro.svelte',
  description: 'Section intro with H2 heading, optional with superscript and teaser text.',
  examples: [
    {story: "Section intro with superscript, H2 heading and intro text", input: {superscript: "Superscript", heading: "This is the section title", teaser: "This is the text. This is the text. This is the text. This is the text. This is the text."}},
    {story: "Section intro with H2 heading and intro text", input: {heading: "This is the section title", teaser: "This is the text. This is the text. This is the text. This is the text. This is the text."}},
    {story: "Section intro with H2 heading with superscript", input: {superscript: "Superscript", heading: "This is the section title"}},
    {story: "Section intro with H2 heading", input: { heading: "This is the section title"}}
  ]
}
```

While "story" is used as navigation title in the panel, you define the value of the respective fields with "input".

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