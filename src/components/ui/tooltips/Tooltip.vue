<template>
  <div ref="tooltipWrapper">
    <VToolTip
      :theme="customName"
      :popperClass="popperClass"
      :placement="placement"
      :skidding="skidding"
      :distance="distance"
      :arrowPadding="arrowPadding"
      :triggers="triggers"
      :popperTriggers="triggers"
      :delay="delay"
      :container="container"
      :shown="shown"
      :flip="flip"
      :handleResize="true"
      :disabled="disabled"
      :auto-hide="autoHide"
      :no-auto-focus="true"
      @applyShow="() => toggle(true)"
      @applyHide="() => toggle(false)"
    >
      <slot name="icon">
        <component :is="ICON_COMPONENT" :active="active" v-if="icon" />
      </slot>

      <template #popper>
        <div ref="target" @click="() => outsideTooltip">
          <slot> </slot>
        </div>
      </template>
    </VToolTip>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, computed, ref, type Ref, type PropType } from 'vue'

import { type Placement, Tooltip as VToolTip } from 'floating-vue'
import { useOnClickOutside } from '/Composables/useOnClickOutside'
import TooltipInfoIcon from './TooltipInfoIcon.vue'
import TooltipViewIcon from './TooltipViewIcon.vue'

/**
 * @docs https://floating-vue.starpad.dev/
 */

const props = defineProps({
  placement: {
    type: String as PropType<Placement>,
    default: 'bottom-end',
  },
  container: {
    type: Object as PropType<HTMLElement>,
    required: false,
  },
  customName: {
    type: String,
    required: false,
  },
  popperClass: {
    type: Object as PropType<string[]>,
    required: false,
  },
  skidding: {
    type: Number,
    default: 4,
  },
  distance: {
    type: Number,
    default: 4,
  },
  arrowPadding: {
    type: Number,
    default: 0,
  },
  flip: {
    type: Boolean,
    default: false,
  },
  shown: {
    type: Boolean,
    default: false,
  },
  triggers: {
    type: Array as PropType<Array<'click' | 'hover' | 'focus' | 'touch'>>,
    default: () => ['hover', 'touch'],
  },
  delay: {
    type: Number,
    default: 0,
  },
  icon: {
    type: String as PropType<'view' | 'information'>,
    default: 'information',
  },
  active: {
    type: Boolean,
    default: false,
  },
  useToggle: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  autoHide: {
    type: Boolean,
    default: true,
  },
})

const placement = computed(() => props.placement)
const customName = computed(() => props.customName)
const skidding = computed(() => props.skidding)
const distance = computed(() => props.distance)
const arrowPadding = computed(() => props.arrowPadding)
const shown = computed(() => props.shown)
const flip = computed(() => props.flip)
const triggers = computed(() => props.triggers)
const delay = computed(() => props.delay)
const container = computed(() => props.container)
const popperClass = computed(() => props.popperClass)
const useToggle = computed(() => props.useToggle)
const disabled = computed(() => props.disabled)

const target = ref(null)

const emits = defineEmits(['toggle'])
const toggle = (flag?: boolean) => {
  if (!useToggle.value) return
  emits('toggle', flag)
}

const tooltipWrapper = ref<HTMLElement>(null)
const clickOutsideCallback = (targetEl?: HTMLElement) => {
  if (tooltipWrapper.value?.contains(targetEl)) return

  if (!shown.value || !useToggle.value) return
  emits('toggle', false)
}

const outsideTooltip = useOnClickOutside(target, clickOutsideCallback)

const ICON_COMPONENT = computed(() => {
  return {
    information: TooltipInfoIcon,
    view: TooltipViewIcon,
  }[props.icon]
})
</script>
<style lang="postcss">
.v-popper--theme-tooltip {
  @apply flex items-center;
}
.v-popper--theme-tooltip .v-popper__inner {
  @apply text-12-regular rounded-5 border-1 border-solid border-gray-200 bg-gray-50  py-12 px-14 text-left text-gray-600  shadow-100;
}
.v-popper--theme-tooltip .v-popper__arrow-container {
  @apply !bg-transparent shadow-none;
}
.v-popper--theme-tooltip .v-popper__arrow-inner {
  @apply visible border-solid border-gray-50;
}
.v-popper--theme-tooltip .v-popper__arrow-outer {
  @apply !top-[-11px] !border-6 border-solid border-gray-200 shadow-none shadow-100;
}

.v-popper--theme-white-tooltip {
  @apply flex items-center;
}
.v-popper--theme-white-tooltip .v-popper__inner {
  @apply text-12-regular rounded-8 !border-none border-white  bg-white   text-left text-gray-500  shadow-100;
}
.v-popper--theme-white-tooltip .v-popper__arrow-container {
  @apply !bg-transparent shadow-none;
}
.v-popper--theme-white-tooltip .v-popper__arrow-inner {
  @apply visible  !border-none border-white;
}
.v-popper--theme-white-tooltip .v-popper__arrow-outer {
  @apply !top-[-11px] !border-6 border-solid border-white shadow-none;
}

.v-popper--theme-black-tooltip {
  @apply flex items-center;
}
.v-popper--theme-black-tooltip .v-popper__inner {
  @apply text-12-regular rounded-8 !border-none border-black  bg-black   text-left text-gray-500  shadow-100;
}
.v-popper--theme-black-tooltip .v-popper__arrow-container {
  @apply !bg-transparent shadow-none;
}
.v-popper--theme-black-tooltip .v-popper__arrow-inner {
  @apply visible  !border-none border-black;
}
.v-popper--theme-black-tooltip .v-popper__arrow-outer {
  @apply !border-6  border-black shadow-none shadow-100;
}

.v-popper__popper.v-popper--theme-gray50-tooltip {
  @apply shadow-100;
  --tw-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
}

.v-popper--theme-gray50-tooltip {
  @apply flex items-center rounded-8;
}
.v-popper--theme-gray50-tooltip .v-popper__inner {
  @apply text-12-regular rounded-8 !border-none border-gray-50  bg-gray-50   text-left text-gray-500  shadow-100;
}
.v-popper--theme-gray50-tooltip .v-popper__arrow-container {
  @apply !bg-transparent shadow-none;
}
.v-popper--theme-gray50-tooltip .v-popper__arrow-inner {
  @apply visible  !border-8 border-gray-50;
}
.v-popper--theme-gray50-tooltip .v-popper__arrow-outer {
  @apply !top-[-11px] !border-6 border-solid border-gray-50 shadow-none;
}

.v-popper--theme-red50-tooltip {
  @apply flex items-center;
}
.v-popper--theme-red50-tooltip .v-popper__inner {
  @apply text-12-regular rounded-8 border-red-50 bg-red-50  text-left text-red-400  shadow-200;
}
.v-popper--theme-red50-tooltip .v-popper__arrow-container {
  @apply !bg-transparent !shadow-none;
}
.v-popper--theme-red50-tooltip .v-popper__arrow-inner {
  @apply visible border-8 border-red-50;
}
.v-popper--theme-red50-tooltip .v-popper__arrow-outer {
  @apply visible !border-6 border-solid border-red-50 shadow-none;
}

.v-popper--theme-no-arrow-tooltip {
  @apply flex items-center;
}
.v-popper--theme-no-arrow-tooltip .v-popper__inner {
  @apply rounded-8  !border-none   bg-transparent text-left shadow-200;
}
.v-popper--theme-no-arrow-tooltip .v-popper__arrow-container {
  @apply !bg-transparent;
}
.v-popper--theme-no-arrow-tooltip .v-popper__arrow-inner {
  @apply invisible  !border-none;
}
.v-popper--theme-no-arrow-tooltip .v-popper__arrow-outer {
  @apply border-none  shadow-none;
}

.v-popper--theme-none-tooltip {
  @apply flex items-center;
}
.v-popper--theme-none-tooltip .v-popper__inner {
  @apply !border-none   bg-transparent;
}
.v-popper--theme-none-tooltip .v-popper__arrow-container {
  @apply !bg-transparent;
}
.v-popper--theme-none-tooltip .v-popper__arrow-inner {
  @apply invisible  !border-none;
}
.v-popper--theme-none-tooltip .v-popper__arrow-outer {
  @apply border-none  shadow-none;
}

.v-popper--theme-dropdown-tooltip {
  @apply flex w-[inherit] items-center;
}

.v-popper--theme-dropdown-tooltip.v-popper__popper--shown {
  @apply w-fit rounded-8 shadow-200;
}

.v-popper--theme-dropdown-tooltip .v-popper__inner {
  @apply !border-none   bg-transparent;
}
.v-popper--theme-dropdown-tooltip .v-popper__arrow-container {
  @apply !bg-transparent;
}
.v-popper--theme-dropdown-tooltip .v-popper__arrow-inner {
  @apply invisible  !border-none;
}
.v-popper--theme-dropdown-tooltip .v-popper__arrow-outer {
  @apply border-none  shadow-none;
}
</style>
