<script>
  import ChapterHead from './Chapterhead.svelte'
  import Grid from '../../layouts/Grid.svelte'
  import Card from '../card/Card.svelte'

  /**
   * @typedef {Object} Props
   * @property {any} [cards]
   * @property {string} [pagetitle]
   * @property {string} [title]
   * @property {string} [chaptertext]
   * @property {number} [columns]
   * @property {any} bgColor
   */

  /** @type {Props} */
  let {
    cards = [],
    pagetitle = '',
    title = '',
    chaptertext = '',
    columns = 1,
    bgColor
  } = $props();

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