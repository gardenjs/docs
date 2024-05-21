export default {
  name: 'Card',
  file: './Card.svelte',
  description: './Card.md',

  examples: [
    {title: "Default (H3 title and paragraph)", input: {title: "This is the card title", paragraph: "This is the paragraph. This is the paragraph. This is the paragraph. This is the paragraph. This is the paragraph."}},
    {title: "Default & yellow background", input: {title: "This is the card title", paragraph: "This is the paragraph. This is the paragraph. This is the paragraph. This is the paragraph. This is the paragraph.", bgColor: "yellow"}},
    {title: "Rotate left & yellow background", input: {title: "This is the card title", paragraph: "This is the paragraph. This is the paragraph. This is the paragraph. This is the paragraph. This is the paragraph.", rotation: "left", bgColor: "yellow", columns: 2}},
    {title: "Rotate right & turquoisebg background", input: {title: "This is the card title", paragraph: "This is the paragraph. This is the paragraph. This is the paragraph. This is the paragraph. This is the paragraph.", rotation: "right", bgColor: "turquoise",  columns: 2}},
  ]
}