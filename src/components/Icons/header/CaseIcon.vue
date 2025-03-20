<template>
  <svg
    :width="props.width"
    :height="props.height"
    :viewBox="props.width === 30 ? `0 0 32 32` : `0 0 30 30`"
    fill="none"
    perserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="1" fill="#111326">
      <path
        d="M17.92 5.04h-7.4c-2.02 0-3.65 1.64-3.65 3.65v14.62c0 2.02 1.64 3.65 3.65 3.65h10.96c2.02 0 3.65-1.64 3.65-3.65V12.26l-7.22-7.22h.01Zm-.09 2.49 4.82 4.82h-4.82V7.53Zm5.48 15.78c0 1.01-.82 1.83-1.83 1.83H10.52a1.83 1.83 0 0 1-1.83-1.83V8.69c0-1.01.82-1.83 1.83-1.83H16v7.31h7.31v9.14Z"
      />
      <path
        d="M19.65 16h-8.22v1.83h8.22V16ZM19.65 19.65h-8.22v1.83h8.22v-1.83Z"
      />
    </g>
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
