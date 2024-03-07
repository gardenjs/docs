<script>
  import { createEventDispatcher } from "svelte";
  import { page } from '$app/stores';
  
  const dispatch = createEventDispatcher();

  const overview = [{ href: "/docs", label: "Why Gardenjs" }];
  const getstarted = [
    { href: "/docs/get-started/install", label: "Install" },
    { href: "/docs/get-started/install-renderer", label: "Install Renderer Plugin" },
    { href: "/docs/get-started/settings", label: "Settings" },
    { href: "/docs/get-started/examples", label: "Examples" },  
    { href: "/docs/get-started/decorators", label: "Decorators" }
  ];
  const renderer = [{ href: "/docs/renderer", label: "Write New Renderer" }];
  const notes = [{ href: "/docs/notes", label: "Add Notes" }];
  const roadmap = [{ href: "/docs/roadmap", label: "Roadmap" }];

  function handleClick() {
    dispatch("toggleMobilenav");
  }
</script>

<div class="sidenav_heading">Documentation</div>
<nav class="sidenav">
  <ul>
    <li>
      <span class="sidenav_folder">Overview</span>
      <ul>
        {#each overview as link}  
          <li>
            <a href={link.href} class:active={$page.url.pathname === link.href} on:click={handleClick}>{link.label}</a>
          </li>
        {/each}
      </ul>
    </li>
    <li>
      <span class="sidenav_folder">Get Started</span>
      <ul>
        {#each getstarted as link}  
          <li>
            <a href={link.href} class:active={$page.url.pathname === link.href} on:click={handleClick}>{link.label}</a>
          </li>
        {/each}
      </ul>
    </li>
    <li>
      <span class="sidenav_folder">Renderer</span>
      <ul>
        {#each renderer as link}  
          <li>
            <a href={link.href} class:active={$page.url.pathname === link.href} on:click={handleClick}>{link.label}</a>
          </li>
        {/each}
      </ul>
    </li>
    <li>
      <span class="sidenav_folder">Add Notes</span>
      <ul>
        {#each notes as link}  
          <li>
            <a href={link.href} class:active={$page.url.pathname === link.href} on:click={handleClick}>{link.label}</a>
          </li>
        {/each}
      </ul>
    </li>
    <li>
      <span class="sidenav_folder">What comes next?</span>
      <ul>
        {#each roadmap as link}  
          <li>
            <a href={link.href} class:active={$page.url.pathname === link.href} on:click={handleClick}>{link.label}</a>
          </li>
        {/each}
      </ul>
    </li>
  </ul>
</nav>

<style lang="scss">
  .sidenav_heading {
    @media (max-width: 839px) {
      display: none;
    }
    @media (min-width: 840px) {
      margin: 0 0 1.5rem;
      font-size: 1.25rem;
      color: var(--c-secondary);
      font-weight: 700;
      letter-spacing: 0.063rem;
    }
  }
  .sidenav {
    position: sticky;
    overflow-y: scroll;
    ul {
      display: block;
      li {
        font-size: 0.938rem;
        color: var(--c-text);
        line-height: 1.2;
        font-weight: 700;
        .sidenav_folder {
          display: block;
          margin: 0 0 0.5rem;
          letter-spacing: 0.063rem;
        }
        ul {
          margin: 0 0 1.5rem;
          padding-left: 0.375rem;
          border-left: 1px solid var(--c-border);
          li {
            padding: 0;
            a {
              margin: 0.25rem 0;
              padding: 0.375rem 0.75rem;
              font-size: 0.938rem;
              color: var(--c-text);
              line-height: 1.2;
              font-weight: 400;
              text-decoration: none;
              &:hover {
                background-color: var(--c-link-bg);
                border-radius: 0.5rem;
              }
              &.active {
                color: var(--c-link);
                font-weight: 600;
                background-color: var(--c-link-bg);
                border-radius: 0.5rem;
              }
            }
          }
        }
      }
    }
  }
</style>