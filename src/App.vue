<script setup lang="ts">
import TheHeader from './components/TheHeader.vue'
import HeroSection from './components/HeroSection.vue'
import PainPointsSection from './components/PainPointsSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import RoadmapSection from './components/RoadmapSection.vue'
import NewsletterSection from './components/NewsletterSection.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
    <TheHeader />
    <main>
      <HeroSection />
      <PainPointsSection />
      <FeaturesSection />
      <RoadmapSection />
      <NewsletterSection />
    </main>
    <TheFooter />
  </div>
</template>
