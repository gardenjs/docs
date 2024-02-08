<script>
  export let hasHeaderintro = false

  let intro = ''
  let margintop = 'has-mt'
</script>

<div class="main {hasHeaderintro? intro : margintop}">
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
        margin: 6.5rem 0 0;
      }
      padding: 0 3rem;
    }
    @media (min-width: 960px) {
      margin: 5.25rem 0 0;
      &.has-mt {
        margin: 8.5rem 0 0;
      }
    }
    @media (min-width: 1280px) {
      margin: 6rem 0 0;
      &.has-mt {
        margin: 8.5rem 0 0;
      }
    }
  }
  .main_container {
    position: relative;
    width: 100%;
    @media (min-width: 840px) {
      margin: auto;
      max-width: var(--w-website-slim);
    }
  }
</style>