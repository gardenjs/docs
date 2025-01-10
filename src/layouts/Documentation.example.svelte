<script>
  import Documentation from './Documentation.svelte';

  let { sidenavFolders = [] } = $props();
</script>

<Documentation sidenavFolders={sidenavFolders}>
  <div>Slot...</div>
</Documentation>

<style>
  div {
    padding: 1rem;
    background-color: #eee;
  }
</style>