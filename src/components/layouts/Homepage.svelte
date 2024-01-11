<script>
  import Header from '../header/Header.svelte'
  import Vegetables from '../vegetables/Vegetables.svelte'
  import Footer from '../footer/Footer.svelte'
</script>

<Header showHeaderintro showSkew />
<slot></slot>
<Vegetables />
<Footer />