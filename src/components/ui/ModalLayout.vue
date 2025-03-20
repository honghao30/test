<template>
  <div class="flex h-full w-full items-center justify-center z-[1001]">
    <div
      class="dim-black-70 absolute top-0 left-0 flex h-full w-full z-[-1]"
      @click.self="() => close()"
    ></div>
    <div class="w-full h-full overflow-y-auto py-12 md:py-44 lg:py-75">
      <div
        class="relative z-[1002] flex m-auto"
        :class="[
          nobox ? 'bg-transparent' : 'rounded-8 bg-white shadow-200',
          !nobox && variant === VARIANT.USER
            ? 'h-[580px] w-[524px]'
            : ' h-fit w-fit',
        ]"
      >
        <slot />

        <IconButton
          v-if="!nobox && showCloseButton"
          class="absolute w-32 h-32 top-4 right-4 md:top-10 md:right-10 lg:top-10 lg:right-10 z-[13]"
          iconName="close"
          sub-variant="default"
          :width="20"
          :height="20"
          @click="close"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import IconButton from './IconButton.vue'

const props = defineProps({
  variant: {
    type: String,
    default: '',
  },
  nobox: {
    type: Boolean,
    default: false,
  },
  showCloseButton: {
    type: Boolean,
    default: false,
  },
  gtm: {
    type: String,
    default: '',
  },
})
const variant = computed(() => props.variant)
const nobox = computed(() => props.nobox)
const showCloseButton = computed(() => props.showCloseButton)

const emits = defineEmits(['close'])
const close = () => {
  emits('close')
}

onMounted(() => {
  document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    height: 100%;
    `
  return () => {
    const scrollY = document.body.style.top
    document.body.style.cssText = ''
    window.scrollTo(0, parseInt(scrollY || '0', 10) * -1)
    document.body.classList.add('stop-scroll')
  }
})

onBeforeUnmount(() => {
  const scrollY = document.body.style.top
  document.body.classList.remove('stop-scroll')
  document.body.style.cssText = ''
  window.scrollTo(0, parseInt(scrollY || '0', 10) * -1)
})

const VARIANT = {
  // width: 524px, height: 580px
  USER: 'user',
}
</script>
