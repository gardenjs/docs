<script>
  export let items = [];

  function toggleAccordion(index) {
    items = items.map((item, i) => {
      if (i === index) {
        return { ...item, isOpen: !item.isOpen };
      } else {
        return { ...item, isOpen: false };
      }
    });
  }
</script>

<div class="accordion">
  {#each items as item, index}
    <div class="accordion_item">
      <button class="accordion_btn {item.isOpen ? 'active' : ''}" on:click={() => toggleAccordion(index)}>
        <span class="accordion_label">{item.label}</span>
        {#if item.isOpen}
          <svg class="accordion_icon" role="img" xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
        {:else}
          <svg class="accordion_icon" role="img" xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
        {/if}
      </button>
      <div class="panel" aria-hidden={item.isOpen ? "false" : "true"} class:show={item.isOpen}>
        <div class="accordion_content">
          {@html item.content}
        </div>
      </div>
    </div>
  {/each}
</div>

<style lang="scss">
  .accordion {
    margin: 2rem 0;
    @media (min-width: 960px) {
      margin: 2rem 0 3rem;
    }
    @media (min-width: 1280px) {
      margin-top: 2rem 0 4rem;
    }
    .accordion_item {
      margin: 0 0 1rem;
      border: var(--b);
      border-radius: var(--b-radius);
      box-shadow: 0.25rem 0.25rem 0 -1px var(--c-text), 0.25rem 0.25rem 0 var(--c-text);
      transition: 0.4s;
      &:nth-last-of-type(even) {
        transform: rotateZ(-0.25deg);
      }
      &:nth-last-of-type(odd) {
        transform: rotateZ(0.25deg);
      }
      &:hover,
      &:focus-visible,
      &:has(.active) {
        box-shadow: 0 0 0 1px #fff, 0 0 0 #fff;
        transform: translate(0.25rem , 0.25rem );
        transform: rotateZ(0deg);
        transition: 0.4s;
      }
      .accordion_btn {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 0.75rem 1.5rem;
        cursor: pointer;
        @media (min-width: 840px) {
          padding: 1rem 2rem;
        }
        .accordion_icon {
          transition: .4s;
          font-size: 0.875rem;
          color: var(--c-text);
          width: 1rem;
          height: 1rem;
          @media (min-width: 960px) {
            width: 1.5rem;
            height: 1.5rem;
          }
        }
        &.active:hover .accordion_icon,
        &.active .accordion_icon {
          transition: .4s;
        }
        .accordion_label {
          display: block;
          margin-right: 1rem;
          font-size: 1rem;
          color: var(--c-text);
          font-variation-settings: 'wght' 500;
          text-align: left;
          line-height: 1.25;
          @media (min-width: 840px) {
            font-size: 1.125rem;
          }
          @media (min-width: 960px) {
            font-size: 1.25rem;
          }
          @media (min-width: 1280px) {
            font-size: 1.375rem;
          }
        }
      }
      .panel {
        max-height: 0;
        overflow: hidden;
        opacity: 0;
        transition: .4s;
        &.show {
          opacity: 1;
          max-height: 1000px;
          transition: .4s;
        }
        .accordion_content {
          margin: 0.25rem 0 0 0.25rem;
          padding: 0 1.5rem 1.5rem;
          @media (min-width: 840px) {
            padding: 0 2rem 2rem;
          }
        }
      }
    }
  }
</style>