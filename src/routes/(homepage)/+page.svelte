<script>
	import Main from '../../layouts/Main.svelte'
  import ChapterIntro from '../../components/chapterintro/Chapterintro.svelte'
  import Cards from '../../components/cards/Cards.svelte'
  import Logogallery from '../../components/logogallery/Logogallery.svelte'
  import Blockquote from '../../components/blockquote/Blockquote.svelte'
</script>

<svelte:head>
	<title>Gardenjs UI Component Explorer</title>
	<meta name="description" content="Gardenjs is the fast component UI explorer for JavaScript frameworks like Svelte, Vue and React." />
</svelte:head>

<Main hasHeaderintro isWide>
  <ChapterIntro isPagetitle
    superscript="This is Gardenjs"
    pagetitle="An UI component library explorer for JS Frameworks"
    intro="Gardenjs is the showroom for what you grow: The explorer represents each UI component of your design system in isolation. Gardenjs is developed for projects of any size. Gardenjs is open source under the MIT license and free." />
  <Logogallery />
  <Blockquote
    quote="«Building a frontend is like gardening. Grow your components and pages, maintain them and control their growth. Build great products and reap the rewards of your work!»"
    author="John Doe, coder & gardener" />
  <ChapterIntro
    superscript="Become a gardener"
    title="Why Gardenjs is so cool" />
  <div class="grid-2cols">
  <Cards
    title="In Gardenjs, your components grow at the speed of light"
    paragraph="Gardenjs is a Svelte app and thus benefits from its super speed. Gardenjs starts almost instantly within 2s. In action, code changes in Gardenjs are reflected by the Vite build tool at the speed of light — significantly faster than Storybook or comparable tools." />
  <Cards
    title="Use Gardenjs with your favorite JS framework"
    paragraph="Use Gardenjs out of the box with Svelte, Vue and React. If you want to use a previously unsupported framework, you can write a plugin with little effort, so that your components are rendered in Gardenjs as well. Or support us to integrate more frameworks." />
  <Cards
    title="Use Gardenjs in multiframework projects"
    paragraph="You can use Gardenjs out of the box even in a multiframework project - Storybook and others can't do that." />
    <Cards
    title="Sleek good-looking alternative"
    paragraph="You can use Gardenjs out of the box even in a multiframework project - Storybook and others can't do that." />
  </div>
  <ChapterIntro
    superscript="Gardenjs overview"
    title="Your benefits" />
  <div class="grid-2cols">
    <Cards isHgCard
      title="Organisation"
      paragraph="Keep track of the countless components even in large projects and ensure the quality of your work." />
    <Cards isHgCard
      title="Usability"
      paragraph="A well thought-out concept, simple operation and numerous small features help to make everyday development work easier." />
    <Cards isHgCard
      title="Representation"
      paragraph="Preview components in different viewport sizes and orientations or in a separate browser window. The size of the stage is shown in pixel size." />
    <Cards isHgCard
      title="Collaboration"
      paragraph="Publish your component libraries inside your team or to public to simplify collaboration between designers and developers." />
    <Cards isHgCard
      title="Stories"
      paragraph="Write stories to showcase and document your components. Output all versions and states of your components." />
    <Cards isHgCard
      title="Documentation"
      paragraph="Add any additional information to your components and stories and keep track of all components and for the whole team." />
  </div>
  <ChapterIntro
    superscript="If you like Gardenjs"
    title="We look forward to your help" />
  <Cards
    title="Contributions are welcome"
    paragraph="Gardenjs is actively maintained. We will integrate some useful features in the future and are open for further requests. We are happy about your support. Please report bugs on Github." />
</Main>

<style lang="scss">
.grid-2cols {
  margin: 0 0 1rem;
  @media (min-width: 840px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin: 1rem 0 0;
  }
  @media (min-width: 960px) {
    gap: 1.5rem;
    margin: 1.5rem 0 0;
  }
}
</style>