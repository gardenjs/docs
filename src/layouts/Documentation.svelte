<!-- @migration-task Error while migrating Svelte code: Can't migrate code with afterUpdate. Please migrate by hand. -->
<script>
  import '../assets/scss/main.scss'
  import Navbar from '../components/header/Navbar.svelte'
  import Sidenav from '../components/sidenav/Sidenav.svelte'
  import Footer from '../components/footer/Footer.svelte'
  import Vegetables from '../components/vegetables/Vegetables.svelte'
  import { onMount, afterUpdate } from 'svelte';

  export let url = ''
  export let sidenavFolders = []

  let showMobilenav = false
  function handleToggleMobilenav() {
    showMobilenav = !showMobilenav
  }

  function wrapTables() {
    const tables = document.querySelectorAll('.content table');
    tables.forEach(table => {
      if (!table.parentNode.classList.contains('table-wrapper')) {
        const wrapper = document.createElement('div');
        wrapper.className = 'table-wrapper';
        wrapper.style.overflowX = 'scroll';
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
      }
    });
  }

  onMount(() => {
    wrapTables();
  });

  afterUpdate(() => {
    wrapTables();
  });
</script>

<Navbar isFixed hasMobilenavicon {showMobilenav} on:toggleMobilenav={handleToggleMobilenav} />
<div class="mainaside">
  <div class="mainaside_container">
    <div class="sidebar {showMobilenav ? 'show' : ''}">
      <Sidenav folders={sidenavFolders} on:toggleMobilenav={handleToggleMobilenav} url={url}/>
    </div>
    <div class="content-wrapper">
      <div class="content">
        <slot></slot>
        <Vegetables />
      </div>
    </div>
  </div>
</div>
<Footer hasBordertop />
{#if showMobilenav}
  <div class="backdrop" on:click={handleToggleMobilenav} on:keypress={handleToggleMobilenav} tabindex="-1" role="button"></div>
{/if}


<style lang="scss">
  .mainaside {
    position: relative;
    padding: 0 1.5rem;
    @media (min-width: 1100px) {
      margin: auto;
      // max-width: 1100px;
    }
    .mainaside_container {
      position: relative;
      margin: auto;
      width: 100%;
      max-width: var(--w-website-wide);
      @media (min-width: 840px) {
        display: flex;
        justify-content: space-between;
      }
      .sidebar {
        @media (max-width: 839px) {
          position: fixed;
          top: 0rem;
          right: 0rem;
          bottom: 0rem;
          padding: 4rem 2rem 2rem;
          width: 100%;
          height: 100vh;
          background-color: var(--c-website-bg);
          translate: 500px 0; // because of the table overflow on the settings page
          overflow-y: scroll;
          overflow-x: hidden;
          z-index: 99999;
          transition: 0.2s;
          @media (min-width: 480px) {
            top: 0rem;
            right: 0rem;
            bottom: 0rem;
            max-width: 300px;
            translate: calc(100vw + 300px) 0;
            transition: 0.2s;
          }
          &.show {
            translate: 0 0;
          }
        }
        @media (min-width: 840px) {
          position: sticky;
          top: 0;
          align-self: start;
          padding-top: 6rem;
          @media (min-width: 960px) {
            padding-top: 7.5rem;
          }
          padding-right: 2rem;
          width: 260px;
        }
      }
    }
    .content-wrapper {
      padding: 8.5rem 0 0;
      @media (min-width: 580px) {
        padding: 6rem 0 0;
      }
      @media (min-width: 840px) {
        width: calc(100% - 260px);
        border-left: 1px solid var(--c-border);
        padding-left: 1.5rem;
      }
      @media (min-width: 960px) {
        padding-top: 7rem;
      }
      .content {
        margin: auto;
        max-width: 840px;
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
    opacity: 0.9;
    z-index: 99998;
    @media (min-width: 840px) {
      display: none;
    }
  }
</style>