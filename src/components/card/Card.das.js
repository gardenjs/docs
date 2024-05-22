export default {
  name: 'Card',
  file: './Card.svelte',
  description: '<b>Note:</b> A decorator is used here for optimized display in Gardenjs: A dashed frame is drawn around the card, and space is added at the top so that the card does not go out of the visible area if it is displayed at an angle.',

  examples: [
    {title: "Default (H3 title and paragraph)", input: {title: "This is the card title", paragraph: "This is the paragraph. This is the paragraph. This is the paragraph. This is the paragraph. This is the paragraph."}},
    {title: "Default & yellow background", input: {title: "This is the card title", paragraph: "This is the paragraph. This is the paragraph. This is the paragraph. This is the paragraph. This is the paragraph.", bgColor: "yellow"}},
    {title: "Rotate left & yellow background", input: {title: "This is the card title", paragraph: "This is the paragraph. This is the paragraph. This is the paragraph. This is the paragraph. This is the paragraph.", rotation: "left", bgColor: "yellow", columns: 2}},
    {title: "Rotate right & turquoisebg background", input: {title: "This is the card title", paragraph: "This is the paragraph. This is the paragraph. This is the paragraph. This is the paragraph. This is the paragraph.", rotation: "right", bgColor: "turquoise",  columns: 2}},
  ]
}