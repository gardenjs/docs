<script>
  import Stripes from '../stripes/Stripes.svelte'
  import Vegetables from '../vegetables/Vegetables.svelte'

  export let showStripes = false
</script>

<main class="main">
  <div class="main_container">
    <slot></slot>
  </div>
  <Vegetables />
  {#if showStripes}
    <Stripes />
  {/if}
</main>

<style>
:global(.main) {
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0 1rem;
}
:global(.main_container) {
  position: relative;
  width: 100%;
  margin: 3rem auto 0;
  max-width: var(--w-website);
  z-index: 3;
}
</style>