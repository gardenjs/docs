# Setup Garden

## Configure Gardenjs with project-specific settings

After the installation you will find in the root directory the Gardenjs configuration file 'garden.config.js'. Take a look at the file for a quick overview of the options already implemented. Here you can also make your own individual adjustments with JavaScript, e.g. to switch between your different themes. Please take the explanation of the possible settings from the comments:

```js
export default {

  // Define the server port:
  "serverport": 3010,

  // Stop auto opening Gardenjs on start:
  "no_open_browser": true,

  // This title is displayed above the navigation:
  "project_title": "My project name",

  // Here you can set a path to your own start page:
  "welcome_page": "/src/foo.svelte", 

  // Each entry is output with its subpages in the page tree (note: currently only 3 levels are styled).
  "structure": {
    "components": "/src/components/",
    "layouts": "/src/layouts/"
  },

  "watch": {
    // Insert the source folder to be monitored for changes:
    "directories": [
      "./src"
    ],
    // Add all the file types to be monitored for changes:
    "include": [
      ".svelte", ".das.json", ".scss", ".css", ".js"
    ]
  },

  // Add global style files needed for your project:
  "additional_style_files": [
    'src/assets/scss/main.scss'
  ],

  // Edit or disable "Themes" depending on whether your app uses themes.
  // According to your requirements, you may also need to adjust the
  // "onThemeChange" function below accordingly.
  "themes": [
    {name: 'default', stageBg: 'white'},
    {name: 'dark', stageBg: '#101010'}, // manually set default active theme on start {active: true, name: 'dark', stageBg: '#101010'},
    {name: 'light', stageBg: '#eee'}
  ],
  "themeHandler": onThemeChange
}

// Edit or disable the function "onThemeChange" according to your project (see also "themes" above):
function onThemeChange(theme) {
  if (theme === 'default') {
    delete document.body.dataset.theme
  } else {
    document.body.dataset.theme = theme
  }
}
```
