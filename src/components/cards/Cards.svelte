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
    padding: 1.5rem;
    @media (min-width: 840px) {
      padding: 2rem;
    }
    background-color: var(--c-card-bg);
    border: 1px solid var(--c-border-cards);
    border-radius: var(--b-radius);
    &.turquoise {
      background-color: var(--c-card-bg-hl);
      border-color: var(--c-card-bg-hl);
    }
    h3 {
      margin-top: 0;
      font-family: 'Vollkorn Bold';
      font-size: 1.25rem;
      @media (min-width: 840px) {
        font-size: 1.375rem;
      }
      @media (min-width: 960px) {
        font-size: 1.5rem;
      }
      @media (min-width: 1280px) {
        font-size: 1.875rem;
      }
    }
    p {
      color: var(--c-text);
      @media (min-width: 1280px) {
        font-size: 1.25rem;
      }
      &:last-of-type {
        margin: 0;
      }
    }
  }
</style>