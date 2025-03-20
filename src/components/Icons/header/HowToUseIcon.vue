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
      opacity="1"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="m11.28 9.45-2.1 3.15H5.95v-1.83H8.2l1.56-2.33 1.52 1.01Zm14.77 3.15H13.26v-1.83h12.79v1.83Zm-14.77 2.33-2.1 3.15H5.95v-1.83H8.2l1.56-2.33 1.52 1.01Zm14.77 3.15H13.26v-1.83h12.79v1.83Zm-14.77 2.33-2.1 3.15H5.95v-1.83H8.2l1.56-2.33 1.52 1.01Zm14.77 3.15H13.26v-1.83h12.79v1.83Z"
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
