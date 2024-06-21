<script>
    import ScreenshotDarkmode from '../../assets/images/screenshot_garden-dark.png'
    import ScreenshotLightmode from '../../assets/images/screenshot_garden.png'
</script>

<div class="app">
  <div class="app_header">
    <div class="menu-circle"></div>
  </div>
  <picture>
    <source srcset="{ScreenshotDarkmode}" media="all" data-media="(prefers-color-scheme:light)">
    <img src="{ScreenshotLightmode}" alt="Screenshot Garden app">
  </picture>
</div>

<style lang="scss">
  .app {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    max-width: 960px;
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
    img {
      width: auto;
      height: 100%;
      max-height: 780px;
      @media (min-width: 2200px) {
        max-height: 100%;
      }
    }
  }
</style>