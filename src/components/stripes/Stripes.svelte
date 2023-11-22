<div class="stripes">
  <div class="stripes_container">
    <div class="stripe stripe-1"></div>
    <div class="stripe stripe-2"></div>
    <div class="stripe stripe-3"></div>
    <div class="stripe stripe-4"></div>
    <div class="stripe stripe-5"></div>
    <div class="stripe stripe-6"></div>
    <div class="stripe stripe-7"></div>
    <div class="stripe stripe-8"></div>
    <div class="stripe stripe-9"></div>
  </div>
</div>

<style lang="scss">
.stripes {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 0 1rem;
  z-index: 2;
}
.stripes_container {
  position: relative;
  @media (min-width: 600px) {
    display: grid;
    grid: 1fr/repeat(8,1fr);
    grid-gap: 0.063rem;
    width: 100%;
    height: 100%;
  }
  // @media (min-width: 840px) {
  //   grid: 1fr/repeat(4,1fr);
  // }
  // @media (min-width: 960px) {
  //   grid: 1fr/repeat(6,1fr);
  // }
  @media (min-width: 1280px) {
    margin: auto;
    max-width: var(--w-website);
    grid: 1fr/repeat(8,1fr);
  }
  @media (min-width: 600px) {
    .stripe {
      width: 0.063rem;
      background: linear-gradient(180deg,var(--c-stripes-dashed),var(--c-stripes-dashed) 50%,transparent 0,transparent);
      background-size: 0.063rem 0.75rem;
    }
    .stripe-1,
    .stripe-9 {
      background: var(--c-stripes-solid);
    }
    .stripe-9 {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      height: 100%;
    }
    // .stripe-3,
    // .stripe-4,
    // .stripe-5,
    // .stripe-6,
    // .stripe-7,
    // .stripe-8 {
    //   display: none;
    // }
  }
  // @media (min-width: 840px) {
  //   .stripe-3,
  //   .stripe-4 {
  //     display: block;
  //   }
  // }
  // @media (min-width: 960px) {
  //   .stripe-4,
  //   .stripe-5,
  //   .stripe-6 {
  //     display: block;
  //   }
  // }
  // @media (min-width: 1280px) {
  //   .stripe-7,
  //   .stripe-8 {
  //     display: block;
  //   }
  // }
}
</style>