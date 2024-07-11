import { writable, get } from 'svelte/store'

export const theme = writable('light')

export function toggleTheme() {
  const newTheme = get(theme) === 'light' ? 'dark' : 'light'
  theme.set(newTheme)
}