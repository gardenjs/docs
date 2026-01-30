<script>
  import '../assets/scss/main.scss'
  import Navbar from '../components/header/Navbar.svelte'
  import Vegetables from '../components/vegetables/Vegetables.svelte'
  import Footer from '../components/footer/Footer.svelte'
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { children } = $props()
</script>

<Navbar isFixed />
{@render children?.()}
<Vegetables />
<Footer />
