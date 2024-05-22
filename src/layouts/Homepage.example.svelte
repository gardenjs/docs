<script>
  import Homepage from './Homepage.svelte';
  import Main from './Main.svelte';
</script>

<Homepage>
  <Main hasHeaderhead isWide>
    <div>Main content area...</div>
  </Main>
</Homepage>

<style>
  div {
    padding: 1rem;
    background-color: #eee;
  }
</style>