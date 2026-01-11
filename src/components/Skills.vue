<script setup lang="ts">
import Section from './Section.vue'
import SkillBadge from './SkillBadge.vue'
import { skillGroups } from '../content/portfolio'
</script>

<template>
  <Section id="skills" title="Skills" subtitle="Things I've worked with in the past">
    <div class="grid gap-6 sm:grid-cols-2">
      <div
        v-for="group in skillGroups"
        :key="group.title"
        class="rounded-lg border border-slate-200 bg-white/60 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/30"
      >
        <h3 class="font-semibold">{{ group.title }}</h3>
        <div class="mt-3 flex flex-wrap gap-2">
          <SkillBadge v-for="item in group.items" :key="item" :label="item" />
        </div>
      </div>
    </div>
  </Section>
</template>
