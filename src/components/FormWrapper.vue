<template>
  <div
    class="mx-auto flex w-[320px] min-w-[320px] flex-col overflow-hidden rounded-10 bg-white shadow-200 md:w-[708px] md:flex-row lg:min-w-[900px] lg:flex-row"
  >
    <div
      class="flex min-h-full items-center bg-primary md:min-w-[354px] lg:min-w-[450px]"
    >
      <slot name="description"></slot>
    </div>

    <div
      class="my-auto flex min-h-full w-full flex-col items-center justify-center bg-white px-32 py-36 md:px-50 lg:px-62"
    >
      <FormContent :sheet-name="sheetName">
        <template #form-title>
          <slot name="form-title"></slot>
        </template>
        <template #after-submit-title>
          <slot name="after-submit-title"></slot>
        </template>
        <template #additional-text>
          <slot name="additional-text"></slot>
        </template>
        <template #under-submit-btn-text>
          <slot name="under-submit-btn-text"></slot>
        </template>
      </FormContent>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { PropType, computed, ref } from 'vue'
import { FormContent } from '.'

const props = defineProps({
  sheetName: {
    type: String as PropType<
      'Beta' | 'AIConsulting' | 'Modular' | 'AppWaitlist' | 'ZenApp'
    >,
    required: true,
  },
})

const sheetName = computed(() => props.sheetName)
</script>
<style lang="scss" scoped></style>
