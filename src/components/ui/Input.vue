<template>
  <label
    class="flex"
    :class="[
      props.direction === 'row'
        ? ' flex-row items-center justify-between'
        : 'flex-col',
    ]"
  >
    <slot name="label"></slot>
    <div
      :data-gtm="props.gtm && `CTA_input_${props.gtm}`"
      class="relative flex items-center justify-between rounded-5 border-1 border-solid bg-white transition-colors"
      :class="[
        props.width === 'full' ? `w-full` : `${props.width}`,
        props.size === SIZES.L && 'h-40  px-16 py-6',
        props.size === SIZES.M && 'h-38  px-8 py-8',
        props.size === SIZES.S && 'h-32 min-w-80 px-5 pt-5 pb-4',
        props.size === SIZES.XS && 'h-24  px-6 pt-5 pb-4',
        props.disabled && 'cursor-not-allowed border-gray-100 bg-white ',

        props.isValid === null
          ? 'border-gray-300 caret-core-500 focus-within:border-core-500'
          : !props.isValid
          ? 'border-red-400 focus-within:border-red-400'
          : 'border-gray-300 caret-core-500 focus-within:border-core-500',
      ]"
    >
      <slot name="innerLabelLeft"></slot>
      <input
        ref="input"
        :type="!showPassword ? props.typeName : 'text'"
        :autocomplete="`${props.autocomplete}`"
        class="w-full border-none text-gray-700"
        :class="[
          props.disabled
            ? 'cursor-not-allowed text-gray-200 placeholder-gray-200'
            : ' placeholder-gray-400',
          props.textAlign === 'left' ? 'text-left' : 'text-right',
          props.size === SIZES.XS && 'text-13-medium leading-none ',
          props.size === SIZES.S && 'text-14-medium leading-none',
          props.size === SIZES.M && 'text-16-medium leading-none',
          props.long && '!font-ibm-condensed',
        ]"
        :placeholder="props.placeholder ? props.placeholder : ''"
        :value="inputValue"
        :disabled="props.disabled"
        :min="props.typeName == 'number' && props.min"
        :max="props.typeName == 'number' && props.max"
        :step="props.typeName == 'number' && '1'"
        @input="($evt) => onInput($evt)"
        @blur="($evt) => onBlur($evt)"
        @focus="($evt) => onFocus($evt)"
      />
      <IconBase
        v-if="props.autocomplete === 'new-password'"
        :icon-name="showPassword ? 'view-off' : 'view'"
        icon-color="#A6A9B0"
        :width="24"
        :height="24"
        @click="() => togglePassword()"
      >
      </IconBase>
      <slot name="innerLabel"></slot>
      <slot name="errorMessage"></slot>
      <slot name="helperText"></slot>
    </div>
    <slot name="rightLabel"></slot>
  </label>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, ref, watch, computed } from 'vue'
import IconBase from './IconBase.vue'

const props = defineProps({
  gtm: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  width: {
    type: String,
    default: 'full',
  },
  size: {
    type: String,
    default: 'large',
  },
  long: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: '',
  },
  typeName: {
    type: String,
    default: 'text',
  },
  autocomplete: {
    type: String,
    default: '',
  },
  inputValue: {
    type: [String, Number],
    default: '',
  },
  isValid: {
    type: Boolean,
    default: null,
  },
  helperText: {
    type: String,
    default: null,
  },
  direction: {
    type: String,
    default: 'column',
  },
  textAlign: {
    type: String,
    default: 'left',
  },
  min: {
    type: Number,
    default: null,
  },
  max: {
    type: Number,
    default: null,
  },
})

const emits = defineEmits(['update:inputValue', 'blur', 'focus'])
const onBlur = (v) => {
  emits('blur', v)
}
const onInput = ($evt) => {
  emits('update:inputValue', $evt.target.value)
}

const onFocus = (v) => {
  emits('focus', v)
}

const showPassword = ref(false)
const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const SIZES = {
  // height: 24px;
  XS: 'x-small',
  // height: 32px;
  S: 'small',
  // height: 38px;
  M: 'medium',
  // height: 40px
  L: 'large',
}
</script>
