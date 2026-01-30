export default {
  name: 'Linkbutton',
  file: './Linkbutton.svelte',
  description: 'Are currently only used in the Hero header.',

  examples: [
    { title: 'Internal Link', input: { btnlabel: 'Button label', link: './' } },
    {
      title: 'Internal link turquoise bg',
      input: { btnlabel: 'Button label', link: './', bgColor: 'turquoise' },
    },
    {
      title: 'External Link',
      input: {
        btnlabel: 'Button label',
        link: 'https://github.com/gardenjs/gardenjs',
        isExternal: true,
      },
    },
    {
      title: 'External Link turquoise bg',
      input: {
        btnlabel: 'Button label',
        link: 'https://github.com/gardenjs/gardenjs',
        bgColor: 'turquoise',
        isExternal: true,
      },
    },
  ],
}
