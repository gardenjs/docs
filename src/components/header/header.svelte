<script>
  import Stripes from '../stripes/stripes.svelte'
  
  export let showSkew
</script>

<header class="header">
  <div class="header_container">
    <div class="navbar">
      <a class="logo" href="/" title="start">
        <img src="src/assets/icons/logo.svg" alt="Logo">
        <span class="logo_label">Garden</span>
      </a>
      <div class="navbar-btns">
        <button id="toggle-mode" title="Toggle Website Theme"></button>
        <a class="github" href="https://github.com/rabbitdevelopment/garden" title="Garden Github Repository" target="_blank">
          <svg class="icon" role="img" height="32" viewBox="0 0 80 80" width="32" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" fill="currentColor"><path d="M39.996 0C17.908 0 0 18.362 0 41.014c0 18.12 11.46 33.49 27.355 38.916 2.001.375 2.73-.891 2.73-1.98 0-.97-.034-3.552-.053-6.973-11.127 2.477-13.474-5.499-13.474-5.499-1.82-4.736-4.442-5.997-4.442-5.997-3.632-2.545.275-2.495.275-2.495 4.015.292 6.126 4.227 6.126 4.227 3.568 6.267 9.364 4.457 11.642 3.41.364-2.652 1.395-4.46 2.54-5.484-8.882-1.035-18.221-4.555-18.221-20.27 0-4.477 1.56-8.138 4.118-11.005-.413-1.038-1.785-5.207.39-10.854 0 0 3.36-1.103 11.001 4.204 3.19-.909 6.613-1.364 10.014-1.38 3.396.016 6.82.471 10.014 1.38 7.637-5.307 10.989-4.204 10.989-4.204 2.183 5.647.81 9.816.398 10.854 2.563 2.867 4.113 6.528 4.113 11.004 0 15.756-9.354 19.223-18.265 20.238 1.437 1.266 2.716 3.769 2.716 7.596 0 5.48-.05 9.904-.05 11.249 0 1.098.72 2.374 2.751 1.974C68.55 74.489 80 59.128 80 41.014 80 18.362 62.09 0 39.996 0" /></svg>
        </a>
      </div>
    </div>
    <slot></slot>
  </div>
  <Stripes />
  {#if showSkew}
    <div class="skew"><div class="stripes"><span></span><span></span><span></span><span></span></div></div>
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
    max-height: 980px;
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
    max-width: 980px;
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
        }  
        .logo_label {
          display: inline-block;
          position: absolute;
          top: 50%;
          margin: 0 0 0 1rem;
          transform: translateY(-50%);
          font-weight: 800;
          font-size: 2.5rem;
          white-space: nowrap;
          transition: 0.2s;
        }
        &:hover .logo_label {
          color: var(--c-primary-lighter);
          transition: 0.2s;
        }
      }
      .navbar-btns {
        display: flex;
        align-items: center;
        a.github {
          .icon {
            font-size: 1.25rem;
            color: var(--c-navbar-icon);
          }
        }
        #toggle-mode {
          margin-right: 1.5rem;
          width: 2rem;
          height: 2rem;
          background-image: var(--icon-toggle-mode);
          background-repeat: no-repeat;
          background-color: transparent;
          cursor: pointer;
        }
      }
    }
  }
}
</style>