export default {
	name: 'Chapter Head',
	file: './Chapterhead.svelte',
	description: './Chapterhead.md',
	examples: [
		{
			title: 'Intro with h1 pagetitle and intro text',
			input: {
				pagetitle: 'This is the h1 page title',
				chaptertext:
					'This is the text. This is the text. This is the text. This is the text. This is the text.',
			},
		},
		{ title: 'Intro with h1 pagetitle', input: { pagetitle: 'This is the h1 page title' } },
		{
			title: 'Intro with h2 title and intro text',
			input: {
				title: 'This is the h2 chapter title',
				chaptertext:
					'This is the text. This is the text. This is the text. This is the text. This is the text.',
			},
		},
		{ title: 'Intro with h2 title', input: { title: 'This is the h2 chapter title' } },
	],
	params: [
		{
			name: 'pagetitle',
			type: 'text',
			label: 'Page Title (H1)',
		},
		{
			name: 'title',
			type: 'text',
			label: 'Chapter Title (H2)',
		},
		{
			name: 'chaptertext',
			type: 'text',
			label: 'Chapter Text',
		},
	],
};
