<script>
  /**
   * @typedef {Object} Props
   * @property {string} [slogan]
   * @property {string} [subtext]
   */

  /** @type {Props} */
  let { slogan = '', subtext = '' } = $props()
</script>

<div class="slogan">{@html slogan}</div>
<p class="slogan_subtext">{subtext}</p>

<style lang="scss">
  .slogan {
    display: block;
    margin: 0 0 1.25rem;
    font-variation-settings: 'wght' 900;
    font-size: 2.5rem;
    color: var(--c-headline);
    line-height: 1;
    text-align: center;
    @media (min-width: 280px) {
      font-size: 3.25rem;
    }
    @media (min-width: 450px) {
      font-size: 4rem;
    }
    @media (min-width: 960px) {
      font-size: 5.5rem;
      text-align: left;
      line-height: 0.9;
      @media (min-width: 1280px) {
        font-size: 6.5rem;
      }
    }
  }
  .slogan_subtext {
    display: block;
    margin: 0 0 1.75rem;
    font-family: 'Gloria Hallelujah';
    font-size: 1rem;
    color: var(--c-text-light);
    text-align: center;
    @media (min-width: 840px) {
      font-size: 1.125rem;
    }
    @media (min-width: 960px) {
      text-align: left;
    }
    @media (min-width: 1280px) {
      font-size: 1.25rem;
    }
  }
</style>
