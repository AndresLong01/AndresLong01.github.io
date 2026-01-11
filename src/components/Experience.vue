<script setup lang="ts">
import Section from './Section.vue'
import TimelineItem from './TimelineItem.vue'
import { experience } from '../content/portfolio'
</script>

<template>
  <Section id="experience" title="Experience" subtitle="Where I’ve worked and what I focused on">
    <ol class="space-y-6">
      <TimelineItem
        v-for="exp in experience"
        :key="exp.company + exp.role + exp.start"
        :item="exp"
      />
    </ol>
  </Section>
</template>
