<script>
  let now = new Date()

  export let hasBordertop = false
  export let isHome = false

  let bordertop = 'has-bt'
  let noborder = ''

  let ifhome = 'is-home'
  let nothome = ''
</script>

<footer class="footer {hasBordertop? bordertop : noborder} {isHome? ifhome : nothome}">
  <div class="footer_container">
    <div class="footer_copyright">
        <div>Gardenjs is released under the <a href="https://github.com/gardenjs/gardenjs?tab=MIT-1-ov-file" target="_blank" title="MIT License">MIT License</a>.<br><span class="copyright">&copy;</span> {now.getFullYear()} <a href="https://www.rabbitdevelopment.com">Rabbit Development</a>. All rights reserved.</div>
    </div>
    <div class="footer_nav">
      <nav>
        <ul>
          <li><a href="/legalnotice">Legal Notice</a></li>
          <li><a href="/privacypolicy">Privacy Policy</a></li>
        </ul>
      </nav>
    </div>
  </div>
</footer>

<style lang="scss">
  .footer {
    position: relative;
    padding: 0 1.5rem;
    overflow: hidden;
    &.has-bt {
      border-top: 1px solid var(--c-border);
    }
    .footer_container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      margin: 1rem auto;
      width: 100%;
      font-size: 0.813rem;
      color: var(--c-footer-text);
      text-align: center;
      @media (min-width: 1280px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: end;
        text-align: left;
      }
      @media (min-width: 1280px) {
        margin: 2rem auto;
        max-width: var(--w-website-wide);
      }
      .footer_copyright {
        order: 2;
        @media (min-width: 1280px) {
          order: 1;
          .copyright {
            font-size: 110%;
          }
        }
      }
      font-size: 0.813rem;
      @media (min-width: 960px) {
        font-size: 0.938em;
      }
      a {
        display: inline-block;
        font-size: 0.813rem;
        color: var(--c-primary-link);
        text-decoration: none;
        @media (min-width: 960px) {
          font-size: 0.938rem;
        }
        &:hover {
          color: var(--c-primary-link-hl);
        }
      }
      .footer_nav {
        order: 1;
        @media (min-width: 1280px) {
          order: 2;
          text-align: right;
        }
        ul {
          display: flex;
          li {
            display: inline-block;
            padding: 0 0.75rem;
            margin-bottom: 0.75rem;
            @media (min-width: 840px) {
              margin: 0;
              padding: 0 0 0 2rem;
            }
          }
        }
      }
    }
    &.is-home {
      .footer_copyright,
      .footer_nav li {
        font-family:"Gloria Hallelujah";
      }
    }
  }
</style>