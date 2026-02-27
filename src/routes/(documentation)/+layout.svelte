<script>
  import Documentation from '../../layouts/Documentation.svelte'
  import { page } from '$app/stores'
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { children } = $props()

  const overview = {
    title: 'Overview',
    items: [{ href: '/docs', label: 'Why Gardenjs?' }],
  }
  const getstarted = {
    title: 'Get Started',
    items: [
      { href: '/docs/get-started/install', label: 'Install' },
      {
        href: '/docs/get-started/install-renderer',
        label: 'Install Renderer Plugin',
      },
      { href: '/docs/get-started/settings', label: 'Settings' },
      { href: '/docs/get-started/examples', label: 'Examples' },
      { href: '/docs/get-started/parameters', label: 'Parameters' },
      { href: '/docs/get-started/hooks', label: 'Hooks' },
      { href: '/docs/get-started/decorators', label: 'Decorators' },
    ],
  }
  const renderer = {
    title: 'Renderer',
    items: [{ href: '/docs/renderer', label: 'Write New Renderer' }],
  }
  const notes = {
    title: 'Add Notes',
    items: [{ href: '/docs/notes', label: 'Add Notes' }],
  }
  const roadmap = {
    title: 'What comes next?',
    items: [{ href: '/docs/roadmap', label: 'Roadmap' }],
  }
  const knownissues = {
    title: 'Known issues',
    items: [{ href: '/docs/known-issues', label: 'Known Issues' }],
  }

  const sidenavFolders = [
    overview,
    getstarted,
    renderer,
    notes,
    roadmap,
    knownissues,
  ]
</script>

<Documentation {sidenavFolders} url={$page.url.pathname}>
  {@render children?.()}
</Documentation>
