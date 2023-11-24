<script>
  import Header from '../header/Header.svelte'
  import Sidenav from '../sidenav/Sidenav.svelte'
  import Vegetables from '../vegetables/Vegetables.svelte'
  import Footer from '../footer/Footer.svelte'
</script>

<Header isSticky />
<div class="mainaside">
  <div class="mainaside_container">
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
<Vegetables />
<Footer />

<style lang="scss">
.mainaside {
  position: relative;
  overflow: hidden;
  .mainaside_container {
    margin: 1rem auto 0;
    padding: 0 1.5rem;
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
@media (min-width: 840px) and (min-height: 450px) {
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