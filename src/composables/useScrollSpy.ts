import { onBeforeUnmount, onMounted, ref } from 'vue'

export function useScrollSpy(sectionIds: string[]) {
  const activeId = ref(sectionIds[0] ?? '')
  let observer: IntersectionObserver | null = null

  let raf = 0

  function setEdgeCases() {
    const y = window.scrollY
    const docH = document.documentElement.scrollHeight
    const winH = window.innerHeight

    if (y < 10 && sectionIds.length) {
      activeId.value = sectionIds[0] as string
      return
    }

    if (y + winH >= docH - 8 && sectionIds.length) {
      activeId.value = sectionIds[sectionIds.length - 1] as string
    }
  }

  function onScroll() {
    cancelAnimationFrame(raf)
    raf = requestAnimationFrame(setEdgeCases)
  }

  onMounted(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (elements.length && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

          const next = visible[0]?.target?.id
          if (next) activeId.value = next
        },
        {
          root: null,
          rootMargin: '-30% 0px -60% 0px',
          threshold: 0,
        },
      )

      elements.forEach((el) => observer!.observe(el))
    }

    setEdgeCases()
    window.addEventListener('scroll', onScroll, { passive: true })
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
    observer = null
    window.removeEventListener('scroll', onScroll)
    cancelAnimationFrame(raf)
  })

  return { activeId }
}
