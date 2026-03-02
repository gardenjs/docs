export default {
  name: 'Grid',
  file: './Grid.examples.svelte',
  description:
    '<p>Currently only used for the cards.</p><p><b>Note:</b> The background is transparent and only gray here for better presentation.</p>',
  examples: [
    {
      title: 'Grid',
      input: { columns: '2' },
    },
  ],
  params: [
    {
      name: 'columns',
      type: 'string',
      control: 'select',
      label: 'Columns',
      options: [
        { label: '2 columns', value: '2' },
        { label: '3 columns', value: '3' },
      ],
      description: 'The number of columns for the cards. Can be set to 2 or 3.',
    },
  ],
}
