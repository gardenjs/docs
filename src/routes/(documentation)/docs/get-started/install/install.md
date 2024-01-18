# Install Gardenjs

Make sure [Vite](https://vitejs.dev/) is installed!

Then install Gardenjs inside your project root and follow the installation routine:

```console
npm install --save-dev gardenjs
```

In the root directory you will now find the Gardenjs configuration file **garden.config.js**.

## Run Gardenjs

Add Gardenjs to your **package.json** as follows and start Gardenjs via `npm run garden`:

```json
  "scripts": {
    "garden": "garden",
  },
```

The default browser address is <mark>http://localhost:3010/garden</mark>. The server port is defined in **garden.config.js** and can be adjusted there.

## Setting up Gardenjs

Project-specific settings are made in the file **garden.config.js**. More infos <a href="/docs/get-started/setup">here</a>.