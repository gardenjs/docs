<nav class="sidenav">
  <ul>
    <li><a href=".#">Introduction</a></li>
    <li><a href=".#">Installation</a></li>
    <li><a href=".#">Quick Start</a></li>
    <li><a href=".#">Settings</a></li>
    <li><a href=".#">Project Setup</a></li>
    <li><a href=".#">Testing</a></li>
  </ul>
</nav>

<style lang="scss">
.sidenav {
  overflow-y: scroll;
  margin: 0 0 4rem;
  padding-right: 4rem;
  ul {
    display: block;
    li {
      a {
        padding: 0.5rem 0.25rem;
        font-size: 1.125rem;
        color: var(--c-primary);
        line-height: 1.3;
        font-weight: 400;
        text-decoration: none;
        &:hover {
          color: var(--c-primary-lighter);
          border-bottom: 1px solid (--c-primary-lighter);
        }
      }
    }
  }
}
</style>