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
        d="M16.85 15.33c-1.68-.5-2.48-.81-2.48-1.61s1.04-1.18 1.74-1.18c.39-.01.78.09 1.1.3.32.21.56.5.68.84l1.49-.57c-.2-.49-.54-.93-.98-1.26-.45-.33-.98-.55-1.56-.63v-1.06h-1.67v1.07c-.68.09-1.3.4-1.75.86-.45.47-.7 1.06-.71 1.68 0 1.93 2.12 2.47 3.15 2.81 1.51.44 2.13.87 2.13 1.69 0 .96-.94 1.37-1.88 1.37-.54-.03-1.05-.23-1.46-.55-.41-.32-.69-.75-.8-1.23l-1.5.57c.16.62.51 1.19 1.01 1.64.5.45 1.13.76 1.82.91v1.06h1.66v-1.05c.76-.07 1.46-.38 1.98-.88s.82-1.16.84-1.85c.03-1.18-.55-2.21-2.8-2.92l-.01-.01Z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16 24.22A8.22 8.22 0 0 0 24.22 16 8.22 8.22 0 0 0 16 7.78 8.22 8.22 0 0 0 7.78 16 8.22 8.22 0 0 0 16 24.22Zm0 1.83c5.55 0 10.05-4.5 10.05-10.05 0-5.55-4.5-10.05-10.05-10.05-5.55 0-10.05 4.5-10.05 10.05 0 5.55 4.5 10.05 10.05 10.05Z"
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
<style lang="scss" scoped></style>
