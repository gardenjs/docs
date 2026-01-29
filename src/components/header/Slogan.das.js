export default {
  name: 'Slogan',
  file: './Slogan.svelte',
  description: 'Is part of the Hero header.',

  examples: [
    {title: 'Slogan & subtext', input: {slogan: 'This. Is. So. <i>Cool!</i>', subtext: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.'}}
  ],
  params: [
    {
      name: 'slogan',
      type: 'text',
      label: 'Slogan'
    },
    {
      name: 'subtext',
      type: 'text',
      label: 'Subtext'
    }
  ]
}