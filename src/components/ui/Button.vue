<template>
  <button
    type="button"
    :disabled="props.disabled"
    :active="props.active"
    class="mx-auto text-14 uppercase md:mx-0 lg:mx-0 group"
    :class="props.variant === 'text' ? 'text-button' : 'primary-button'"
    @click="onClick()"
  >
    <slot></slot>
  </button>
</template>
<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import Store from '/Store/index'

interface Props {
  variant?: string
  disabled?: boolean
  active?: boolean
}
const props = defineProps<Props>()
const emits = defineEmits(['click'])
const onClick = ($evt) => emits('click', $evt)
</script>
