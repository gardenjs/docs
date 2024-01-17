# Stories

To define stories, you now need to add "examples" to the `foo.das.js` file.. This could look like the following:

```js
export default {
  name: 'Sectionintro',
  file: './Sectionintro.svelte',
  description: 'Section intro with H2 heading, optional with superscript and teaser text.',
  examples: [
    {story: "Section intro with superscript, H2 heading and intro text", input: {superscript: "Superscript", heading: "This is the section title", teaser: "This is the text. This is the text. This is the text. This is the text. This is the text."}},
    {story: "Section intro with H2 heading and intro text", input: {heading: "This is the section title", teaser: "This is the text. This is the text. This is the text. This is the text. This is the text."}},
    {story: "Section intro with H2 heading with superscript", input: {superscript: "Superscript", heading: "This is the section title"}}
    {story: "Section intro with H2 heading", input: { heading: "This is the section title"}}
  ]
}
```

While "story" is used as navigation title in the panel, you define the value of the respective field with "input". In the component itself, it looks like this in the example of Svelte:

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

So the component files remain completely pure. The output of the components in Gardenjs is done externally in `foo.das.js` (in this example `Sectionintro.das.js`), as well as the definition of the stories or the documentation (see chapter "Write docs").

The created stories can be selected under the component in the panel in the “Examples” tab.
