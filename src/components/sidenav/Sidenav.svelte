<script>
  const links = [
    { href: "#introduction", label: "Introduction" },
    { href: "#install-garden", label: "Install Garden" },
    { href: "#setup-garden", label: "Setup Garden" },
    { href: "#output-of-components", label: "Output of Components" },
    { href: "#stories", label: "Stories" },
    { href: "#write-docs", label: "Write docs" },
    { href: "#screenshot-tests", label: "Screenshot Test" }
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
.sidenav {
  position: fixed;
  overflow-y: scroll;
  margin: 0 0 4rem;
  .nav_label {
    margin: 0 0 0.5rem;
    font-size: 1rem;
    color:  var(--c-text);
    font-weight: 600;
  }
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
</style>