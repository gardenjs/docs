<script>
  export let title
  export let paragraph

  export let isHgCard = false
  let highlighted = 'turquoise'
  let nothighlighted = ''

  
</script>

<div class="card {isHgCard? highlighted : nothighlighted}">
  <h3>{title}</h3>
  <p>{paragraph}</p>
</div>

<style lang="scss">
  .card {
    margin: 0;
    padding: 2rem;
    background-color: var(--c-card-bg);
    border: 1px solid var(--c-border);
    border-radius: var(--b-radius);
    &.turquoise {
      background-color: var(--c-card-bg-hl);
      border-color: var(--c-card-bg-hl);
      h3 {
        color: var(--c-text);
      }
    }
    h3 {
      margin: 0 0 1rem;
      font-size: 1.2rem;
      font-weight: 600;
      @supports (font-variation-settings: normal) {
        font-variation-settings: 'wght' 600;
      }
      @media (min-width: 840px) {
        font-size: 1.3rem;
      }
      @media (min-width: 960px) {
        margin: 0 0 1rem;
        font-size: 1.5rem;
        text-transform: uppercase;;
      }
    }
    p {
      line-height: 1.5;
      &:last-of-type {
        margin: 0;
      }
    }
  }
</style>