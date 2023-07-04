export default {
  name: 'Chapter',
  file: './Chapter.svelte',
  description: 'Main chapter intro with h2 title and paragraph.',
  examples: [
    {story: "Intro with superscript, h2 title and intro text", input: {superscript: "Superscript", title: "This is the chapter title", intro: "This is the text. This is the text. This is the text. This is the text. This is the text."}},
    {story: "Intro with h2 title and intro text", input: {title: "This is the chapter title", intro: "This is the text. This is the text. This is the text. This is the text. This is the text."}},
    {story: "Intro with superscript and h2 title", input: {superscript: "Superscript", title: "This is the chapter title"}}
  ]
}