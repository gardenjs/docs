<script>
  export let title
  export let paragraph

  export let hasTurquoiseBG = false
  export let hasYellowBG = false
  let turquoisebg = 'turquoise'
  let yellowbg = 'yellow'
  let undefined = ''

</script>

<div class="card {hasTurquoiseBG? turquoisebg : undefined} {hasYellowBG? yellowbg : undefined}">
  <h3>{title}</h3>
  <p>{paragraph}</p>
</div>

<style lang="scss">
  .card {
    margin: 0 0.75rem 0.75rem 0;
    padding: 1.5rem;
    @media (min-width: 840px) {
      padding: 2rem;
    }
    border: var(--b);
    border-radius: var(--b-radius);
    box-shadow: 0.75rem 0.75rem 0 -2px var(--c-website-bg), 0.75rem 0.75rem 0 var(--c-text);
    &.turquoise {
      background-color: var(--c-card-bg-hl);
    }
    &.yellow {
      background-color: hsl(60, 90%, 80%);
    }
    h3 {
      margin-top: 0;
    }
    p {
      color: var(--c-text);
      &:last-of-type {
        margin: 0;
      }
    }
  }
</style>