# Parameters

Parameters are automatically generated from the input data of the examples and are output by default in the Gardenjs panel. This allows you to dynamically adjust the properties of components.
This chapter explains how the `params` property in the `.das file` can be used to make a more specific selection of controls.

Learn more about <a href="/docs/get-started/examples">creating examples and .das.js files</a>.

## Requirements

Gardenjs &ge; v1.7

## Basic Structure

Add a `params` array to your `.das.js` file:

```javascript
export default {
  name: 'MyComponent',
  file: './MyComponent.svelte',
  examples: [
    // your examples
  ],
  params: [
    {
      name: 'title',
      type: 'string',
      label: 'Title'
    }
  ]
}
```

## Available Controls

Each parameter is rendered in the panel by a **control** (the UI widget). You get a control either by setting a matching `type` (Gardenjs picks the default control for `string`, `number`, `boolean`, `date`, `array`, `object`) or by setting `type` and `control` explicitly. Controls like color, time, datetime, range, and select have no built-in type and always need `control` plus a suitable `type` (e.g. `type: 'string'`, `control: 'time'`). The following controls are available:

- [**Array**](#array) - Input for adding/removing list items
- [**Boolean**](#boolean) - Checkbox or toggle switch
- [**Color**](#color) - Color picker
- [**Date**](#date) - Date picker
- [**Datetime**](#datetime) - Datetime picker
- [**JSON**](#json) - JSON input (textarea with validation)
- [**Number**](#number) - Number input field
- [**Object**](#object) - Key-value pair inputs
- [**Object Renderer**](#object-renderer) - Complex form for arrays of objects
- [**Range**](#range) - Range slider
- [**Select**](#select) - Dropdown menu or radio button group
- [**Text / String**](#text--string) - Text input field or textarea
- [**Time**](#time) - Time picker

---

<h3 id="array" style="scroll-margin-top: 6rem;">Array</h3>

Creates an array input where users can add/remove items.

```javascript
{
  name: 'tags',
  type: 'array',
  label: 'Tags'
}
```

---

<h3 id="boolean" style="scroll-margin-top: 6rem;">Boolean</h3>

Creates a checkbox or toggle switch input.

```javascript
{
  name: 'isActive',
  type: 'boolean',
  label: 'Active',
  control: 'checkbox'  // 'checkbox' (default) or 'toggle' for switch display
}
```

---

<h3 id="color" style="scroll-margin-top: 6rem;">Color</h3>

Creates a color picker. Use `type: 'string'` and `control: 'color'` (no built-in type for color).

```javascript
{
  name: 'bgColor',
  type: 'string',
  control: 'color',
  label: 'Background Color'
}
```

---

<h3 id="date" style="scroll-margin-top: 6rem;">Date</h3>

Creates a date picker.

```javascript
{
  name: 'startDate',
  type: 'date',
  label: 'Start Date'
}
```

---

<h3 id="datetime" style="scroll-margin-top: 6rem;">Datetime</h3>

Creates a datetime picker. Use `type: 'string'` and `control: 'datetime'`.

```javascript
{
  name: 'appointment',
  type: 'string',
  control: 'datetime',
  label: 'Appointment'
}
```

---

<h3 id="number" style="scroll-margin-top: 6rem;">Number</h3>

Creates a number input field.

```javascript
{
  name: 'columns',
  type: 'number',
  label: 'Columns'
}
```

---

<h3 id="object" style="scroll-margin-top: 6rem;">Object</h3>

Creates key-value pair inputs.

```javascript
{
  name: 'metadata',
  type: 'object',
  label: 'Metadata',
  schema: {
    keyDefault: 'key',
    valueDefault: 'value'
  }
}
```

---

<h3 id="object-renderer" style="scroll-margin-top: 6rem;">Object Renderer</h3>

Creates a complex form for arrays of objects with defined schemas. Perfect for managing lists of structured data.

```javascript
{
  name: 'items',
  type: 'objectrenderer',
  label: 'Accordion Items',
  schema: {
    title: {
      type: 'text',
      label: 'Title',
      placeholder: 'Enter title'
    },
    content: {
      type: 'text',
      label: 'Content',
      placeholder: 'Enter content'
    },
    priority: {
      type: 'number',
      label: 'Priority'
    },
    visible: {
      type: 'boolean',
      label: 'Visible'
    }
  }
}
```

---

<h3 id="range" style="scroll-margin-top: 6rem;">Range</h3>

Creates a range slider. Use `type: 'number'` and `control: 'range'`.

```javascript
{
  name: 'opacity',
  type: 'number',
  control: 'range',
  label: 'Opacity',
  min: 0,     // Minimum value (default: 0)
  max: 1,     // Maximum value (default: 100)
  step: 0.1   // Step size (default: 1)
}
```

---

<h3 id="select" style="scroll-margin-top: 6rem;">Select</h3>

Creates a dropdown menu or radio button group with predefined options. Use `type: 'string'` and `control: 'select'` or `control: 'radio'`.

```javascript
{
  name: 'size',
  type: 'string',
  control: 'select',  // or 'radio' for radio buttons
  label: 'Size',
  options: ['small', 'medium', 'large']  // Simple string array
}

// With labels and values:
{
  name: 'variant',
  type: 'string',
  control: 'select',
  label: 'Variant',
  options: [
    { label: 'Primary', value: 'primary' },
    { label: 'Secondary', value: 'secondary' },
    { label: 'Danger', value: 'danger' }
  ]
}
```

---

<h3 id="text--string" style="scroll-margin-top: 6rem;">Text / String</h3>

Creates a text input field or textarea. Use `type: 'string'`; default control is text input, or set `control: 'textarea'` for multiline.

```javascript
{
  name: 'title',
  type: 'string',
  label: 'Card Title'  // default: single-line text; omit control or set control: 'text'
}

// Textarea with custom row count:
{
  name: 'description',
  type: 'string',
  control: 'textarea',
  label: 'Description',
  numberOfRows: 5  // Number of visible rows (default: 4)
}
```

---

<h3 id="json" style="scroll-margin-top: 6rem;">JSON</h3>

Creates a JSON editor (textarea with validation). In Gardenjs this control is used when `type` is `array` or `object` (no separate `type: 'json'`). Suitable for structured data or configuration objects.

```javascript
{
  name: 'config',
  type: 'array',  // or type: 'object'
  label: 'Configuration',
}
```

---

<h3 id="time" style="scroll-margin-top: 6rem;">Time</h3>

Creates a time picker. Use `type: 'string'` and `control: 'time'`.

```javascript
{
  name: 'openingTime',
  type: 'string',
  control: 'time',
  label: 'Opening Time'
}
```

---

## Properties Reference

Params can be defined by **type** only (Gardenjs picks a default control) or by **type** plus **control** to choose the exact UI. If `control` is set and valid, it overrides the default for that type.

| Property | Required | Used In | Description |
| --- | --- | --- | --- |
| `name` | Yes | All | The property name to bind to. |
| `type` | Yes | All | Data type. In Gardenjs only these types have a built-in default control: `string` → text; `number` → number; `boolean` → checkbox; `date` → date; `array` / `object` → JSON editor. All other controls (time, datetime, color, range, select, textarea, toggle, radio, etc.) require setting `control` explicitly, typically with `type: 'string'` or `type: 'number'`. |
| `label` | No | All | Display name in the UI (defaults to `name`). |
| `control` | No | Optional override | UI control. Values: `text`, `textarea`, `checkbox`, `toggle`, `number`, `color`, `date`, `time`, `datetime`, `array`, `object`, `range`, `select`, `radio`, `multiselect`, `checkboxes`. Use to pick variant: boolean → `checkbox` or `toggle`; string → `text`, `textarea`, `date`, `time`, `datetime`, `select`, `radio`; number → `number` or `range`; array → `array`, `multiselect`, `checkboxes`. |
| `options` | Yes | select, radio, multiselect, checkboxes | Array of options (strings or `{ label, value }` objects). |
| `schema` | Yes | object, objectrenderer | Defines the structure of nested fields. |
| `placeholder` | No | In schema | Placeholder text for input fields. |
| `numberOfRows` | No | text (textarea), json | Number of visible rows in textarea/JSON field (default: 4). |
| `min` | No | range | Minimum value for range slider (default: 0). |
| `max` | No | range | Maximum value for range slider (default: 100). |
| `step` | No | range | Step size for range slider (default: 1). |

## Complete Example

Here's a complete `.das.js` file using different controls:

```javascript
export default {
  name: 'ProductCard',
  file: './ProductCard.svelte',
  description: 'A product card component',
  
  examples: [
    {
      title: 'Default Product',
      input: {
        title: 'Awesome Product',
        description: 'This is a detailed product description.',
        price: 29.99,
        inStock: true,
        featured: false,
        size: 'medium',
        color: '#3b82f6',
        releaseDate: '2024-01-15',
        availableFrom: '09:00',
        lastUpdated: '2024-01-15T14:30',
        discount: 15,
        features: ['Feature 1', 'Feature 2'],
        metadata: { brand: 'Example', category: 'Electronics' }
      }
    }
  ],
  
  params: [
    {
      name: 'title',
      type: 'string',
      label: 'Product Title'
    },
    {
      name: 'description',
      type: 'string',
      control: 'textarea',
      label: 'Description',
      numberOfRows: 4
    },
    {
      name: 'price',
      type: 'number',
      label: 'Price'
    },
    {
      name: 'inStock',
      type: 'boolean',
      label: 'In Stock',
      control: 'checkbox'
    },
    {
      name: 'featured',
      type: 'boolean',
      label: 'Featured Product',
      control: 'toggle'
    },
    {
      name: 'size',
      type: 'string',
      control: 'select',
      label: 'Size',
      options: ['small', 'medium', 'large']
    },
    {
      name: 'color',
      type: 'string',
      control: 'color',
      label: 'Background Color'
    },
    {
      name: 'releaseDate',
      type: 'date',
      label: 'Release Date'
    },
    {
      name: 'availableFrom',
      type: 'string',
      control: 'time',
      label: 'Available From'
    },
    {
      name: 'lastUpdated',
      type: 'string',
      control: 'datetime',
      label: 'Last Updated'
    },
    {
      name: 'discount',
      type: 'number',
      control: 'range',
      label: 'Discount %',
      min: 0,
      max: 100,
      step: 5
    },
    {
      name: 'features',
      type: 'array',
      label: 'Features'
    },
    {
      name: 'metadata',
      type: 'object',
      label: 'Metadata',
      schema: {
        keyDefault: 'key',
        valueDefault: 'value'
      }
    },
    {
      name: 'variants',
      type: 'objectrenderer',
      label: 'Product Variants',
      schema: {
        name: {
          type: 'text',
          label: 'Variant Name',
          placeholder: 'Enter variant name'
        },
        price: {
          type: 'number',
          label: 'Price'
        },
        available: {
          type: 'boolean',
          label: 'Available'
        }
      }
    }
  ]
}
```
