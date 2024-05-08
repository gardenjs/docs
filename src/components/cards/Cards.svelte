<script>

  export let title
  export let paragraph

  export let isEven2col = false
  export let isOdd2col = false
  let rotateEven2col = 'rotate_even-2col'
  let rotateOdd2col = 'rotate_odd-2col'

  export let isEven3col = false
  export let isOdd3col = false
  let rotateEven3col = 'rotate_even-3col'
  let rotateOdd3col = 'rotate_odd-3col'

  export let hasTurquoiseBG = false
  export let hasYellowBG = false
  let turquoisebg = 'turquoise'
  let yellowbg = 'yellow'
  let undefined = ''

</script>

<div class="card {hasTurquoiseBG? turquoisebg : undefined} {hasYellowBG? yellowbg : undefined} {isEven2col? rotateEven2col: undefined} {isOdd2col? rotateOdd2col : undefined} {isEven3col? rotateEven3col: undefined} {isOdd3col? rotateOdd3col : undefined}">
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
      background-color: var(--c-turquoise);
    }
    &.yellow {
      background-color: var(--c-yellow);
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
    &.rotate_even-2col,
    &.rotate_even-3col {
      transform: rotateZ(-1deg);
    }
    &.rotate_odd-2col,
    &.rotate_odd-3col {
      transform: rotateZ(1deg);
    }
    @media (min-width: 600px) and (max-width: 959px) {
      &.rotate_even-2col {
        transform: rotateZ(-1deg);
      }
      &.rotate_even-2col,
      &.rotate_even-3col {
        &:nth-of-type(even) {
          transform: rotateZ(-1deg);
        }
      }
      &.rotate_odd-2col {
        transform: rotateZ(1deg);
      }
      &.rotate_odd-2col,
      &.rotate_odd-3col {
        &:nth-of-type(odd) {
          transform: rotateZ(1deg);
        }
      }
    }
    @media (min-width: 960px) {
      &.rotate_even-3col {
        transform: rotateZ(-1deg);
      }
      &.rotate_odd-3col {
        transform: rotateZ(1deg);
      }
    }
  }
</style>