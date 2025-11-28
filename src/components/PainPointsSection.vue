<script setup lang="ts">
const painPoints = [
  {
    icon: 'i-lucide-file-stack',
    title: 'Protocol complexity',
    description: 'Hundreds of pages of specs: ActivityStreams 2.0, Activity Vocabulary, WebFinger, HTTP Signatures, and dozens of FEPs. Good luck keeping track of it all.',
    color: 'text-red-500',
    bgColor: 'bg-red-500/10 dark:bg-red-500/20',
  },
  {
    icon: 'i-lucide-unplug',
    title: 'Interoperability hell',
    description: 'What works with Mastodon breaks on Lemmy. Pixelfed handles it differently. PeerTube has its own quirks. Every implementation is a special snowflake.',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10 dark:bg-orange-500/20',
  },
  {
    icon: 'i-lucide-bug',
    title: 'Debugging nightmare',
    description: 'Signature verification failed? JSON-LD context error? Activity rejected silently? Finding the root cause requires psychic powers—or better tools.',
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10 dark:bg-amber-500/20',
  },
  {
    icon: 'i-lucide-eye-off',
    title: 'Limited visibility',
    description: 'Federation happens across servers on the internet. When something fails between your server and another, you\'re flying blind without proper observability.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10 dark:bg-purple-500/20',
  },
]
</script>

<template>
  <section class="relative py-24 md:py-32 overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-500" />

    <!-- Decorative gradient -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />
    <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />

    <div class="relative z-10 max-w-6xl mx-auto px-6">
      <!-- Section header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400 text-sm font-medium mb-6">
          <div class="i-lucide-alert-triangle w-4 h-4" />
          <span>The Problem</span>
        </div>
        <h2 class="section-title text-slate-900 dark:text-white mb-4">
          Why is ActivityPub development
          <span class="block mt-2 gradient-text">so frustratingly hard?</span>
        </h2>
        <p class="section-subtitle mx-auto text-slate-600 dark:text-slate-400">
          Even experienced developers struggle with federation. Here's what you're up against.
        </p>
      </div>

      <!-- Pain points grid -->
      <div class="grid md:grid-cols-2 gap-6">
        <div
          v-for="(point, index) in painPoints"
          :key="point.title"
          class="group relative p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 hover:shadow-lg"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <!-- Icon -->
          <div
            class="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
            :class="point.bgColor"
          >
            <div :class="[point.icon, point.color, 'w-6 h-6']" />
          </div>

          <!-- Content -->
          <h3 class="text-lg font-display font-semibold text-slate-900 dark:text-white mb-2">
            {{ point.title }}
          </h3>
          <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
            {{ point.description }}
          </p>

          <!-- Hover accent -->
          <div
            class="absolute inset-x-0 bottom-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r"
            :class="{
              'from-red-500 to-orange-500': index === 0,
              'from-orange-500 to-amber-500': index === 1,
              'from-amber-500 to-yellow-500': index === 2,
              'from-purple-500 to-pink-500': index === 3,
            }"
          />
        </div>
      </div>

      <!-- Transition text -->
      <div class="mt-16 text-center">
        <p class="text-lg text-slate-500 dark:text-slate-400 mb-4">
          Sound familiar? There's a better way.
        </p>
        <div class="i-lucide-arrow-down w-6 h-6 mx-auto text-fedify-blue animate-bounce" />
      </div>
    </div>
  </section>
</template>
