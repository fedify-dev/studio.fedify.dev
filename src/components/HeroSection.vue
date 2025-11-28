<script setup lang="ts">
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-24">
    <!-- Background gradient -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-fuchsia-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 transition-colors duration-500"
    />

    <!-- Decorative elements -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Floating orbs -->
      <div
        class="absolute top-1/4 left-1/4 w-96 h-96 bg-fedify-sky/20 dark:bg-fedify-blue/10 rounded-full blur-3xl animate-float"
      />
      <div
        class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-fuchsia-200/30 dark:bg-fedify-violet/10 rounded-full blur-3xl animate-float"
        style="animation-delay: -3s"
      />

      <!-- Grid pattern -->
      <div
        class="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:60px_60px] dark:bg-[linear-gradient(rgba(14,165,233,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.05)_1px,transparent_1px)]"
      />

      <!-- Connection lines decoration -->
      <svg
        class="absolute inset-0 w-full h-full opacity-20 dark:opacity-10"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0ea5e9" stop-opacity="0.5" />
            <stop offset="50%" stop-color="#a855f7" stop-opacity="0.5" />
            <stop offset="100%" stop-color="#ec4899" stop-opacity="0.5" />
          </linearGradient>
        </defs>
        <path
          d="M10,30 Q30,10 50,30 T90,30"
          fill="none"
          stroke="url(#line-gradient)"
          stroke-width="0.1"
          class="animate-pulse-glow"
        />
        <path
          d="M10,50 Q30,30 50,50 T90,50"
          fill="none"
          stroke="url(#line-gradient)"
          stroke-width="0.1"
          class="animate-pulse-glow"
          style="animation-delay: 1s"
        />
        <path
          d="M10,70 Q30,50 50,70 T90,70"
          fill="none"
          stroke="url(#line-gradient)"
          stroke-width="0.1"
          class="animate-pulse-glow"
          style="animation-delay: 2s"
        />
      </svg>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-5xl mx-auto px-6 text-center">
      <!-- Badge -->
      <div class="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fedify-blue/10 dark:bg-fedify-blue/20 border border-fedify-blue/20 dark:border-fedify-blue/30 mb-8">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-fedify-blue opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-fedify-blue"></span>
        </span>
        <span class="text-sm font-medium text-fedify-deep dark:text-fedify-sky">
          Coming H2 2026
        </span>
      </div>

      <!-- Logo mark -->
      <div class="animate-fade-in-up delay-100 mb-8">
        <img
          src="/fedify-logo.svg"
          alt=""
          class="w-24 h-24 mx-auto drop-shadow-2xl"
        />
      </div>

      <!-- Title -->
      <h1 class="animate-fade-in-up delay-200 font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
        <span class="text-slate-900 dark:text-white">Fedify</span>
        <span class="gradient-text ml-2">Studio</span>
      </h1>

      <!-- Subtitle -->
      <p class="animate-fade-in-up delay-300 text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8 leading-relaxed">
        The definitive development companion for
        <span class="text-fedify-deep dark:text-fedify-sky font-medium">ActivityPub</span>.
        <br class="hidden md:block" />
        Debug federation, monitor activities, and build with confidence.
      </p>

      <!-- CTA buttons -->
      <div class="animate-fade-in-up delay-400 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#newsletter"
          class="btn-primary inline-flex items-center gap-2"
        >
          <span>Get notified</span>
          <div class="i-lucide-arrow-right w-4 h-4" />
        </a>
        <a
          href="#features"
          class="btn bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 inline-flex items-center gap-2"
        >
          <span>Explore features</span>
          <div class="i-lucide-chevron-down w-4 h-4" />
        </a>
      </div>

      <!-- Tech badges -->
      <div class="animate-fade-in-up delay-500 mt-16 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-500 dark:text-slate-500">
        <span class="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          ActivityPub
        </span>
        <span class="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          WebFinger
        </span>
        <span class="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          HTTP Signatures
        </span>
        <span class="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          JSON-LD
        </span>
        <span class="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          NodeInfo
        </span>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <div class="i-lucide-chevrons-down w-6 h-6 text-slate-400 dark:text-slate-600" />
    </div>
  </section>
</template>
