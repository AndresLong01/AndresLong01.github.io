<script setup lang="ts">
import Icon from './Icon.vue'
import { site } from '../content/portfolio'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="relative overflow-hidden border-t border-slate-200/70 dark:border-slate-800/60">
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div
        class="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-slate-200/60 blur-3xl dark:bg-slate-800/50"
      />
      <div
        class="absolute -bottom-32 right-[-6rem] h-80 w-80 rounded-full bg-slate-200/40 blur-3xl dark:bg-slate-800/30"
      />
      <div
        class="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/80 dark:from-slate-950/40 dark:to-slate-950/80"
      />
    </div>

    <div class="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14">
      <div class="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p class="text-base font-semibold tracking-tight">
            {{ site.name }}
          </p>
          <p class="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Software Engineer · Frontend · Game Development
          </p>
          <p class="mt-3 text-xs text-slate-500 dark:text-slate-500">
            © {{ year }} · Built with Vue & Tailwind
          </p>
        </div>

        <div class="flex items-center gap-4">
          <a
            v-for="social in site.socials"
            :key="social.label"
            :href="social.href"
            target="_blank"
            rel="noreferrer"
            class="group relative inline-flex items-center justify-center rounded-full p-2 text-slate-600 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            :aria-label="social.label"
          >
            <Icon :name="social.icon" class="h-5 w-5" />
            <span
              class="pointer-events-none absolute inset-0 rounded-full ring-1 ring-slate-300/0 transition group-hover:ring-slate-300/60 dark:group-hover:ring-slate-700/60"
              aria-hidden="true"
            />
            <span
              class="pointer-events-none absolute inset-0 rounded-full blur-md bg-slate-300/0 transition group-hover:bg-slate-300/30 dark:group-hover:bg-slate-700/30"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>

      <div class="mt-8 border-t border-slate-200/60 pt-4 dark:border-slate-800/50">
        <p class="text-xs text-slate-500 dark:text-slate-500">
          I'm just trying to solve problems, so that I can take my dogs on more walks.
        </p>
      </div>
    </div>
  </footer>
</template>
