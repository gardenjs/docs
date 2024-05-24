export default {
  name: 'Card',
  file: './Card.svelte',
  description: '<b>Note:</b> A decorator is used here for optimized display in Gardenjs: A dashed frame is drawn around the card, and space is added at the top so that the card does not go out of the visible area if it is displayed at an angle.',

  examples: [
    {title: 'Default (H3 title and text)', input: {title: 'This is the card title', text: 'This is the text. This is the text. This is the text. This is the text. This is the text.'}},
    {title: 'Default & yellow background', input: {title: 'This is the card title', text: 'This is the text. This is the text. This is the text. This is the text. This is the text.', bgColor: 'yellow'}},
    {title: 'Rotate left & yellow background', input: {title: 'This is the card title', text: 'This is the text. This is the text. This is the text. This is the text. This is the text.', rotation: 'left', bgColor: 'yellow', columns: 2}},
    {title: 'Rotate right & turquoisebg background', input: {title: 'This is the card title', text: 'This is the text. This is the text. This is the text. This is the text. This is the text.', rotation: 'right', bgColor: 'turquoise',  columns: 2}},
  ]
}