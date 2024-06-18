<script>
	import Main from '../../layouts/Main.svelte'
  import ChapterHead from '../../components/chapter/Chapterhead.svelte'
  import Chapter from '../../components/chapter/Chapter.svelte';
  import Logogallery from '../../components/logogallery/Logogallery.svelte'
  import Blockquote from '../../components/blockquote/Blockquote.svelte'
  import Accordion from '../../components/accordion/Accordion.svelte'
  import Dashedline2 from '../../components/dashedlines/Dashedlines.svelte'
  import Dashedline3 from '../../components/dashedlines/Dashedlines.svelte'
  import Dashedline4 from '../../components/dashedlines/Dashedlines.svelte'
  import Dashedline5 from '../../components/dashedlines/Dashedlines.svelte'
  import Dashedline6 from '../../components/dashedlines/Dashedlines.svelte'
  import Dashedline7 from '../../components/dashedlines/Dashedlines.svelte'

  const chapter1cards = [
    {
      title:"Speed of light",
      text:"Gardenjs starts almost instantly within 2s. In action, code changes in Gardenjs are reflected by the Vite build tool at the speed of light — significantly faster than Storybook or comparable tools." ,
      rotation: 'left',
    },
    {
      title:"Fast and efficient handling",
      text:"Gardenjs offers simple configuration and ensures the uncomplicated, fast and efficient integration of components in Gardenjs." ,
      rotation: 'right',
    },
    {
      title:"Use your favorite JS framework",
      text:"Use Gardenjs out of the box with Svelte, Vue and React. If you want to use a previously unsupported framework, you can write a plugin with little effort, so that your components are rendered in Gardenjs as well. Please support us to integrate more frameworks." ,
      rotation: 'right',
    },
    {
      title:"Multi-framework compatible",
      text:"You can also use Gardenjs in a multiframework project by adding another renderer plugin - Storybook and others cannot." ,
      rotation: 'left',
    },
    {
      title: 'Hooks',
      text: 'With Gardenjs, you can integrate hooks into your components as a versatile and effective way of creating state and effect logic.',
      rotation: 'left',
    },
    {
      title: 'Decorators',
      text: 'Components can be extended and customized with Decorators to add additional features and behaviors in Gardenjs - without changing the actual code of the component.',
      rotation: 'right',
    },
    {
      title: 'The sleek good-looking alternative',
      text: 'The efficient integration into your framework, numerous features and a clearly organized, beautiful interface make working with Gardenjs a real experience.',
      rotation: 'right',
    },
    {
      title: 'Open source and free',
      text: 'Gardenjs is open source and can be used free of charge. We are of course still happy to receive support.',
      rotation: 'left',
    }
  ]
  const chapter2cards = [
    {
      title: 'Organisation',
      text: 'Keep track of the countless components left in large projects and ensure the quality of your work. You can also output an external local library within a project.',
      rotation: 'left'
    },
    {
      title: 'Usability',
      text: 'A well thought-out concept, simple operation and numerous small features help to make everyday development work easier.',
      rotation: 'right',
    },
    {
      title: 'Representation',
      text: 'Preview components in different viewport sizes and rotations or in a separate browser window. The size of the stage is shown in pixel size.',
      rotation: 'left',
    },
    {
      title: 'Collaboration',
      text: 'Publish your component libraries inside your team or to public to simplify collaboration between designers and developers.',
      rotation: 'right',
    },
    {
      title: 'Examples',
      text: 'Write examples to showcase and document your components. Output all versions and states of your components.',
      rotation: 'left',
    },
    {
      title: 'Documentation',
      text: 'Add any additional information to your components and examples and keep track of all components and for the whole team.',
      rotation: 'right',
    }
  ]
  const chapter3cards = [
    {
      title: 'Support us',
      text: 'You can support us by using Gardenjs, writing a plugin for a new framework (which we will then gladly point out), reporting bugs, giving feedback, making a contribution or writing documentation. We look forward to your support.',
      rotation: 'left',
    },
    {
      title: 'Make a donation',
      text: 'A donation and sponsoring model is planned if Gardenjs is well received. A list of possible future features can be found in the documentation. Please contact us if you would like to sponsor one of the features.',
      rotation: 'right',
    }
  ]
  const accordionItems = [
    {
      label: 'Why have we developed another storybook?',
      content: '<p>We developed Gardenjs for two reasons: Firstly, Storybook was clearly too slow and a bit too cluttered for us, and secondly, we were enthusiastic about Svelte and wanted to get to know the framework better with an example project. We initially used Gardenjs for our own projects, but since it does some things better than alternative tools, we have now released it. As enthusiastic users of open source software, this gives us the opportunity to give something back.</p>'
    },
    { 
      label: 'Why is Gardenjs better than the alternatives around Storybook?',
      content: '<p>The question is provocative and of course each tool has its own advantages and disadvantages. Certainly, the top dog also covers many features that are not or not yet integrated in Gardenjs. But Gardenjs is definitely much faster and leaner. In our opinion, "stories" can be created more efficiently with Gardenjs, the handling is smoother and the option to work with decorators is more flexible. In addition, Gardenjs is multiframework-compatible, unlike Strorybook. And of course Gardenjs looks much better ;) Much is a matter of taste, form your own opinion - we look forward to your feedback.</p>'
    },
    {
      label: 'What is the business model of Gardenjs?',
      content: '<p>We have developed Gardenjs for our own development work. We do not see a market for a paid version or paid functions. Of course, we would appreciate help with the further maintenance and integration of new functions. If Gardenjs is accepted, we will also consider a sponsoring and donation program.</p>'
    },
    { 
      label: 'Is Gardenjs being actively developed?',
      content: '<p>We will actively maintain Gardenjs, as we use Gardenjs in many of our projects. Gardenjs is relatively easy to maintain. Whether and how actively we will work through the <a href="/docs/roadmap">roadmap</a> depends on our own needs for Gardenjs and to a large extent on how well Gardenjs is accepted and how much support we receive.</p>'
    },
    {
      label: 'Do you have further questions or is there something on your mind?',
      content: '<p>If you have any problems, please first look in the <a href="/docs">documentation</a> or check whether there is an issue for your problem on <a href="https://github.com/gardenjs/gardenjs" target="_blank">GitHub</a> and otherwise open a new issue. We look forward to your feedback and support. Please feel free to contact us.</p>'
    }
  ];
</script>

<svelte:head>
	<title>Gardenjs UI Component Explorer</title>
	<meta name="description" content="Gardenjs is the fast component UI explorer for JavaScript frameworks like Svelte, Vue and React." />
</svelte:head>

<Main hasHeaderhead isWide>
  <ChapterHead isPagetitle
    pagetitle="UI component library explorer for JS frameworks"
    chaptertext="Gardenjs promotes modular and reusable code, streamlines collaboration between team members and increases overall productivity. Gardenjs is MIT licensed and free." />
  <Logogallery />
  <Dashedline2 dashedlines2 />
  <Blockquote
    quote="«Building a frontend is like gardening. Grow your components and layouts, maintain them and control their growth. Build great products and reap the rewards of your work!»"
    author="John Doe, coder & gardener" />
  <Dashedline3 dashedlines3 />
  <Chapter
    title="Why Gardenjs?"
    chaptertext="Gardenjs supports efficient frontend development with its intuitive user interface, easy integration into projects and super-fast execution."
    columns=2
    bgColor="yellow"
    cards={chapter1cards}>
  </Chapter>
  <Dashedline4 dashedlines4 />
  <Chapter
    title="Your benefits"
    chaptertext="Gardenjs supports efficient frontend development with its intuitive user interface, easy integration into projects and super-fast execution."
    columns=3
    bgColor="turquoise"
    cards={chapter2cards}>
  </Chapter>
  <Dashedline5 dashedlines5 />
  <Chapter
    title="Would you like to get involved?"
    chaptertext="Gardenjs is published under the MIT license and free to use. We are therefore particularly pleased about your support."
    columns=2
    cards={chapter3cards}>
  </Chapter>
  <Dashedline6 dashedlines6 />
  <ChapterHead
    title="FAQ" />
  <Accordion items={accordionItems}/>
  <Dashedline7 dashedlines7 />
</Main>