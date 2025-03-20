<template>
  <div class="icon-menu hover-pointer" @click="toggle()">
    <IconBase
      :icon-name="showDrawer ? 'close' : 'menu'"
      :width="30"
      :height="30"
      :iconColor="showDrawer ? 'black' : transparentMenu ? 'white' : '#4848ff'"
      class="my-10 mx-26 md:my-10 md:mx-40 lg:my-10 lg:mx-40"
    />
  </div>
  <!-- <div
    class="icon-menu hover-pointer"
    :style="{ width: `${props.width}px`, height: `${props.height}px` }"
    @click="toggle"
  >
    <div class="icon-menu-inner">
      <div class="menu menu-1" :style="{ height: `${barHeight}px` }"></div>
      <div class="menu menu-2" :style="{ height: `${barHeight}px` }"></div>
      <div class="menu menu-3" :style="{ height: `${barHeight}px` }"></div>
    </div>
  </div> -->
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import { IconBase } from '/Components/'
const props = defineProps({
  width: {
    type: Number,
    default() {
      return 24
    },
  },
  height: {
    type: Number,
    default() {
      return 24
    },
  },
  showDrawer: Boolean,
  transparentMenu: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['toggle'])
const toggle = () => {
  emit('toggle', null)
}
const showDrawer = computed(() => props.showDrawer)
const transparentMenu = computed(() => props.transparentMenu)

const barHeight = computed(() => {
  return Math.floor((props.height / 2 / 12) * 2)
})
</script>
<style lang="scss" scoped></style>
