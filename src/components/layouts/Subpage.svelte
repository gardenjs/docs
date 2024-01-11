<script>
  import Header from '../header/Header.svelte'
  import Footer from '../footer/Footer.svelte'
</script>

<Header isSticky />
  <slot></slot>
<Footer />