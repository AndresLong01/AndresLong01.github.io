<script setup lang="ts">
import Section from './Section.vue'
import SkillBadge from './SkillBadge.vue'
import { about, skillGroups } from '../content/portfolio'

const LIMIT_PER_GROUP = 8

function takeTop(items: string[]) {
  return items.slice(0, LIMIT_PER_GROUP)
}
</script>

<template>
  <Section id="about" title="About" subtitle="A quick intro + the tools I reach for">
    <div class="grid gap-8 lg:grid-cols-5">
      <div class="lg:col-span-3">
        <div class="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
          <p v-for="(paragraph, idx) in about" :key="idx">{{ paragraph }}</p>
        </div>
      </div>

      <aside class="lg:col-span-2">
        <div class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white/55 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/30">
          <div class="pointer-events-none absolute inset-0" aria-hidden="true">
            <div class="absolute -top-20 left-1/2 h-52 w-[28rem] -translate-x-1/2 rounded-full bg-slate-200/70 blur-3xl dark:bg-slate-800/55" />
            <div class="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/20 dark:from-slate-950/10 dark:to-slate-950/10" />
          </div>

          <div class="relative">
            <div class="flex items-baseline justify-between gap-3">
              <h3 class="text-sm font-semibold tracking-tight">Toolkit</h3>
            </div>

            <div class="mt-4 space-y-4">
              <div v-for="group in skillGroups" :key="group.title">
                <p class="text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-400">
                  {{ group.title }}
                </p>

                <div class="mt-2 flex flex-wrap gap-2">
                  <SkillBadge v-for="item in takeTop(group.items)" :key="item" :label="item" />
                </div>

                <p
                  v-if="group.items.length > LIMIT_PER_GROUP"
                  class="mt-2 text-[11px] text-slate-500 dark:text-slate-500"
                >
                  +{{ group.items.length - LIMIT_PER_GROUP }} more
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </Section>
</template>
