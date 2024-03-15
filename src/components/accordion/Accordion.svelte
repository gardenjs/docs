<script>

  let items = [
    { label: 'Why have we developed another storybook?', content: 'We started developing Gardenjs for two reasons: Storybook was clearly too slow and we wanted to get to know Svelte better. First, we used Gardenjs for our own projects and finally released it as open source because it does some things better than alternative tools. As users of open source software, we now have the opportunity to give something back.' },
    { label: 'Why is Gardenjs better than the alternatives around Storybook?', content: 'The question is provocative and of course each tool has its own advantages and disadvantages. Certainly, the top dog also covers many features that are not or not yet integrated in Gardenjs. Gardenjs is definitely much faster and leaner. In our opinion, "stories" can be created more efficiently with Gardenjs and the option to work with decorators is more flexible. Gardenjs also looks better ;) Much is a matter of taste, form your own opinion - we look forward to your feedback.' },
    { label: 'What is the business model of Gardenjs?', content: 'We have developed Gardenjs for our own development work. We do not see a market for a paid version or paid functions. However, we would appreciate help with the further maintenance and integration of new functions. If Gardenjs is accepted, we will also consider a sponsoring or donation program.' },
    { label: 'Is Gardenjs being actively developed?', content: 'We will actively maintain Gardenjs, as we use Gardenjs in many of our projects. Gardenjs is relatively easy to maintain. Whether and how actively we will work through the roadmap (see Docs) depends on our own needs for Gardenjs and to a large extent on how well Gardenjs is accepted and how much support we receive.' }
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
        <span class="accordion_icon"><svg role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg></span>
      </button>
      <div class="panel" aria-hidden={item.isOpen ? "false" : "true"} class:show={item.isOpen}>
        <div class="accordion_content">
          {item.content}
        </div>
      </div>
    </div>
  {/each}
</div>

<style lang="scss">
  .accordion {
    margin: 2rem 0 0;
    .accordion_item {
      margin: 0 0 0.375rem;
      .accordion_btn {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 0.75rem 1.5rem;
        border: 0;
        border-radius: var(--b-radius);
        background: var(--c-quote-bg);
        cursor: pointer;
        @media (min-width: 840px) {
          padding: 1rem 2rem;
        }
        &.active {
          border-radius: var(--b-radius) var(--b-radius) 0 0;
          transition: .2s;
        }
        .accordion_icon {
          transition: .2s;
          svg {
            font-size: 0.875rem;
            color: var(--c-text);
            @media (min-width: 768px) {
              font-size: 2.75rem;
            }
          }
        }
        &.active:hover .accordion_icon,
        &.active .accordion_icon {
          transform: rotate(90deg);
          transition: .2s;
        }
        .accordion_label {
          display: block;
          line-height: 1.25;
          font-size: 1rem;
          color: var(--c-text);
          font-variation-settings: 'wght' 700;
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
        &.show {
          opacity: 1;
          max-height: 1000px;
          transition: .2s;
        }
        .accordion_content {
          margin: 0rem;
          padding: 1.5rem;
          border-radius: 0 0 var(--b-radius) var(--b-radius);
          border: 3px solid var(--c-quote-bg);
          transition: .2s;
          font-size: 0.875rem;
          @media (min-width: 840px) {
            padding: 2rem;
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
    }
  }
</style>