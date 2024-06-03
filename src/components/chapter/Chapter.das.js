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
          {title: 'Title box 1', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'},
          {title: 'Title box 2', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.'},
          {title: 'Title box 3', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,'}

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
          {title: 'Title box 1', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'},
          {title: 'Title box 2', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.'},
          {title: 'Title box 3', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,'}

        ]
      }
    },
  ],
};
