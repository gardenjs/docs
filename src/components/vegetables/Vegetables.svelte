<script>
  import Vegetables from '../../assets/icons/vegetables.svg'

  export let isHome = false

  let ifhome = 'is-home'
  let nothome = ''

</script>

<div class="vegetables {isHome? ifhome : nothome}">
  <img src="{Vegetables}" alt="Vegetable illustration">
</div>

<style lang="scss">
  .vegetables {
    display: flex;
    justify-content: center;
    position: relative;
    margin: 4rem auto;
    @media (min-width: 960px) {
      margin-top: 6rem;
    }
    @media (min-width: 1280px) {
      width: 100%;
      margin-top: 8rem;
    }
    img {
      width: 66.6%;
      @media (min-width: 480px) {
        width: 50%;
      }
      @media (min-width: 600px) {
        padding: 0 0.5rem 0 0.625rem;
      }
      @media (min-width: 840px) {
        width: 375px;
      }
    }
    &.is-home {
      margin: 2rem auto;
      @media (min-width: 960px) {
        margin-top: 2rem;
      }
      @media (min-width: 1280px) {
        margin-top: 2.5rem;
      }
    }
  }
</style>