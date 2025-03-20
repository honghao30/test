<template>
  <IconBase
    class="peer mt-1 h-20 w-20 cursor-pointer"
    :icon-name="active ? 'view' : 'view-off'"
    :icon-color="active ? 'core-500' : 'gray-400'"
    icon-hover-color="core-500"
    :width="20"
    :height="20"
  />
</template>
<script lang="ts" setup>
import { IconBase } from '/Components/'

const props = defineProps({
  active: {
    type: Boolean,
  },
})
</script>
