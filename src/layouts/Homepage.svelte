<script>
  import '../assets/scss/main.scss'
  import Header from '../components/header/Header.svelte'
  import Vegetables from '../components/vegetables/Vegetables.svelte'
  import Footer from '../components/footer/Footer.svelte'
</script>

<Header showHeaderintro />
<slot></slot>
<Vegetables isHome />
<Footer />