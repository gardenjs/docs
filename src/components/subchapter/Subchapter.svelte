<script>
  export let title
  export let paragraph
</script>

<div class="subchapter">
  <h3>{title}</h3>
  <p>{paragraph}</p>
</div>

<style lang="scss">
.subchapter {
  margin: 0 0 2rem;
  @media (min-width: 840px) {
    margin: 0 0 3rem;
  }
  h3 {
    margin: 1.25rem 0 1rem;
    font-size: 1.2rem;
    font-weight: 700;
    @media (min-width: 840px) {
      font-size: 1.3rem;
    }
    @media (min-width: 960px) {
      margin: 2.25em 0 1rem;
      font-size: 1.75rem;
    }
  }
  p {
    padding: 0 0 0 1rem;
    border-left: 0.25rem solid var(--c-primary);
    font-size: 1.125rem;
    font-size: 1rem;
    @media (min-width: 450px) {
      font-size: 1.125rem;
    }
    @media (min-width: 840px) {
      font-size: 1.25rem;
    }
    @media (min-width: 960px) {
      padding: 0 0 0 1.5rem;
      max-width: calc(100% * 0.8333);
      border-left-width: 0.375rem;
    }
    @media (min-width: 1280px) {
      padding: 0 0 0 2rem;
      font-size: 1.375rem;
    }
  }
}
</style>