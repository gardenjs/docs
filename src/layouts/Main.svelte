<script>
  export let hasHeaderintro = false
  export let isWide = false

  let intro = ''
  let margintop = 'has-mt'
  let iswide = ''
  let home = 'is-home'
</script>

<div class="main {hasHeaderintro? intro : margintop} {isWide? home : iswide}">
  <div class="main_container">
    <slot></slot>
  </div>
</div>

<style lang="scss">
  .main {
    position: relative;
    overflow: hidden;
    margin: 2rem 0 0;
    padding: 0 1.5rem;
    &.has-mt {
      margin: 8rem 0 0;
    }
    @media (min-width: 480px) {
      margin: 4rem 0 0;
      &.has-mt {
        margin: 8rem 0 0;
      }
    }
    @media (min-width: 960px) {
      margin: 5.25rem 0 0;
      &.has-mt {
        margin: 10rem 0 0;
      }
    }
    @media (min-width: 1280px) {
      margin: 6rem 0 0;
    }
    .main_container {
      position: relative;
      width: 100%;
      @media (min-width: 840px) {
        margin: auto;
        max-width: var(--w-website-slim);
      }
    }
    &.is-home {
      margin-top: 0;
      .main_container {
        max-width: var(--w-website-wide);
      }
    }
  }
</style>