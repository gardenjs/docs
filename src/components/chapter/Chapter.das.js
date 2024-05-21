export default {
  name: 'Chapter',
  file: './Chapter.svelte',
  description: './Chapter.md',
  examples: [
    {
      title: "Chapter with chapter intro (title & paragraph) & cards",
      input: {
        title: "This is the h2 chapter title",
        intro: "This is the text. This is the text. This is the text. This is the text. This is the text.",
        grid: {
          columns: 3,
          cards: [
            {title: "Title 1", paragraph: "Content 1"},
            {title: "Title 2", paragraph: "Content 2"},
            {title: "Title 3", paragraph: "Content 3"}
          ]
        }
      }
    },
  ]
}