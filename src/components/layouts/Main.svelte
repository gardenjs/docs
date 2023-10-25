<script>
  import Stripes from '../stripes/Stripes.svelte'

  export let showStripes = false
</script>

<main class="main">
  <div class="main_container">
    <slot></slot>
  </div>
  <div class="vegetables">
    <img src="src/assets/images/vegetables.svg" alt="Screenshot Garden app">
  </div>
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
.vegetables {
  position: relative;
  margin: 4rem auto;
  max-width: var(--w-website);
  z-index: 6;
}
@media (min-width: 768px) {
  .vegetables {
    margin-top: 6rem;
  }
}
@media (min-width: 1024px) {
  .vegetables {
    margin-top: 8rem;
  }
}
</style>