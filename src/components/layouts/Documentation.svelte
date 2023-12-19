<script>
  import Header from '../header/Header.svelte'
  import Sidenav from '../sidenav/Sidenav.svelte'
  import Main from '../../components/layouts/Main.svelte'
  import Footer from '../footer/Footer.svelte'
</script>

<Header isSticky />
<div class="mainaside">
  <div class="mainaside_container">
    <div class="sidebar">
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
  .mainaside_container {
    position: relative;
    margin: 1rem auto 0;
    padding: 0;
    width: 100%;
    padding: 0.5rem;
    overflow: hidden;
    z-index: 3;
    @media (min-width: 600px) {
      padding: 0;
      max-width: calc(100% - 3.25rem);
    }
    @media (min-width: 840px) {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
    }
    @media (min-width: 1312px) {
      padding: 0 0.625rem;
      max-width: var(--w-website)
    }
    .sidebar {
      margin-bottom: 2rem;
      @media (min-width: 840px) {
        width: 100%;
        max-width: calc(((100% - 0.5rem) / 12) * 3);
      }
      @media (min-width: 1312px) {
        width: calc((100% / 12) * 3);
      }
    }
    .content {
      width: 100%;
      @media (min-width: 840px) {
        width: 100%;
        max-width: calc(((100% - 0.375rem) / 12) * 9);
      }
      @media (min-width: 1312px) {
        width: calc((100% / 12) * 9);
      }
    }
  }
}
</style>