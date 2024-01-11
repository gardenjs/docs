<script>
  import Header from '../header/Header.svelte'
  import Sidenav from '../sidenav/Sidenav.svelte'
  import Main from './Main.svelte'
  import Footer from '../footer/Footer.svelte'
</script>

<Header isSticky />
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
<Main />
<Footer />

<style lang="scss">
  .mainaside {
    position: relative;
    overflow: hidden;
    padding: 0 2rem;
    .mainaside_container {
      position: relative;
      margin: 1rem auto 0;
      padding: 0;
      width: 100%;
      max-width: var(--w-website-slim);
      overflow: hidden;
      @media (min-width: 840px) {
        display: flex;
        justify-content: space-between;
        gap: 2rem;
      }
      .sidenav {
        @media (min-width: 840px) {
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