export default {
  name: 'Footer',
  file: './Footer.svelte',
  description: './Footer.md',
  examples: [
    {
      title: 'Default',
      input: { variant: 'default' },
    },
    {
      title: 'Homepage',
      input: { variant: 'home' },
    },
    {
      title: 'Documentation',
      input: { variant: 'docs' },
    },
  ],
  params: [
    {
      name: 'variant',
      type: 'string',
      control: 'select',
      label: 'Footer type',
      options: [
        { label: 'Default (subpages)', value: 'default' },
        { label: 'Homepage', value: 'home' },
        { label: 'Documentation pages', value: 'docs' },
      ],
      description:
        'Three mutually exclusive variants: Subpages (default), Homepage, or Documentation (with border top).',
    },
  ],
}
