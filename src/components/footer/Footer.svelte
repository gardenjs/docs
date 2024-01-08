<script>
  let now = new Date()
</script>

<footer class="footer">
  <div class="footer_container">
    <div class="footer_copyright">
      <div class="footer_copyright-container">
        <svg class="icon" width="24" viewBox="0 0 24 24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path d="M18.328 2.132a5.15 5.15 0 00-.744-.055c-2.158 0-3.827 1.343-4.94 2.65C11.574 2.187 9.9.556 7.885.106A4.425 4.425 0 006.922 0C4.5 0 1.874 2.021.682 4.806c-1.204 2.81-.812 5.876 1.166 9.113 1.991 3.259 4.476 6.094 6.88 8.836l.495.566c.188.415.546.679.933.679a.93.93 0 00.471-.133l.869-.502c3.015-1.742 6.133-3.542 8.894-5.924 2.742-2.364 3.932-5.138 3.536-8.244-.4-3.128-2.602-6.626-5.598-7.065zm3.642 8.805c-.098 2.657-2.66 4.562-4.356 5.824-2.311 1.719-4.795 3.17-7.206 4.567-1.957-2.237-3.972-4.552-5.739-7.056-1.276-1.81-3.206-4.545-2.591-7.106.555-2.314 2.606-4.79 4.774-4.79.14 0 .28.01.416.03 2.508.382 3.601 3.282 3.974 4.615-.016.269.058.531.213.751.207.292.526.466.856.466.343 0 .653-.192.852-.528.578-.976 2.164-3.245 4.422-3.245.238 0 .479.026.716.078 2.217.482 3.765 3.774 3.669 6.394z" fill-rule="nonzero"/></svg>
        <div>Released under the <a href="https://opensource.org/license/mit/" target="_blank" title="Open MIT License">MIT License</a>. Copyright © 2020 - {now.getFullYear()} <a href="https://www.rabbitdevelopment.de">Rabbit Development</a>.</div>
      </div>
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
  background-color: var(--c-footer-bg);
  overflow: hidden;
  z-index: 3;
  @media (min-width: 600px) {
    padding: 0 1rem;
    &::before {
      position: absolute;
      content: '';
      top: 0rem;
      left: 0;
      width: 100%;
      height: 0.063rem;
      background-size: 0.75rem 0.063rem;
    }
  }
  .footer_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    margin: 1rem auto;
    padding: 0 0.5rem;
    width: 100%;
    font-size: 0.813rem;
    color: var(--c-footer-text);
    text-align: center;
    @media (min-width: 840px) {
      justify-content: space-between;
      flex-direction: row;
      text-align: left;
    }
    @media (min-width: 960px) {
      font-size: 1rem;
    }
    @media (min-width: 1140px) {
      margin: 2rem auto;
    }
    @media (min-width: 1312px) {
      padding: 0.5rem;
      max-width: var(--w-website);
    }
    .footer_copyright {
      z-index: 9;
      order: 2;
      @media (min-width: 840px) {
        order: 1;
      }
      .footer_copyright-container {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 0.75rem 0 0;
        .icon {
          margin-right: 0.75rem;
          fill: var(--c-primary);
          font-size: 0.875em;
        }
      }
    }
    a {
      display: inline-block;
      font-size: 0.813rem;
      color: var(--c-primary);
      text-decoration: none;
      @media (min-width: 960px) {
        font-size: 1rem;
      }
      &:hover {
        color: var(--c-primary-lighter);
      }
    }
    .footer_nav {
      z-index: 9;
      order: 1;
      @media (min-width: 840px) {
        order: 2;
        text-align: right;
      }
      ul {
        li {
          display: inline-block;
          padding: 0 0.75rem;
          margin-bottom: 0.75rem;
          @media (min-width: 840px) {
            margin: 0;
            padding: 0 0 0 1.5rem;
          }
        }
      }
    }
  }
}
</style>