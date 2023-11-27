<div class="header_intro">
  <div class="header_text">
    <div class="slogan"><span>Plant. </span><span>Cultivate. </span><span>Harvest.</span></div>
    <p class="slogan_subtext">A lightweight open source tool that helps you build, test and document UI components and pages. Build UI component libraries and design systems hand in hand in your frontend projects and explore your work.</p>
    <div class="header_links">
      <a class="btn-docs" href="/docs" title="go to docs">Documentation</a>
      <a href=".#" title="watch garden demo" target="_blank">Watch Demo</a>
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
  margin: auto;
  padding: 0 1rem;
  @media (min-width: 960px) {
    display: grid;
    grid-template-columns: repeat(2,1fr);
  }
  @media (min-width: 1312px) {
    width: var(--w-website);
    padding: 0;
  }
  .header_text {
    margin: 3rem 0 0;
    @media (min-width: 600px) {
      margin: 3rem calc(100% / math.div(12, 1)) 0;
      padding: 0 0.5rem 0 0.625rem;
    }
    @media (min-width: 840px) {
      margin: 3rem calc(100% / math.div(12, 2)) 0;
    }
    @media (min-width: 960px) {
      margin: 4rem 0 0;
      width: calc(((100vw - 2rem) / 12) * 5);
    }
    @media (min-width: 1312px) {
      margin-left: calc((1280px * 2) / 12);
      width: calc((1280px / 12) * 4);
    }
    .slogan {
      display: block;
      margin: 0 0 1.25rem;
      font-size: 1.25rem;
      font-weight: 900;
      text-align: center;
      line-height: 1.005;
      @media (min-width: 280px) {
        font-size: 2.25rem;
      }
      @media (min-width: 450px) {
        font-size: 3rem;
      }
      @media (min-width: 960px) {
        font-size: 3.75rem;
        text-align: left;
        span {
          display: block;
        }
      }
      @media (min-width: 1280px) {
        font-size: 5.5rem;
      }
    }
    .slogan_subtext {
      display: block;
      margin: 0.5rem 0 1.75rem;
      width: 100%;
      font-size: 1rem;
      font-weight: 400;
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
        font-family: var(--monospace);
        color: var(--c-website-bg);
        font-size: 0.875rem;
        @media (min-width: 840px) {
          font-size: 1rem;
        }
        text-align: center;
        font-weight: 500;
        text-decoration: none;
        background-color: var(--c-text);
        border-radius: 1.5rem;
        transition: 0.2s;
        &:hover,
        &:focus {
          background-color: var(--c-secondary-lighter);
          box-shadow: 0 .175rem .5rem 0 rgba(0,0,0,.4);
          transition: 0.2s;
        }
      }
      a.btn-docs {
        margin: 0 0 0.5rem;
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
      width: 2000px;
      margin: 0 0 0 5rem;
      margin-left: calc((100vw / 12) + 0.625rem);
      @media (min-width: 1280px) {
        margin-left: calc((1280px / 12) + 0.625rem);
      }
      img {
        width: auto;
        height: 100%;
        max-height: 780px;
        @media (min-width: 2200px) {
          max-height: 100%;
        }
      }
      @media (min-width: 1680px) {
        width: 60vw;
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
        box-shadow: 0 0.475rem 1.5rem 0.25rem rgba(0,0,0,.3);
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