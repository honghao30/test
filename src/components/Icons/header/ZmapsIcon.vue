<template>
  <svg
    :width="props.width"
    :height="props.height"
    :viewBox="props.width === 30 ? `0 0 32 32` : `0 0 30 30`"
    fill="none"
    perserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="m12.376 18.828-2.048.926-4.197 1.88L16 26.792l9.87-5.158-4.21-1.886-1.798-.832.84-1.815 1.793.83 6.075 2.721a1 1 0 0 1 .054 1.8l-12.16 6.355a1 1 0 0 1-.927 0L3.376 22.45a1 1 0 0 1 .054-1.799l6.078-2.722.003-.002 2.04-.923.825 1.823Z"
      fill="#111326"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.222 10.98c0-4.313 3.475-7.816 7.778-7.816 4.297 0 7.775 3.5 7.778 7.81m-1.962.006c0-3.24-2.61-5.854-5.816-5.854-3.209 0-5.816 2.614-5.816 5.854v.082l-.001.027v.005a3.47 3.47 0 0 0 .001.07v.147c0 1.788 1.095 3.746 2.559 5.558 1.12 1.386 2.359 2.57 3.257 3.41.898-.84 2.137-2.024 3.257-3.41 1.464-1.812 2.559-3.771 2.559-5.562v-.147a1.027 1.027 0 0 1 .002-.07v-.004l-.001-.027-.001-.076m1.962-.007v.047l.001.018c.002.044.001.083 0 .136v.13c0 2.5-1.476 4.914-2.995 6.795-1.324 1.638-2.809 3.02-3.71 3.86-.15.14-.285.265-.399.373a.981.981 0 0 1-1.35 0l-.398-.373c-.902-.84-2.387-2.222-3.71-3.86-1.52-1.88-2.995-4.292-2.995-6.791v-.13a2.105 2.105 0 0 1-.001-.136v-.065"
      fill="#111326"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16 9.162a1.67 1.67 0 1 0 0 3.34 1.67 1.67 0 0 0 0-3.34Zm-3.633 1.67a3.632 3.632 0 1 1 7.265 0 3.632 3.632 0 0 1-7.265 0Z"
      fill="#111326"
    />
  </svg>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps({
  width: {
    type: Number,
    default() {
      return 16
    },
  },
  height: {
    type: Number,
    default() {
      return 16
    },
  },
  active: {
    type: Boolean,
    default() {
      return false
    },
  },
})
</script>
<style lang="scss" scoped>
.icon-close-inner {
  width: 100%;
  height: 100%;
}
</style>
