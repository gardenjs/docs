<script>
  import Grid from './Main.svelte';

  export let columns = 2;
</script>

<Grid columns={columns}>
  <div>Main content</div>
</Grid>

<style>
  div {
    padding: 1rem;
    height: 500px;
    background-color: #eee;
  }
</style>