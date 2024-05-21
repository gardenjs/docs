export default {
  name: 'Chapter Intro',
  file: './Chapterintro.svelte',
  description: '# Cards with h1 or h2 title and optional paragraph.',
  examples: [
    {title: "Intro with h1 pagetitle and intro text", input: {pagetitle: "This is the h1 page title", intro: "This is the text. This is the text. This is the text. This is the text. This is the text."}},
    {title: "Intro with h1 pagetitle", input: {pagetitle: "This is the h1 page title"}},
    {title: "Intro with h2 title and intro text", input: {title: "This is the h2 chapter title", intro: "This is the text. This is the text. This is the text. This is the text. This is the text."}},
    {title: "Intro with h2 title", input: {title: "This is the h2 chapter title"}},
  ]
}
