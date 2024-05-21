<script>
  import '../assets/scss/main.scss'
  import Navbar from '../components/header/Navbar.svelte'
  import Vegetables from '../components/vegetables/Vegetables.svelte'
  import Footer from '../components/footer/Footer.svelte'
</script>

<Navbar isFixed />
<slot></slot>
<Vegetables />
<Footer />