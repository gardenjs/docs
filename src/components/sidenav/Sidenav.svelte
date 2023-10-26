<script>
  const links = [
    { href: "#introduction", label: "Introduction" },
    { href: "#install-garden", label: "Install Garden" },
    { href: "#setup-garden", label: "Setup Garden" },
    { href: "#output-of-components", label: "Output of Components" },
    { href: "#stories", label: "Stories" },
    { href: "#write-docs", label: "Write docs" },
    // { href: "#screenshot-tests", label: "Screenshot Test" }
  ];
</script>

<nav class="sidenav">
  <div class="nav_label">v.1.0.x</div>
  <ul>
    {#each links as link}
      <li>
        <a href={link.href}>{link.label}</a>
      </li>
    {/each}
  </ul>
</nav>

<style lang="scss">
.nav_label {
  font-size: 1rem;
  color: var(--c-text);
  font-weight: 800;
}
.sidenav {
  @media (max-width: 767px) or (max-height: 449px) {
    .nav_label {
      margin: 0 0 0.25rem 0.75rem;
      text-align: center;
    }
    ul {
      text-align: center;
      li {
        display: inline-flex; 
        a {
          display: block;
          margin: 0.25rem 0.375rem;
          padding: 0.25rem 1rem;
          font-family: var(--monospace);
          color: var(--c-website-bg);
          font-size: 0.75rem;
          text-align: center;
          text-decoration: none;
          background-color: var(--c-text);
          border-radius: 1.5rem;
          transition: 0.2s;
          @media (min-width: 768px) {
            font-size: 1rem;
          }
          &:hover,
          &:focus {
            background-color: var(--c-secondary-lighter);
            box-shadow: 0 .175rem .5rem 0 rgba(0,0,0,.4);
            transition: 0.2s;
          }
        }
      }
    }
  }
  @media (min-width: 768px) and (min-height: 450px) {
    position: fixed;
    overflow-y: scroll;
    margin: 0 0 4rem;
    ul {
      display: block;
      li {
        a {
          padding: 0.5rem 2.5rem 0.5rem 0;
          font-size: 1rem;
          color: var(--c-primary);
          line-height: 1.3;
          font-weight: 400;
          text-decoration: none;
          border-right: 0.25rem solid transparent;
          &:hover {
            color: var(--c-primary-lighter);
          }
        }
      }
    }
  }
}
</style>