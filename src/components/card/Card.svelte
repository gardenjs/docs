<script> 
  export let title
  export let text

  export let rotation = ''
  export let columns = 1

  $: rotationClass = rotation ? `rotate_${rotation}-${columns}col` : ''

  export let bgColor = ''
</script>

<div class="card {bgColor} {rotationClass}">
  <h3>{title}</h3>
  <p>{text}</p>
</div>

<style lang="scss">
  .card {
    margin: 0 0.75rem 0.75rem 0;
    padding: 1.5rem;
    border: var(--b);
    border-radius: var(--b-radius);
    box-shadow: 0.75rem 0.75rem 0 -2px var(--c-website-bg), 0.75rem 0.75rem 0 var(--c-text);
    @media (min-width: 840px) {
      padding: 2rem;
    }
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
    &.rotate_left-2col {
      transform: rotateZ(-1deg);
      &:nth-of-type(even) {
        transform: rotateZ(1deg);
      }
    }
    &.rotate_right-2col {
      transform: rotateZ(1deg);
      &:nth-of-type(odd) {
        transform: rotateZ(-1deg);
      }
    }
    &.rotate_left-3col {
      transform: rotateZ(-1deg);
    }
    &.rotate_right-3col {
      transform: rotateZ(1deg);
    }
    @media (min-width: 600px) {
      &.rotate_left-2col {
        transform: rotateZ(-1deg);
      }
      &.rotate_left-2col {
        &:nth-of-type(even) {
          transform: rotateZ(-1deg);
        }
      }
      &.rotate_right-2col {
        transform: rotateZ(1deg);
      }
      &.rotate_right-2col {
        &:nth-of-type(odd) {
          transform: rotateZ(1deg);
        }
      }
    }
    @media (min-width: 600px) and (max-width: 959px) {
      &.rotate_left-3col,
      &.rotate_right-3col {
          transform: rotateZ(1deg);
      }
      &.rotate_left-3col ,
      &.rotate_right-3col {
        &:nth-of-type(4n+1) {
          transform: rotateZ(-1deg);
        }
        &:nth-of-type(4n+0) {
          transform: rotateZ(-1deg);
        }
      }
    }
    @media (min-width: 960px) {
      &.rotate_left-3col {
        transform: rotateZ(-1deg);
      }
      &.rotate_right-3col {
        transform: rotateZ(1deg);
      }
    }
  }
</style>