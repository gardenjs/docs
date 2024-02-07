<script>
  import '../assets/scss/main.scss'
  import Header from '../components/header/Header.svelte'
  import Sidenav from '../components/sidenav/Sidenav.svelte'
  import Footer from '../components/footer/Footer.svelte'
  import Vegetables from '../components/vegetables/Vegetables.svelte'

  let showMobilenav = false
  function handleToggleMobilenav() {
    showMobilenav = !showMobilenav
  }
</script>

<Header isFixed hasMobilenavicon {showMobilenav} on:toggleMobilenav={handleToggleMobilenav} />
<div class="mainaside">
  <div class="mainaside_container">
    <div class="sidebar {showMobilenav ? 'show' : ''}">
      <Sidenav on:toggleMobilenav={handleToggleMobilenav}/>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</div>
<Vegetables />
<Footer />
{#if showMobilenav}
  <div class="backdrop" on:click={handleToggleMobilenav} on:keypress={handleToggleMobilenav} tabindex="-1" role="button"></div>
{/if}


<style lang="scss">
  .mainaside {
    position: relative;
    margin: 8rem 0 0;
    @media (min-width: 480px) {
      margin: 6.5rem 0 0;
    }
    @media (min-width: 960px) {
      margin: 7rem 0 0;
    }
    @media (min-width: 1100px) {
      margin: 7rem auto 0;
      max-width: 1100px;
    }
    @media (min-width: 1280px) {
      margin: 8.5rem auto 0;
    }
    .mainaside_container {
      position: relative;
      margin: auto;
      padding: 0 2rem;
      width: 100%;
      max-width: var(--w-website-wide);
      @media (min-width: 840px) {
        display: flex;
        justify-content: space-between;
        column-gap: 2rem;
      }
      .sidebar {
        @media (max-width: 839px) {
          position: fixed;
          top: 0rem;
          right: 0rem;
          bottom: 0rem;
          padding: 2rem 1.5rem;
          width: 100%;
          height: calc(100vh - 4rem);
          background-color: var(--c-website-bg);
          box-shadow: 0 0 0.75rem rgba(0,0,0,.2);
          translate: 100vw 0;
          overflow-y: scroll;
          overflow-x: hidden;
          z-index: 99999;
          @media (min-width: 480px) {
            top: 0rem;
            right: 0rem;
            bottom: 0rem;
            max-width: 280px;
            translate: calc(100vw + 382px) 0;
          }
        }
        &.show {
          translate: 0 0;
        }
        @media (min-width: 840px) {
          position: sticky;
          align-self: start; // parent is flex so this is needed for position: sticky to work
          top: 6.5rem;
          @media (min-width: 960px) {
            top: 7rem;
          }
          @media (min-width: 1280px) {
            top: 8.5rem;
          }
          width: 25%;
          max-width: 300px;
        }
      }
      .content {
        @media (min-width: 840px) {
          width: 75%;
          max-width: 800px;
        }
      }
    }
  }
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--c-website-bg);
    opacity: 0.6;
    z-index: 99998;
    @media (min-width: 840px) {
      display: none;
    }
  }
</style>