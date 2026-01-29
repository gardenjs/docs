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

### Text / String

Creates a text input field.

```javascript
{
  name: 'title',
  type: 'text',
  label: 'Card Title'
}
```

---

### Number

Creates a number input field.

```javascript
{
  name: 'columns',
  type: 'number',
  label: 'Columns'
}
```

---

### Boolean

Creates a checkbox input.

```javascript
{
  name: 'isActive',
  type: 'boolean',
  label: 'Active'
}
```

---

### Color

Creates a color picker.

```javascript
{
  name: 'bgColor',
  type: 'color',
  label: 'Background Color'
}
```

---

### Select

Creates a dropdown menu with predefined options.

**Simple Array:**

```javascript
{
  name: 'size',
  type: 'select',
  label: 'Size',
  options: ['small', 'medium', 'large']
}
```

**With Labels and Values:**

```javascript
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

### Array

Creates an array input where users can add/remove items.

```javascript
{
  name: 'tags',
  type: 'array',
  label: 'Tags'
}
```

---

### Object

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

### Object Renderer

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

## Properties Reference

| Property | Required | Used In | Description |
| --- | --- | --- |
| `name` | Yes | All types | The property name to bind to. |
| `type` | Yes | All types | The param type (text, number, boolean, etc.). |
| `label` | No | All types | Display name in the UI (defaults to name). |
| `options` | Yes | select | Array of options (strings or `{label, value}` objects). |
| `schema` | Yes | object, objectrenderer | Defines the structure of nested fields. |
| `placeholder` | No | In schema | Placeholder text for input fields. |

## Complete Example

Here's a complete `.das.js` file with multiple param types:

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
        price: 29.99,
        inStock: true,
        size: 'medium',
        features: ['Feature 1', 'Feature 2']
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
      name: 'price',
      type: 'number',
      label: 'Price'
    },
    {
      name: 'inStock',
      type: 'boolean',
      label: 'In Stock'
    },
    {
      name: 'size',
      type: 'select',
      label: 'Size',
      options: ['small', 'medium', 'large']
    },
    {
      name: 'color',
      type: 'color',
      label: 'Background Color'
    },
    {
      name: 'features',
      type: 'array',
      label: 'Features'
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
