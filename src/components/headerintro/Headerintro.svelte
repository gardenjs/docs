<div class="header_intro">
  <div class="header_text">
    <div class="slogan"><span>Plant. </span><span>Cultivate. </span><span>Harvest.</span></div>
    <p class="h1">A lightweight open source tool that helps you build, test and document UI components and pages. Build UI component libraries and design systems hand in hand in your frontend projects and explore your work.</p>
    <div class="btn-header">
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
.header_intro {
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2,1fr);
  }
  .header_text {
    margin: 4.5rem 0 0;
    @media (min-width: 768px) {
      width: 50vw;
    }
    @media (min-width: 1140px) {
      width: 570px;
    }
    .slogan {
      display: block;
      margin: 0 0 1.25rem;
      font-size: 3.75rem;
      font-weight: 900;
      text-align: center;
      line-height: 1.005;
      @media (min-width: 768px) {
        font-size: 5.5rem;
        text-align: left;
        span {
          display: block;
        }
      }
    }
    .h1 {
      display: block;
      margin: 0.5rem 0 1.75rem;
      width: 100%;
      font-size: 1.125rem;
      font-weight: 400;
      text-align: center;
      @media (min-width: 768px) {
        font-size: 1.25rem;
        text-align: left;
      }
    }
    .btn-header {
      display: flex;
      justify-content: center;
      margin: 0 0 6rem;
      @media (min-width: 768px) {
        justify-content: flex-start;
      }
      a {
        margin: 0 1rem 0 0;
        padding: 0.375rem 1.25rem;
        font-family: var(--monospace);
        color: var(--c-website-bg);
        font-size: 0.875rem;
        @media (min-width: 768px) {
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
        background-color: var(--c-primary);
        &:hover,
        &:focus {
          background-color: var(--c-primary-lighter);
        }
      }
    }
  }
  // header img
  @media (max-width: 768px) {
    .header_img {
      display: none;
    }
  }
  @media (min-width: 769px) {
    .header_img {
      .app {
        background-color: var(--c-app-bg);
        display: flex;
        flex-direction: column;
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 0.563rem;
        backdrop-filter: blur(1.25rem);
        box-shadow: 0 0.475rem 1.5rem 0.25rem rgba(0,0,0,.3);
        .app_header {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          height: 1.875rem;
          width: 100%;
          border-bottom: 1px solid var(--c-app-border);
          padding: 0 0.75rem;
          white-space: nowrap;
          @media screen and (max-width: 480px) {
            padding: 0 16px;
          }
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
  @media (min-width: 769px) and (max-width: 1680px) {
    .header_img {
      position: relative;
      overflow: hidden;
      width: 2000px;
      margin: 0 0 0 5rem;
      img {
        width: auto;
        height: 100%;
        max-height: 780px;
      }
    }
  }
  @media (min-width: 1680px) {
    .header_img {
      width: 50vw;
      margin: 0 0 0 5rem;
    }
  }
}
</style>