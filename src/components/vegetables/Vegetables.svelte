<div class="vegetables">
  <img src="src/assets/icons/vegetables.svg" alt="Vegetable illustration">
</div>

<style lang="scss">
@use "sass:math";
.vegetables {
  display: flex;
  justify-content: center;
  position: relative;
  margin: 4rem auto;
  z-index: 6;
  @media (min-width: 960px) {
    margin-top: 6rem;
  }
  @media (min-width: 1280px) {
    width: 100%;
    margin-top: 8rem;
  }
  @media (min-width: 1344px) {
    max-width: var(--w-website);
  }
  img {
    width: 66.6%;
    @media (min-width: 480px) {
      width: 50%;
    }
    @media (min-width: 600px) {
      padding: 0 0.5rem 0 0.625rem;
      width: calc(((100vw - 2rem) / 12) * 6);;
    }
    @media (min-width: 840px) {
      width: calc(((100vw - 2rem) / 12) * 4);
    }
    @media (min-width: 1312px) {
      width: calc((1280px * 4) / 12);
    }
  }
}
</style>