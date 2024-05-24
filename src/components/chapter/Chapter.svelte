<script>
  import ChapterHead from './Chapterhead.svelte'
  import Grid from '../../layouts/Grid.svelte'
  import Card from '../card/Card.svelte'

  export let cards = []
  export let pagetitle = ''
  export let title = ''
  export let chaptertext = ''
  export let columns = 1
  export let bgColor

</script>

<ChapterHead
  title={title}
  pagetitle={pagetitle}
  chaptertext={chaptertext} />
<Grid columns={columns}>
  {#each cards as card, i}
    <Card
      bgColor={bgColor}
      rotation={card.rotation}
      columns={columns}
      title={card.title}
      text={card.text} />
  {/each}
</Grid>