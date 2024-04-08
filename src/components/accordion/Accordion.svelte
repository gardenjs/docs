<script>

  let items = [
    { label: 'Why have we developed another storybook?', content: '<p>We started developing Gardenjs for two reasons: Storybook was clearly too slow and we wanted to get to know Svelte better. First, we used Gardenjs for our own projects and finally released it as open source because it does some things better than alternative tools. As users of open source software, we now have the opportunity to give something back.</p>' },
    { label: 'Why is Gardenjs better than the alternatives around Storybook?', content: '<p>The question is provocative and of course each tool has its own advantages and disadvantages. Certainly, the top dog also covers many features that are not or not yet integrated in Gardenjs. Gardenjs is definitely much faster and leaner. In our opinion, "stories" can be created more efficiently with Gardenjs and the option to work with decorators is more flexible. Gardenjs also looks better ;) Much is a matter of taste, form your own opinion - we look forward to your feedback.</p>' },
    { label: 'What is the business model of Gardenjs?', content: '<p>We have developed Gardenjs for our own development work. We do not see a market for a paid version or paid functions. However, we would appreciate help with the further maintenance and integration of new functions. If Gardenjs is accepted, we will also consider a sponsoring or donation program.</p>' },
    { label: 'Is Gardenjs being actively developed?', content: '<p>We will actively maintain Gardenjs, as we use Gardenjs in many of our projects. Gardenjs is relatively easy to maintain. Whether and how actively we will work through the roadmap (see Docs) depends on our own needs for Gardenjs and to a large extent on how well Gardenjs is accepted and how much support we receive.</p>' }
  ];

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
      margin: 0 0 0.75rem;
      border: var(--b);
      border-radius: var(--b-radius);
      box-shadow: 0.25rem 0.25rem 0 -1px var(--c-text), 0.25rem 0.25rem 0 var(--c-text);
      border-radius: var(--b-radius);
      transition: 0.4s;
      &:hover,
      &:focus {
        box-shadow: 0 0 0 1px #fff, 0 0 0 #fff;
        transform: translate(0.25rem , 0.25rem );
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