<script>
  /**
   * @typedef {Object} Props
   * @property {number} [columns]
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { columns = 1, children } = $props()

  const columnClass = {
    '2': 'grid-2cols',
    '3': 'grid-3cols',
  }
</script>

<div class="cards {columnClass[columns + ''] ?? ''}">
  {@render children?.()}
</div>

<style lang="scss">
  .grid-2cols,
  .grid-3cols {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    margin: 1.5rem 0 2rem;
    @media (min-width: 840px) {
      margin: 2rem 0 2rem;
    }
    @media (min-width: 960px) {
      gap: 1.5rem;
      margin: 1.5rem 0 2rem;
    }
  }
  @media (min-width: 600px) {
    .grid-2cols {
      grid-template-columns: repeat(2, 1fr);
    }
    .grid-3cols {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 960px) {
    .grid-3cols {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
