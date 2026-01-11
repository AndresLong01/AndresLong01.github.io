<script setup lang="ts">
import { computed, ref } from 'vue'
import Section from './Section.vue'
import Icon from './Icon.vue'
import { site } from '../content/portfolio'

const copied = ref(false)

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(site.email)
    copied.value = true
    window.setTimeout(() => (copied.value = false), 1200)
  } catch {
    // ignore clipboard errors
  }
}

const mailto = computed(() => `mailto:${site.email}?subject=Let’s%20communicate`)
const github = computed(() => site.socials.find((s) => s.icon === 'github')?.href)
const linkedin = computed(() => site.socials.find((s) => s.icon === 'linkedin')?.href)
</script>

<template>
  <Section id="contact" title="Contact">
    <div class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white/60 p-6 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/30">
      <div class="pointer-events-none absolute inset-0" aria-hidden="true">
        <div class="absolute -top-24 left-1/2 h-72 w-[46rem] -translate-x-1/2 rounded-full bg-slate-200/70 blur-3xl dark:bg-slate-800/60" />
        <div class="absolute -bottom-28 right-[-6rem] h-72 w-72 rounded-full bg-slate-200/50 blur-3xl dark:bg-slate-800/40" />
        <div class="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/20 dark:from-slate-950/10 dark:to-slate-950/10" />
      </div>

      <div class="relative grid gap-8 lg:grid-cols-5">
        <div class="lg:col-span-3">
          <h3 class="text-xl sm:text-2xl font-semibold tracking-tight">
            Want to work together?
          </h3>
          <p class="mt-2 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            I’m easiest to reach by email. If you include a link to the project or repo, I can respond faster.
          </p>

          <div class="mt-6 flex flex-wrap items-center gap-3">
            <a
              :href="mailto"
              class="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              <Icon name="mail" class="w-4 h-4" />
              Email me
            </a>

            <button
              type="button"
              class="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white/40 px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-white/70 dark:border-slate-700 dark:bg-slate-950/30 dark:text-white dark:hover:bg-slate-950/60"
              @click="copyEmail"
            >
              <span>{{ copied ? 'Copied!' : 'Copy email' }}</span>
            </button>

            <a
              v-if="linkedin"
              :href="linkedin"
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white/30 px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-white/70 dark:border-slate-700 dark:bg-slate-950/20 dark:text-white dark:hover:bg-slate-950/60"
            >
              <Icon name="linkedin" class="w-4 h-4" />
              LinkedIn
            </a>

            <a
              v-if="github"
              :href="github"
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white/30 px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-white/70 dark:border-slate-700 dark:bg-slate-950/20 dark:text-white dark:hover:bg-slate-950/60"
            >
              <Icon name="github" class="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>

        <div class="lg:col-span-2 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <div class="rounded-xl border border-slate-200 bg-white/40 p-5 dark:border-slate-800 dark:bg-slate-950/20">
            <h4 class="text-sm font-semibold">Current focus</h4>
            <ul class="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li class="flex gap-2">
                <span class="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500"></span>
                Vue / TypeScript UI work (especially legacy modernization)
              </li>
              <li class="flex gap-2">
                <span class="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500"></span>
                Game systems + shaders + VFX in Godot
              </li>
              <li class="flex gap-2">
                <span class="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500"></span>
                Performance + clean architecture
              </li>
            </ul>
          </div>

          <div class="rounded-xl border border-slate-200 bg-white/40 p-5 dark:border-slate-800 dark:bg-slate-950/20">
            <h4 class="text-sm font-semibold">Other Interest</h4>
            <p class="mt-2 text-sm text-slate-700 dark:text-slate-300">
              Skiing, Hiking, anything outdoors.
            </p>
            <p class="mt-2 text-sm text-slate-700 dark:text-slate-300">
              Gaming, puzzle solving, I'm just a big nerd.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="h-24 sm:h-32" aria-hidden="true" />
  </Section>
</template>
