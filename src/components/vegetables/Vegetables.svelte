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
    img {
      width: 66.6%;
      @media (min-width: 480px) {
        width: 50%;
      }
      @media (min-width: 600px) {
        padding: 0 0.5rem 0 0.625rem;
      }
      @media (min-width: 840px) {
        width: 375px;
      }
    }
  }
</style>