export default {
  name: 'Infobox',
  file: './Infobox.svelte',
  description: 'Box with h3 title and paragraph.',
  examples: [
    {title: "Box with title and text", input: {title: "This is a title", text: "This is the text."}},
    {title: "Box only with title", input: {title: "This is a title"}},
    {title: "Box only with message", input: {text: "This is the text."}},
    {title: "Box with title and text containing html", input: {title: "This is a title", text: "This is on first line.<br> this should be second line."}}
  ]
}