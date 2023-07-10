<script>
  export let title
  export let paragraph
</script>

<div class="infobox">
  <h3>{title}</h3>
  <p>{paragraph}</p>
</div>

<style lang="scss">
.infobox {
  padding: 1.25rem;
  border-radius: 1rem;
  background-color: var(--c-bg-box);
  h3 {
    margin: 0 0 0.5rem;
    color: var(--c-text-box);
  }
  p {
    color: var(--c-text-box);
    margin: 0;
    line-height: 1.4;
  }
}
</style>