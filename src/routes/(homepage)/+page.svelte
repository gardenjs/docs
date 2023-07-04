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

<Main showStripes>
  <ChapterIntro
    superscript="This is Garden"
    pagetitle="An UI component library explorer for JS Frameworks"
    intro="Garden is the showroom for what you grow: The explorer represents each UI component of your design system in isolation. Garden is developed for Frontend projects of any size. Garden is open source and free." />
  <Subchapter
    title="In Garden, your components grow at the speed of light"
    paragraph="Garden is a Svelte app and thus benefits from its super speed. Garden starts almost instantly within 2s. In action, code changes in Garden are reflected by the Vite build tool at the speed of light — significantly faster than Storybook or comparable tools." />
  <Subchapter
    title="Use Garden with your favorite JS framework"
    paragraph="Use Garden out of the box with Svelte, Vue and React or simply integrate it into your favorite framework." />
  <Logos />
  <Blockquote
    quote="«Building a frontend is like gardening. Grow your components and pages, maintain them and control their growth. Build great products and reap the rewards of your work!»"
    author="John Doe, coder & gardener" />
  <ChapterIntro
    superscript="This is Garden"
    title="Benefits from the Garden UI Explorer" />
  <div class="cols-3">
    <Infobox
      title="Organisation"
      paragraph="Keep track of the countless components even in large projects and ensure the quality of your work." />
    <Infobox
      title="Usability"
      paragraph="The navigation maps the file structure of your project. Use the search form to find your component in the navigation." />
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
</Main>