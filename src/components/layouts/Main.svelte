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
:global(.main) {
  position: relative;
  overflow: hidden;
  padding: 0 1rem;
  @media (min-width: 840px) {
    padding: 0 1rem;
  }
  @media (min-width: 960px) {
    padding: 0;
  }
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
:global(.main_container) {
  position: relative;
  margin: 3rem auto 0;
  z-index: 3;
  @media (min-width: 840px) {
    margin-right: calc((100%) / 8);
    margin-left: calc((100%) / 8);
  }
  @media (min-width: 960px) {
    margin-right: calc((100% - 2rem) / 7);
    margin-left: calc((100% - 2rem) / 7);
  }
  @media (min-width: 1312px) {
    margin: auto;
    width: 960px;
  }
}
</style>