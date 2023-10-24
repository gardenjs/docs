<script>
import Introduction from './indroduction.md'
import Install from './install-garden.md'
import Setup from './setup-garden.md'
import Output from './output-of-components.md'
import Stories from './stories.md'
import Docs from './write-docs.md'
import Screenshottests from './screenshot-test.md'

</script>

<svelte:head>
	<title>Garden Component Explorer :: Documentation</title>
  <meta name="description" content="This is the documentation of Garden, the fast storybook alternative for React, Vue and Svelte projects." />
</svelte:head>

<div id="introduction" class="md_file">
  <Introduction />
</div>
<div id="install-garden" class="md_file">
  <Install />
</div>
<div id="setup-garden" class="md_file">
  <Setup />
</div>
<div id="output-of-components" class="md_file">
  <Output />
</div>
<div id="stories" class="md_file">
  <Stories />
</div>
<div id="write-docs" class="md_file">
  <Docs />
</div>
<div id="screenshot-tests" class="md_file">
  <Screenshottests />
</div>


<style>
.md_file {
  padding-top: 10rem;
}
.md_file:first-of-type {
  margin-top: -10rem;
}
.md_file:last-of-type {
  margin-bottom: 10rem;
}
</style>