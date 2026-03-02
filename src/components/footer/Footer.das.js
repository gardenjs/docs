export default {
  name: 'Footer',
  file: './Footer.svelte',
  description: '',
  examples: [
    { title: 'Footer homepage', input: { isHome: true } },
    { title: 'Default (footer for subpages)', input: {} },
    { title: 'Footer documentation pages', input: { hasBordertop: true } },
  ],
  params: [
    {
      name: 'isHome',
      type: 'boolean',
      label: 'Homepage',
      description:
        'There are three different types of footers: “Homepage,” “Subpages,” (default) and “Documentation Pages.”',
    },
    {
      name: 'hasBordertop',
      type: 'boolean',
      label: 'Border top',
      description:
        'Adds a border to the top of the footer. Only used for documentation pages.',
    },
  ],
}
