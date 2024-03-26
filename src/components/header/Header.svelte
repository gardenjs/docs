<script>
  import Headernav from '../headernav/Headernav.svelte'
  import Headerintro from '../headerintro/Headerintro.svelte'
  import Logo from '../../assets/icons/logo.svg'

  export let isFixed = false
  export let isDocs = false
  export let showHeaderintro = false
  export let showMobilenav = false
  export let hasMobilenavicon = false

  let fixed = 'is-fixed'
  let scroll = ''

  let ifdocs = 'is-docs'
  let notdocs = ''
</script>

<header class="header {isFixed? fixed : scroll} {isDocs? ifdocs : notdocs}">
  <div class="header_container">
    <div class="navbar">
      <div class="navbar_container">
        <a class="logo" href="/" title="go to start">
          <img src="{Logo}" alt="Logo">
          <span class="logo_label">Gardenjs</span>
        </a>
        <Headernav on:toggleMobilenav {showMobilenav} {hasMobilenavicon} />
      </div>
    </div>
    {#if showHeaderintro}
      <Headerintro />
    {/if}
  </div>
</header>

<style lang="scss">
  .header {
    position: relative;
    overflow: hidden;
    padding: 0 1.5rem;
    width: 100%;
    &.is-fixed {
      position: fixed;
      top: 0;
      z-index: 9;
    }
    .header_container {
      position: relative;
      .navbar {
        background-color: var(--c-website-bg);
        .navbar_container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 1rem 0 0;
          @media (min-width: 580px) {
            flex-direction: row;
            justify-content: space-between;
            margin: auto;
            padding-top: 0;
            height: 6rem;
          }
          @media (min-width: 960px) {
            height: 8rem;
          }
          @media (min-width: 1280px) {
            max-width: var(--w-website-wide);
            height: 10rem;
          }
          a.logo {
            position: relative;
            display: inline-flex;
            align-items: center;
            color: var(--c-text);
            font-variation-settings: 'wght' 900;
            text-decoration: none;
            @media (max-width: 579px) {
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
          }
        }
      }
    }
    // docs only
    &.is-docs {
      @media (min-width: 580px) {
        border-bottom: 1px solid var(--c-border);
      }
      .navbar_container {
        @media (min-width: 580px) {
          height: 4rem !important;
        }
        @media (min-width: 960px) {
          height: 5.5rem !important;
        }
        @media (min-width: 1280px) {
          height: 5.5rem !important;
        }
      }
    }
  }
</style>