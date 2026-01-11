<script setup lang="ts">
import type { IconName } from '../types'

defineProps<{ name: IconName }>()
// This is the worst thing ever
</script>

<template>
  <!-- GitHub -->
  <svg
    v-if="name === 'github'"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    class="w-5 h-5"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 2C6.477 2 2 6.596 2 12.26c0 4.532 2.865 8.377 6.839 9.734.5.096.683-.222.683-.494 0-.244-.009-.89-.014-1.746-2.782.62-3.369-1.377-3.369-1.377-.454-1.183-1.11-1.497-1.11-1.497-.908-.64.069-.627.069-.627 1.004.073 1.532 1.057 1.532 1.057.892 1.565 2.341 1.113 2.91.851.091-.667.35-1.113.636-1.368-2.221-.263-4.555-1.14-4.555-5.072 0-1.12.386-2.035 1.018-2.753-.102-.264-.441-1.327.097-2.764 0 0 .83-.272 2.72 1.052A9.24 9.24 0 0 1 12 6.844c.837.004 1.68.117 2.467.342 1.888-1.324 2.717-1.052 2.717-1.052.54 1.437.201 2.5.1 2.764.634.718 1.016 1.633 1.016 2.753 0 3.942-2.338 4.806-4.566 5.064.36.318.68.944.68 1.904 0 1.375-.012 2.485-.012 2.823 0 .275.18.596.688.494C19.138 20.633 22 16.79 22 12.26 22 6.596 17.523 2 12 2Z"
    />
  </svg>

  <!-- LinkedIn -->
  <svg
    v-else-if="name === 'linkedin'"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    class="w-5 h-5"
  >
    <path
      d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-9.5 7H7v9h2.5v-9ZM8.25 6.5A1.5 1.5 0 1 0 8.25 9a1.5 1.5 0 0 0 0-2.5ZM20 19v-5.2c0-2.6-1.4-3.8-3.3-3.8-1.5 0-2.2.8-2.6 1.4V10H11.6v9h2.5v-5c0-1.3.2-2.6 1.8-2.6 1.6 0 1.6 1.5 1.6 2.7V19H20Z"
    />
  </svg>

  <!-- Mail -->
  <svg
    v-else-if="name === 'mail'"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    class="w-5 h-5"
  >
    <path
      d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm2 .5V7l6 4 6-4v-.5H6Zm12 3.1-5.4 3.6a1 1 0 0 1-1.2 0L6 9.6V18h12V9.6Z"
    />
  </svg>

  <!-- External link -->
  <svg
    v-else-if="name === 'external'"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    class="w-5 h-5"
  >
    <path
      d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z"
    />
  </svg>

  <!-- Menu -->
  <svg
    v-else-if="name === 'menu'"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    class="w-5 h-5"
  >
    <path d="M4 6h16v2H4V6Zm0 5h16v2H4v-2Zm0 5h16v2H4v-2Z" />
  </svg>

  <!-- Close -->
  <svg
    v-else-if="name === 'close'"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    class="w-5 h-5"
  >
    <path
      d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.4 4.29 19.71 2.88 18.29 9.17 12 2.88 5.71 4.29 4.29l6.3 6.31 6.3-6.31 1.41 1.42Z"
    />
  </svg>

  <!-- Sun -->
  <svg
    v-else-if="name === 'sun'"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    class="w-5 h-5"
  >
    <path
      d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-16h1v3h-1V2Zm0 17h1v3h-1v-3ZM2 12h3v1H2v-1Zm17 0h3v1h-3v-1ZM4.22 4.22l2.12 2.12-.71.71L3.51 4.93l.71-.71Zm13.03 13.03 2.12 2.12-.71.71-2.12-2.12.71-.71ZM19.78 4.22l.71.71-2.12 2.12-.71-.71 2.12-2.12ZM6.34 16.66l.71.71-2.12 2.12-.71-.71 2.12-2.12Z"
    />
  </svg>

  <!-- Moon -->
  <svg
    v-else
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    class="w-5 h-5"
  >
    <path
      d="M21 14.5A8.5 8.5 0 0 1 9.5 3a7 7 0 1 0 11.5 11.5Z"
    />
  </svg>
</template>
