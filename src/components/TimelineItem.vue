<script setup lang="ts">
import type { Experience } from '../types'
defineProps<{ item: Experience }>()
</script>

<template>
  <li class="rounded-lg border border-slate-200 bg-white/60 p-5 dark:border-slate-800 dark:bg-slate-900/30">
    <div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
      <div>
        <h3 class="text-base font-semibold">{{ item.role }}</h3>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          {{ item.company }}<span v-if="item.location"> • {{ item.location }}</span>
        </p>
      </div>
      <p class="text-sm text-slate-500 dark:text-slate-400">
        {{ item.start }} — {{ item.end }}
      </p>
    </div>

    <ul class="mt-3 list-disc pl-5 text-sm text-slate-600 dark:text-slate-300">
      <li v-for="(bullet, idx) in item.bullets" :key="idx">{{ bullet }}</li>
    </ul>
  </li>
</template>
