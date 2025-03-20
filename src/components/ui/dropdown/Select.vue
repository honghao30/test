<template>
  <section class="w-fit">
    <p v-if="!selectedHidden">
      {{ modelValue?.name }}
    </p>
    <div class="flex w-full flex-col">
      <slot />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { provide, computed, type PropType } from 'vue'

const props = defineProps({
  modelValue: {
    type: Object as PropType<Record<string, any> & { name: string }>,
  },
  selectedHidden: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['update:modelValue'])

//this will be made availabale (provided) to child Options
//this means that child Options will be able to emit their value on behalf of Select
const emitValue = (value: any) => {
  emit('update:modelValue', value)
}

//currentValue needs to be a computed or it's not reactive otherwise
provide('select-control', {
  emitValue,
  currentValue: computed(() => props.modelValue),
})
</script>
