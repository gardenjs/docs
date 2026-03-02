export default {
  name: 'Card',
  file: './Card.svelte',
  description:
    '<b>Note:</b> A decorator is used here for optimized display in Gardenjs: A dashed frame is drawn around the card, and space is added at the top so that the card does not go out of the visible area if it is displayed at an angle.',

  examples: [
    {
      title: 'Default',
      input: {
        title: 'This is the card title',
        text: 'This is the text. This is the text. This is the text. This is the text. This is the text.',
      },
    },
    {
      title: 'Yellow background',
      input: {
        title: 'This is the card title',
        text: 'This is the text. This is the text. This is the text. This is the text. This is the text.',
        bgColor: 'yellow',
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
      options: ['left', 'right'],
      description:
        'The rotation direction of the card. Can be left blank. Only possible if two columns or three columns are selected below.',
    },
  ],
}
