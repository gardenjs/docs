<script>
	import Main from '../../components/layouts/Main.svelte'
  import ChapterIntro from '../../components/chapterintro/Chapterintro.svelte'
  import Subchapter from '../../components/subchapter/Subchapter.svelte'
  import Logos from '../../components/logos/Logos.svelte'
  import Blockquote from '../../components/blockquote/Blockquote.svelte'
  import Infobox from '../../components/infobox/Infobox.svelte'
</script>

<svelte:head>
	<title>Garden Component Library Explorer</title>
	<meta name="description" content="This is the documentation of Garden, the fast storybook alternative for React, Vue and Svelte projects." />
</svelte:head>

<Main hasHeaderintro showStripes>
  <ChapterIntro isPagetitle
    superscript="This is Garden"
    pagetitle="An UI component library explorer for JS Frameworks"
    intro="Garden is the showroom for what you grow: The explorer represents each UI component of your design system in isolation. Garden is developed for projects of any size. Garden is open source under the MIT license and free." />
  <Blockquote
    quote="«Building a frontend is like gardening. Grow your components and pages, maintain them and control their growth. Build great products and reap the rewards of your work!»"
    author="John Doe, coder & gardener" />
  <Subchapter
    title="In Garden, your components grow at the speed of light"
    paragraph="Garden is a Svelte app and thus benefits from its super speed. Garden starts almost instantly within 2s. In action, code changes in Garden are reflected by the Vite build tool at the speed of light — significantly faster than Storybook or comparable tools." />
  <Subchapter
    title="Use Garden with your favorite JS framework"
    paragraph="Use Garden out of the box with Svelte, Vue and React. If you want to use a previously unsupported framework, you can write a plugin with little effort, so that your components are rendered in Garden as well. Or support us to integrate more frameworks." />
  <Logos />
  <Subchapter
    title="Use Garden in multiframework projects"
    paragraph="You can use Garden out of the box even in a multiframework project - Storybook and others can't do that." />
  <ChapterIntro
    superscript="Garden overview"
    title="Benefits from the Garden UI Explorer" />
  <div class="cols-3">
    <Infobox
      title="Organisation"
      paragraph="Keep track of the countless components even in large projects and ensure the quality of your work." />
    <Infobox
      title="Usability"
      paragraph="A well thought-out concept, simple operation and numerous small features help to make everyday development work easier." />
    <Infobox
      title="Representation"
      paragraph="Preview components in different viewport sizes and orientations or in a separate browser window. The size of the stage is shown in pixel size." />
    <Infobox
      title="Collaboration"
      paragraph="Publish your component libraries inside your team or to public to simplify collaboration between designers and developers." />
    <Infobox
      title="Stories"
      paragraph="Write stories to showcase and document your components. Output all versions and states of your components." />
    <Infobox
      title="Documentation"
      paragraph="Add any additional information to your components and stories and keep track of all components and for the whole team." />
  </div>
  <ChapterIntro
    superscript="Our story"
    title="Why another tool like Storybook?" />
  <Subchapter
    title="We're late to the party"
    paragraph="Storybook is the top dog and a very powerful, great tool. So why Garden? Garden was created as a practice project to better understand the then-new framework Svelte. Right off the bat, Garden was significantly faster than Storybook and its alternatives. From then on, we used Garden for all our projects. So Garden was constantly maintained and extended with more features. By now, Garden is mature and has all the essential features needed to build, test and document UI components.  Garden is comparatively easy to develop further and also does a few things better than the alternatives. So it would be a shame not to make Garden available to everyone." />
  <Subchapter
    title="Contributions and donations are welcome"
    paragraph="Garden is actively maintained. We will integrate some useful features in the future and are open for further requests. We are happy about your support. Please report bugs on Github." />
</Main>

<style lang="scss">
  .cols-3 {
    margin: 0 0 2rem;
    @media (min-width: 840px) {
      margin: 0 0 3rem;
    }
    @media (min-width: 960px) {
      margin: 0 0 5rem;
    }
  }
</style>