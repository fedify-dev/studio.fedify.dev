import { ref, watch, onMounted } from 'vue'

const isDark = ref(false)

export function useDarkMode() {
  onMounted(() => {
    isDark.value = document.documentElement.classList.contains('dark')
  })

  const toggle = () => {
    isDark.value = !isDark.value
  }

  watch(isDark, (value) => {
    if (value) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
  })

  return {
    isDark,
    toggle,
  }
}
