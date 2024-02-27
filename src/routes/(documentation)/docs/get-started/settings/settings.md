# Setting up Gardenjs

During installation, the configuration file **garden.config.js** is generated in the root directory. All project-specific settings are made here.

## Arguments

| Argument | Type | Description |
|--- |--- | --- |
| `serverport` | Positive number | Default: `3010` <br> Define the server port. |
| `devmodus` | Boolean |  Default: `false` <br> For garden development purposes only. |
| `no_open_browser` | Boolean |  Default: `true` <br> Stops auto opening Gardenjs on start. |
| `project_title` | String, Text |  Default: `My project name`<br> Title is displayed above the navigation. |
| `welcome_page` | Path | Set a path to your own start page, e.g. `/src/foo.svelte`. |
| `structure` | Path | Each entry is output with its subpages in the page tree. <br> E.g. `layouts: './src/layout/, 'components: './src/components/'.` |
| `watch`| `directories`: Path, `include`: File suffix | Defines which directories and file types to monitor. |
| `watch`: `directories` | Path | Path to directories to be monitored for changes, e.g. `['./src/'],`. |
| `watch`: `include` | File suffix | File types to be monitored for changes, e.g. ['.svelte', '.vue', '.scss', '.css', '.js', '.ts']. |
| `vite_config` | Path | Default: `./vite.config.js` <br> Path to the vite.config file. (In any case, make sure **[Vite](https://vitejs.dev/)** is installed.)  |
| `renderer` | String |  Specify the JS framework(s) used in the project. Requires a corresponding framework plugin. When the npm install script was run, a render was automatically stored here if the appropriate selection was made. E.g. `gardenjs-plugin-svelte`.
| `additional_style_files` | Path |  Add global style files needed for your project, e.g. `'src/assets/scss/base.scss', 'src/assets/scss/main.scss'` |
| `themes` | `name`: String, `stageBg`: Color, `active`: Boolean | Edit or disable "Themes" depending on whether your app uses themes. Defines a list of display modes of your project to output the components accordingly. |
| `themes`: `name` | String | Name of the mode as it appears in the theme navigation. E.g. `name: 'Dark mode'` |
| `themes`: `stageBg` | String | Sets the background color of the stage for each mode. All common CSS color values can be used as values. E.g. `stageBg: '#101010'` |
| `themes`: `active` | Boolean | Set the default theme on start: `active: 'true',`. Optionally, if it is empty, the first entry in the list is automatically used as the default. |
| `themeHandler` | String |  Default: `onThemeChange` <br> If `themes` is used this adjusts the function below. If necessary, the function must be changed. |

## Pagetree

The source folder of the components was queried during installation. It is also possible to display several page trees one below the other. With the `structure` option, you can define a finer granulation of the page tree and integrate components from different directories. You could also display external components in your project.

```js
 "structure": {
    "layouts": "./src/layout/",
    "components": "./src/components/",
    "external lib": "/absolute/path/to/lib"
  },
```

## Theme Function

The following theme function is integrated as default. Adapt it to your own needs and adjust the option `themeHandler` if necessary.

```js
function onThemeChange(theme) {
  if (theme === 'default') {
    delete document.body.dataset.theme
  } else {
    document.body.dataset.theme = theme
  }
}
```
