const overview = { title: 'Overview', items: [{ href: './', label: 'Why Gardenjs' }] };
const getstarted = {
	title: 'Get Started',
	items: [
		{ href: './', label: 'Install' },
		{ href: './', label: 'Install Renderer Plugin' },
		{ href: './', label: 'Settings' },
		{ href: './', label: 'Examples' },
		{ href: './', label: 'Hooks' },
		{ href: './', label: 'Decorators' },
	],
};
const renderer = { title: 'Renderer', items: [{ href: './', label: 'Write New Renderer' }] };
const notes = { title: 'Add Notes', items: [{ href: './', label: 'Add Notes' }] };
const roadmap = { title: 'What comes next', items: [{ href: './', label: 'Roadmap' }] };

const sidenavFolders = [overview, getstarted, renderer, notes, roadmap];

export default {
	name: 'Documentation',
	file: './Documentation.example.svelte',
	description: '',
	examples: [{ title: 'Layout documentation', input: { sidenavFolders } }],
};
