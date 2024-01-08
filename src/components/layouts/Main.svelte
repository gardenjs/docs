<script>
  import Vegetables from '../vegetables/Vegetables.svelte'

  export let hasHeaderintro = false
  let intro = 'has-intro'
  let margin = ''

</script>

<div class="main {hasHeaderintro? intro : margin}">
  <div class="main_container">
    <slot></slot>
  </div>
  <Vegetables />
</div>

<style lang="scss">
@use "sass:math";
.main {
  position: relative;
  overflow: hidden;
  padding: 6rem 0 0;
}
.main_container {
  position: relative;
  margin: auto;
  padding: 0 1rem;
  z-index: 3;
  @media (min-width: 600px) {
    padding: 0 1.5rem 0 1.625rem;
  }
  @media (min-width: 840px) {
    margin: 0 calc((100vw - 1.5rem) / 12);
  }
  @media (min-width: 960px) {
    margin: 0 calc(((100vw - 1.5rem) / 12) * 2);
  }
  @media (min-width: 1312px) {
    margin: auto;
    width: calc(((1280px + 3rem) / 12) * 8);
  }
}
</style>