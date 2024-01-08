<script>
	import Main from '../../components/layouts/Main.svelte'
  import ChapterIntro from '../../components/chapterintro/Chapterintro.svelte'
  import Subchapter from '../../components/subchapter/Subchapter.svelte'
  import Logos from '../../components/logos/Logos.svelte'
  import Blockquote from '../../components/blockquote/Blockquote.svelte'
  import Infobox from '../../components/infobox/Infobox.svelte'
</script>

<svelte:head>
	<title>Gardenjs Component Library Explorer</title>
	<meta name="description" content="This is the documentation of Gardenjs, the fast storybook alternative for React, Vue and Svelte projects." />
</svelte:head>

<Main hasHeaderintro>
  <ChapterIntro isPagetitle
    superscript="This is Gardenjs"
    pagetitle="An UI component library explorer for JS Frameworks"
    intro="Gardenjs is the showroom for what you grow: The explorer represents each UI component of your design system in isolation. Gardenjs is developed for projects of any size. Gardenjs is open source under the MIT license and free." />
  <Blockquote
    quote="«Building a frontend is like gardening. Grow your components and pages, maintain them and control their growth. Build great products and reap the rewards of your work!»"
    author="John Doe, coder & gardener" />
  <Subchapter
    title="In Gardenjs, your components grow at the speed of light"
    paragraph="Gardenjs is a Svelte app and thus benefits from its super speed. Gardenjs starts almost instantly within 2s. In action, code changes in Gardenjs are reflected by the Vite build tool at the speed of light — significantly faster than Storybook or comparable tools." />
  <Subchapter
    title="Use Gardenjs with your favorite JS framework"
    paragraph="Use Gardenjs out of the box with Svelte, Vue and React. If you want to use a previously unsupported framework, you can write a plugin with little effort, so that your components are rendered in Gardenjs as well. Or support us to integrate more frameworks." />
  <Logos />
  <Subchapter
    title="Use Gardenjs in multiframework projects"
    paragraph="You can use Gardenjs out of the box even in a multiframework project - Storybook and others can't do that." />
  <ChapterIntro
    superscript="Gardenjs overview"
    title="Benefits from the Gardenjs UI Explorer" />
  <div class="infoboxes">
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
    title="A brief insight into the development of Gardenjs"
    paragraph="Storybook is the top dog and a very powerful, great tool. So why Garden? Gardenjs was initially developt as a practice project to better understand the then-new framework Svelte. Right off the bat, Gardenjs was significantly faster than Storybook and all its alternatives. From then on, we used Gardenjs for all our projects. So Gardenjs was constantly maintained and extended with more features. Gardenjs now has all the essential functions needed to create, test and document UI components and is also comparatively easy to maintain and further develop. Gardenjs also does some things better than the alternatives. So we're late to the party but it would be a shame not to make Gardenjs available to everyone." />
  <Subchapter
    title="Contributions and donations are welcome"
    paragraph="Gardenjs is actively maintained. We will integrate some useful features in the future and are open for further requests. We are happy about your support. Please report bugs on Github." />
  <Subchapter
    title="Sponsors"
    paragraph="Become a sponsor to give us more scope for further development. We are grateful for this and will publish your logo and website URL in our README on Github and here on the Gardenjs website/documentation." />
</Main>

<style lang="scss">
.infoboxes {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
  margin: 0 0 2rem;
  @media (min-width: 840px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-bottom: 3rem;
  }
  @media (min-width: 960px) {
    margin: 0 0 5rem;
  }
}
</style>