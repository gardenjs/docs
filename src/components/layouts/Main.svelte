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
  .main {
    position: relative;
    overflow: hidden;
    padding: 6rem 1.5rem 0;
    @media (min-width: 480px) {
      padding: 6rem 3rem 0;
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