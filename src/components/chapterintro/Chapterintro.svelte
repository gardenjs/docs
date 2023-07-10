<script>
  export let superscript = ''
  export let pagetitle = ''
  export let title = ''
  export let intro = ''
</script>

<div class="chapter">
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
  margin: 0 0 2rem;
  @media (min-width: 768px) {
    margin: 0  0 3rem;
  }
  @media (min-width: 1024px) {
    margin: 0 0 3rem;
  }
  .superscript {
    margin: 0 0 0.25rem;
    font-family: var(--monospace);
    font-size: 0.75rem;
    color: var(--c-secondary);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.125rem;
    @media (min-width: 450px) {
      font-size: 0.938rem;
    }
  }
  h1,
  h2 {
    margin-top: 0;
    color: var(--c-text);
    font-size: 1.25rem;
    font-weight: 800;
    @media (min-width: 768px) {
      font-size: 1.75rem;
    }
    @media (min-width: 1024px) {
      font-size: 2.875rem;
    }
  }
  p {
    font-size: 1rem;
    @media (min-width: 450px) {
      font-size: 1.125rem;
    }
    @media (min-width: 768px) {
      font-size: 1.25rem;
    }
    @media (min-width: 1280px) {
      font-size: 1.5rem;
    }
  }
}
</style>