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
    <div class="stripe stripe-10"></div>
    <div class="stripe stripe-11"></div>
    <div class="stripe stripe-12"></div>
    <div class="stripe stripe-13"></div>
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
    grid: 1fr/repeat(12,1fr);
    grid-gap: 1px;
    width: 100%;
    height: 100%;
  }
  @media (min-width: 1280px) {
    margin: auto;
    max-width: var(--w-website);
  }
  @media (min-width: 600px) {
    .stripe {
      width: 1px;
      background: linear-gradient(180deg,var(--c-stripes-dashed),var(--c-stripes-dashed) 50%,transparent 0,transparent);
      background-size: 1px 12px;
    }
    .stripe-1,
    .stripe-13 {
      background: var(--c-stripes-solid);
    }
    .stripe-13 {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      height: 100%;
    }
  }
}
</style>