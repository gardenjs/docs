<script>
    import { createEventDispatcher } from "svelte";

const dispatch = createEventDispatcher();
  const links = [
    { href: "/docs/get-started/install", label: "Install" },
    { href: "/docs/get-started/setup", label: "Setup" },
    { href: "/docs/get-started/output", label: "Output" },
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
      <a href="/docs/stories" on:click={handleClick}>Stories</a>
    </li>
    <li class="single-item">
      <a href="/docs/documentation/add-notes" on:click={handleClick}>Add Notes</a>
    </li>
    <li class="single-item">
      <a href="/" on:click={handleClick}>Add JS Frameworks</a>
    </li>
  </ul>
</nav>

<style lang="scss">
  .sidenav {
    // @media (max-width: 839px) {
    //   display: none;
    // }
    position: fixed;
    overflow-y: scroll;
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
          line-height: 1.2;
          font-weight: 600;
          text-decoration: none;
          letter-spacing: 0.063rem;
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
</style>