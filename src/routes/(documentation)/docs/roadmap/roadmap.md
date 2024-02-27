# Roadmap

Gardenjs will continue to be maintained and further functions will be integrated.

A donation model is planned if Gardenjs is well received. Please contact us if you would like to support us in integrating one of the features in the near future.

## Next

- [refactor] Move logic to own file / use stores?. Handle user interaction.
- [feature] Evaluation of "Make Storybook stories compatible with Garden". If relatively easy possible then development. Otherwise prioritize other tasks/features depending on complexity.
- [task] Add tests.

## Later (no specific order)

- [task] Keep user state after refresh.
  - [task] Store selection in panel nav for refresh or if another component is selected.
  - [task] Store selection of stage for refresh or if another component is selected.
- [feature] Add testing library. E.g. [Testing Library](https://testing-library.com/).
- [feature] Collect events and show in panel.
- [feature] Bookmarks. (siehe ReactCosmos)
- [task] Add [line numbers plugin](https://github.com/wcoder/highlightjs-line-numbers.js) to highlightjs.
- [task] Sidebarnav is closed by default on narrow display devices.
- [task] Make setting of default mode possible via garden.config.js.
- [task] If full mode is active, switching to portrait mode is deactivated.
- [task] Make Gardenjs docs link optional via garden.config.js.
- [task] Move demo components from core to the renderer plugins.
- [task] Show custom favicon.svg configured in garden.config.js.
- [task] Color variables are made configurable for your own Gardenjs themes.
- [feature] Screenshot tests:
  - Docker image oder alternativ for screenshot test.
  - Automatic create test file & and folder (like init garden).
  - Settings.
- [feature] Set width and height of stage by size input.
- [feature] Add zoom button 100% and if zoomed show size in % with switch possibility.
- [feature] Vertical dragbar to drag stage horizontical to show rwd behaviour. Already integrated staticly, just needs to be commented out in topbar.svelte: Show 'px' width/height of stage next to rwd-navi.
- [task] Switch from md to mdx.
- [feature] Set stagesize values for "mobile, tablet, desktop" inside garden.config.js. Option: Set list of custom values like iPhone 13,14,15, iPad, Samsung Galaxy A/Sx or as pixel values in garden.config and show dropdown in Gardenjs instead of icons.
- [task] Integrate Svelte A11y features.
- [feature] Build kickstarter "carrots". Define components for carrots.
- [feature] Measure.
- [feature] Manually change properties via control panel.