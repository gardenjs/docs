export default {
  name: 'Header',
  file: './Header.svelte',
  description: 'Header with Logo and icons with github link and mode switch.',
  examples: [
    {title: "Website header without skew", input: { }},
    {title: "Website header with skew", input: { showSkew:true }}
    // title with skew should also output the slot "headerintro...
  ]
}