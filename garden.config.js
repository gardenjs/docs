
import SvelteRendererBuilder from "@gardenjs/render-plugin-svelte"

export default {
  // Define the server port:
  serverport: 3010,

  // !!! For garden development purposes only !!!
  // If set true, the "Code" tab is not displayed in the panel. An empty stage is displayed instead of the custom welcome_page.
  // devmodus: true,

  // Stop auto opening Gardenjs on start:
  // no_open_browser: true,

  // This title is displayed above the navigation:
  // If the path to a logo is specified, "project_title" is used as the alt tag. Additional darkmode logo can be added.
  project_title: 'Gardenjs docs',
  project_logo: './src/assets/icons/logo_sidebar.svg',
  project_logo_darkmode: './src/assets/icons/logo_sidebar_neg.svg',

  // Here you can set a path to your own start page.
  // The HTML file may only contain the body part, i.e. without the doctype, head and body tag:
  welcome_page: './gardendocs.homepage.html',

  // Show the link to the docs in the sidebar:
  docs_link: true,

  // vite config file:
  vite_config: './garden.vite.config.js',
  
  // Each entry is output with its subpages in the page tree:
  structure: {
    components: './src/components',
    layouts: './src/layouts'
  },

  watch: {
    directories: ["./src/"],
    include: ['.svelte', '.scss', '.css', '.less', '.js', '.ts'],
  },

  renderer: {
    svelte: SvelteRendererBuilder,
  },

  // Add global style files needed for your project:
  // additional_style_files: [
  //   'src/assets/scss/main.scss'
  // ],

  // Edit or disable "Themes" depending on whether your app uses themes.
  // According to your requirements, you may also need to adjust the
  // "onThemeChange" function below accordingly.
  themes: [
    {name: 'light', stageBg: 'white'},
    {name: 'dark', stageBg: '#121c2b'}, // manually set default active theme on start {active: true, name: 'dark', stageBg: '#101010'},
    // {name: 'light', stageBg: '#eee'}
  ],
  themeHandler: onThemeChange
}

// Edit or disable the function "onThemeChange" according to your project (see also "themes" above):
function onThemeChange(theme) {
  if (theme === 'light') {
    delete document.documentElement.dataset?.theme
  } else {
    document.documentElement.dataset.theme = theme
  }
}