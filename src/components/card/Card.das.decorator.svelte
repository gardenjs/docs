<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<div>
	{@render children?.()}
</div>

<style>
	div {
		border: 2px dashed #ca0202;
		margin-top: 2rem;
	}
</style>
