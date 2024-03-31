<script>
  import Dashedline from '../../components/dashedlines/Dashedlines.svelte'
  import ScreenshotDarkmode from '../../assets/images/screenshot_garden-dark.jpg'
  import ScreenshotLightmode from '../../assets/images/screenshot_garden.jpg'
</script>

<div class="header_intro">
  <div class="header_text">
    <div class="slogan">Plant, Cultivate, <span class="italic">Harvest!</div>
    <p class="slogan_subtext">Gardenjs provides a centralized platform for developers to create, test and present UI components and pages in isolation.</p>
    <div class="header_links">
      <a href="/docs" class="header_link btn-docs" title="documentation">
        <span class="header_links-label">Documentation</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
      </a>
      <a href=".#" class="header_link" title="Watch Gardenjs demo" target="_blank">
        <span class="header_links-label">Watch Demo</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10M7 17L17 7"/></svg>
      </a>
    </div>
    <Dashedline dashedlines1 />
  </div>
  <div class="header_img">
    <div class="app">
      <div class="app_header">
        <div class="menu-circle"></div>
      </div>
      <picture>
        <source srcset="{ScreenshotDarkmode}" media="all" data-media="(prefers-color-scheme:light)">
        <img src="{ScreenshotLightmode}" alt="Screenshot Garden app">
      </picture>
    </div>
  </div>
</div>

<style lang="scss">
  .header_intro {
    position: relative;
    margin: auto;    
    @media (min-width: 960px) {
      display: grid;
      grid-template-columns: repeat(2,540px 1fr);
    }
    @media (min-width: 1280px) {
      width: var(--w-website-wide);
    }
    .header_text {
      margin: 2rem 0 0;
      padding: 0 0 1rem;
      .slogan {
        display: block;
        margin: 0 0 1.25rem;
        font-variation-settings: 'wght' 900;
        font-size: 2.5rem;
        color: var(--c-headline);
        line-height: 1;
        text-align: center;
        @media (min-width: 280px) {
          font-size: 3.25rem;
        }
        @media (min-width: 450px) {
          font-size: 4rem;
        }
        @media (min-width: 960px) {
          font-size: 5.5rem;
          text-align: left;
          line-height: 0.9;
          span {
            display: block;
          }
          @media (min-width: 1280px) {
            font-size: 6.5rem;
          }
        }
        .italic {
          font-family: 'Source Sans 3 Italic';
        }
      }
      .slogan_subtext {
        display: block;
        margin: 0 0 1.75rem;
        font-family:"Gloria Hallelujah";
        font-size: 1rem;
        color: var(--c-text-light);
        text-align: center;
        @media (min-width: 840px) {
          font-size: 1.125rem;
        }
        @media (min-width: 960px) {
          text-align: left;
        }
        @media (min-width: 1280px) {
          font-size: 1.25rem;
        }
      }
      .header_links {
        @media (min-width: 480px) {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0 1rem;
          margin: 0 0 2rem;
        }
        .header_link {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0.375rem 1.25rem;
          color: var(--c-text);
          font-size: 0.875rem;
          text-transform: uppercase;
          text-decoration: none;
          border: 2px solid var(--c-text);
          border-radius: .25rem;
          box-shadow: 0.25rem 0.25rem 0 -1px var(--c-text), 0.25rem 0.25rem 0 var(--c-text);
          transition: 0.4s;
          @media (min-width: 840px) {
            font-size: 0.938rem;
          }
          @media (min-width: 960px) {
            padding: 0.5rem 1.25rem;
          }
          .header_links-label {
            padding-right: 0.5rem;
          }
          svg {
            transition: 0.4s;
          }
          &:hover,
          &:focus {
            transition: 0.4s;
            box-shadow: 0 0 0 -1px #fff, 0 0 0 #fff;
            transform: translate(0.25rem , 0.25rem );
            svg {
              transform: translateX(0.5rem );
              transition: 0.4s;
            }
          }
        }
        a.btn-docs {
          margin: 0 0 0.5rem;
          color: var(--c-btntxt-docs);
          background-color: var(--c-primary);
          border-color: var(--c-border-docs);
          box-shadow: 0.375rem 0.375rem 0 -1px var(--c-primary), 3px 3px 0 var(--c-primary);
          @media (min-width: 480px) {
            margin: 0;
          }
        }
      }
    }
    // header img
    @media (max-width: 959px) {
      .header_img {
        display: none;
      }
    }
    @media (min-width: 960px) {
      .header_img {
        position: relative;
        overflow: hidden;
        width: 960px;
        margin: 0 0 0 5rem;
        border-radius: 0.563rem;
        img {
          width: auto;
          height: 100%;
          max-height: 780px;
          @media (min-width: 2200px) {
            max-height: 100%;
          }
        }
        .app {
          display: flex;
          flex-direction: column;
          position: relative;
          width: 100%;
          // height: 100%;
          background-color: var(--c-app-bg);
          border-radius: 0.563rem;
          backdrop-filter: blur(1.25rem);
          .app_header {
            display: flex;
            align-items: center;
            flex-shrink: 0;
            height: 1.875rem;
            width: 100%;
            padding: 0 0.75rem;
            white-space: nowrap;
            border-bottom: 1px solid var(--c-app-border);
            .menu-circle {
              width: 0.688rem;
              height: 0.688rem;
              background-color: #f96057;
              border-radius: 50%;
              box-shadow: 18px 0 0 0 #f8ce52, 36px 0 0 0 #5fcf65;
              flex-shrink: 0;
              @media screen and (max-width: 945px) {
                display: none;
              }
            }
          }
        }
      }
    }
  }
</style>