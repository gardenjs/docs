<script>

  /**
   * @typedef {Object} Props
   * @property {boolean} [isExternal]
   * @property {string} [link]
   * @property {string} [bgColor]
   * @property {string} [btnlabel]
   */

  /** @type {Props} */
  let {
    isExternal = false,
    link = '',
    bgColor = '',
    btnlabel = ''
  } = $props();
</script>

{#if isExternal}
  <a href="{link}" class="buttonlink {bgColor}" title="Watch Gardenjs" target="_blank">
    <span class="buttonlink-label">{btnlabel}</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10M7 17L17 7"/></svg>
  </a>
{:else}
  <a href="{link}" class="buttonlink {bgColor}" title="Watch Gardenjs">
    <span class="buttonlink-label">{btnlabel}</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
  </a>
{/if}

<style lang="scss">
  .buttonlink {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.375rem 1.25rem;
    color: var(--c-text);
    font-size: 0.875rem;
    text-transform: uppercase;
    text-decoration: none;
    border: 2px solid var(--c-text);
    border-radius: 0.25rem;
    box-shadow: 0.25rem 0.25rem 0 -1px var(--c-text), 0.25rem 0.25rem 0 var(--c-text);
    transition: 0.4s;
    @media (min-width: 840px) {
      font-size: 0.938rem;
    }
    @media (min-width: 960px) {
      padding: 0.5rem 1.25rem;
    }
    .buttonlink-label {
      padding-right: 0.5rem;
    }
    svg {
      transition: 0.4s;
    }
    &:hover,
    &:focus-visible {
      transition: 0.4s;
      box-shadow: 0 0 0 -1px #fff, 0 0 0 #fff;
      transform: translate(0.25rem , 0.25rem );
      svg {
        transform: translateX(0.5rem );
        transition: 0.4s;
      }
    }
  }
  a.turquoise {
    margin: 0 0 0.5rem;
    color: var(--c-btntxt-docs);
    background-color: var(--c-primary);
    border-color: var(--c-border-docs);
    box-shadow: 0.25rem 0.25rem 0 -1px var(--c-primary), 0.25rem 0.25rem 0 var(--c-primary);
    @media (min-width: 480px) {
      margin: 0;
    }
  }
</style>