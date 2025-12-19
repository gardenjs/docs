<script>
  import Dashedline1 from '../../assets/images/dashedline_1.svg?raw'
  import Dashedline2 from '../../assets/images/dashedline_2.svg?raw'
  import Dashedline3 from '../../assets/images/dashedline_3.svg?raw'
  import Dashedline4 from '../../assets/images/dashedline_4.svg?raw'
  import Dashedline5 from '../../assets/images/dashedline_5.svg?raw'
  import Dashedline6 from '../../assets/images/dashedline_6.svg?raw'
  import Dashedline7 from '../../assets/images/dashedline_7.svg?raw'
  
  /**
   * @typedef {Object} Props
   * @property {string} [dashedlines1]
   * @property {string} [dashedlines2]
   * @property {string} [dashedlines3]
   * @property {string} [dashedlines4]
   * @property {string} [dashedlines5]
   * @property {string} [dashedlines6]
   * @property {string} [dashedlines7]
   */

  /** @type {Props} */
  let {
    dashedlines1 = '',
    dashedlines2 = '',
    dashedlines3 = '',
    dashedlines4 = '',
    dashedlines5 = '',
    dashedlines6 = '',
    dashedlines7 = ''
  } = $props();
</script>

{#if dashedlines1}
  <div class="dl-1">
    <div class="grid-helper"></div>
    <div class="small-displays">{@html Dashedline7}</div>
    <div class="big-displays">{@html Dashedline1}</div>
    <div class="dl_text dl-1_text"><div>This is Gardenjs</div></div>
  </div>
  {:else}
  {#if dashedlines2}
    <div class="dl dl-2">
      <div></div>
      <div>{@html Dashedline2}</div>
      <div class="dl_text"><div>ROFL</div></div>
    </div>
  {/if}
  {#if dashedlines3}
    <div class="dl dl-3">
      <div></div>
      <div>{@html Dashedline3}</div>
      <div class="dl_text"><div>Become a gardener</div></div>
    </div>
  {/if}
  {#if dashedlines4}
    <div class="dl dl-4">
      <div></div>
      <div>{@html Dashedline4}</div>
      <div class="dl_text"><div>Overview</div></div>
    </div>
  {/if}
  {#if dashedlines5}
    <div class="dl dl-5">
      <div></div>
      <div>{@html Dashedline5}</div>
      <div class="dl_text"><div>If you like Gardenjs</div></div>
    </div>
  {/if}
  {#if dashedlines6}
  <div class="dl dl-6">
    <div></div>
    <div>{@html Dashedline6}</div>
    <div class="dl_text"><div>Do you have any questions?</div></div>
  </div>
  {/if}
  {#if dashedlines7}
    <div class="dl dl-7">
      <div></div>
      <div>{@html Dashedline7}</div>
      <div class="dl_text"><div>And now get to the fruit!</div></div>
    </div>
  {/if}
{/if}

<style lang="scss">
  .dl {
    position: relative;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 80px 1fr;
    gap: 0px;
    height: 250px;
    width: 100%;
  }
  .dl_text {
    position: relative;
    overflow: hidden;
    font-family: "Gloria Hallelujah";
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--c-text);
    letter-spacing: 0.068rem;
    @media (min-width: 840px) {
      font-size: 0.938rem;
    }
    div {
      position: absolute;
    }
  }
  .dl-2 .dl_text div {
    top: 70%;
  }
  .dl-3 .dl_text div {
    top: 69%;
  }
  .dl-4 .dl_text div {
    top: 68%;
  }
  .dl-5 .dl_text div {
    top: 25%;
  }
  .dl-6 .dl_text div {
    top: 69%;
  }
  .dl-7 .dl_text div {
    top: 45%;
  }

  // first dashed line
  .dl-1 {
    position: relative;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 80px 1fr;
    gap: 0px;
    height: 250px;
    width: 100%;
    @media (min-width: 960px) {
      display: block;
    }
  }
  .dl-1_text {
    @media (min-width: 840px) {
      font-size: 0.938rem;
    }
    div {
      position: absolute;
      top: 45%;
      @media (min-width: 960px) {
        position: relative;
      }
    }
    @media (min-width: 960px) {
      position: absolute;
      top: 80%;
      right: 2.5rem;
      div {
        display: inline-block;
      }
    }
  }
  .grid-helper,
  .small-displays {
    display: block;
    @media (min-width: 960px) {
      display: none;
    }
  }
  .big-displays {
    display: none;
    @media (min-width: 960px) {
      display: block;
    }
  }
</style>