# Params

Params extend the Examples to create interactive controls in the Gardenjs user interface and thus dynamically change component properties. Parameters are defined in the `.das.js` file and create interactive input fields in the Gardenjs panel. They allow you to experiment with the properties of your component in real time.

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
      type: 'text',
      label: 'Title'
    }
  ]
}
```

## Available Param Types

- [**Array**](#array) - Input for adding/removing list items
- [**Boolean**](#boolean) - Checkbox or toggle switch
- [**Color**](#color) - Color picker
- [**Date**](#date) - Date picker
- [**Datetime**](#datetime) - Datetime picker
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
  variant: 'checkbox'  // 'checkbox' (default) or 'toggle' for switch display
}
```

---

<h3 id="color" style="scroll-margin-top: 6rem;">Color</h3>

Creates a color picker.

```javascript
{
  name: 'bgColor',
  type: 'color',
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

Creates a datetime picker.

```javascript
{
  name: 'appointment',
  type: 'datetime',
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

Creates a range slider.

```javascript
{
  name: 'opacity',
  type: 'range',
  label: 'Opacity',
  min: 0,     // Minimum value (default: 0)
  max: 1,     // Maximum value (default: 100)
  step: 0.1   // Step size (default: 1)
}
```

---

<h3 id="select" style="scroll-margin-top: 6rem;">Select</h3>

Creates a dropdown menu or radio button group with predefined options.

```javascript
{
  name: 'size',
  type: 'select',
  label: 'Size',
  variant: 'dropdown',  // 'dropdown' (default) or 'radio' for radio buttons
  options: ['small', 'medium', 'large']  // Simple string array
}

// With labels and values:
{
  name: 'variant',
  type: 'select',
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

Creates a text input field or textarea.

```javascript
{
  name: 'title',
  type: 'text',
  label: 'Card Title',
  variant: 'text'  // 'text' (default) or 'textarea'
}

// Textarea with custom rows:
{
  name: 'description',
  type: 'text',
  label: 'Description',
  variant: 'textarea',
  rows: 5  // Number of visible rows (default: 4)
}
```

---

<h3 id="time" style="scroll-margin-top: 6rem;">Time</h3>

Creates a time picker.

```javascript
{
  name: 'openingTime',
  type: 'time',
  label: 'Opening Time'
}
```

---

## Properties Reference

| Property | Required | Used In | Description |
| --- | --- | --- | --- |
| `name` | Yes | All types | The property name to bind to. |
| `type` | Yes | All types | The param type (text, number, boolean, etc.). |
| `label` | No | All types | Display name in the UI (defaults to name). |
| `variant` | No | boolean, select, text | Display variant: `checkbox`/`toggle` for boolean, `dropdown`/`radio` for select, `text`/`textarea` for text. |
| `options` | Yes | select | Array of options (strings or `{label, value}` objects). |
| `schema` | Yes | object, objectrenderer | Defines the structure of nested fields. |
| `placeholder` | No | In schema | Placeholder text for input fields. |
| `rows` | No | text (textarea) | Number of visible rows in textarea (default: 4). |
| `min` | No | range | Minimum value for range slider (default: 0). |
| `max` | No | range | Maximum value for range slider (default: 100). |
| `step` | No | range | Step size for range slider (default: 1). |

## Complete Example

Here's a complete `.das.js` file with all available param types:

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
      type: 'text',
      label: 'Product Title'
    },
    {
      name: 'description',
      type: 'text',
      label: 'Description',
      variant: 'textarea',
      rows: 4
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
      variant: 'checkbox'
    },
    {
      name: 'featured',
      type: 'boolean',
      label: 'Featured Product',
      variant: 'toggle'
    },
    {
      name: 'size',
      type: 'select',
      label: 'Size',
      variant: 'dropdown',
      options: ['small', 'medium', 'large']
    },
    {
      name: 'color',
      type: 'color',
      label: 'Background Color'
    },
    {
      name: 'releaseDate',
      type: 'date',
      label: 'Release Date'
    },
    {
      name: 'availableFrom',
      type: 'time',
      label: 'Available From'
    },
    {
      name: 'lastUpdated',
      type: 'datetime',
      label: 'Last Updated'
    },
    {
      name: 'discount',
      type: 'range',
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
