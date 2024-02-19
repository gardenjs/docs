<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  export let showMobilenav = false
  export let hasMobilenavicon = false

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

  function handleToggleMobilenav() {
    dispatch("toggleMobilenav", {})
  }
</script>

<nav class="navbar_nav">
  <ul>
    <li>
      <a href="/docs" title="documentation">Docs</a>
    </li>
    <li>
      <a class="github" href="https://github.com/rabbitdevelopment/garden" title="Garden Github Repository" target="_blank">
        <svg class="icon" role="img" width="32" viewBox="0 0 32 32" height="32" xmlns="http://www.w3.org/2000/svg" fill="currentColor" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path d="M15.015 0C6.723 0 0 6.894 0 15.398c0 6.803 4.302 12.573 10.27 14.61.75.14 1.025-.334 1.025-.743 0-.365-.013-1.334-.02-2.618-4.178.93-5.059-2.065-5.059-2.065-.683-1.778-1.668-2.252-1.668-2.252-1.362-.955.104-.936.104-.936 1.507.11 2.3 1.587 2.3 1.587 1.34 2.353 3.515 1.673 4.37 1.28.137-.996.525-1.674.954-2.058-3.334-.389-6.84-1.71-6.84-7.61 0-1.681.585-3.056 1.545-4.132-.155-.39-.67-1.955.147-4.075 0 0 1.26-.414 4.13 1.579a14.03 14.03 0 013.76-.518c1.275.005 2.56.176 3.759.518 2.867-1.993 4.126-1.579 4.126-1.579.82 2.12.304 3.685.15 4.075.961 1.076 1.543 2.45 1.543 4.13 0 5.917-3.512 7.218-6.857 7.599.54.476 1.02 1.415 1.02 2.852 0 2.057-.02 3.718-.02 4.223 0 .413.27.891 1.034.741 5.963-2.04 10.261-7.808 10.261-14.608C30.034 6.894 23.31 0 15.015 0"/></svg>
        <span>Source</span>
      </a>
    </li>
    <li>
      <button id="toggle-mode" class="toggle-mode" title="Toggle Website Theme" on:click={toggleTheme}>
      {#if currentTheme === 'light'}
      <svg class="icon" role="img" width="32" viewBox="0 0 32 32" height="32" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M16 0c8.836 0 16 7.163 16 16 0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16C0 7.163 7.162 0 16 0zm-.001 7c-4.937 0-9 4.062-9 9 0 4.936 4.063 8.999 9 8.999s9-4.063 9-9a6.365 6.365 0 01-4.484 1.848c-3.492 0-6.364-2.872-6.364-6.364 0-1.678.664-3.292 1.848-4.483z" fill="#2d466c" fill-rule="evenodd"/></svg>
      {:else}
      <svg class="icon" role="img" width="32" viewBox="0 0 32 32" height="32" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm0 22.2a1 1 0 00-1 1V25a1 1 0 002 0v-1.8a1 1 0 00-1-1zm5.801-1.813a1 1 0 00-1.414 1.414l1.269 1.27a1 1 0 001.414-1.415zm-10.188 0a1 1 0 00-1.414 0l-1.27 1.269a1 1 0 001.415 1.414l1.27-1.269a1 1 0 000-1.414zM16 12.4a3.6 3.6 0 100 7.2 3.6 3.6 0 000-7.2zM8.8 15H7a1 1 0 000 2h1.8a1 1 0 000-2zM25 15h-1.8a1 1 0 000 2H25a1 1 0 000-2zm-1.93-6.07a1 1 0 00-1.414 0l-1.27 1.269a1 1 0 001.415 1.414l1.27-1.269a1 1 0 000-1.414zm-12.726 0a1 1 0 00-1.414 1.414l1.269 1.27a1 1 0 001.414-1.415zM16 6a1 1 0 00-1 1v1.8a1 1 0 002 0V7a1 1 0 00-1-1z" fill="#a5bad9" fill-rule="evenodd"/></svg>
      {/if}
      </button>
    </li>
    {#if hasMobilenavicon}
      <li class="navicon">
        <button class="menu" on:click={handleToggleMobilenav} title={showMobilenav ? 'Collapse menu' : 'Expand menu'}>
          <svg class="icon" role="img" width="24" viewBox="0 0 24 24" height="24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h16M4 6h16M4 18h16"/></svg>
        </button>
      </li>
    {/if}
  </ul>
</nav>

<style lang="scss">
  .navbar_nav {
    font-family: 'Spline Sans Mono';
    ul {
      display: flex;
      align-items: center;
      li {
        margin-left: 1rem;
        line-height: 1;
        a {
          padding: 0.5rem 0.75rem;
          @media (min-width: 960px) {
            padding: 0.75rem;
          }
          &:hover {
            background-color: hsl(65, 10%, 89%);;
            border-radius: 0.5rem;
          }
        }
        button,
        a {
          display: flex;
          align-items: center;
          font-size: 0.875rem;
          color: var(--c-text);
          text-transform: uppercase;
          line-height: 1;
          font-weight: 500;
          @supports (font-variation-settings: normal) {
            font-variation-settings: 'wght' 600;
          }
          @media (min-width: 960px) {
            font-size: 1rem;
          }
          @media (min-width: 1280px) {
            font-size: 1.125rem;
          }
          .icon {
            font-size: 0.75rem;
            color: var(--c-navbar-icon);
          }
          &.github {
            .icon {
              display: none;
              @media (min-width: 840px) {
                display: block;
                margin-right: 0.25rem;
              }
            }
          }
          &.toggle-mode,
          &.navicon {
            padding-left: 1rem;
            .icon {
              font-size: 0.938rem;
              @media (min-width: 840px) {
                font-size: 1rem;
              }
              @media (min-width: 960px) {
                font-size: 1.125rem;
              }
            }
          }
        }
        @media (min-width: 840px) {
          &.navicon {
            display: none;            
          }
        }
      }
    }
  }
</style>