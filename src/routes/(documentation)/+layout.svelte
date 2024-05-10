<script>
  import Documentation from '../../layouts/Documentation.svelte'
  import {page} from '$app/stores'
</script>

<Documentation url={$page.url.pathname}>
  <slot></slot>
</Documentation>