<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type { Project } from '../types'
import Icon from './Icon.vue'

const props = defineProps<{
  open: boolean
  project: Project | null
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const dialogRef = ref<HTMLElement | null>(null)
const previouslyFocused = ref<HTMLElement | null>(null)

const rendered = ref(false)

const hasVideo = computed(() => Boolean(props.project?.media?.video))
const videoSrc = computed(() => props.project?.media?.video ?? '')
const borderColor = computed(() => props.project?.media?.avgColor ?? 'rgba(148,163,184,0.6)')

function close() {
  emit('close')
}

function getFocusableElements(root: HTMLElement): HTMLElement[] {
  return Array.from(
    root.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
    ),
  ).filter((el) => !el.hasAttribute('disabled') && el.tabIndex !== -1)
}

function onKeydown(e: KeyboardEvent) {
  if (!rendered.value) return

  if (e.key === 'Escape') {
    e.preventDefault()
    close()
    return
  }

  if (e.key === 'Tab' && dialogRef.value) {
    const focusables = getFocusableElements(dialogRef.value)
    if (focusables.length === 0) return

    const first = focusables[0]
    const last = focusables[focusables.length - 1]
    const active = document.activeElement as HTMLElement | null

    if (!active || !dialogRef.value.contains(active)) {
      e.preventDefault()
      if (first) {
        first.focus()
      }
      return
    }

    if (e.shiftKey && active === first) {
      e.preventDefault()
      if (last) {
        last.focus()
      }
    } else if (!e.shiftKey && active === last) {
      e.preventDefault()
      if (first) {
        first.focus()
      }
    }
  }
}

watch(
  () => props.open,
  async (isOpen) => {
    if (typeof document === 'undefined') return

    if (isOpen) {
      rendered.value = true
      previouslyFocused.value = document.activeElement as HTMLElement | null
      document.body.style.overflow = 'hidden'

      await nextTick()
      requestAnimationFrame(() => {
        const btn = dialogRef.value?.querySelector<HTMLElement>('[data-close]')
        btn?.focus()
      })
    } else {
      document.body.style.overflow = ''
      previouslyFocused.value?.focus?.()
    }
  },
)

function onAfterLeave() {
  rendered.value = false
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <Teleport to="body">
    <div v-if="rendered" class="fixed inset-0 z-[80]">
      <Transition name="overlay-fade">
        <button
          v-if="open"
          class="absolute inset-0 bg-black/50 backdrop-blur-sm"
          aria-label="Close project modal"
          @click="close"
        />
      </Transition>

      <!-- Dialog transition -->
      <Transition name="dialog-pop" @after-leave="onAfterLeave">
        <div
          v-if="open"
          class="relative mx-auto flex h-full max-w-6xl items-center px-4 sm:px-6 lg:px-8"
        >
          <div
            ref="dialogRef"
            role="dialog"
            aria-modal="true"
            class="relative w-full overflow-hidden rounded-2xl border bg-white shadow-2xl dark:bg-slate-950"
            :style="{ borderColor }"
          >
            <div
              class="flex items-center justify-between gap-3 border-b border-slate-200/70 px-4 py-3 dark:border-slate-800/60"
            >
              <div class="min-w-0">
                <p class="text-slate-600 dark:text-slate-400 truncate text-sm font-semibold">
                  {{ project?.name }}
                </p>
                <p class="truncate text-xs text-slate-600 dark:text-slate-400">
                  Project details
                </p>
              </div>

              <button
                data-close
                type="button"
                class="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white"
                @click="close"
                aria-label="Close"
              >
                <Icon name="close" class="h-5 w-5" />
              </button>
            </div>

            <div class="grid max-h-[80vh] grid-cols-1 md:grid-cols-5">
              <div class="relative md:col-span-3 bg-slate-100 dark:bg-slate-900">
                <div v-if="hasVideo" class="relative h-[40vh] md:h-full">
                    <video
                    class="absolute inset-0 h-full w-full object-cover"
                    :src="videoSrc"
                    autoplay
                    muted
                    loop
                    playsinline
                    preload="auto"
                    aria-hidden="true"
                    />
                    <div
                    class="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10"
                    aria-hidden="true"
                    />
                </div>

                <div v-else class="relative h-[40vh] md:h-full overflow-hidden">
                    <div
                      v-if="project?.media?.image"
                      class="absolute inset-0 bg-cover bg-center scale-110 blur-2xl opacity-35"
                      :style="{ backgroundImage: `url(${project.media.image})` }"
                      aria-hidden="true"
                    />
                    <div
                      class="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/65 dark:from-slate-950/60 dark:via-slate-950/40 dark:to-slate-950/65"
                      aria-hidden="true"
                    />

                    <div class="relative flex h-full flex-col items-center justify-center gap-3 p-10 text-center">
                      <p class="text-sm font-semibold text-slate-900 dark:text-white">
                          No video available
                      </p>

                      <p class="max-w-sm text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                          This project doesn’t have a preview clip yet. I’ll add one soon.
                      </p>

                      <a
                          v-if="project?.links?.repo"
                          :href="project.links.repo"
                          target="_blank"
                          rel="noreferrer"
                          class="mt-1 inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white/40 px-3 py-2 text-xs font-semibold text-slate-900 hover:bg-white/70 dark:border-slate-700 dark:bg-slate-950/20 dark:text-white dark:hover:bg-slate-950/60"
                      >
                          View code
                          <Icon name="github" class="h-4 w-4" />
                      </a>
                    </div>
                </div>
              </div>

              <div class="md:col-span-2 flex flex-col">
                <div class="p-5 sm:p-6">
                  <h3 class="text-lg font-semibold tracking-tight text-slate-700 dark:text-slate-300">
                    {{ project?.name }}
                  </h3>
                  <p class="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {{ project?.description }}
                  </p>

                  <ul
                    v-if="project?.highlights?.length"
                    class="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300"
                  >
                    <li v-for="(highlight, idx) in project!.highlights" :key="idx" class="flex gap-2">
                      <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400 dark:bg-slate-500" />
                      <span>{{ highlight }}</span>
                    </li>
                  </ul>

                  <div class="mt-5 flex flex-wrap gap-2">
                    <a
                      v-if="project?.links?.demo"
                      :href="project.links.demo"
                      target="_blank"
                      rel="noreferrer"
                      class="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white/40 px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-white/70 dark:border-slate-700 dark:bg-slate-950/20 dark:text-white dark:hover:bg-slate-950/60"
                    >
                      Demo <Icon name="external" class="h-4 w-4" />
                    </a>

                    <a
                      v-if="project?.links?.repo"
                      :href="project.links.repo"
                      target="_blank"
                      rel="noreferrer"
                      class="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white/40 px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-white/70 dark:border-slate-700 dark:bg-slate-950/20 dark:text-white dark:hover:bg-slate-950/60"
                    >
                      Code <Icon name="github" class="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <!-- Bottom: tech -->
                <div class="mt-auto border-t border-slate-200/70 p-5 sm:p-6 dark:border-slate-800/60">
                  <p class="text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-400">
                    Technologies
                  </p>
                  <div class="mt-3 flex flex-wrap gap-2">
                    <span
                      v-for="tech in project?.stack ?? []"
                      :key="tech"
                      class="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-900 dark:text-slate-200"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="h-2 bg-transparent" />
          </div>
        </div>
      </Transition>
    </div>
  </Teleport>
</template>

<style scoped>
.overlay-fade-enter-active,
.overlay-fade-leave-active {
  transition: opacity 200ms ease;
}
.overlay-fade-enter-from,
.overlay-fade-leave-to {
  opacity: 0;
}
.overlay-fade-enter-to,
.overlay-fade-leave-from {
  opacity: 1;
}

.dialog-pop-enter-active {
  transition:
    transform 240ms ease-out,
    opacity 240ms ease-out;
}
.dialog-pop-leave-active {
  transition:
    transform 180ms ease-in,
    opacity 180ms ease-in;
}
.dialog-pop-enter-from {
  opacity: 0;
  transform: translateY(14px) scale(0.98);
}
.dialog-pop-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.dialog-pop-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.dialog-pop-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.985);
}

@media (prefers-reduced-motion: reduce) {
  .overlay-fade-enter-active,
  .overlay-fade-leave-active,
  .dialog-pop-enter-active,
  .dialog-pop-leave-active {
    transition: none !important;
  }
}
</style>
