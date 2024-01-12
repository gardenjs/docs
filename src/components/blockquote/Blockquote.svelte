<script>
  export let quote
  export let author
</script>

<blockquote class="blockquote">
  <svg class="icon" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zm12 0c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
  <p class="quote">{quote}</p>
  <span class="author">{author}</span>
</blockquote>

<style lang="scss">
  .blockquote {
    margin: 2rem 0;
    @media (min-width: 840px) {
      margin: 3rem 0;
    }
    @media (min-width: 960px) {
      margin: 5rem 0;
    }
    .icon {
      margin: 0 0 0.75rem;
      font-size: 1.25rem;
      color: var(--c-primary);
      @media (min-width: 840px) {
        font-size: 1.5rem;
      }
      @media (min-width: 1280px) {
        font-size: 2rem;
      }
    }
    .quote {
      max-width: 100%;
      font-size: 1rem;
      color: var(--c-headlines);
      font-weight: 800;
      font-style: italic;
      text-align: left;
      @media (min-width: 450px) {
        font-size: 1.25rem;
      }
      @media (min-width: 840px) {
        font-size: 1.5rem;
      }
      @media (min-width: 1280px) {
        font-size: 1.75rem;
      }
    }
    .author {
      display: block;
      margin: 0.75rem 0 0;
      font-family: var(--monospace);
      font-size: 0.875rem;
      color: var(--c-secondary);
      text-align: right;
      @media (min-width: 450px) {
        font-size: 1rem;
      }
      @media (min-width: 840px) {
        font-size: 1.125rem;
      }
      @media (min-width: 1280px) {
        font-size: 1.25rem;
      }
    }
  }
</style>