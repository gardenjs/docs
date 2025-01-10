<script>
  import Homepage from '../../layouts/Homepage.svelte'
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { children } = $props();
</script>

<Homepage>
  {@render children?.()}
</Homepage>