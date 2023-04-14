export default {
  name: 'Infobox',
  file: './infobox.svelte',
  description: 'Box with h3 title and paragraph.',
  examples: [
    {story: "Box with title and text", input: {title: "This is a title", text: "This is the text."}},
    {story: "Box only with title", input: {title: "This is a title"}},
    {story: "Box only with message", input: {text: "This is the text."}},
    {story: "Box with title and text containing html", input: {title: "This is a title", text: "This is on first line.<br> this should be second line."}}
  ]
}