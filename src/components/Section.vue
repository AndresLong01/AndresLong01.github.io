<script setup lang="ts">
defineProps<{
  id: string
  title?: string
  subtitle?: string
}>()
</script>

<template>
  <section :id="id" class="scroll-mt-24 py-16 sm:py-20">
    <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <header v-if="title" class="mb-8">
        <h2 class="text-2xl sm:text-3xl font-semibold tracking-tight">
          {{ title }}
        </h2>
        <p
          v-if="subtitle"
          class="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300"
        >
          {{ subtitle }}
        </p>
      </header>
      <slot />
    </div>
  </section>
</template>
