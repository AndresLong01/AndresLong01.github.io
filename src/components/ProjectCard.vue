<script setup lang="ts">
import type { Project } from '../types'
import Icon from './Icon.vue'

defineProps<{ project: Project }>()
defineEmits<{ (e: 'open', project: Project): void }>()
</script>

<template>
  <button
    type="button"
    class="group relative w-full text-left rounded-xl border bg-white/60 p-5 shadow-sm transition
           hover:-translate-y-1 hover:shadow-lg
           dark:bg-slate-900/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60"
    :style="{
      borderColor: 'rgba(148,163,184,0.35)',
      '--accent': project.media.avgColor ?? 'rgba(148,163,184,0.6)',
    }"
    @click="$emit('open', project)"
  >
    <div class="pointer-events-none absolute inset-0 overflow-hidden rounded-xl" aria-hidden="true">
      <div
        class="absolute inset-0 bg-center bg-cover scale-110 blur-xs opacity-35 dark:opacity-30 transition-opacity duration-300 group-hover:opacity-45"
        :style="{ backgroundImage: `url(${project.media.image})` }"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-white/50 via-white/35 to-white/55 dark:from-slate-950/55 dark:via-slate-950/40 dark:to-slate-950/55" />
    </div>

    <span
      class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-transparent transition duration-300"
      style="box-shadow: 0 0 0 1px transparent;"
      aria-hidden="true"
    />
    <span
      class="pointer-events-none absolute inset-0 rounded-xl transition duration-300 opacity-0 group-hover:opacity-100"
      :style="{ boxShadow: `0 0 0 2px var(--accent)` }"
      aria-hidden="true"
    />

    <div class="relative">
      <div class="flex items-start justify-between gap-4">
        <h3 class="text-base font-semibold">{{ project.name }}</h3>

        <div class="flex items-center gap-3">
          <a
            v-if="project.links?.demo"
            :href="project.links.demo"
            target="_blank"
            rel="noreferrer"
            class="inline-flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            @click.stop
          >
            Demo <Icon name="external" class="w-4 h-4" />
          </a>

          <a
            v-if="project.links?.repo"
            :href="project.links.repo"
            target="_blank"
            rel="noreferrer"
            class="inline-flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            @click.stop
          >
            Code <Icon name="github" class="w-4 h-4" />
          </a>
        </div>
      </div>

      <p class="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
        {{ project.description }}
      </p>

      <ul
        v-if="project.highlights?.length"
        class="mt-3 list-disc pl-5 text-sm text-slate-700 dark:text-slate-300"
      >
        <li v-for="(highlight, idx) in project.highlights" :key="idx">{{ highlight }}</li>
      </ul>

      <div class="mt-4 flex flex-wrap gap-2">
        <span
          v-for="tech in project.stack"
          :key="tech"
          class="inline-flex items-center rounded-full bg-white/50 px-3 py-1 text-xs font-medium text-slate-800
                 dark:bg-slate-950/30 dark:text-slate-200"
        >
          {{ tech }}
        </span>
      </div>

      <div
        class="mt-5 h-px w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        :style="{ background: `linear-gradient(90deg, transparent, var(--accent), transparent)` }"
        aria-hidden="true"
      />
    </div>
  </button>
</template>
