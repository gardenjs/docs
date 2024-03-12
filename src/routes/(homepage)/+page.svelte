<script>
	import Main from '../../layouts/Main.svelte'
  import ChapterIntro from '../../components/chapterintro/Chapterintro.svelte'
  import Cards from '../../components/cards/Cards.svelte'
  import Logogallery from '../../components/logogallery/Logogallery.svelte'
  import Blockquote from '../../components/blockquote/Blockquote.svelte'
  import Accordion from '../../components/accordion/Accordion.svelte'
</script>

<svelte:head>
	<title>Gardenjs UI Component Explorer</title>
	<meta name="description" content="Gardenjs is the fast component UI explorer for JavaScript frameworks like Svelte, Vue and React." />
</svelte:head>

<Main hasHeaderintro isWide>
  <ChapterIntro isPagetitle
    superscript="This is Gardenjs"
    pagetitle="UI component library explorer for JS frameworks"
    intro="Gardenjs promotes modular and reusable code, streamlines collaboration between team members and increases overall productivity. Gardenjs is MIT licensed and free." />
  <Logogallery />
  <Blockquote
    quote="«Building a frontend is like gardening. Grow your components and layouts, maintain them and control their growth. Build great products and reap the rewards of your work!»"
    author="John Doe, coder & gardener" />
  <ChapterIntro
    superscript="Become a gardener"
    title="Why Gardenjs?"
    intro="With its intuitive user interface, easy and efficient integration into projects and super-fast execution of changes, it enables developers to efficiently create great user experiences." />
  <div class="cards-2cols">
    <Cards
      title="Speed of light"
      paragraph="Gardenjs is a Svelte app and thus benefits from its super speed. Gardenjs starts almost instantly within 2s. In action, code changes in Gardenjs are reflected by the Vite build tool at the speed of light — significantly faster than Storybook or comparable tools." />
    <Cards
      title="Use your favorite JS framework"
      paragraph="Use Gardenjs out of the box with Svelte, Vue and React. If you want to use a previously unsupported framework, you can write a plugin with little effort, so that your components are rendered in Gardenjs as well. Or support us to integrate more frameworks." />
    <Cards
      title="Multi-framework compatible"
      paragraph="You can use Gardenjs out of the box even in a multiframework project - Storybook and others can't do that." />
    <Cards
      title="The sleek good-looking alternative"
      paragraph="The efficient integration into your framework, numerous features and a clearly organized, beautiful interface make working with Gardenjs a real experience." />
  </div>
  <ChapterIntro
    superscript="Gardenjs overview"
    title="Your benefits"
    intro="Create, organize and share components effortlessly. Speed up the development process, improve teamwork and provide users with a consistent user experience." />
  <div class="cards-3cols">
    <Cards isHgCard
      title="Organisation"
      paragraph="Keep track of the countless components even in large projects and ensure the quality of your work. You can also output an external local library within a project." />
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
      title="Examples"
      paragraph="Write examples to showcase and document your components. Output all versions and states of your components." />
    <Cards isHgCard
      title="Documentation"
      paragraph="Add any additional information to your components and examples and keep track of all components and for the whole team." />
  </div>
  <ChapterIntro
    superscript="If you like Gardenjs"
    title="Would you like to get involved?"
    intro="Gardenjs is published under the MIT license and free to use. We are therefore particularly pleased about your support." />
  <div class="cards-2cols">
    <Cards
      title="Support us"
      paragraph="You can support us by using Gardenjs, writing a plugin for a new framework (which we will then gladly point out), reporting bugs, giving feedback, making a contribution or writing documentation. We look forward to your support." />
    <Cards
      title="Make a donation"
      paragraph="A donation model is planned if Gardenjs is well received. A list of possible features can be found in the documentation. Please contact us if you would like to have one of the features integrated as soon as possible." />
  </div>
  <ChapterIntro
    title="FAQ" />
  <Accordion />
</Main>

<style lang="scss">
.cards-2cols,
.cards-3cols {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  margin: 1.5rem 0 0;
  @media (min-width: 840px) {
    margin: 2rem 0 0;
  }
  @media (min-width: 960px) {
    gap: 1.5rem;
    margin: 2.5rem 0 0;
  }
}
@media (min-width: 600px) {
  .cards-2cols {
    grid-template-columns: repeat(2, 1fr);
  }
  .cards-3cols {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 960px) {
  .cards-3cols {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>