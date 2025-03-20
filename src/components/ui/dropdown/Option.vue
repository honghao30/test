<template>
  <button
    type="button"
    class="flex w-full flex-nowrap items-center"
    :class="[
      align === 'center' ? 'justify-center' : '',
      selected && 'active',
      props.value?.disabled && 'cursor-default text-gray-300',
    ]"
    @click="
      (e) => {
        if (props.value?.disabled) {
          e.stopPropagation()
          return
        }
        emitValue(props.value)
      }
    "
  >
    <IconBase
      v-if="props.showRadioButton"
      :width="20"
      :height="20"
      :icon-name="selected ? 'radio-button-checked' : 'radio-button'"
      :icon-color="
        props.value?.disabled ? 'gray-200' : selected ? 'primary' : 'gray-400'
      "
      class="mr-8 max-h-20 min-h-20 min-w-20 max-w-20"
    >
    </IconBase>

    <Tooltip
      v-if="typeof props.value?.disabled == 'string'"
      :placement="'bottom'"
      :skidding="2"
      :distance="12"
      :customName="`black-button-tooltip`"
    >
      <template #icon>
        <span
          class="max-w-full truncate"
          :class="[props.value?.disabled && 'text-gray-400']"
        >
          <slot>
            {{ props.value?.name }}
          </slot>
        </span>
      </template>
      <div class="text-13-medium rounded-8 bg-black px-8 py-6 text-white">
        {{ props.value.disabled }}
      </div>
    </Tooltip>
    <span
      class="max-w-full truncate"
      v-else
      :class="[props.value?.disabled && 'text-gray-400']"
    >
      <slot>
        {{ props.value?.name }}
      </slot>
    </span>

    <IconBase
      v-if="props.showCheckmark && selected"
      :width="16"
      :height="16"
      icon-name="checkmark-bold"
      icon-color="#4D49F4"
      class="max-h-20 min-h-16 min-w-16 max-w-16"
      :class="align === 'center' ? 'ml-5' : 'ml-auto'"
    >
    </IconBase>
  </button>
</template>
<script lang="ts" setup>
import { computed, inject } from 'vue'
import Tooltip from '/Components/ui/tooltips/Tooltip.vue'
import { IconBase } from '/Components/'

const props = defineProps([
  'value',
  'name',
  'showRadioButton',
  'showCheckmark',
  'align',
  'selected',
])

// @ts-ignore
const { emitValue, currentValue } = inject('select-control')
const selected = computed(
  () => props.selected || currentValue.value === props.value
)
</script>

<style></style>
