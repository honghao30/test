<template>
  <div
    class="icon-close hover-pointer"
    :style="{ width: `${props.width}px`, height: `${props.height}px` }"
    @click="close"
  >
    <div class="icon-close-inner">
      <svg
        :width="props.width"
        :height="props.height"
        viewBox="0 0 43 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M38.5031 0.208496L21.5002 17.2114L4.49725 0.208496L0.208496 4.49725L17.2114 21.5002L0.208496 38.5031L4.49725 42.7918L21.5002 25.7889L38.5031 42.7918L42.7918 38.5031L25.7889 21.5002L42.7918 4.49725L38.5031 0.208496Z"
          fill="#707070"
        />
      </svg>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps({
  width: {
    type: Number,
    default() {
      return 24
    },
  },
  height: {
    type: Number,
    default() {
      return 24
    },
  },
})

const barHeight = computed(() => {
  return Math.floor((props.height / 2 / 12) * 2)
})
const emit = defineEmits(['close'])
const close = () => emit('close', null)
</script>
<style lang="scss" scoped>
.icon-close-inner {
  width: 100%;
  height: 100%;
  &:hover {
    path {
      fill: #888888;
    }
  }
  &:active {
    path {
      fill: #5a5a5a;
    }
  }
}
</style>
