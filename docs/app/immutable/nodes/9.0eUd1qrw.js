import"../chunks/DsnmJJEf.js";import"../chunks/eZSdofcA.js";import{al as c,au as t,at as j,am as g,aw as n,ax as a,av as y,ak as w}from"../chunks/DTR-qeEL.js";import{h as k}from"../chunks/kTIsabA7.js";import{h as s}from"../chunks/DWwbg4El.js";var b=c('<h1>Getting started</h1> <h2>Requirements</h2> <p>Make sure <a href="https://vitejs.dev/" target="_blank">Vite</a> is installed! Also make sure you have a current version of Node.js installed.</p> <h2>Step 1: Install Gardenjs</h2> <p>In the command line, go to the root directory of your project and enter the following command:</p> <pre class="language-console"><!></pre> <h2>Step 2: Add script</h2> <p>Add Gardenjs to your <strong>package.json</strong> as follows:</p> <pre class="language-json"><!></pre> <h2>Step 3: Setup Gardenjs</h2> <p>Now start Gardenjs for the first time:</p> <pre class="language-console"><!></pre> <p>This will set up Gardenjs and generate the <strong>garden.config.js</strong> file. You will be prompted to select various options:</p> <pre class="language-console"><!></pre> <h3>The gardenjs configuration files</h3> <p>In the root directory you will now find the Gardenjs configuration file <strong>garden.config.js</strong>.</p> <p>If you have made a mistake or would like to change something now, you can also delete the file and run <code>npm run garden</code> again. Alternatively, and for future adjustments, edit the <strong>garden.config.js</strong> file manually, see step 5.</p> <p>Optionally the <strong>garden.vite.config.js</strong> has been generated. If you haven’t selected the option to generate the file you need to create it now.</p> <p>This config file sets up vite to run gardenjs. If you are using vite as your default bundler you already have a vite.config.js. You might adapt the garden.vite.config.js to your own needs. However there are some garden specific settings, that’s why your vite.config.js can’t be used for gardenjs.</p> <h3>! Renderer Plugin</h3> <p>In order for Gardenjs to be able to display components later, the corresponding renderer plugin is required. If no renderer was selected during the installation routine, you will need to install one (or more) of our renderer plugins or install your own renderer.</p> <p>You can find more information on creating a custom renderer plugin <a href="/docs/renderer">here</a>.</p> <h2>Step 4: Run Gardenjs</h2> <pre class="language-console"><!></pre> <p>The default browser address is <strong>http://localhost:3010/garden</strong>. The server port is defined in <strong>garden.config.js</strong> and can be adjusted there.</p> <p>Gardenjs will be empty now. First of all, the components must be registered as described <a href="/docs/get-started/examples">here</a>.</p> <h2>Step 5: Refine configuration</h2> <p>Project-specific settings are made in the file <strong>garden.config.js</strong>. Some of the possible settings are essential for the execution of Gardenjs. More infos <a href="/docs/get-started/settings">here</a>.</p>',1);function _(i){var e=b(),r=t(j(e),10),d=n(r);s(d,()=>'<code class="language-console">npm install --save-dev gardenjs</code>'),a(r);var o=t(r,6),h=n(o);s(h,()=>`<code class="language-json">  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token property">"garden"</span><span class="token operator">:</span> <span class="token string">"garden"</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span></code>`),a(o);var l=t(o,6),f=n(l);s(f,()=>'<code class="language-console">&#96;npm run garden&#96;</code>'),a(l);var p=t(l,4),m=n(p);s(m,()=>`<code class="language-console">Welcome to the garden setup process

===================================

? Enter your project title: 
? UI Library: 
? Enter your component source folder: 
? Should garden create an example component? 
===================================

For rendering the components for the selected libraries, you have to install the appropriate plugins.
? Shall gardenjs install the necessary plugins?
? Package manager: 

===================================
? You need a vite configuration file for gardenjs. Shall we create the file? 
===================================

Creating garden.vite.config.js ...:

===================================

Creating garden.config.js ...:


Done. Edit garden.config.js file according to your needs.
Run npm run garden again, to start gardenjs.
===================================
Happy gardening!
===================================</code>`),a(p);var u=t(p,20),v=n(u);s(v,()=>'<code class="language-console">npm run garden</code>'),a(u),y(8),g(i,e)}var G=c('<meta name="description" content="Installation guide. Gardenjs is the fast component UI explorer for JavaScript frameworks like Svelte, Vue and React."/>'),I=c('<div class="md_file"><!></div>');function Y(i){var e=I();k(d=>{var o=G();w.title="Installation guide :: Gardenjs Docs",g(d,o)});var r=n(e);_(r),a(e),g(i,e)}export{Y as component};
