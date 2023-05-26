<script>
  import Stripes from '../stripes/Stripes.svelte'
  
  export let showStripes
  export let showSkew
  export let showSidenav
  let currentTheme = 'light'

  function toggleTheme() {
    currentTheme = currentTheme === "dark" ? "light" : "dark"
    document.documentElement.setAttribute("data-theme", currentTheme);
    updateSourceMedia(currentTheme);
  }

  function updateSourceMedia (colorPreference) {
    var pictures = document.querySelectorAll('picture');
    pictures.forEach(function (picture) {
      var sources = picture.querySelectorAll("source[data-media*=\"prefers-color-scheme\"]");
      sources.forEach(function (source) {
        if (source.dataset.media.includes(colorPreference)) {
          source.media = 'all';
        } else {
          source.media = 'none';
        }
      })
    })
  };

</script>

<header class="header">
  <div class="header_container">
    <div class="navbar">
      <a class="logo" href="/" title="start">
        <img src="src/assets/icons/logo.svg" alt="Logo">
        <span class="logo_label">Garden</span>
      </a>
      <div class="navbar-btns">
        <button id="toggle-mode" class="toggle-mode" title="Toggle Website Theme" on:click={toggleTheme}>
          {#if currentTheme === 'light'}
          <svg width="30" viewBox="0 0 32 32" height="30" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M16 0c8.836 0 16 7.163 16 16 0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16C0 7.163 7.162 0 16 0zm-.001 7c-4.937 0-9 4.062-9 9 0 4.936 4.063 8.999 9 8.999s9-4.063 9-9a6.365 6.365 0 01-4.484 1.848c-3.492 0-6.364-2.872-6.364-6.364 0-1.678.664-3.292 1.848-4.483z" fill="#2d466c" fill-rule="evenodd"/></svg>
          {:else}
          <svg width="30" viewBox="0 0 32 32" height="30" xmlns="http://www.w3.org/2000/svg"><path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm0 22.2a1 1 0 00-1 1V25a1 1 0 002 0v-1.8a1 1 0 00-1-1zm5.801-1.813a1 1 0 00-1.414 1.414l1.269 1.27a1 1 0 001.414-1.415zm-10.188 0a1 1 0 00-1.414 0l-1.27 1.269a1 1 0 001.415 1.414l1.27-1.269a1 1 0 000-1.414zM16 12.4a3.6 3.6 0 100 7.2 3.6 3.6 0 000-7.2zM8.8 15H7a1 1 0 000 2h1.8a1 1 0 000-2zM25 15h-1.8a1 1 0 000 2H25a1 1 0 000-2zm-1.93-6.07a1 1 0 00-1.414 0l-1.27 1.269a1 1 0 001.415 1.414l1.27-1.269a1 1 0 000-1.414zm-12.726 0a1 1 0 00-1.414 1.414l1.269 1.27a1 1 0 001.414-1.415zM16 6a1 1 0 00-1 1v1.8a1 1 0 002 0V7a1 1 0 00-1-1z" fill="#a5bad9" fill-rule="evenodd"/></svg>
          {/if}
        </button>
        <a class="github" href="https://github.com/rabbitdevelopment/garden" title="Garden Github Repository" target="_blank">
          <svg class="icon" role="img" height="30" viewBox="0 0 80 80" width="30" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" fill="currentColor"><path d="M39.996 0C17.908 0 0 18.362 0 41.014c0 18.12 11.46 33.49 27.355 38.916 2.001.375 2.73-.891 2.73-1.98 0-.97-.034-3.552-.053-6.973-11.127 2.477-13.474-5.499-13.474-5.499-1.82-4.736-4.442-5.997-4.442-5.997-3.632-2.545.275-2.495.275-2.495 4.015.292 6.126 4.227 6.126 4.227 3.568 6.267 9.364 4.457 11.642 3.41.364-2.652 1.395-4.46 2.54-5.484-8.882-1.035-18.221-4.555-18.221-20.27 0-4.477 1.56-8.138 4.118-11.005-.413-1.038-1.785-5.207.39-10.854 0 0 3.36-1.103 11.001 4.204 3.19-.909 6.613-1.364 10.014-1.38 3.396.016 6.82.471 10.014 1.38 7.637-5.307 10.989-4.204 10.989-4.204 2.183 5.647.81 9.816.398 10.854 2.563 2.867 4.113 6.528 4.113 11.004 0 15.756-9.354 19.223-18.265 20.238 1.437 1.266 2.716 3.769 2.716 7.596 0 5.48-.05 9.904-.05 11.249 0 1.098.72 2.374 2.751 1.974C68.55 74.489 80 59.128 80 41.014 80 18.362 62.09 0 39.996 0" /></svg>
        </a>
        {#if showSidenav}
          <button id="toggle-nav" class="toggle-nav" aria-haspopup="menu" title="Navigation">
            <svg  class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h16M4 6h16M4 18h16"/></svg>
          </button>
        {/if}
      </div>
    </div>
    <slot></slot>
  </div>
  {#if showStripes}
    <Stripes />
  {/if}
  {#if showSkew}
    <div class="skew"><Stripes /></div>
  {/if}
</header>

<style lang="scss">
.header {
  position: relative;
  max-height: 780px;
  padding: 0 1rem;
  overflow: hidden;
  background-color: var(--c-website-bg);
  z-index: 2;
  @media (min-width: 1680px) {
    max-height: var(--w-website);
  }
  .skew {
    position: absolute;
    content: '';
    width: 100%;
    height: 300px;
    bottom: -300px;
    left: 0;
    right: 0;
    transform: skewY(-3deg);
    transform-origin: top left;
    background-color: var(--c-website-bg);
    z-index: 4;
  }
  .header_container {
    position: relative;
    width: 100%;
    max-width: var(--w-website);
    margin: auto;
    z-index: 3;
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 2rem 0 2rem;
      height: 60px;
      a.logo {
        position: relative;
        display: block;
        color: var(--c-primary);
        text-decoration: none;
        img {
          display: inline;
          width: 60%;
          height: auto;
          @media (min-width: 768px) {
            width: 80%;
          }
          @media (min-width: 1024px) {
            width: 100%;
          }
        }  
        .logo_label {
          display: inline-block;
          position: absolute;
          top: 50%;
          margin: 0 0 0 0.75rem;
          transform: translateY(-50%);
          font-weight: 800;
          font-size: 1.5rem;
          white-space: nowrap;
          transition: color 0.2s;
          @media (min-width: 768px) {
            margin: 0 0 0 1rem;
            font-size: 1.875rem;
          }
          @media (min-width: 1024px) {
            font-size: 2.5rem;
          }
        }
        &:hover .logo_label {
          color: var(--c-primary-lighter);
          transition: color 0.2s;
        }
      }
      .navbar-btns {
        display: flex;
        align-items: center;
        button.toggle-mode,
        a.github,
        button.toggle-nav {
          .icon {
            font-size: 1rem;
            color: var(--c-navbar-icon);
            @media (min-width: 768px) {
              font-size: 1.125rem;
            }
            @media (min-width: 1024px) {
              font-size: 1.25rem;
            }
          }
        }
        button.toggle-mode {
          margin-right: 1rem;
          cursor: pointer;
          background-color: transparent;
          @media (min-width: 1024px) {
            margin-right: 1.25rem;
          }
        }
        @media (max-width: 767px) {
          button.toggle-nav {
            display: block;
            margin-left: 1rem;
            background-color: transparent;
            cursor: pointer;
          }
        }
        @media (min-width: 768px) {
          .toggle-nav {
            display: none;
          }
        }
      }
    }
  }
}
</style>