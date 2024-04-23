<script>
  export let pagetitle = ''
  export let title = ''
  export let intro = ''

  export let isPagetitle = false
  let haspagetitle = 'has-h1'
  let undefined = ''

</script>

<div class="chapter {isPagetitle? haspagetitle : undefined }">
  {#if pagetitle}
    <h1><span>{pagetitle}</span></h1>
  {:else}
    <h2>{title}</h2>
  {/if}
  {#if intro}
    <p>{intro}</p>
  {/if}
</div>

<style lang="scss">
  .chapter {
    text-align: center;
    margin: 2rem 0 1rem;
    &.has-h1 {
      margin: 0 0 1.5rem;
      @media (min-width: 840px) {
        margin: 0 0 2rem;
      }
      @media (min-width: 960px) {
        margin: 1rem 0;
      }
    }
    h1,
    h2 {
      margin: 0 0 1rem;
      padding: 0 0 0.25rem;
      font-family: 'Source Sans 3 Italic';
      font-variation-settings: 'wght' 900;
      font-size: 1.375rem;
      @media (min-width: 600px) {
        font-size: 1.75rem;
      }
      @media (min-width: 600px) {
        font-size: 2.5rem;
      }
      @media (min-width: 960px) {
        font-size: 3.25rem;
      }
      @media (min-width: 1280px) {
        font-size: 3.5rem;
      }
    }
    h1 {
      span {
        background: linear-gradient(180deg, transparent 0 55%, var(--c-headline-bg) 55% 100%);
      }
    }
    p {
      margin: 0rem;
      font-size: 0.938rem;
      color: var(--c-text);
      @media (min-width: 600px) {
        font-size: 1rem;
      }
      @media (min-width: 840px) {
        font-size: 1.125rem;
      }
      @media (min-width: 960px) {
        font-size: 1.25rem;
      }
      @media (min-width: 1280px) {
        font-size: 1.5rem;
      }
    }
  }
</style>