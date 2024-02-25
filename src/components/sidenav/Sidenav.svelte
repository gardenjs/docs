<script>
  import { createEventDispatcher } from "svelte";
  
  const dispatch = createEventDispatcher();
  const links = [
    { href: "/docs/get-started/install", label: "Install" },
    { href: "/docs/get-started/settings", label: "Settings" },
    { href: "/docs/get-started/examples", label: "Examples (Stories)" }
  ];

  function handleClick() {
    dispatch("toggleMobilenav")
  }
</script>

<nav class="sidenav">
  <ul>
    <li>
      <span class="folder">Overview</span>
      <ul>
        <li><a href="/docs" on:click={handleClick}>About Gardenjs</a></li>
      </ul>
    </li>
    <li>
      <span class="folder">Get Started</span>
      <ul>
        {#each links as link}  
          <li><a href={link.href} on:click={handleClick}>{link.label}</a></li>
        {/each}
      </ul>
    </li>
    <li>
      <span class="folder">Add Renderer</span>
      <ul>
        <li><a href="/docs/renderer" on:click={handleClick}>Add Renderer</a></li>
      </ul>
    </li>
    <li>
      <span class="folder">Add Notes</span>
      <ul>
        <li><a href="/docs/notes" on:click={handleClick}>Add Notes</a></li>
      </ul>
    </li>
    <li>
      <span class="folder">What comes next?</span>
      <ul>
        <li><a href="/docs/roadmap" on:click={handleClick}>Roadmap</a></li>
      </ul>
    </li>
  </ul>
</nav>

<style lang="scss">
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
        letter-spacing: 0.063rem;
        .folder {
          display: block;
          margin: 0 0 0.5rem;
        }
        ul {
          margin: 0 0 1.5rem;
          padding-left: 0.375rem;
          border-left: 1px solid var(--c-border);
          li {
            padding: 0;
            a {
              margin: 0;
              padding: 0.5rem 1rem;
              font-size: 0.938rem;
              color: var(--c-text);
              line-height: 1.2;
              font-weight: 400;
              text-decoration: none;
              letter-spacing: 0.063rem;
              &:hover {
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