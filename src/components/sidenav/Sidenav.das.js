const overview = {title: 'Overview', items: [{ href: "#", label: "Why Gardenjs" }]};
const getstarted = {title: 'Get Started', items: [
  { href: "#", label: "Install" },
  { href: "#", label: "Install Renderer Plugin" },
  { href: "#settings", label: "Settings" },
  { href: "example#", label: "Examples" },
  { href: "#", label: "Hooks" },
  { href: "#", label: "Decorators" },
]};
const renderer = {title: 'Renderer', items: [{ href: "#", label: "Write New Renderer" }]};
const notes = {title: 'Add Notes', items:[{ href: "#", label: "Add Notes" }]};
const roadmap = {title: 'What comes next', items:[{ href: "#", label: "Roadmap" }]};

const sidenavFolders = [overview, getstarted, renderer, notes, roadmap];

export default {
  name: 'Sidenav',
  file: './Sidenav.svelte',
  description: '',
  examples: [
    {title: 'Documentation', input: {folders: sidenavFolders} },
    {title: 'With current url set to Settings Documentation', input: {folders: sidenavFolders, url:"#settings"}},
    {title: 'No Folders', input: {folders: []} },
    {title: 'Folder without item', input: {folders: [{title: 'Folder without item', items: []}]} },
  ]
}