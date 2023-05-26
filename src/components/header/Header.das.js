export default {
  name: 'Header',
  file: './Header.svelte',
  description: 'Header with Logo and icons with github link and mode switch.',
  examples: [
    {story: "Website header without skew", input: { }},
    {story: "Website header with skew", input: { showSkew:true }}
    // story with skew should also output the slot "headerintro...
  ]
}