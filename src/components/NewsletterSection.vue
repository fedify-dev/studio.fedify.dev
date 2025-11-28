<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const isSubmitted = ref(false)
const isSubmitting = ref(false)

const handleSubmit = async () => {
  if (!email.value || isSubmitting.value) return

  isSubmitting.value = true

  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 800))

  isSubmitted.value = true
  isSubmitting.value = false
}
</script>

<template>
  <section id="newsletter" class="relative py-24 md:py-32 overflow-hidden">
    <!-- Background with gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800" />

    <!-- Decorative elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/4 -left-20 w-80 h-80 bg-fedify-blue/20 rounded-full blur-3xl" />
      <div class="absolute bottom-1/4 -right-20 w-80 h-80 bg-fedify-violet/20 rounded-full blur-3xl" />

      <!-- Grid pattern -->
      <div class="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
    </div>

    <div class="relative z-10 max-w-3xl mx-auto px-6 text-center">
      <!-- Icon -->
      <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-fedify-blue to-fedify-violet mb-8">
        <div class="i-lucide-bell-ring w-8 h-8 text-white" />
      </div>

      <!-- Content -->
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
        Be the first to know
      </h2>
      <p class="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
        Get notified when Fedify Studio launches. No spam, just important updates about the release and early access opportunities.
      </p>

      <!-- Form -->
      <div v-if="!isSubmitted" class="max-w-md mx-auto">
        <form @submit.prevent="handleSubmit" class="relative">
          <div class="flex flex-col sm:flex-row gap-3">
            <div class="relative flex-1">
              <div class="absolute left-4 top-1/2 -translate-y-1/2 i-lucide-mail w-5 h-5 text-slate-500" />
              <input
                v-model="email"
                type="email"
                required
                placeholder="you@example.com"
                class="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:border-fedify-blue focus:ring-2 focus:ring-fedify-blue/20 transition-all duration-300"
              />
            </div>
            <button
              type="submit"
              :disabled="isSubmitting"
              class="px-8 py-4 rounded-xl bg-gradient-to-r from-fedify-blue to-fedify-violet text-white font-semibold hover:shadow-lg hover:shadow-fedify-blue/30 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <span v-if="!isSubmitting">Notify me</span>
              <span v-else class="flex items-center gap-2">
                <div class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Subscribing...</span>
              </span>
            </button>
          </div>
        </form>
        <p class="mt-4 text-sm text-slate-500">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>

      <!-- Success state -->
      <div v-else class="max-w-md mx-auto">
        <div class="p-8 rounded-2xl bg-emerald-500/20 border border-emerald-500/30">
          <div class="i-lucide-check-circle w-12 h-12 mx-auto text-emerald-400 mb-4" />
          <h3 class="text-xl font-semibold text-white mb-2">You're on the list!</h3>
          <p class="text-slate-400">
            Thanks for your interest in Fedify Studio. We'll let you know as soon as it's ready.
          </p>
        </div>
      </div>

      <!-- Social proof -->
      <div class="mt-12 pt-12 border-t border-white/10">
        <p class="text-sm text-slate-500 mb-4">Fedify Studio is a sister project of</p>
        <a
          href="https://fedify.dev/"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
        >
          <img src="/fedify-logo.svg" alt="Fedify" class="w-8 h-8" />
          <div class="text-left">
            <div class="text-white font-semibold group-hover:text-fedify-sky transition-colors">Fedify</div>
            <div class="text-xs text-slate-500">TypeScript ActivityPub framework</div>
          </div>
          <div class="i-lucide-external-link w-4 h-4 text-slate-500 group-hover:text-fedify-sky transition-colors" />
        </a>
      </div>
    </div>
  </section>
</template>
