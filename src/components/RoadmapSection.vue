<script setup lang="ts">
const phases = [
  {
    phase: 'Phase 1',
    title: 'Foundation',
    status: 'upcoming',
    items: [
      'Activity monitor with failure diagnostics',
      'Object lookup tool',
      'WebFinger tester',
      'NodeInfo inspector',
    ],
    color: 'sky',
  },
  {
    phase: 'Phase 2',
    title: 'Protocol tools',
    status: 'planned',
    items: [
      'JSON-LD toolkit (compact/expand/frame)',
      'HTTP Signatures debugger',
      'Activity builder (basic)',
    ],
    color: 'violet',
  },
  {
    phase: 'Phase 3',
    title: 'Advanced features',
    status: 'planned',
    items: [
      'Actor simulator',
      'Activity builder (advanced templates)',
      'Federation scenario tester',
    ],
    color: 'pink',
  },
  {
    phase: 'Phase 4',
    title: 'Ecosystem',
    status: 'planned',
    items: [
      'FEP compliance checker',
      'Shareable debug sessions',
      'API for CI/CD integration',
      'Team collaboration features',
    ],
    color: 'amber',
  },
]
</script>

<template>
  <section id="roadmap" class="relative py-24 md:py-32 overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-500" />

    <!-- Decorative gradient -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />

    <div class="relative z-10 max-w-6xl mx-auto px-6">
      <!-- Section header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 text-sm font-medium mb-6">
          <div class="i-lucide-map w-4 h-4" />
          <span>Roadmap</span>
        </div>
        <h2 class="section-title text-slate-900 dark:text-white mb-4">
          Building the future of
          <span class="gradient-text">federation development</span>
        </h2>
        <p class="section-subtitle mx-auto text-slate-600 dark:text-slate-400">
          Our phased approach to delivering a comprehensive ActivityPub development platform.
        </p>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Vertical line -->
        <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500 via-violet-500 to-amber-500 md:-translate-x-1/2" />

        <!-- Phase items -->
        <div class="space-y-12">
          <div
            v-for="(item, index) in phases"
            :key="item.phase"
            class="relative"
          >
            <!-- Timeline node -->
            <div
              class="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-slate-900 md:-translate-x-1/2 z-10"
              :class="{
                'bg-sky-500': item.color === 'sky',
                'bg-violet-500': item.color === 'violet',
                'bg-pink-500': item.color === 'pink',
                'bg-amber-500': item.color === 'amber',
              }"
            />

            <!-- Content card -->
            <div
              class="ml-12 md:ml-0 md:w-[calc(50%-2rem)]"
              :class="index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'"
            >
              <div class="p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:shadow-lg transition-all duration-300">
                <!-- Phase badge -->
                <div class="flex items-center gap-3 mb-4">
                  <span
                    class="px-3 py-1 rounded-full text-sm font-semibold"
                    :class="{
                      'bg-sky-100 text-sky-700 dark:bg-sky-900/50 dark:text-sky-300': item.color === 'sky',
                      'bg-violet-100 text-violet-700 dark:bg-violet-900/50 dark:text-violet-300': item.color === 'violet',
                      'bg-pink-100 text-pink-700 dark:bg-pink-900/50 dark:text-pink-300': item.color === 'pink',
                      'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300': item.color === 'amber',
                    }"
                  >
                    {{ item.phase }}
                  </span>
                  <span
                    v-if="item.status === 'upcoming'"
                    class="px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300"
                  >
                    First release
                  </span>
                </div>

                <!-- Title -->
                <h3 class="text-xl font-display font-semibold text-slate-900 dark:text-white mb-4">
                  {{ item.title }}
                </h3>

                <!-- Feature list -->
                <ul class="space-y-2">
                  <li
                    v-for="feature in item.items"
                    :key="feature"
                    class="flex items-start gap-2 text-slate-600 dark:text-slate-400"
                  >
                    <div
                      class="i-lucide-check w-5 h-5 flex-shrink-0 mt-0.5"
                      :class="{
                        'text-sky-500': item.color === 'sky',
                        'text-violet-500': item.color === 'violet',
                        'text-pink-500': item.color === 'pink',
                        'text-amber-500': item.color === 'amber',
                      }"
                    />
                    <span>{{ feature }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- End marker -->
        <div class="absolute left-4 md:left-1/2 -bottom-4 w-8 h-8 rounded-full bg-gradient-to-br from-sky-500 to-pink-500 md:-translate-x-1/2 flex items-center justify-center">
          <div class="i-lucide-rocket w-4 h-4 text-white" />
        </div>
      </div>
    </div>
  </section>
</template>
