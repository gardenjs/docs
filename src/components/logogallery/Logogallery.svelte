<script>
  import Line2Logos from '../../assets/images/line2logos.svg?raw'
  import Line2Blockquote from '../../assets/images/line2blockquote.svg?raw'

</script>

<div class="logo_gallery">
  <ul class="logos">
    <li>{@html Line2Logos}</li>
    <li><svg class="icon" role="img" viewBox="0 0 107 128" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><g fill-rule="nonzero"><path d="M99.965 16.936C88.08-.075 64.605-5.118 47.632 5.696L17.823 24.695A34.21 34.21 0 002.373 47.6a36.024 36.024 0 003.551 23.121A34.317 34.317 0 00.809 83.503a36.46 36.46 0 006.226 27.561c11.888 17.014 35.362 22.054 52.333 11.24l29.809-18.999A34.207 34.207 0 00104.626 80.4a36.035 36.035 0 00-3.549-23.122 34.288 34.288 0 005.114-12.78 36.444 36.444 0 00-6.226-27.56" fill="#ff3e00"/><path d="M44.72 112.665c-9.587 2.492-19.769-1.282-25.414-9.42A21.926 21.926 0 0115.56 86.67a20.83 20.83 0 01.713-2.783l.56-1.712 1.528 1.121a38.438 38.438 0 0011.66 5.827l1.109.336-.103 1.106a6.691 6.691 0 001.202 4.432 7.144 7.144 0 007.653 2.84 6.6 6.6 0 001.83-.805l29.81-18.996a6.21 6.21 0 002.801-4.15 6.624 6.624 0 00-1.129-4.996 7.149 7.149 0 00-7.655-2.842 6.585 6.585 0 00-1.828.805l-11.375 7.251a21.755 21.755 0 01-6.053 2.658c-9.586 2.493-19.768-1.282-25.414-9.42a21.923 21.923 0 01-3.745-16.574 20.569 20.569 0 019.292-13.774l29.807-18.997a21.776 21.776 0 016.057-2.662c9.586-2.492 19.768 1.282 25.413 9.42A21.926 21.926 0 0191.44 41.33a21.006 21.006 0 01-.714 2.783l-.56 1.712-1.526-1.12a38.411 38.411 0 00-11.662-5.828l-1.109-.336.103-1.107a6.704 6.704 0 00-1.202-4.432 7.146 7.146 0 00-7.653-2.84 6.6 6.6 0 00-1.83.805l-29.81 18.998a6.2 6.2 0 00-2.799 4.148 6.616 6.616 0 001.127 4.997 7.15 7.15 0 007.655 2.841 6.6 6.6 0 001.83-.805l11.375-7.248a21.679 21.679 0 016.051-2.66c9.586-2.493 19.77 1.281 25.414 9.42a21.92 21.92 0 013.745 16.574 20.578 20.578 0 01-9.291 13.775l-29.807 18.997a21.776 21.776 0 01-6.058 2.661" fill="#fff"/></g></svg></li>
    <li><svg class="icon" role="img" viewBox="0 0 148 128" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path d="M91.09 0L74 29.557 56.91 0H0l74 128L148 0H91.09z" fill="#42b883" fill-rule="nonzero"/><path d="M91.09 0L74 29.557 56.91 0H29.597L74 76.798 118.403 0H91.09z" fill="#35495e" fill-rule="nonzero"/></svg></li>
    <li><svg class="icon" role="img" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><circle r="2.05" fill="#61dafb" transform="translate(64.053 64) scale(5.50477)"/><g transform="matrix(5.5 0 0 5.50477 64 64)" fill="none" stroke="#61dafb"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg></li>
    <li><svg class="icon placeholder" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3a2 2 0 0 0-2 2"/><path d="M19 3a2 2 0 0 1 2 2"/><path d="M21 19a2 2 0 0 1-2 2"/><path d="M5 21a2 2 0 0 1-2-2"/><path d="M9 3h1"/><path d="M9 21h1"/><path d="M14 3h1"/><path d="M14 21h1"/><path d="M3 9v1"/><path d="M21 9v1"/><path d="M3 14v1"/><path d="M21 14v1"/></svg></li>
    <li>{@html Line2Blockquote}</li>
  </ul>
</div>

<style lang="scss">
  .logo_gallery {
    text-align: center;
    margin: 1rem auto;
    @media (min-width: 960px) {
      margin: 4rem auto;
    }
    @media (min-width: 1280px) {
      margin: 1rem auto;
    }
  }
  .logos {
    display: inline-flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
    li {
      display: inline-block;
      margin: 0 1rem;
      .icon {
        font-size: 1.5rem;
        @media (min-width: 960px) {
          font-size: 2rem;
        }
        @media (min-width: 1280px) {
          font-size: 2.25rem;
        }
      }
      .placeholder {
        path {
          stroke: var(--c-text-light);
        }
      }
    }
  }
</style>