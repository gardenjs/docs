# Getting started

## Requirements

Make sure [Vite](https://vitejs.dev/) is installed! Also make sure you have a current version of Node.js installed.  

## Step 1: Install Gardenjs

In the command line, go to the root directory of your project and enter the following command:

```console
npm install --save-dev gardenjs
```

## Step 2: Add script

Add Gardenjs to your **package.json** as follows:

```json
  "scripts": {
    "garden": "garden",
  },
```

## Step 3: Setup Gardenjs

Now start Gardenjs for the first time:

```console
`npm run garden`
```

This will set up Gardenjs and generate the **garden.config.js** file. You will be prompted to select various options:

```console
? Enter your project title:
? UI Library:
? Enter your component source folder:
? Should garden create an example component?

Done. Edit garden.config.js file according to your needs.
Happy gardening!
```

In the root directory you will now find the Gardenjs configuration file **garden.config.js**.

If you have made a mistake or would like to change something now, you can also delete the file and run `npm run garden` again. Alternatively, and for future adjustments, edit the **garden.config.js** file manually, see step 5.

### ! Renderer Plugin

In order for Gardenjs to be able to display components later, the corresponding renderer plugin is required. If no renderer was selected during the installation routine, you will need to install one (or more) of our renderer plugins or install your own renderer.

You can find more information on creating a custom renderer plugin <a href="/docs/add-frameworks">here</a>.

## Step 4: Run Gardenjs

```console
npm run garden
```

The default browser address is **http://localhost:3010/garden**. The server port is defined in **garden.config.js** and can be adjusted there.

Gardenjs will be empty now. First of all, the components must be registered as described <a href="/docs/get-started/output">here</a>.

## Step 5: Refine configuration

Project-specific settings are made in the file **garden.config.js**. Some of the possible settings are essential for the execution of Gardenjs. More infos <a href="/docs/get-started/setup">here</a>.