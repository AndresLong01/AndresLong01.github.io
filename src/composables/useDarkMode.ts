import { ref } from 'vue'

type Theme = 'light' | 'dark'

export function useDarkMode() {
  const theme = ref<Theme>('dark')

  const apply = (t: Theme) => {
    document.documentElement.classList.toggle('dark', t === 'dark')
  }

  const init = () => {
    const stored = localStorage.theme as Theme | undefined
    if (stored === 'dark' || stored === 'light') {
      theme.value = stored
    } else {
      theme.value = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    apply(theme.value)
  }

  if (typeof window !== 'undefined') init()

  const setTheme = (t: Theme) => {
    theme.value = t
    localStorage.theme = t
    apply(t)
  }

  const toggleTheme = () => setTheme(theme.value === 'dark' ? 'light' : 'dark')

  return { theme, setTheme, toggleTheme }
}
