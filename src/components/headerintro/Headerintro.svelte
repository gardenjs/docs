<div class="header_intro">
  <div class="header_text">
    <div class="slogan"><span>Plant. </span><span>Cultivate. </span><span><i>Harvest</i>.</span></div>
    <p class="slogan_subtext">A lightweight open source tool that helps you build, test and document UI components and pages. Build UI component libraries and design systems hand in hand in your frontend projects and explore your work.</p>
    <div class="header_links">
      <a href="/docs" class="btn-docs" title="documentation">Documentation</a>
      <a href=".#" title="Watch Gardenjs demo" target="_blank">Watch Demo</a>
    </div>
  </div>
  <div class="header_img">
    <div class="app">
      <div class="app_header">
        <div class="menu-circle"></div>
      </div>
      <picture>
        <source srcset="src/assets/images/screenshot_garden-dark.jpg" media="all" data-media="(prefers-color-scheme:light)">
        <img src="src/assets/images/screenshot_garden.jpg" alt="Screenshot Garden app">
      </picture>
    </div>
  </div>
</div>

<style lang="scss">
  @use "sass:math";
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
        font-size: 2.5rem;
        color: var(--c-headline);
        font-weight: 400;
        @supports (font-variation-settings: normal) {
          font-family: 'Vollkorn', serif;
          font-variation-settings: 'wght' 400;
        }
        text-align: center;
        line-height: 0.8;
        @media (min-width: 280px) {
          font-size: 3.25rem;
        }
        @media (min-width: 450px) {
          font-size: 4rem;
        }
        @media (min-width: 960px) {
          font-size: 7rem;
          text-align: left;
          span {
            display: block;
          }
        }
      }
      .slogan_subtext {
        display: block;
        margin: 0.5rem 0 1.75rem;
        width: 100%;
        font-size: 1rem;
        color: var(--c-text-light);
        font-weight: 500;
        @supports (font-variation-settings: normal) {
          font-variation-settings: 'wght' 500;
        }
        text-align: center;
        @media (min-width: 450px) {
          font-size: 1.125rem;
        }
        @media (min-width: 960px) {
          font-size: 1.25rem;
          text-align: left;
        }
      }
      .header_links {
        @media (min-width: 480px) {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0 1rem;
        }
        a {
          display: block;
          padding: 0.375rem 1.25rem;
          color: var(--c-website-bg);
          font-size: 0.875rem;
          @media (min-width: 840px) {
            font-size: 1rem;
          }
          text-transform: uppercase;
          text-align: center;
          font-weight: 500;
          text-decoration: none;
          background-color: var(--c-text);
          border-radius: 1.5rem;
          transition: 0.2s;
          &:hover,
          &:focus {
            background-color: var(--c-secondary);
            box-shadow: 0 .175rem .5rem 0 rgba(0,0,0,.4);
            transition: 0.2s;
          }
        }
        a.btn-docs {
          margin: 0 0 0.5rem;
          color: var(--c-btntxt-docs);
          background-color: var(--c-primary);
          &:hover,
          &:focus {
            background-color: var(--c-primary-lighter);
          }
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
        width: 960px;
        margin: 0 0 0 5rem;
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
          height: 100%;
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