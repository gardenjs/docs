<script>
  import Header from '../header/Header.svelte'
  import Headerintro from '../headerintro/Headerintro.svelte'
  import Footer from '../footer/Footer.svelte'
</script>

<Header showStripes showSkew>
  <Headerintro />
</Header>
<slot></slot>
<Footer showStripes />