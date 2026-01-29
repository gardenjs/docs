export default {
  name: 'Blockquote',
  file: './Blockquote.svelte',
  description: '',
  examples: [
    {
      title: 'Quote & author',
      input: {
        quote: '«Building a frontend is like gardening. Grow your components and layouts, maintain them and control their growth. Build great products and reap the rewards of your work!»',
        author: 'John Doe, coder & gardener'
      }
    },
  ],
  params: [
    {
      name: 'quote',
      type: 'text',
      label: 'Quote'
    },
    {
      name: 'author',
      type: 'text',
      label: 'Author'
    }
  ]
}