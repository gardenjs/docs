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
  @media (min-width: 768px) {
    margin: 0 0 3rem;
  }
  p {
    padding: 0 0 0 2rem;
    border-left: 0.375rem solid var(--c-primary);
    font-size: 1.125rem;
    @media (min-width: 768px) {
      font-size: 1.25rem;
    }
    @media (min-width: 1024px) {
      max-width: calc(100% * 0.75);
    }
  }
}
</style>