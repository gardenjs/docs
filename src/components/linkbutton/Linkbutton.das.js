export default {
  name: 'Linkbutton',
  file: './Linkbutton.svelte',
  description: 'Are currently only used in the Hero header.',

  examples: [
    {title: "Internal Link", input: {btnlabel: "Button label"}},
    {title: "Internal link turquoise bg", input: {btnlabel: "Button label", bgColor: "turquoise"}},
    {title: "External Link", input: {btnlabel: "Button label", isExternal: true}},
    {title: "External Link turquoise bg", input: {btnlabel: "Button label", bgColor: "turquoise", isExternal: true}},
  ]
}