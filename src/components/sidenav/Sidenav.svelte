<script>
  const links = [
    { href: "/docs/get-started/install", label: "Install" },
    { href: "/docs/get-started/setup", label: "Setup" },
    { href: "/docs/get-started/output", label: "Output" },
  ];
</script>

<nav class="sidenav">
  <ul>
    <li class="single-item">
      <a href="/docs">About</a>
    </li>
    <li>
      <a href=/docs/get-started/install>Get Started</a>
      <ul>
        {#each links as link}  
          <li>
            <a href={link.href}>{link.label}</a>
          </li>
        {/each}
      </ul>
    </li>  
    <li class="single-item">
      <a href="/docs/stories">Stories</a>
    </li>
    <li class="single-item">
      <a href="/docs/documentation/add-notes">Add Notes</a>
    </li>
    <li class="single-item">
      <a href="/">Add Frameworks</a>
    </li>
  </ul>
</nav>

<style lang="scss">
  .sidenav {
    @media (max-width: 839px) {
      display: none;
    }
    @media (min-width: 840px) {
      position: fixed;
      overflow-y: scroll;
      margin: 2rem 0 4rem;
      @media (min-width: 960px) {
        margin: 5rem 0 4rem;
      }
      ul {
        display: block;
        li {
          &.single-item {
            margin: 0 0 1rem;
          }
          a {
            padding: 0.25rem 0;
            font-size: 0.875rem;
            color: var(--c-text);
            line-height: 1.3;
            font-weight: 600;
            text-decoration: none;
            letter-spacing: 0.125rem;
            &:hover {
              color: var(--c-primary);
            }
          }
          ul {
            margin: 0 0 1rem;
            li {
              a {
                padding-left: 0.75rem;
                font-weight: 400;
                transition: 0.2s;
                border-left: 1px solid var(--c-text);
              }
            }
          }
        }
      }
    }
  }
</style>