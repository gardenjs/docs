<script>
  import Header from '../header/Header.svelte'
  import Sidenav from '../sidenav/Sidenav.svelte'
  import Footer from '../footer/Footer.svelte'
</script>

<Header isSticky />
<div class="main">
  <div class="main_container">
    <div class="leftright">
      <div class="sidebar">
        <Sidenav />
      </div>
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</div>
<Footer />

<style lang="scss">
.main {
  position: relative;
  padding-bottom: 4rem;
  overflow: hidden;
  .main_container {
    margin: 1rem auto 0;
    max-width: var(--w-website);
  }
}
@media (max-width: 767px) or (max-height: 449px) {
  .sidebar {
    position: relative;
    margin-bottom: 2rem;
  }
  .content {
    width: 100%;
  }
}
@media (min-width: 768px) and (min-height: 450px) {
  .leftright {
    position: relative;
    display: flex;
    flex-wrap: no-wrap;
    flex-direction: row;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .sidebar {
    position: relative;
    margin: 0;
    width: 25%;
    overflow: hidden;
  }
  .content {
    width: 75%;
  }
}
</style>