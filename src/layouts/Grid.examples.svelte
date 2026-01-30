<script>
  import Grid from './Grid.svelte'

  /**
   * @typedef {Object} Props
   * @property {number} [columns]
   */

  /** @type {Props} */
  let { columns = 2 } = $props()
</script>

<Grid {columns}>
  <div>Slot 1</div>
  <div>Slot 2</div>
  <div>Slot 3</div>
  <div>Slot 4</div>
  <div>Slot 5</div>
  <div>Slot 6</div>
  <div>Slot 7</div>
  <div>Slot 8</div>
  <div>Slot 9</div>
</Grid>

<style>
  div {
    padding: 1rem;
    height: 100px;
    background-color: #eee;
  }
</style>
