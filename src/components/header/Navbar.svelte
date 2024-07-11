<script>
  import Headernav from './Headernav.svelte'
  import Heroheader from './Heroheader.svelte'
  import Logo from '../../assets/icons/logo.svg'
  import LogoNeg from '../../assets/icons/logo_neg.svg'
  import { theme } from '../../stores/theme'

  export let isFixed = false
  export let showHeroheader = false
  export let showMobilenav = false
  export let hasMobilenavicon = false

  let fixed = 'is-fixed'
</script>

<header class="header {isFixed? fixed : ''}">
  <div class="header_container">
    <div class="navbar">
      <div class="navbar_container">
        <a class="logo" href="/" title="go to start">
          <picture>
            <source srcset="{Logo}" media="{$theme === 'light' ? 'all' : 'none'}" data-media="(prefers-color-scheme:light)">
            <img src="{LogoNeg}" alt="Logo">
          </picture>
        </a>
        <Headernav on:toggleMobilenav {showMobilenav} {hasMobilenavicon} />
      </div>
    </div>
    {#if showHeroheader}
      <Heroheader />
    {/if}
  </div>
</header>

<style lang="scss">
  .header {
    position: relative;
    overflow: hidden;
    padding: 0 1.5rem;
    width: 100%;
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
            line-height: 1;
            @media (max-width: 579px) {
              margin: 0 0 0.75rem;
            }
            img {
              display: block;
              width: 107px;
              height: 36px;
              @media (min-width: 380px) {
                width: 149px;
                height: 50px;
              }
              @media (min-width: 840px) {
                width: 178px;
                height: 60px;
              }
              @media (min-width: 1280px) {
                width: 208px;
                height: 70px;
              }
            }
          }
        }
      }
    }
    &.is-fixed {
      position: fixed;
      top: 0;
      z-index: 9;
      @media (min-width: 580px) {
        border-bottom: 1px solid var(--c-border);
      }
      .navbar_container {
        img {
          width: 107px;
          height: 36px;
          @media (min-width: 380px) {
            width: 128px !important;
            height: 35px !important;
          }
          @media (min-width: 960px) {
            width: 119px !important;
            height: 40px !important;
          }
          @media (min-width: 1280px) {
            width: 149px !important;
            height: 50px !important;
          }
        }
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