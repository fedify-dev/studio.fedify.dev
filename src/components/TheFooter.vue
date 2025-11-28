<script setup lang="ts">
const currentYear = new Date().getFullYear()

const links = {
  project: [
    { label: 'Features', href: '#features' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Newsletter', href: '#newsletter' },
  ],
  fedify: [
    { label: 'Fedify framework', href: 'https://fedify.dev/', external: true },
    { label: 'GitHub', href: 'https://github.com/fedify-dev/fedify', external: true },
  ],
  community: [
    { label: 'Discord', href: 'https://discord.gg/bhtwpzURwd', external: true },
    { label: 'Matrix', href: 'https://matrix.to/#/#fedify:matrix.org', external: true },
  ],
}
</script>

<template>
  <footer class="relative bg-slate-900 border-t border-slate-800">
    <div class="max-w-6xl mx-auto px-6 py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        <!-- Brand -->
        <div class="md:col-span-1">
          <a href="#" class="flex items-center gap-3 mb-4">
            <img src="/fedify-logo.svg" alt="Fedify" class="w-10 h-10" />
            <div>
              <span class="font-display font-semibold text-xl text-white">Fedify</span>
              <span class="text-fedify-blue ml-1">Studio</span>
            </div>
          </a>
          <p class="text-sm text-slate-500 leading-relaxed">
            The definitive development companion for ActivityPub. Coming H2 2026.
          </p>
        </div>

        <!-- Project links -->
        <div>
          <h4 class="text-sm font-semibold text-white mb-4">Project</h4>
          <ul class="space-y-3">
            <li v-for="link in links.project" :key="link.label">
              <a
                :href="link.href"
                class="text-sm text-slate-400 hover:text-fedify-sky transition-colors duration-200"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Fedify links -->
        <div>
          <h4 class="text-sm font-semibold text-white mb-4">Fedify</h4>
          <ul class="space-y-3">
            <li v-for="link in links.fedify" :key="link.label">
              <a
                :href="link.href"
                :target="link.external ? '_blank' : undefined"
                :rel="link.external ? 'noopener noreferrer' : undefined"
                class="text-sm text-slate-400 hover:text-fedify-sky transition-colors duration-200 inline-flex items-center gap-1"
              >
                {{ link.label }}
                <div v-if="link.external" class="i-lucide-external-link w-3 h-3" />
              </a>
            </li>
          </ul>
        </div>

        <!-- Community links -->
        <div>
          <h4 class="text-sm font-semibold text-white mb-4">Community</h4>
          <ul class="space-y-3">
            <li v-for="link in links.community" :key="link.label">
              <a
                :href="link.href"
                :target="link.external ? '_blank' : undefined"
                :rel="link.external ? 'noopener noreferrer' : undefined"
                class="text-sm text-slate-400 hover:text-fedify-sky transition-colors duration-200 inline-flex items-center gap-1"
              >
                {{ link.label }}
                <div v-if="link.external" class="i-lucide-external-link w-3 h-3" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-sm text-slate-500">
          &copy; {{ currentYear }} Fedify. All rights reserved.
        </p>
        <div class="flex items-center gap-2 text-sm text-slate-500">
          <span>Supported by</span>
          <a
            href="https://www.sovereigntechfund.de/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-fedify-sky hover:text-fedify-blue transition-colors inline-flex items-center gap-1"
          >
            Sovereign Tech Fund
            <div class="i-lucide-external-link w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
