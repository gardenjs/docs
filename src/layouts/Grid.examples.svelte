<script>
  import Grid from './Grid.svelte';

  export let columns = 2;
</script>

<Grid columns={columns}>
  <div>Grid container 1</div>
  <div>Grid container 2</div>
  <div>Grid container 3</div>
  <div>Grid container 4</div>
  <div>Grid container 5</div>
  <div>Grid container 6</div>
  <div>Grid container 7</div>
  <div>Grid container 8</div>
  <div>Grid container 9</div>
</Grid>

<style>
  div {
    padding: 1rem;
    height: 100px;
    background-color: #eee;
  }
</style>