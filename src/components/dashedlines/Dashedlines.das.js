export default {
  name: 'Dashed Lines',
  file: './Dashedlines.svelte',
  description: '',
  examples: [
    {
      title: 'Dashed line',
      input: { variant: '1' },
    },
  ],
  params: [
    {
      name: 'variant',
      type: 'string',
      control: 'select',
      label: 'Dashed line',
      options: [
        { label: 'Dashed line 1', value: '1' },
        { label: 'Dashed line 2', value: '2' },
        { label: 'Dashed line 3', value: '3' },
        { label: 'Dashed line 4', value: '4' },
        { label: 'Dashed line 5', value: '5' },
        { label: 'Dashed line 6', value: '6' },
        { label: 'Dashed line 7', value: '7' },
      ],
    },
  ],
}
