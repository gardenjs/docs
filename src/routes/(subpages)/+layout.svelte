<script>
	import Subpage from '../../layouts/Subpage.svelte';
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<Subpage>
	{@render children?.()}
</Subpage>
