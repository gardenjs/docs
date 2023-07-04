<script>
  import Header from '../header/Header.svelte'
  import Headerintro from '../headerintro/Headerintro.svelte'
  import Footer from '../footer/Footer.svelte'
</script>

<Header showStripes showSkew>
  <Headerintro />
</Header>
<slot></slot>
<Footer />

<style lang="scss">
.cols-3 {
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 1rem;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    margin-bottom: 2rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>