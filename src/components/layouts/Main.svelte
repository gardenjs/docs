<script>
  import Stripes from '../stripes/Stripes.svelte'
  import Vegetables from '../vegetables/Vegetables.svelte'

  export let hasHeaderintro = false
  let intro = 'has-intro'
  let margin = ''

  export let showStripes = false
</script>

<main class="main {hasHeaderintro? intro : margin}">
  <div class="main_container">
    <slot></slot>
  </div>
  <Vegetables />
  {#if showStripes}
    <Stripes />
  {/if}
</main>

<style lang="scss">
@use "sass:math";
.main {
  position: relative;
  overflow: hidden;
  // @media (min-width: 840px) {
  //   padding: 0 1rem;
  // }
  // @media (min-width: 960px) {
  //   padding: 0;
  // }
  &.has-intro {
    padding-top: 2rem;
    @media (min-width: 960px) {
      padding-top: 4rem;
    }
    @media (min-width: 1280px) {
      padding-top: 6rem;
    }
  }
}
.main_container {
  position: relative;
  margin: 3rem auto 0;
  padding: 0 1rem;
  z-index: 3;
  @media (min-width: 600px) {
    padding: 0 1.5rem;
  }
  @media (min-width: 840px) {
    margin: 3rem calc((100vw - 1.5rem) / 12) 0;
  }
  @media (min-width: 960px) {
    margin: 3rem calc(((100vw - 1.5rem) / 12) * 2) 0;
  }
  @media (min-width: 1312px) {
    margin: 3rem auto 0;
    width: calc(((1280px + 3rem) / 12) * 8);
  }
}
</style>