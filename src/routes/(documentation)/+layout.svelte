<script>
  import '../../assets/scss/main.scss'
  import Documentation from '../../components/layouts/Documentation.svelte'
</script>

<Documentation>
  <slot></slot>
</Documentation>

<style lang="scss">
  :global(.md_file) {
    padding-top: 10rem;
  }
  :global(.md_file):first-of-type {
    margin-top: -10rem;
    @media (min-width: 840px) {
      margin-top: -8rem;
    }
    @media (min-width: 960px) {
      margin-top: -5rem;
    }
  }
  :global(.md_file):last-of-type {
    margin-bottom: 0;
  }
</style>