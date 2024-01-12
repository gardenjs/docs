<script>
  import Header from '../header/Header.svelte'
  import Vegetables from '../vegetables/Vegetables.svelte'
  import Footer from '../footer/Footer.svelte'
</script>

<Header isFixed />
<slot></slot>
<Vegetables />
<Footer />