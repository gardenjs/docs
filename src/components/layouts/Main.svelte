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
  margin: -1px 0 0;
  padding: 0 1rem;
}
:global(.main_container) {
  position: relative;
  width: 100%;
  max-width: var(--w-website);
  margin: 1rem auto 0;
  z-index: 3;
}
@media (min-width: 768px) {
  :global(.main_container) {
    margin-top: 2rem;
  }
}
@media (min-width: 1024px) {
  :global(.main_container) {
    margin-top: 3rem;
  }
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