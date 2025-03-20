<template>
  <svg
    :data-gtm="props.gtm && `CTA_icon_${props.gtm}`"
    xmls="http://www.w3.org/2000/svg"
    :width="props.width"
    :height="props.height"
    :viewBox="props.viewBox"
    :area-labelledby="iconName"
    class="noselect group"
    :class="{
      [`w-${props.width}`]: props.width,
      [`h-${props.height}`]: props.height,
    }"
  >
    <g v-if="props.rectBackground">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6Z"
        fill="white"
      />
    </g>
    <g v-if="props.roundBackground">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"
        fill="white"
      ></path>
    </g>
    <g
      :style="{
        fill: iconColor,
      }"
      :class="{
        ['duration-200']: !!transition,
        [`group-hover:!fill-white`]: iconHoverColor === 'white',
        [`group-hover:!fill-gray-50`]: iconHoverColor === '#E3E3E8',
        [`group-hover:!fill-gray-450`]: iconHoverColor === '#A6A9B0',
        [`group-hover:!fill-gray-600`]: iconHoverColor === '#6A6D73',
        [`group-hover:!fill-gray-700`]: iconHoverColor === '#484A4F',
        [`group-hover:!fill-black`]: iconHoverColor === '#000729',
        [`group-hover:!fill-buildinguse-parking`]: iconHoverColor === '#B9BAC1',
        [`group-hover:!fill-core-500`]: iconHoverColor === '#5C6DFF',
        [`group-hover:!fill-primary`]: iconHoverColor === '#4D49F4',
        [`group-hover:!fill-red-400`]: iconHoverColor === '#FF4A55',
        [`group-active:!fill-white`]: iconActiveColor === 'white',
        [`group-active:!fill-core-500`]: iconActiveColor === '#5C6DFF',
        [`group-active:!fill-core-700`]: iconActiveColor === '#E3CCB',
        [`group-focus-within:!fill-gray-700`]: iconFocusColor === '#484A4F',
      }"
    >
      <path
        v-for="(path, idx) in iconPaths"
        :key="idx"
        :d="path"
        fill-rule="evenodd"
        clip-rule="evenodd"
      />
    </g>
  </svg>
</template>

<script lang="ts" setup>
import { computed, type PropType } from 'vue'
import ICON_PATH_DICT from './IconPaths'
import type { TIconName } from './a-icon-base'

const props = defineProps({
  iconName: {
    type: String as PropType<TIconName>,
    default: 'warning-filled',
  },
  iconColor: {
    type: String,
    default: '#484A4F',
  },
  iconHoverColor: {
    type: String,
  },
  iconActiveColor: {
    type: String,
  },
  iconFocusColor: {
    type: String,
  },
  width: {
    type: Number,
    default: 24,
  },
  height: {
    type: Number,
    default: 24,
  },
  roundBackground: {
    type: Boolean,
    default: false,
  },
  rectBackground: {
    type: Boolean,
    default: false,
  },
  viewBox: {
    type: String,
    default: '0 0 24 24',
  },
  gtm: {
    type: String,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  transition: {
    type: Boolean,
    default: true,
  },
})

const iconName = computed(() => props.iconName)
const iconPaths = computed(() => ICON_PATH_DICT[iconName.value])
const iconColor = computed(() => props.iconColor)
const iconHoverColor = computed(() => props.iconHoverColor)
const iconActiveColor = computed(() => props.iconActiveColor)
const iconFocusColor = computed(() => props.iconFocusColor)
const transition = computed(() => props.transition)
</script>
