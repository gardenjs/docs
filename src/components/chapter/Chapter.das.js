export default {
  name: 'Chapter',
  file: './Chapter.svelte',
  description: './Chapter.md',
  examples: [
    {
      title: 'Chapter with chapter intro (title & paragraph) & cards',
      input: {
        title: 'This is the h2 chapter title',
        chaptertext: 'This is the text. This is the text. This is the text. This is the text. This is the text.',
        columns: 3,
      },
      // cards: [
      //   input: {
      //     cardtitle: 'Title 1',
      //     paragraph: 'Content 1'
      //   },
      //   input: {
      //     cardtitle: 'Title 2',
      //     paragraph: 'Content 2'
      //   },
      //   input: {
      //     cardtitle: 'Title 3',
      //     paragraph: 'Content 3'
      //   },
      //   input: {
      //     cardtitle: 'Title 4',
      //     paragraph: 'Content 4'
      //   },
      // ],
    },
  ],
};
