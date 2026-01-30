export default {
	name: 'Accordion',
	file: './Accordion.svelte',
	description: '',
	examples: [
		{
			title: 'Accordion',
			input: {
				items: [
					{ label: 'Title 1', content: 'Content 1' },
					{ label: 'Title 2', content: 'Content 2' },
					{ label: 'Title 3', content: 'Content 3' },
					{ label: 'Title 4', content: 'Content 4' },
					{ label: 'Title 5', content: 'Content 5' },
				],
			},
		},
	],
	params: [
		{
			name: 'items',
			label: 'Items',
			type: 'objectrenderer',
			description: 'Array of accordion items',
			schema: {
				label: {
					label: 'Title',
					placeholder: 'Enter title',
				},
				content: {
					label: 'Content',
					placeholder: 'Enter content',
				},
			},
		},
	],
};
