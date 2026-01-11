<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import Icon from './Icon.vue'
import { navigation, site } from '../content/portfolio'
import { useScrollSpy } from '../composables/useScrollSpy'
import { useDarkMode } from '../composables/useDarkMode'

const isMenuOpen = ref(false)

const { activeId } = useScrollSpy(navigation.map((n) => n.id))
const { theme, toggleTheme } = useDarkMode()

const navRef = ref<HTMLElement | null>(null)
const indicatorX = ref(0)
const indicatorW = ref(0)
const indicatorVisible = computed(() => indicatorW.value > 0)

let ro: ResizeObserver | null = null

function updateIndicator() {
  const navEl = navRef.value
  if (!navEl) return

  const active = navEl.querySelector<HTMLElement>(`[data-nav-id="${activeId.value}"]`)
  if (!active) return

  const navRect = navEl.getBoundingClientRect()
  const aRect = active.getBoundingClientRect()

  // Position relative to nav container
  indicatorX.value = aRect.left - navRect.left
  indicatorW.value = aRect.width
}

async function syncIndicator() {
  await nextTick()
  updateIndicator()
}

watch(activeId, () => {
  syncIndicator()
})

onMounted(() => {
  syncIndicator()

  const onResize = () => updateIndicator()
  window.addEventListener('resize', onResize)

  if ('ResizeObserver' in window) {
    ro = new ResizeObserver(() => updateIndicator())
    if (navRef.value) ro.observe(navRef.value)
  }

  onBeforeUnmount(() => {
    window.removeEventListener('resize', onResize)
    ro?.disconnect()
    ro = null
  })
})
</script>

<template>
  <a
    href="#content"
    class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-slate-900"
  >
    Skip to content
  </a>

  <header
    class="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur dark:border-slate-800/60 dark:bg-slate-950/60"
  >
    <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <a href="#top" class="font-semibold tracking-tight hover:opacity-90">
          {{ site.name }}
        </a>

        <nav class="hidden md:block" aria-label="Primary">
          <div ref="navRef" class="relative flex items-center gap-1">
            <a
              v-for="item in navigation"
              :key="item.id"
              :href="`#${item.id}`"
              class="relative rounded-md px-3 py-2 text-sm font-medium transition-colors"
              :data-nav-id="item.id"
              :class="
                activeId === item.id
                  ? 'text-slate-900 dark:text-white'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
              "
              @click="() => (isMenuOpen = false)"
            >
              {{ item.label }}
            </a>

            <div
              class="pointer-events-none absolute -bottom-1 h-[2px] rounded-full transition-[transform,width,opacity] duration-300 ease-out"
              :class="[
                'bg-slate-900/80 dark:bg-white/80',
                indicatorVisible ? 'opacity-100' : 'opacity-0',
              ]"
              :style="{
                width: `${indicatorW}px`,
                transform: `translateX(${indicatorX}px)`,
              }"
            />

            <div
              class="pointer-events-none absolute -bottom-2 h-[10px] rounded-full blur-md transition-[transform,width,opacity] duration-300 ease-out"
              :class="[
                'bg-slate-900/15 dark:bg-white/15',
                indicatorVisible ? 'opacity-100' : 'opacity-0',
              ]"
              :style="{
                width: `${Math.max(indicatorW, 24)}px`,
                transform: `translateX(${indicatorX}px)`,
              }"
              aria-hidden="true"
            />
          </div>
        </nav>

        <div class="flex items-center gap-2">
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white"
            @click="toggleTheme"
            :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <Icon :name="theme === 'dark' ? 'sun' : 'moon'" class="w-5 h-5" />
          </button>

          <button
            type="button"
            class="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white"
            @click="isMenuOpen = !isMenuOpen"
            :aria-expanded="isMenuOpen"
            aria-controls="mobile-menu"
            aria-label="Open menu"
          >
            <Icon :name="isMenuOpen ? 'close' : 'menu'" class="w-5 h-5" />
          </button>
        </div>
      </div>

      <div v-show="isMenuOpen" id="mobile-menu" class="md:hidden pb-4">
        <nav class="flex flex-col gap-1">
          <a
            v-for="item in navigation"
            :key="item.id"
            :href="`#${item.id}`"
            class="rounded-md px-3 py-2 text-sm font-medium transition"
            :class="
              activeId === item.id
                ? 'bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-white'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white'
            "
            @click="isMenuOpen = false"
          >
            {{ item.label }}
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>
