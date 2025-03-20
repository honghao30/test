<template>
  <div class="text-14-medium" :data-gtm="props.gtm && `CTA_form_${props.gtm}`">
    <AInput
      :gtm="props.gtm"
      :placeholder="props.placeholder"
      :is-valid="isValid"
      :width="props.isFullWidth ? 'full' : props.width"
      :inputValue="inputValue"
      v-bind="{ ...props }"
      @update:inputValue="onInput"
      @blur="onBlur"
    >
      <template v-if="props.label" #label>
        <p
          class="text-14-semi-bold mt-0 flex w-fit flex-nowrap text-gray-700"
          :class="[props.direction === 'row' ? 'mr-12 mb-0' : 'mb-8 mr-0']"
        >
          <span class="w-fit">{{ props.label }}</span>
          <span v-if="props.required" class="inline-block w-8 text-core-500"
            >&nbsp;*</span
          >
          <span v-else class="inline-block w-8">&nbsp;</span>
        </p>
      </template>

      <template v-if="props.errorMessage" #errorMessage>
        <div
          ref="errorToast"
          class="invisible absolute top-[-38px] left-0 w-fit rounded-5 bg-red-50 px-8 py-6 transition-all duration-200"
        >
          <p
            class="text-12-medium mt-0 mb-0 flex w-fit flex-nowrap items-center text-red-400"
          >
            <AIconBase
              :width="16"
              :height="16"
              :icon-name="'warning-filled'"
              :icon-color="'#FF4A55'"
              :transistion="false"
              class="mr-4"
            >
            </AIconBase>
            {{ props.errorMessage }}
          </p>
          <div
            class="absolute bottom-[-14px] left-12 border-l-6 border-r-6 border-t-9 border-b-6 border-solid border-transparent border-t-red-50"
          ></div>
        </div>
      </template>
    </AInput>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, ref, computed, watch } from 'vue'
import AInput from './Input.vue'
import AIconBase from './IconBase.vue'

const props = defineProps({
  gtm: {
    type: String,
    default: '',
  },
  inputValue: {
    type: [String, Number],
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'large',
  },
  width: {
    type: String,
    default: 'full',
  },
  isFullWidth: {
    type: Boolean,
    default: false,
  },
  selected: {
    type: Object,
    default: null,
  },
  placeholder: {
    type: String,
    required: true,
  },
  typeName: {
    type: String,
    default: 'text',
  },
  autocomplete: {
    type: String,
    default: 'new-password',
  },
  label: {
    type: String,
    default: null,
  },
  required: {
    type: Boolean,
    default: false,
  },
  helperText: {
    type: String,
    default: null,
  },
  errorMessage: {
    type: String,
    default: null,
  },
  direction: {
    type: String,
    default: 'row',
  },
  textAlign: {
    type: String,
    default: 'left',
  },
  isValid: {
    type: Boolean,
    default: null,
  },
})

const isValid = computed(() => props.isValid)
const errorToast = ref()
const emits = defineEmits(['blur', 'validate', 'update:inputValue'])
const validate = (v) => emits('validate', v)
const onBlur = (v) => emits('blur', v)
const onInput = (v) => {
  emits('update:inputValue', v)
}

watch(isValid, (v) => {
  if (!v && !!errorToast.value) {
    const toast: HTMLDivElement = errorToast.value
    toast.classList.remove('invisible')
    // toast.classList.add('visibility', 'visibility')
    setTimeout(() => {
      toast.classList.add('invisible')
    }, 1500)
  }
})
</script>
