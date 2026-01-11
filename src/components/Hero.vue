<script setup lang="ts">
import Icon from './Icon.vue'
import { site } from '../content/portfolio'

const heroVideoSrc = '/hero.mp4' // Maybe this is not the best idea, well it's a small app...
const heroPoster = '/hero-poster.jpg' // I might add this later, it's not in right now
</script>

<template>
  <section id="top" class="scroll-mt-24 relative overflow-hidden">
    <video
      class="absolute inset-0 h-full w-full object-cover opacity-100 dark:opacity-65"
      :src="heroVideoSrc"
      :poster="heroPoster"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      aria-hidden="true"
    />

    <!-- Fallback -->
    <div class="absolute inset-0 hero-anim opacity-0 dark:opacity-40" aria-hidden="true" />

    <div
      class="absolute inset-0 bg-gradient-to-b from-white/70 via-white/55 to-white/40 dark:from-slate-950/70 dark:via-slate-950/55 dark:to-slate-950/80"
      aria-hidden="true"
    />

    <div
      class="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full blur-3xl bg-slate-200/70 dark:bg-slate-800/60"
      aria-hidden="true"
    />
    <div
      class="absolute -bottom-40 right-[-10rem] h-80 w-80 rounded-full blur-3xl bg-slate-200/60 dark:bg-slate-800/40"
      aria-hidden="true"
    />

    <div class="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <div class="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div class="max-w-2xl">
          <p class="text-sm font-medium text-slate-700 dark:text-slate-300">
            {{ site.location }}
          </p>

          <h1 class="mt-2 text-4xl sm:text-6xl font-semibold tracking-tight">
            {{ site.name }}
          </h1>

          <p class="mt-3 text-lg sm:text-xl text-slate-700 dark:text-slate-300">
            {{ site.role }} — {{ site.headline }}
          </p>

          <div class="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              class="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              View projects
            </a>

            <a
              href="#contact"
              class="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white/40 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white/70 dark:border-slate-700 dark:bg-slate-950/30 dark:text-white dark:hover:bg-slate-950/60"
            >
              Contact
            </a>
          </div>

          <div class="mt-7 flex items-center gap-4">
            <a
              v-for="social in site.socials"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center gap-2 text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
              :aria-label="social.label"
            >
              <Icon :name="social.icon" class="w-6 h-6" />
            </a>
          </div>
        </div>

        <div class="shrink-0">
          <div class="relative">
            <div
              class="absolute inset-0 rounded-full blur-xl bg-slate-300/60 dark:bg-slate-700/40 scale-110"
              aria-hidden="true"
            />

            <div
              class="relative h-44 w-44 sm:h-56 sm:w-56 rounded-full border border-white/50 dark:border-slate-800/60 bg-white/30 dark:bg-slate-900/25 backdrop-blur flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-lg"
            >
              <img
                src="/headshot.jpg"
                alt="Andres Long"
                class="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-anim {
  background:
    radial-gradient(800px circle at 10% 20%, rgba(148, 163, 184, 0.35), transparent 55%),
    radial-gradient(700px circle at 90% 30%, rgba(100, 116, 139, 0.25), transparent 55%),
    radial-gradient(900px circle at 30% 90%, rgba(203, 213, 225, 0.35), transparent 55%),
    linear-gradient(120deg, rgba(241, 245, 249, 0.15), rgba(226, 232, 240, 0.15));
  filter: saturate(1.05);
  animation: heroFloat 12s ease-in-out infinite;
}

@keyframes heroFloat {
  0% {
    transform: translate3d(0, 0, 0) scale(1.02);
  }
  50% {
    transform: translate3d(0, -10px, 0) scale(1.03);
  }
  100% {
    transform: translate3d(0, 0, 0) scale(1.02);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-anim {
    animation: none;
  }
  video {
    display: none;
  }
}
</style>
