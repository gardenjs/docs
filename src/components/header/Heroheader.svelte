<script>
  import Slogan from './Slogan.svelte'
  import Linkbutton from './Linkbutton.svelte'
  import Applicationimage from './Applicationimage.svelte'
  import Dashedline from '../dashedlines/Dashedlines.svelte'
  import { base } from '$app/paths';

</script>

<div class="heroheader">
  <div class="heroheader_infos">
    <Slogan
      slogan="Plant, Cultivate,<br><i>Harvest!</i>"
      subtext="Gardenjs provides a centralized platform for developers to create, test and present UI components and pages in isolation." >
    </Slogan>
    <div class="heroheader_links">
      <Linkbutton isExternal
        link="./"
        btnlabel="Demo coming soon"
        bgColor="turquoise">
      </Linkbutton>
      <Linkbutton
        link="{base}/docs"
        btnlabel="Documentation"
        bgColor="">
      </Linkbutton>
    </div>
    <Dashedline dashedlines1 />
  </div>
  <div class="heroheader_img">
    <Applicationimage />
  </div>
</div>

<style lang="scss">
  .heroheader {
    position: relative;
    margin: auto;    
    @media (min-width: 960px) {
      display: grid;
      grid-template-columns: repeat(2,540px 1fr);
    }
    @media (min-width: 1280px) {
      width: var(--w-website-wide);
    }
    .heroheader_infos {
      margin: 2rem 0 0;
      padding: 0 0 1rem;
      .heroheader_links {
        @media (min-width: 480px) {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0 1rem;
          margin: 0 0 2rem;
        }
      }
    }
    .heroheader_img {
      @media (max-width: 959px) {
        display: none;
      }
      @media (min-width: 960px) {
        position: relative;
        overflow: hidden;
        width: 960px;
        margin: 0 0 0 5rem;
        border-radius: 0.563rem;
      }
    }
  }
</style>