<script>
  import ChapterIntro from './Chapterintro.svelte'
  import Grid from '../../layouts/Grid.svelte'
  import Card from './Card.svelte'

  export let cards = []
  export let title = ''
  export let intro = ''
  export let columns = 1
  export let pagetitle = ''
  export let bgColor

</script>

<ChapterIntro
  title={title}
  pagetitle={pagetitle}
  intro={intro} />
<Grid columns={columns}>
  {#each cards as {title, paragraph, rotation}, i}
    <Card
      bgColor={bgColor}
      rotation={rotation}
      columns={columns}
      title={title}
      paragraph={paragraph} />
  {/each}
</Grid>