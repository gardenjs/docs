# Install Garden

Install Gardenjs inside your Svelte/Vue/React project root and follow the installation routine:

```console
npm install --save-dev garden
```

In the root directory you will now find your Gardenjs configuration file 'garden.config.js' to adapt Gardenjs to your project needs  (see chapter "Setup").

## Run Garden

Add `Garden` to your `package.json` as follows and start Gardenjs via `npm run garden`:

```json
  "scripts": {
    "garden": "garden",
  },
```

On first run the config file will be generated.

The browser address is `http://localhost:<serverport>/garden`. The server port is defined in `garden.config.js`, the default setting is 3010.
