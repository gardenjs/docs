export default {
  name: 'Chapter',
  file: './Chapter.svelte',
  description: './Chapter.md',
  examples: [
    {
      title: 'Chapterhead (h2 title & text) & cards with yellow background and 3 columns',
      input: {
        title: 'This is the h2 chapter title',
        chaptertext: 'This is the text. This is the text. This is the text. This is the text. This is the text.',
        columns: 3,
        bgColor: 'yellow',
        cards: [
          {title: 'title 1', text: ''},
          {title: 'title 2', text: ''},
          {title: 'title 3', text: ''}

        ]
      }
    },
    {
      title: 'Chapterhead (h1 title) & cards with yellow background and 2 columns',
      input: {
        pagetitle: 'This is the h1 page title',
        columns: 2,
        bgColor: 'turquoise',
        cards: [
          {title: 'title 1', text: ''},
          {title: 'title 2', text: ''},
          {title: 'title 3', text: ''}

        ]
      }
    },
  ],
};
