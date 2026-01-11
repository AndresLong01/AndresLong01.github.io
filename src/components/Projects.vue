<script setup lang="ts">
import { ref } from 'vue'
import Section from './Section.vue'
import ProjectCard from './ProjectCard.vue'
import ProjectModal from './ProjectModal.vue'
import { projects } from '../content/portfolio'
import type { Project } from '../types'

const selected = ref<Project | null>(null)
const open = ref(false)

function openProject(p: Project) {
  selected.value = p
  open.value = true
}

function closeProject() {
  open.value = false
  window.setTimeout(() => (selected.value = null), 220) // match leave duration
}
</script>

<template>
  <Section id="projects" title="Projects" subtitle="A few things I’ve built (or am building)">
    <div class="grid gap-6 md:grid-cols-2">
      <ProjectCard v-for="proj in projects" :key="proj.name" :project="proj" @open="openProject" />
    </div>

    <ProjectModal :open="open" :project="selected" @close="closeProject" />
  </Section>
</template>
