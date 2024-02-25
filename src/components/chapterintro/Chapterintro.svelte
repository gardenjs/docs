<script>
  export let superscript = ''
  export let pagetitle = ''
  export let title = ''
  export let intro = ''

  export let isPagetitle = false
  let haspagetitle = 'has-h1'
  let hasnotpagetitle = ''

</script>

<div class="chapter {isPagetitle? haspagetitle : hasnotpagetitle }">
  {#if superscript}
    <div class="superscript">{superscript}</div>
  {/if}
  {#if pagetitle}
    <h1>{pagetitle}</h1>
  {:else}
    <h2>{title}</h2>
  {/if}
  {#if intro}
    <p>{intro}</p>
  {/if}
</div>

<style lang="scss">
  .chapter {
    margin: 4rem 0 1rem;
    font-family: 'Spline Sans Mono';
    @media (min-width: 840px) {
      margin: 5rem 0 1rem;
    }
    @media (min-width: 960px) {
      margin: 6rem 0 1rem;
    }
    &.has-h1 {
      margin: 0 0 1.5rem;
      @media (min-width: 840px) {
        margin: 0 0 2rem;
      }
      @media (min-width: 960px) {
        margin: 0 0 2.5rem;
      }
    }
    .superscript {
      margin: 0 0 0.25rem;
      font-size: 0.75rem;
      color: var(--c-secondary);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.188rem;
      font-weight: 600;
      @supports (font-variation-settings: normal) {
        font-variation-settings: 'wght' 600;
      }
      @media (min-width: 840px) {
        font-size: 0.938rem;
      }
    }
    h1,
    h2 {
      margin: 0 0 1rem;
    }
    h1 {
      font-family: 'Vollkorn';
      font-size: 1.75rem;
      @media (min-width: 840px) {
        font-size: 2.75rem;
      }
      @media (min-width: 960px) {
        font-size: 3.25rem;
      }
      @media (min-width: 1280px) {
        font-size: 4rem;
      }
    }
    h2 {
      font-family: 'Vollkorn Italic';
      font-size: 1.75rem;
      @media (min-width: 840px) {
        font-size: 2.5rem;
      }
      @media (min-width: 960px) {
        font-size: 3.375rem;
      }
    }
    p {
      margin: 0rem;
      padding: 0 0 0 1rem;
      // max-width: 980px;
      border-left: 0.25rem solid var(--c-primary);
      font-size: 1rem;
      color: var(--c-text);
      font-weight: 400;
      @supports (font-variation-settings: normal) {
        font-variation-settings: 'wght' 400;
      }
      @media (min-width: 840px) {
        font-size: 1.125rem;
      }
      @media (min-width: 960px) {
        padding: 0 0 0 1.5rem;
        font-size: 1.25rem;
        border-left-width: 0.375rem;
      }
      @media (min-width: 1280px) {
        padding: 0 0 0 2rem;
        font-size: 1.375rem;
      }
    }
  }
</style>