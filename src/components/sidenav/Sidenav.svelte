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
    <li class="single-item">
      <a href="/docs" on:click={handleClick}>About</a>
    </li>
    <li>
      <a href="/docs/get-started/install" on:click={handleClick}>Get Started</a>
      <ul>
        {#each links as link}  
          <li>
            <a href={link.href} on:click={handleClick}>{link.label}</a>
          </li>
        {/each}
      </ul>
    </li>
    <li class="single-item">
      <a href="/docs/renderer" on:click={handleClick}>Add Renderer</a>
    </li>
    <li class="single-item">
      <a href="/docs/notes" on:click={handleClick}>Add Notes</a>
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
        &.single-item {
          margin: 0 0 0.5rem;
        }
        a {
          padding: 0.5rem;
          font-size: 0.938rem;
          color: var(--c-text);
          line-height: 1.2;
          font-weight: 700;
          text-decoration: none;
          letter-spacing: 0.063rem;
          &:hover {
            background-color: var(--c-link-bg);
            border-radius: 0.5rem;
          }
        }
        ul {
          margin: 0 0 1rem;
          li {
            a {
              padding: 0.375rem 0.5rem;
              font-weight: 400;
              transition: 0.2s;
            }
          }
        }
      }
    }
  }
</style>