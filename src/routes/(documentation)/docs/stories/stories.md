# Stories

To define stories, you now need to add "examples" to the `foo.das.js` file.. This could look like the following:

```js
export default {
  name: 'Chapter',
  file: './Chapter.svelte',
  description: 'Section H2 heading, optional with superscript and text.',
  examples: [
    {story: "Chapter intro with superscript, H2 heading and intro text", input: {superscript: "Superscript", heading: "This is the chapter title", intro: "This is the text. This is the text. This is the text. This is the text. This is the text."}},
    {story: "Chapter intro with H2 heading and intro text", input: {heading: "This is the chapter title", intro: "This is the text. This is the text. This is the text. This is the text. This is the text."}},
    {story: "Chapter intro with superscript and H2 heading", input: {superscript: "Superscript", heading: "This is the chapter title"}}
    {story: "Chapter intro with H2 heading", input: { heading: "This is the chapter title"}}
  ]
}
```

While "story" is used as navigation title in the panel, you define the value of the respective field with "input". In the component itself, it looks like this in the example of Svelte:

```js
<div class="chapter">
  {#if superscript}
    <div class="superscript">{superscript}</div>
  {/if}
  <h2>{heading}</h2>
  {#if intro}
    <p>{intro}</p>
  {/if}
</div>
```

So the component files remain completely pure. The output of the components in Gardenjs is done externally in `foo.das.js` (in this example `chapter.das.js`), as well as the definition of the stories or the documentation (see chapter "Write docs").

The created stories can be selected under the component in the panel in the “Examples” tab.
