export default {
  name: 'Chapter Intro',
  file: './Chapterintro.svelte',
  description: './Chapterintro.md',
  examples: [
    {
      title: 'Intro with h1 heading or h2 heading. Optional: introductory text',
      input: {
        pagetitle: 'This is the h1 heading',
        title: 'The h2 heading is only created if the h1 heading is unset.',
        chaptertext:
          'This is the text. This is the text. This is the text. This is the text. This is the text.',
      },
    },
  ],
  params: [
    {
      name: 'pagetitle',
      type: 'string',
      label: 'H1 heading',
    },
    {
      name: 'title',
      type: 'string',
      label: 'H2 heading',
      description: 'Only output if h2 heading is unset.',
    },
    {
      name: 'chaptertext',
      type: 'string',
      control: 'textarea',
      numberOfRows: 3,
      label: 'Introductory Text',
      description: 'Optional: introductory text for the chapter.',
    },
  ],
}
