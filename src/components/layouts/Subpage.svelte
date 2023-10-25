<script>
  import Header from '../header/Header.svelte'
  import Footer from '../footer/Footer.svelte'
</script>

<Header showStripes isSticky />
<slot></slot>
<Footer />