<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <span
    class="inline-flex items-center rounded-full bg-slate-100/80 px-3 py-1 text-xs font-medium text-slate-700
           ring-1 ring-slate-200/70 transition
           hover:-translate-y-[1px] hover:bg-white hover:ring-slate-300/70
           dark:bg-slate-800/70 dark:text-slate-200 dark:ring-slate-700/70 dark:hover:bg-slate-800 dark:hover:ring-slate-600/70
           select-none"
  >
    {{ label }}
  </span>
</template>
