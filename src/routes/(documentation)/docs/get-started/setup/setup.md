# Configure Gardenjs with project-specific settings

During installation, the configuration file “garden.config.js” is copied to the root directory. Project-specific settings for Gardenjs are stored here. Individual adjustments can also be made in this file.

## Options

| Option | Type | Description |
|--- |--- | --- |
| `serverport` | Positive number | Default: `3010` <br> Define the server port. |
| `devmodus: false` | Boolean |  Default: `false` <br> For garden development purposes only. |
| `no_open_browser` | Boolean |  Default: `true` <br> Stops auto opening Gardenjs on start. |
| `project_title` | String, Text |  Default: `My project name`<br> Title is displayed above the navigation. |
| `welcome_page` | Path | Set a path to your own start page, e.g. `/src/foo.svelte`. |
| `structure` | Path | Each entry is output with its subpages in the page tree. <br> E.g. `layouts: '/src/layout/, 'components: '/src/components/'.` |
| `watch`: `directories` | Path, Array | Path to directories to be monitored for changes, e.g. `['./src/'],`. |
| `watch`: `include` | File suffix, Array | File types to be monitored for changes, e.g. ['.svelte', '.vue', '.scss', '.css', '.js', '.ts']. |
| `renderer` | String |  Specify the JS framework(s) used in the project. Requires a corresponding framework plugin. When the npm install script was run, a render was automatically stored here if the appropriate selection was made. E.g. `gardenjs-plugin-svelte`.
| `additional_style_files` | |  Add global style files needed for your project, e.g. `'src/assets/scss/base.scss', 'src/assets/scss/main.scss'` |
| `themes` | |  Edit or disable "Themes" depending on whether your app uses themes. E.g. `{name: 'default', stageBg: 'white'}, {name: 'dark', stageBg: '#101010'},`. Manually set default active theme on start: `active: 'true',` |
| `themeHandler` | String |  Default: `onThemeChange` <br> If `themes` is used this adjusts the function below. If necessary, the function must be changed. |

<br>

## Theme Function

The following theme function is integrated as default. Adapt it to your own needs.

```js
function onThemeChange(theme) {
  if (theme === 'default') {
    delete document.body.dataset.theme
  } else {
    document.body.dataset.theme = theme
  }
}
```
