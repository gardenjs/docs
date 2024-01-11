<script>
  import Headernav from '../headernav/Headernav.svelte'
  import Headerintro from '../headerintro/Headerintro.svelte'

  export let isFixed = false
  export let showHeaderintro = false
  export let showSkew = false

  let fixed = 'is-fixed'
  let scroll = ''

</script>

<header class="header {isFixed? fixed : scroll}">
  <div class="header_container">
    <div class="navbar">
      <div class="navbar_container">
        <a class="logo" href="/" title="go to start">
          <img src="src/assets/icons/logo.svg" alt="Logo">
          <span class="logo_label">Gardenjs</span>
        </a>
        <Headernav />
      </div>
    </div>
    {#if showHeaderintro}
      <Headerintro />
    {/if}
  </div>
  {#if showSkew}
    <div class="skew"></div>
  {/if}
</header>

<style lang="scss">
  .header {
    position: relative;
    overflow: hidden;
    width: 100%;
    @media (min-width: 960px) {
      max-height: 780px;
    }
    &.is-fixed {
      position: fixed;
      top: 0;
      z-index: 9;
    }
    .header_container {
      position: relative;
      padding: 0.75rem 2rem 0;
      @media (min-width: 480px) {
        padding-top: 0;
      }
      .navbar {
        background-color: var(--c-website-bg);
        .navbar_container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          @media (min-width: 480px) {
            flex-direction: row;
            justify-content: space-between;
            margin: auto;
            height: 4rem;
          }
          @media (min-width: 960px) {
            height: 5.25rem;
          }
          @media (min-width: 1280px) {
            max-width: var(--w-website-wide);
            height: 6rem;
          }
          a.logo {
            position: relative;
            display: inline-flex;
            align-items: center;
            color: var(--c-primary);
            text-decoration: none;
            @media (max-width: 479px) {
              margin: 0 0 0.75rem;
              width: 191px;
            }
            img {
              display: inline-block;
              width: 65px;
              height: 36px;
              @media (min-width: 960px) {
                width: 80%;
                height: auto;
              }
              @media (min-width: 1280px) {
                width: 100%;
              }
            }  
            .logo_label {
              padding: 0 0 0 0.75rem;
              font-weight: 800;
              font-size: 1.5rem;
              white-space: nowrap;
              transition: color 0.2s;
              @media (min-width: 960px) {
                padding: 0 0 0 1rem;
                font-size: 1.875rem;
              }
              @media (min-width: 1280px) {
                font-size: 2.5rem;
              }
            }
            &:hover .logo_label {
              color: var(--c-primary-lighter);
              transition: color 0.2s;
            }
          }
        }
      }
    }
    .skew {
      display: none;
      @media (min-width: 960px) {
        display: block;
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
      }
    }
  }
</style>