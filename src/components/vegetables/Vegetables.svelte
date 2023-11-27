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
      margin: 0 calc(((100vw - 2rem) / 12) * 3);
      width: calc(100vw / 2);
    }
    @media (min-width: 840px) {
      margin: 0 calc(((100vw - 2rem) / 12) * 4);
      width: calc(100vw / 3);
    }
    @media (min-width: 1312px) {
      margin: 0;
      padding: 0 0.5rem;
      width: calc((1280px * 4) / 12);
    }
  }
}
</style>