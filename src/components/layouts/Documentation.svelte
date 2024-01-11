<script>
  import Header from '../header/Header.svelte'
  import Sidenav from '../sidenav/Sidenav.svelte'
  import Footer from '../footer/Footer.svelte'
  import Vegetables from '../vegetables/Vegetables.svelte'
</script>

<Header isFixed />
<div class="mainaside">
  <div class="mainaside_container">
    <div class="sidenav">
      <Sidenav />
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</div>
<Vegetables />
<Footer />

<style lang="scss">
  .mainaside {
    position: relative;
    padding: 0 2rem;
    @media (min-width: 480px) {
      margin: 6.5rem 0 0;
    }
    @media (min-width: 960px) {
      margin: 7rem 0 0;
    }
    @media (min-width: 1280px) {
      margin: 8.5rem 0 0;
    }
    .mainaside_container {
      position: relative;
      margin: auto;
      padding: 0;
      width: 100%;
      max-width: var(--w-website-slim);
      overflow: hidden;
      @media (min-width: 840px) {
        display: flex;
        justify-content: space-between;
        column-gap: 2rem;
      }
      .sidenav {
        @media (max-width: 839px) {
          display: none;
        }
        @media (min-width: 840px) {
          position: relative;
          overflow: hidden;
          transform: translate3d(0,0,0); // respect overflow hidden for the child element that is fixed
          width: 100%;
          max-width: calc((100% / 12) * 3);
        }
      }
      .content {
        width: 100%;
        @media (min-width: 840px) {
          max-width: calc((100% / 12) * 9);
        }
      }
    }
  }
</style>