# Install Garden

Install Garden inside your Svelte/Vue/React project root follow the installation routine:

```console
npm install --save-dev garden
```

In the root directory you will now find your Garden configuration file 'garden.config.js' to adapt Garden to your project needs  (see chapter "Setup").

## Initialize Garden

Initialize Garden in the root of the project directory:

```bash
run initGarden
```

## Run Garden

Run `serveGarden` from the root of the project. Garden then opens automatically in the browser. More usual: add `serveGarden` to your `package.json` as follows and start Garden via `npm run garden`:

```json
  "scripts": {
    "garden": "serveGarden",
  },
```

The browser address is `http://localhost:<serverport>/garden`. The server port is defined in `garden.config.js`, the default setting is 3010.
