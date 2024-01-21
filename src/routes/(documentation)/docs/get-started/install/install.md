# Getting started

Make sure [Vite](https://vitejs.dev/) is installed! Also make sure you have a current version of Node.js installed.  

<br>

## Step 1: Install Gardenjs

Run the following command in your command line:

```console
npm install --save-dev gardenjs
```

This command will install Gardenjs. You will be prompted to select various options:

```console
✔ Project name: foo
foo, bar, foobar, baz,
Done.
```

In the root directory you will now find the Gardenjs configuration file **garden.config.js**.

### Renderer Plugin

In order for Gardenjs to be able to display components later, the corresponding renderer plugin is required. If no renderer was selected during the installation routine, you will need to install one (or more) of our renderer plugins or install your own renderer.

You can find more information on creating a custom renderer plugin <a href="/docs/add-frameworks">here</a>.

<br>

## Step 2: Setting up Gardenjs

Project-specific settings are made in the file **garden.config.js**. Some of the possible settings are essential for the execution of Gardenjs. More infos <a href="/docs/get-started/setup">here</a>.

<br>

## Step 3: Run Gardenjs

Add Gardenjs to your **package.json** as follows and start Gardenjs via `npm run garden`:

```json
  "scripts": {
    "garden": "garden",
  },
```

The default browser address is **http://localhost:3010/garden**. The server port is defined in **garden.config.js** and can be adjusted there.

Gardenjs will be empty now. First of all, the components must be registered as described <a href="/docs/get-started/output">here</a>.
