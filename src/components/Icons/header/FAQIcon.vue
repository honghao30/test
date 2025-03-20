<template>
  <svg
    :width="props.width"
    :height="props.height"
    fill="none"
    :viewBox="props.width === 30 ? `0 0 32 32` : `0 0 30 30`"
    perserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="1"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.78 9.17h16.44v9.14H11.43L7.78 21.1V9.17Zm-1.83 5.48V9.17c0-1.01.82-1.83 1.83-1.83h16.44c1.01 0 1.83.82 1.83 1.83v9.14c0 1.01-.82 1.83-1.83 1.83H12.03l-6.08 4.52V14.65Zm7.31-.91c0 .5-.41.91-.91.91s-.91-.41-.91-.91.41-.91.91-.91.91.41.91.91Zm3.65 0c0 .5-.41.91-.91.91s-.91-.41-.91-.91.41-.91.91-.91.91.41.91.91Zm2.74.91c.5 0 .91-.41.91-.91s-.41-.91-.91-.91-.91.41-.91.91.41.91.91.91Z"
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
