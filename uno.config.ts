import {
  defineConfig,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetWebFonts({
      fonts: {
        sans: 'IBM Plex Sans:400,500,600,700',
        display: 'Instrument Sans:400,500,600,700',
        mono: 'IBM Plex Mono:400,500',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: {
    colors: {
      fedify: {
        sky: '#bae6fd',
        blue: '#0ea5e9',
        deep: '#0284c7',
        navy: '#0c4a6e',
        violet: '#a855f7',
        pink: '#ec4899',
        rose: '#d0188f',
        purple: '#a730b8',
      },
    },
  },
  shortcuts: {
    'btn': 'px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer',
    'btn-primary': 'btn bg-gradient-to-r from-fedify-blue to-fedify-deep text-white hover:shadow-lg hover:shadow-fedify-blue/30 hover:-translate-y-0.5',
    'section-container': 'max-w-6xl mx-auto px-6 py-20 md:py-28',
    'section-title': 'text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-snug',
    'section-subtitle': 'text-lg md:text-xl text-slate-600 dark:text-slate-400 mt-4 max-w-2xl',
    'card': 'bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700/50 p-6 transition-all duration-300',
    'card-hover': 'hover:shadow-xl hover:shadow-fedify-blue/10 hover:-translate-y-1 hover:border-fedify-blue/30',
    'gradient-text': 'bg-gradient-to-r from-fedify-blue via-fedify-violet to-fedify-pink bg-clip-text text-transparent pb-1',
  },
})
