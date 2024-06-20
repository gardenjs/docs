<script>
  export let dashedlines1 = ''
  export let dashedlines2 = ''
  export let dashedlines3 = ''
  export let dashedlines4 = ''
  export let dashedlines5 = ''
  export let dashedlines6 = ''
  export let dashedlines7 = ''

  import Dashedline1 from '../../assets/images/dashedline_1.svg?raw'
  import Dashedline2 from '../../assets/images/dashedline_2.svg?raw'
  import Dashedline3 from '../../assets/images/dashedline_3.svg?raw'
  import Dashedline4 from '../../assets/images/dashedline_4.svg?raw'
  import Dashedline5 from '../../assets/images/dashedline_5.svg?raw'
  import Dashedline6 from '../../assets/images/dashedline_6.svg?raw'
  import Dashedline7 from '../../assets/images/dashedline_7.svg?raw'
</script>

{#if dashedlines1}
  <div class="dashed">
    <div class="dashed_label dashed-01_label">This is Gardenjs</div>
    <div class="svg">{@html Dashedline1}</div>
  </div>
{:else}
  <div class="dashed">
    {#if dashedlines2}
      <div class="svg">{@html Dashedline2}</div>
      <div class="dashed_label dashed-02_label">ROFL</div>
    {/if}
    {#if dashedlines3}
      <div class="svg">{@html Dashedline3}</div>
      <div class="dashed_label dashed-03_label">Become a gardener</div>
    {/if}
    {#if dashedlines4}
      <div class="svg">{@html Dashedline4}</div>
      <div class="dashed_label dashed-04_label">Overview</div>
    {/if}
    {#if dashedlines5}
      <div class="svg">{@html Dashedline5}</div>
      <div class="dashed_label dashed-05_label">If you like Gardenjs</div>  
    {/if}
    {#if dashedlines6}
      <div class="svg">{@html Dashedline6}</div>
      <div class="dashed_label dashed-06_label">Do you have any questions?</div>
    {/if}
    {#if dashedlines7}
      <div class="svg">{@html Dashedline7}</div>
      <div class="dashed_label dashed-07_label">And now get to the fruit!</div>
    {/if}
  </div>
{/if}

<style lang="scss">
  .dashed {
    position: relative;
    overflow: hidden;
    height: 250px;
    width: 100%;
  }
  .dashed_label {
    font-family:"Gloria Hallelujah";
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--c-text);
    letter-spacing: 0.068rem;
    @media (min-width: 840px) {
      font-size: 0.938rem;
    }
  }
  .dashed-01_label {
    position: absolute;
    right: 2rem;
    bottom: 1.5rem;
  }
  .dashed-02_label,
  .dashed-03_label,
  .dashed-04_label,
  .dashed-05_label,
  .dashed-06_label,
  .dashed-07_label {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  }
  .dashed-02_label {
    top: 70%;
    margin: 0 0 0 4rem;
  }
  .dashed-03_label {
    top: 72%;
    margin: 0 0 0 8rem;
  }
  .dashed-04_label {
    top: 70%;
    margin: 0 0 0 5.5rem;
  }
  .dashed-05_label {
    top: 25%;
    margin: 0 0 0 8rem;
  }
  .dashed-06_label {
    top: 71%;
    margin: 0 0 0 10rem;
  }
  .dashed-07_label {
    top: 45%;
    margin: 0 0 0 10rem;
  }
  .svg {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
</style>