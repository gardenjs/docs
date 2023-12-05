# Stories

To define stories, you now need to add "examples" to the foo.das.js file.. This could look like the following:

```js
export default {
  name: 'Chapter',
  file: './Chapter.svelte',
  description: 'Main chapter intro with superscript, h2 title and paragraph.',
  examples: [
    {story: "Chapter intro with superscript, h2 title and intro text", input: {superscript: "Superscript", title: "This is the chapter title", intro: "This is the text. This is the text. This is the text. This is the text. This is the text."}},
    {story: "Chapter intro with h2 title and intro text", input: {title: "This is the chapter title", intro: "This is the text. This is the text. This is the text. This is the text. This is the text."}},
    {story: "Chapter intro with superscript and h2 title", input: {superscript: "Superscript", title: "This is the chapter title"}}
  ]
}
```

While "story" is used as navigation title in the panel, you define the value of the respective field with "input". In the component itself, it looks like this in the example of Svelte:

```js
<div class="chapter">
  {#if superscript}
    <div class="superscript">{superscript}</div>
  {/if}
  {#if pagetitle}
    <h2>{title}</h2>
  {/if}
  {#if intro}
    <p>{intro}</p>
  {/if}
</div>
```

So the component files remain completely pure. The output of the components in Gardenjs is done externally in foo.das.js, as well as the definition of the stories or the documentation (see chapter "Write docs").
