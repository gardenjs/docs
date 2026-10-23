# Accessibility

Gardenjs runs <a href="https://github.com/dequelabs/axe-core" target="_blank">axe-core</a> in the **preview iframe** (the same document as your component). Results appear in the **Accessibility** panel: **Violations**, **Incomplete**, and **Passed** — grouped exactly as axe reports them.

## Requirements

Gardenjs ≥ 1.7

## Using the panel

1. Open a component example in the stage.
2. Click **Accessibility** in the panel.
3. Switch between **Violations**, **Incomplete**, and **Passed**.
4. Select a rule to highlight matching elements in the preview.

After the preview has rendered, Garden runs an accessibility scan automatically when you open or change an example. In `devmodus` (Garden development only), scans also run when you change example parameters.

## Default scan

If you do not set `a11y` in `garden.config.js`, Garden uses:

| Setting | Default |
| --- | --- |
| `a11y.disable` | `false` (scans enabled) |
| Context | `document.body` |
| Rules | Full axe rule set (no `runOnly`) |
| Exception | Rule `region` is disabled (common false positives in isolated component previews) |

## Disable scans

Set `a11y.disable` to `true` in `garden.config.js` to turn off all accessibility scans. The **Accessibility** panel stays empty; Garden does not run axe after render or when examples change.

Default is `false` (or omit `a11y` entirely). You only need to set `disable` when you want scans off.

```js
export default {
  a11y: {
    disable: true,
  },
}
```

## Configuration

Optional. Uses the **axe-core API directly** — same idea as passing options to `axe.configure()` and `axe.run()`:

| Property | Passed to |
| --- | --- |
| `a11y.disable` | Default `false`. If `true`, no scans run (Accessibility panel stays empty) |
| `a11y.config` | `axe.configure()` |
| `a11y.options` | Second argument of `axe.run()` |
| `a11y.context` | First argument of `axe.run()` (CSS selector string or `{ include, exclude }`) |

Garden always merges its default (`region` disabled) with your `config.rules`. If you set `options.runOnly`, disabled rules from `config` are also applied in `options.rules` so tag sets do not re-enable them.

See the <a href="https://github.com/dequelabs/axe-core/blob/develop/doc/API.md" target="_blank">axe-core API</a> for all supported fields.

### Minimal example

```js
export default {
  a11y: {
    options: {
      runOnly: {
        type: 'tag',
        values: ['wcag2a', 'wcag2aa', 'wcag21aa'],
      },
    },
  },
}
```

### Full example (all three fields)

```js
export default {
  a11y: {
    disable: false,
    context: {
      include: 'body',
      exclude: ['[data-a11y-ignore]', '.garden-a11y-highlight'],
    },
    config: {
      branding: {
        brand: 'Gardenjs',
        application: 'My project',
        showInapplicable: true,
      },
      rules: [
        { id: 'color-contrast', enabled: true },
        { id: 'duplicate-id', enabled: false },
      ],
    },
    options: {
      runOnly: {
        type: 'tag',
        values: [
          'wcag2a',
          'wcag2aa',
          'wcag21a',
          'wcag21aa',
          'wcag22aa',
          'best-practice',
        ],
      },
      resultTypes: ['violations', 'incomplete', 'passes'],
      rules: {
        'color-contrast': { enabled: true },
      },
    },
  },
}
```

Use `runOnly` when you want to limit checks to specific WCAG tag groups. Rules that are not in the active set are **not scanned** — fewer Violations does not always mean a more accessible UI.

### Exclude nodes from the scan

Mark elements in your component HTML:

```html
<div data-a11y-ignore>…</div>
```

…and list the same selector in `a11y.context.exclude` if needed.

## Reference component in these docs

The **Axetest** component (`/components/axetest/axetest`) demonstrates typical violations, incomplete results, and passing checks for manual exploration in the docs.
