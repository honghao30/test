<template>
  <div
    ref="dropdown"
    class="relative w-full max-w-full duration-300"
    :class="props.size === SIZES.XS ? 'text-13-medium' : 'text-14-medium'"
    :data-gtm="props.gtm && `CTA_dropdown_${props.gtm}`"
    @click="() => outsideDropdown"
  >
    <button
      class="relative flex w-full justify-between rounded-5 border-1 border-solid bg-white pl-12 pr-4"
      :class="[
        props.size === SIZES.L && 'h-40',
        props.size === SIZES.S && 'h-32',
        props.size === SIZES.XS && 'h-28',
        props.disabled
          ? 'cursor-not-allowed border-gray-100'
          : isDropdownOpen
          ? 'border-core-500'
          : 'cursor-pointer border-gray-300',
      ]"
      type="button"
      @click="() => !props.disabled && toggleDropDown()"
    >
      <p
        v-if="props.selected === null"
        class="my-auto"
        :class="[
          props.disabled ? 'text-gray-200' : 'text-gray-400',
          props.size === SIZES.XS ? 'text-13-medium' : 'text-14-medium',
        ]"
      >
        {{ props.placeholder ? props.placeholder : 'Select' }}
      </p>
      <p
        v-else
        class="my-auto max-w-full truncate"
        :class="[
          isDropdownOpen ? 'text-gray-500' : 'text-gray-700',
          props.size === SIZES.XS ? 'text-13-medium' : 'text-14-medium',
        ]"
      >
        {{ props.selected.name }}
      </p>

      <IconBase
        class="my-auto"
        :icon-name="isDropdownOpen ? 'chevron-up' : 'chevron-down'"
        :icon-color="props.disabled ? '#E3E3E8' : '#8D9095'"
      >
      </IconBase>
    </button>
    <div
      v-if="isDropdownOpen"
      class="absolute left-0 z-[1] flex w-full flex-col overflow-y-auto rounded-5 border-1 border-solid border-gray-300 bg-white p-4"
      :class="[
        props.size === SIZES.L && 'top-46 max-h-[140px]',
        props.size === SIZES.S && 'top-38 max-h-[116px]',
        props.size === SIZES.XS && 'top-32 max-h-[92px]',
      ]"
    >
      <template v-for="(item, idx) in itemList" :key="idx">
        <div
          class="flex items-center justify-between pl-8 pr-4"
          :class="[
            item.active
              ? 'cursor-pointer text-gray-700 hover:bg-gray-70 '
              : 'cursor-not-allowed text-gray-300',
            props.selected?.key === item.key && 'text-primary',

            props.size === SIZES.L && 'h-32 min-h-32',
            props.size === SIZES.S && 'h-26 min-h-26',
            props.size === SIZES.XS && 'h-22 min-h-22',
          ]"
          @click="() => item.active && onClick(item)"
        >
          <span class="max-w-full truncate" :title="item.name">{{
            item.name
          }}</span>
          <IconBase
            v-if="props.selected?.key === item.key"
            :icon-name="'checkmark'"
            class="w-14"
          >
          </IconBase>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, ref, computed } from 'vue'
import { useOnClickOutside } from '/Composables/useOnClickOutside'
import IconBase from './IconBase.vue'

type Item = {
  id: number
  key?: string
  name: string
  active?: boolean
}
type ItemList = Item[]

const props = defineProps({
  gtm: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'large',
  },
  isFullWidth: {
    type: Boolean,
    default: false,
  },
  list: {
    type: Array,
    default() {
      return []
    },
    required: true,
  },
  selected: {
    type: Object,
    default: null,
  },
  placeholder: {
    type: String,
    required: true,
  },
})

const emits = defineEmits(['click', 'filter'])
const onClick = (item: Item) => {
  toggleDropDown(false)
  emits('click', item)
}
const onFilterList = () => emits('filter')
const itemList = computed((): ItemList | any => props.list)

const isDropdownOpen = ref(false)
const toggleDropDown = (flag?: boolean) => {
  isDropdownOpen.value = flag == null ? !isDropdownOpen.value : flag
}

const dropdown = ref()
const outsideDropdown = useOnClickOutside(dropdown, () => toggleDropDown(false))

const SIZES = {
  // height: 28px;
  XS: 'x-small',
  // height: 32px;
  S: 'small',
  // height: 40px
  L: 'large',
}
</script>
