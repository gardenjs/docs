<script>
  import Header from '../header/Header.svelte'
  import LeftRight from '../layouts/LeftRight.svelte'
  import Sidenav from '../sidenav/Sidenav.svelte'
  import Footer from '../footer/Footer.svelte'
</script>

<Header showSidenav />
<div class="main">
  <div class="main_container">
    <LeftRight>
      <div slot="left" class="sidebar">
        <Sidenav />
      </div>
      <div slot="right" class="content">
        <h1 id="component-library-explorer">Component library explorer</h1>
        <p>Garden is a lightweight UI explorer for JavaScript frontend libraries that helps you build, test and display UI components and pages. Svelte[, Vue and React] are currently supported out of the box. Other libraries can also be easily connected to Garden.
        <br><br></p>
        <h2 id="this-is-garden">This is Garden</h2>
        <p>Garden is the showroom for what you grow. The explorer represents each component of your design system in isolation. The different states of the components are also shown. Garden is developed for JavaScript frontend projects of any size. Code changes are reflected at the speed of light by the build tool Vite. Garden is an MIT-licensed open source project.
        <br><br></p>
        <h2 id="getting-started-examples-for-svelte-">Getting Started (Examples for Svelte)</h2>
        <p>Install Garden inside your project root with NPM: [not yet, now: instead: checkout garden in garden base folder: &#39;npm link&#39; or &#39;sudo npm link&#39;]</p>
        <pre><code class="lang-console">npm install --<span class="hljs-built_in">save</span>-<span class="hljs-built_in">dev</span> garden
        </code></pre>
        <p>[not yet ...]
        Follow the installation routine.</p>
        <p>In the root directory you will now find your Garden configuration file &#39;garden.config.js&#39; to adapt Garden to your project.
        [... not yet!]</p>
        <p>Svelte example configuration for your garden.config.json file:</p>
        <p>Add those directories to &quot;structure&quot; &gt; &quot;custom&quot; that are to be displayed on the first level of the Garden Navigation.</p>
        <h3 id="initialize-garden">Initialize Garden</h3>
        <p>Initialize Garden in the root of the project directory:</p>
        <pre><code class="lang-bash"><span class="hljs-keyword">run</span><span class="bash"> initGarden</span>
        </code></pre>
        <h3 id="run-garden">Run Garden</h3>
        <p>Run <code>serveGarden</code> from the root of the project. Or add it to your <code>package.json</code> there and run it via <code>npm run garden</code> :</p>
        <h3 id="configure-garden-with-project-specific-settings">Configure Garden with project-specific settings</h3>
        <p>With the garden.config.js you have various options to customize Garden to suit your project. Take a look at the file for a quick overview of the options already implemented. Here you can also make your own individual adjustments with JavaScript, e.g. to switch between your different themes.</p>
        <h3 id="open-garden">Open Garden</h3>
        <p>Open Garden in the browser via <code>http://localhost:&lt;serverport&gt;/garden</code>. The server port is defined in <code>garden.config.js</code>, the default setting is 3010.
        <br><br></p>
        <h2 id="output-of-components-and-pages-add-variants-or-states-and-add-a-documentation-description">Output of components (and pages), add variants or states and add a documentation/description</h2>
        <p>In order to be able to output variants or states of components, you must create two additional files in the component directory:</p>
        <p>With a <code>&lt;component&gt;.example.svelte</code> file you create all variants/states of the component. It then looks like this, for example:</p>
        <p>Create a file <code>&lt;component&gt;.das.js</code> so that the variants/states are output in the panel and the navigation below the stage.</p>
        <p>A description or documentation for the component can also be added here. This is shown in a separate tab in the panel. This text can also be created as markdown. Alternatively, a path can point to a markdown file, which is then rendered in the tab. The suffix &lt;.md&gt; triggers the linking.</p>
        <p>It then looks like this, for example:</p>
        <p><br></p>
        <h2 id="license">License</h2>
        <p>MIT
        <br><br></p>
        <h2 id="todo-s">Todo´s</h2>
        <h3 id="v1-0">v1.0</h3>
        <ul>
        <li>[refactor] Move logic to own file. Handle user interaction.</li>
        <li>[task] Add garden as dist with compiled js &amp; scss files (vite?).</li>
        <li>[task] Install script / commandline skeleton project (example component.)</li>
        <li>[task] Make Garden compatible with Vue &amp; React.</li>
        <li>[feature] Docker image for screenshot test.</li>
        <li>[task] Project website (garden website) as svelte project.</li>
        <li>[task] Public garden demo of project website.</li>
        <li>[task] Rabbit dev website.</li>
        <li>[task] Set repository public &amp; make garden npm modul. (yarn?)</li>
        </ul>
        <h3 id="v1-1">v1.1</h3>
        <ul>
        <li>[feature] Show custom favicon.svg configured in garden.config.js.</li>
        <li>[feature] Collapse/expand panel button in sidebar and close btn in panel nav.</li>
        <li>[feature] Set default mode in garden.config.json.</li>
        <li>[feature] Screenshot test: automatic create test file &amp; and folder (like init garden).</li>
        <li>[feature] Screenshot test: settings.</li>
        <li>[feature] switch from md to mdx.</li>
        <li>[task] Integrate Svelte A11y features.</li>
        <li>[task] Improve Garden for smaller displays:<ul>
        <li>Sidebarnav is closed by default on narrow display devices.</li>
        <li>...</li>
        </ul>
        </li>
        <li>[feature] Vertical dragbar to drag stage horizontical to show rwd behaviour. Already integrated staticly, just needs to be commented out in topbar.svelte: Show &#39;px&#39; width/height of stage next to rwd-navi.</li>
        <li>[task] Build kickstarter &quot;carrots&quot;. Define components for carrots.</li>
        </ul>
      </div>
    </LeftRight>
  </div>
</div>
<Footer />

<style lang="scss">
.main {
  position: relative;
  padding-bottom: 4rem;
  overflow: hidden;
}
.sidebar {
  position: relative;
  width: 25%;
  overflow: hidden;
}
.content {
  width: 75%;
  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    @media (min-width: 1024px) {
      font-size: 1.875rem;
    }
  }
  h2 {
    margin: 1rem auto 0.5rem;
    font-size: 1.25rem;
    font-weight: 600;
    @media (min-width: 1024px) {
      font-size: 1.5rem;
    }
  }
  h3 {
    font-size: 1.125rem;
    font-weight: 500;
    @media (min-width: 1024px) {
      font-size: 1.375rem;
    }
  }
  p {
    font-size: 1rem;
    @media (min-width: 768px) {
      font-size: 1.125rem;
    }
  }
  ol, ul {
    li { 
      font-size: 1rem;
      @media (min-width: 768px) {
        font-size: 1.125rem;
      }
    }
  }
  code {
    font-size: 0.813rem;
    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }
}
</style>