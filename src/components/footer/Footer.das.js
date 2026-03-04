export default {
  name: 'Footer',
  file: './Footer.svelte',
  description: './Footer.md',
  examples: [
    {
      title: 'Footer',
      input: { variant: 'default' },
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
