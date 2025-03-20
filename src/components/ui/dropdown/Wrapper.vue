<template>
  <VMenu
    ref="dropdown"
    class="w-[inherit]"
    placement="bottom-start"
    :skidding="0"
    :distance="4"
    :container="container"
    theme="dropdown-tooltip"
    :triggers="['click']"
    :auto-hide="!preventAutoHide"
    :shown="isDropdownOpen"
    @applyShow="!isDropdownOpen && toggleDropdown(true)"
    @applyHide="isDropdownOpen && toggleDropdown(false)"
    :disabled="disabled"
  >
    <button
      type="button"
      class="relative w-full max-w-full bg-transparent p-0 duration-300"
      :disabled="disabled"
      :class="disabled && 'cursor-default'"
      @click="() => toggleDropdown()"
    >
      <slot :open="isDropdownOpen" :disabled="disabled" />
    </button>

    <template #popper="{ hide }">
      <div
        v-show="isDropdownOpen"
        @click="
          () => {
            toggleDropdown()
          }
        "
      >
        <slot
          name="popup"
          :open="isDropdownOpen"
          :disabled="disabled"
          :hide="hide"
        ></slot>
      </div>
    </template>
  </VMenu>
</template>
<script lang="ts" setup>
import { ref, computed, watch, type PropType } from 'vue'
import useToggle from '/Composables/useToggle'

const props = defineProps({
  container: {
    type: Object as PropType<HTMLElement>,
  },
  initOpen: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  preventAutoHide: {
    type: Boolean,
    default: false,
  },
})

const initOpen = computed(() => props.initOpen)
const disabled = computed(() => props.disabled)

const [isDropdownOpen, toggleDropdown] = useToggle(props.initOpen)
const dropdown = ref<HTMLElement>(null)

watch(
  () => props.disabled,
  (flag) => {
    if (flag) {
      toggleDropdown(false)
    }
  }
)

const emit = defineEmits<{
  (e: 'apply-show', flag: boolean): void
}>()

watch(
  isDropdownOpen,
  (flag) => {
    emit('apply-show', flag)
  },
  {
    immediate: true,
  }
)
</script>
<style lang="scss"></style>
