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
  @media (min-width: 1312px) {
    max-width: var(--w-website);
  }
  img {
    margin: 0 2rem;
    width: 280px;
    @media (min-width: 600px) {
      margin: 0 calc(100% / 4);
      width: 100%;
    }
    @media (min-width: 960px) {
      margin: 0 calc((100% + 2rem) / 4);
    }
    @media (min-width: 1312px) {
      margin: 0 calc(100% / 4);
      width: calc(100% / 2);
    }
  }
}
</style>