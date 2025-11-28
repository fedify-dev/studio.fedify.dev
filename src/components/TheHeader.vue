<script setup lang="ts">
import { useDarkMode } from '../composables/useDarkMode'

const { isDark, toggle } = useDarkMode()

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#newsletter', label: 'Stay updated' },
]
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-slate-900/80 border-b border-slate-200/50 dark:border-slate-700/50 transition-colors duration-300"
  >
    <nav class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <!-- Logo -->
      <a href="#" class="flex items-center gap-3 group">
        <img
          src="/fedify-logo.svg"
          alt="Fedify"
          class="w-9 h-9 transition-transform duration-300 group-hover:scale-110"
        />
        <span class="font-display font-semibold text-xl tracking-tight">
          <span class="text-slate-900 dark:text-white">Fedify</span>
          <span class="text-fedify-blue ml-0.5">Studio</span>
        </span>
      </a>

      <!-- Navigation Links -->
      <div class="hidden md:flex items-center gap-8">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-fedify-blue dark:hover:text-fedify-sky transition-colors duration-200"
        >
          {{ link.label }}
        </a>
      </div>

      <!-- Dark Mode Toggle -->
      <button
        @click="toggle"
        class="relative w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 flex items-center justify-center group"
        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
      >
        <div class="relative w-5 h-5">
          <!-- Sun icon -->
          <div
            class="i-lucide-sun absolute inset-0 text-amber-500 transition-all duration-300"
            :class="isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'"
          />
          <!-- Moon icon -->
          <div
            class="i-lucide-moon absolute inset-0 text-fedify-sky transition-all duration-300"
            :class="isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'"
          />
        </div>
      </button>
    </nav>
  </header>
</template>
