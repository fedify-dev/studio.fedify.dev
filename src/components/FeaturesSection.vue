<script setup lang="ts">
const features = [
  {
    icon: 'i-lucide-activity',
    title: 'Activity monitor',
    description: 'Watch ActivityPub traffic in real-time. See every incoming and outgoing activity with full request/response details, timing info, and validation results.',
    gradient: 'from-sky-500 to-cyan-500',
  },
  {
    icon: 'i-lucide-search',
    title: 'Object lookup',
    description: 'Fetch and inspect any ActivityPub object by URL or WebFinger address. View compact and expanded JSON-LD, validate against specs, and explore linked objects.',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    icon: 'i-lucide-key-round',
    title: 'HTTP Signatures debugger',
    description: 'Step through signature creation and verification. Identify clock skew, malformed headers, and key issues. Support for both draft-cavage and RFC 9421.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: 'i-lucide-braces',
    title: 'JSON-LD toolkit',
    description: 'Transform between compact and expanded forms. Resolve contexts, apply framing, and see how different implementations would process your documents.',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: 'i-lucide-user-cog',
    title: 'Actor simulator',
    description: 'Create temporary test actors with configurable profiles. Simulate different Fediverse software behaviors and automate interaction sequences.',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: 'i-lucide-check-circle',
    title: 'FEP compliance checker',
    description: 'Validate your implementation against Fediverse Enhancement Proposals. Get clear pass/fail results with detailed explanations and fix suggestions.',
    gradient: 'from-indigo-500 to-blue-500',
  },
]
</script>

<template>
  <section id="features" class="relative py-24 md:py-32 overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-white dark:bg-slate-900 transition-colors duration-500" />

    <div class="relative z-10 max-w-6xl mx-auto px-6">
      <!-- Section header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-fedify-blue/10 dark:bg-fedify-blue/20 text-fedify-deep dark:text-fedify-sky text-sm font-medium mb-6">
          <div class="i-lucide-wrench w-4 h-4" />
          <span>The Solution</span>
        </div>
        <h2 class="section-title text-slate-900 dark:text-white mb-4">
          Complete toolkit for
          <span class="gradient-text">federation developers</span>
        </h2>
        <p class="section-subtitle mx-auto text-slate-600 dark:text-slate-400">
          Everything you need to build, test, and debug ActivityPub implementations—all in one place.
        </p>
      </div>

      <!-- Features grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="group relative"
        >
          <div class="h-full p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:shadow-fedify-blue/10 hover:-translate-y-1">
            <!-- Icon with gradient background -->
            <div
              class="relative w-14 h-14 rounded-xl mb-5 flex items-center justify-center overflow-hidden"
            >
              <!-- Gradient background -->
              <div
                class="absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-100 transition-opacity duration-500"
                :class="feature.gradient"
              />
              <div
                :class="[feature.icon, 'w-7 h-7 relative z-10 text-slate-700 dark:text-slate-300 group-hover:text-white transition-colors duration-500']"
              />
            </div>

            <!-- Content -->
            <h3 class="text-lg font-display font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-fedify-deep dark:group-hover:text-fedify-sky transition-colors duration-300">
              {{ feature.title }}
            </h3>
            <p class="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
              {{ feature.description }}
            </p>
          </div>

          <!-- Hover glow effect -->
          <div
            class="absolute -inset-px rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
            :class="feature.gradient"
          />
        </div>
      </div>

      <!-- Additional features preview -->
      <div class="mt-16 text-center">
        <p class="text-slate-500 dark:text-slate-400 mb-4">
          Plus WebFinger tester, NodeInfo inspector, Activity Builder, and more...
        </p>
        <div class="flex flex-wrap justify-center gap-2">
          <span
            v-for="extra in ['WebFinger', 'NodeInfo', 'Activity Builder', 'Scenario Tester', 'Debug Sessions']"
            :key="extra"
            class="px-3 py-1.5 text-sm rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
          >
            {{ extra }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
