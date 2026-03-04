export default {
  name: 'Card',
  file: './Card.svelte',
  description: './Card.md',
  examples: [
    {
      title: 'Default',
      input: {
        title: 'This is the card title',
        text: 'This is the text. This is the text. This is the text. This is the text. This is the text.',
        rotation: '',
      },
    },
    {
      title: 'Yellow background',
      input: {
        title: 'This is the card title',
        text: 'This is the text. This is the text. This is the text. This is the text. This is the text.',
        bgColor: 'yellow',
        rotation: '',
      },
    },
    {
      title: 'Rotate left & yellow background',
      input: {
        title: 'This is the card title',
        text: 'This is the text. This is the text. This is the text. This is the text. This is the text.',
        rotation: 'left',
        bgColor: 'yellow',
        columns: 2,
      },
    },
    {
      title: 'Rotate right & turquoisebg background',
      input: {
        title: 'This is the card title',
        text: 'This is the text. This is the text. This is the text. This is the text. This is the text.',
        rotation: 'right',
        bgColor: 'turquoise',
        columns: 2,
      },
    },
  ],

  params: [
    {
      name: 'title',
      type: 'string',
      label: 'Card Title',
    },
    {
      name: 'text',
      type: 'string',
      control: 'textarea',
      numberOfRows: 3,
      label: 'Card Text',
    },
    {
      name: 'bgColor',
      type: 'string',
      control: 'select',
      label: 'Background Color',
      options: ['yellow', 'turquoise'],
      description:
        'You can choose between turquoise and yellow. If no background color is set, the background is transparent.',
    },
    {
      name: 'rotation',
      type: 'string',
      control: 'select',
      label: 'Rotation',
      options: [
        { label: 'None', value: '' },
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
      ],
      description:
        'The rotation direction of the card. Only possible if two or three columns are selected.',
    },
    {
      name: 'columns',
      type: 'number',
      label: 'Columns',
      options: [
        { label: '1 column', value: 1 },
        { label: '2 columns', value: 2 },
        { label: '3 columns', value: 3 },
      ],
      description:
        'The number of columns for the card. Can be set to 2 or 3. Only affects rotation; the actual columns are generated via the grid layout.',
    },
  ],
}
