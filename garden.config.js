import SvelteRendererBuilder from '@gardenjs/render-plugin-svelte'

export default {
  // Define the server port:
  serverport: 3010,

  // !!! For garden development purposes only !!!
  // If set true, the "Code" tab is not displayed in the panel. An empty stage is displayed instead of the custom welcome_page.
  devmodus: false,

  // Stop auto opening Gardenjs on start:
  // no_open_browser: true,

  // This title is displayed above the navigation:
  // If the path to a logo is specified, "project_title" is used as the alt tag. Additional darkmode logo can be added.
  project_title: 'Gardenjs docs',
  project_logo: './src/assets/icons/logo_sidebar.svg',
  project_logo_darkmode: './src/assets/icons/logo_sidebar_neg.svg',

  // Enter a path to your user-defined start page.
  // The HTML file may only contain the body part (without doctype, html-, head- & body tag).
  // Specify the CSS styles in a style tag under the HTML part.
  welcome_page: './gardendocs.homepage.html',

  // Show the link to the docs in the sidebar:
  docs_link: true,

  // vite config file:
  vite_config: './garden.vite.config.js',

  // Each entry is output with its subpages in the page tree:
  structure: {
    components: './src/components',
    layouts: './src/layouts',
  },

  watch: {
    directories: ['./src/'],
    include: ['.svelte', '.scss', '.css', '.less', '.js', '.ts'],
  },

  renderer: {
    svelte: SvelteRendererBuilder,
  },

  // Option to generate component names in the component tree from dasFileName using your own function. e.g.:
  //  getComponentName: (dasFileName) => {
  //    return dasFileName.substring(0, dasFileName.indexOf('.das')
  //  }
  //
  // Option to generate component file names from dasFileName using your own function. Must return an array. First match will be used. e.g.:
  //  getComponentFileNames: (dasFileName) => {
  //    const nameWithoutExtension = dasFileName.substring(0, dasFileName.indexOf('.das')
  //    return [
  //      nameWithoutExtension + '.svelte',
  //      nameWithoutExtension + '.vue',
  //      nameWithoutExtension + '.tsx',
  //      nameWithoutExtension,
  //    ]
  //  }

  // Add global style files needed for your project:
  // additional_style_files: [
  //   'src/assets/scss/main.scss'
  // ],

  // Edit or disable "Themes" depending on whether your app uses themes.
  // According to your requirements, you may also need to adjust the
  // "onThemeChange" function below accordingly.
  themes: [
    { name: 'light', stageBg: 'white' },
    { name: 'dark', stageBg: '#121c2b' }, // manually set default active theme on start {active: true, name: 'dark', stageBg: '#101010'},
    // {name: 'light', stageBg: '#eee'}
  ],

  devices: {
    small: [
      { w: 375, h: 667, name: 'phone' },
      { w: 320, h: 568, name: 'phone-small' },
      { w: 414, h: 896, name: 'phone-plus' },
    ],
    medium: [{ w: 768, h: 1024, name: 'tablet' }],
    large: [{ w: 1440, h: 900, name: 'laptop' }],
  },
  themeHandler: onThemeChange,
}

// Edit or disable the function "onThemeChange" according to your project (see also "themes" above):
function onThemeChange(theme) {
  if (theme === 'light') {
    delete document.documentElement.dataset?.theme
  } else {
    document.documentElement.dataset.theme = theme
  }
}
