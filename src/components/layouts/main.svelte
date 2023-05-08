<script>
  import Stripes from '../stripes/stripes.svelte'
</script>

<main class="main">
  <div class="main_container">
    <slot>content here ...</slot>
  </div>
  <div class="vegetables">
    <img src="src/assets/images/vegetables.svg" alt="Screenshot Garden app">
  </div>
  <Stripes />
</main>

<style lang="scss">
.main {
  position: relative;
  overflow: hidden;
  margin: -1px 0 0;
  padding: 0 2rem;
  background-color: var(--c-website-bg);
  .main_container {
    position: relative;
    width: 100%;
    max-width: 980px;
    margin: 1rem auto 0;
    @media (min-width: 768px) {
      margin-top: 2rem;
    }
    @media (min-width: 1024px) {
      margin-top: 3rem;
    }
    z-index: 3;
  }
  .vegetables {
    position: relative;
    margin: 4rem auto;
    max-width: 980px;
    z-index: 6;
    @media (min-width: 768px) {
      margin-top: 6rem;
    }
    @media (min-width: 1024px) {
      margin-top: 8rem;
    }
  }
}
</style>