export default {
  name: 'Axetest',
  file: './Axetest.svelte',
  description:
    'Axe-core fixture for the Garden Accessibility panel. Use the controls to toggle violations and re-scan.',
  examples: [
    {
      title: 'Default',
      input: {
        showViolationsBlock: true,
        showEmptyButton: true,
        showMissingAlt: true,
        showUnlabeledInput: true,
        contrastMode: 'fail',
        showBadLink: true,
        showAriaFixtures: true,
      },
    },
  ],
  params: [
    {
      name: 'showViolationsBlock',
      type: 'boolean',
      control: 'toggle',
      label: 'Violations block',
      description:
        'Gesamten Abschnitt „Typical violations“ ein-/ausblenden. Erwartung: deutlich weniger Violations wenn aus.',
    },
    {
      name: 'showEmptyButton',
      type: 'boolean',
      control: 'checkbox',
      label: 'Empty button',
      description: 'Regel button-name — leerer Button ohne Text.',
    },
    {
      name: 'showMissingAlt',
      type: 'boolean',
      control: 'checkbox',
      label: 'Image without alt',
      description: 'Regel image-alt.',
    },
    {
      name: 'showUnlabeledInput',
      type: 'boolean',
      control: 'checkbox',
      label: 'Input without label',
      description: 'Regel label / label-title-only.',
    },
    {
      name: 'contrastMode',
      type: 'string',
      control: 'select',
      label: 'Color contrast',
      options: [
        { label: 'Fail (low contrast)', value: 'fail' },
        { label: 'Pass (readable)', value: 'pass' },
        { label: 'Hidden', value: 'hidden' },
      ],
      description:
        'Steuert die beiden color-contrast-Demos. Fail → Violations; Pass → eher Passed; Hidden → weniger Kontrast-Treffer.',
    },
    {
      name: 'showBadLink',
      type: 'boolean',
      control: 'checkbox',
      label: 'Low-contrast link',
      description: 'Zweiter color-contrast-Fall (Link).',
    },
    {
      name: 'showAriaFixtures',
      type: 'boolean',
      control: 'checkbox',
      label: 'ARIA fixtures',
      description:
        'listbox, textbox, aria-hidden, invalid role, empty link — mehrere Violations auf einmal.',
    },
  ],
}
