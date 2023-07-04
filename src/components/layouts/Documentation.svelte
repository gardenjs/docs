<script>
  import Header from '../header/Header.svelte'
  import LeftRight from '../layouts/LeftRight.svelte'
  import Sidenav from '../sidenav/Sidenav.svelte'
  import Footer from '../footer/Footer.svelte'
</script>

<Header showSidenav />
<div class="main">
  <div class="main_container">
    <LeftRight>
      <div slot="left" class="sidebar">
        <Sidenav />
      </div>
      <div slot="right" class="content">
        <slot></slot>
      </div>
    </LeftRight>
  </div>
</div>
<Footer />

<style lang="scss">
.main {
  position: relative;
  padding-bottom: 4rem;
  overflow: hidden;
}
.sidebar {
  display: none;
  position: relative;
  @media (min-width: 768px) {
    display: block;
    width: 25%;
    overflow: hidden;
  }
}
.content {
  width: 100%;
  @media (min-width: 768px) {
    width: 75%;
  }
}
</style>