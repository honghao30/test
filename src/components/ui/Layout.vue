<template>
  <div
    class="layout mx-auto flex w-[320px] min-w-[320px] flex-col px-26 md:w-[762px] md:flex-row md:justify-center md:px-70 lg:w-auto lg:w-[1024px] lg:flex-row lg:justify-center lg:px-70"
  >
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import Store from '/Store/index'
</script>
