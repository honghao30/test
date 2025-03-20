<template>
  <button
    :data-gtm="props.gtm && `CTA_button_${props.gtm}`"
    type="button"
    :disabled="props.disabled"
    class="group flex cursor-pointer flex-nowrap items-center justify-center p-0 duration-200 disabled:cursor-not-allowed"
    :class="{
      // ---------------- disabled ----------------
      'icon-button_default  rounded-5 ': subVariant === 'default',
      'icon-button_gray  rounded-5 ': subVariant === 'gray',
      'icon-button_white  rounded-5 ': subVariant === 'white',
      'icon-button_xxsmall rounded-[50%]': subVariant === 'xxsmall',
    }"
    @click="onClick"
  >
    <slot>
      <AIconBase
        class="group-hover"
        :width="props.width"
        :height="props.height"
        :icon-name="(iconName as any)"
        :class="{
          'cursor-not-allowed': props.disabled,
          'cursor-pointer': !props.disabled,
        }"
      ></AIconBase>
    </slot>
  </button>
</template>

<script lang="ts" setup>
import { computed, type PropType } from 'vue'
import AIconBase from './IconBase.vue'

const props = defineProps({
  gtm: {
    type: String,
    default: '',
  },
  iconName: {
    type: String,
    default: 'close',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: false,
  },
  width: {
    type: Number,
    default: 24,
  },
  height: {
    type: Number,
    default: 24,
  },
  // variant: {
  //   type: String,
  //   default: 'icon',
  // },
  subVariant: {
    type: String as PropType<'default' | 'gray' | 'white' | 'xxsmall'>,
    default: 'default',
  },
})

const emits = defineEmits(['click'])
const onClick = ($evt) => emits('click', $evt)
const iconName = computed(() => props.iconName)
const subVariant = computed(() => props.subVariant)
</script>
<style lang="scss">
.icon-button_default {
  background-color: transparent;

  g {
    fill: theme('colors.gray.450') !important;
  }

  &:not(:disabled):hover g {
    fill: theme('colors.gray.600') !important;
  }

  &:not(:disabled):active g {
    fill: theme('colors.gray.700') !important;
  }

  &:disabled {
    g {
      fill: theme('colors.gray.200') !important;
    }
  }
}

.icon-button_gray {
  background-color: theme('colors.gray.50');
  border: 1px solid transparent;

  g {
    fill: theme('colors.gray.700') !important;
  }

  &:not(:disabled):hover {
    background-color: white;
  }

  &:not(:disabled):active {
    border: 1px solid theme('colors.gray.70');
    background-color: white;
  }

  &:disabled {
    g {
      fill: theme('colors.gray.200') !important;
    }
  }
}

.icon-button_white {
  background-color: white;
  border: 1px solid transparent;

  g {
    fill: theme('colors.gray.700') !important;
  }

  &:not(:disabled):hover {
    background-color: theme('colors.gray.50');
  }

  &:not(:disabled):active {
    border: 1px solid theme('colors.gray.70');
    background-color: theme('colors.gray.50');
  }

  &:disabled {
    g {
      fill: theme('colors.gray.200') !important;
    }
  }
}

.icon-button_xxsmall {
  background-color: theme('colors.gray.70');

  g {
    fill: theme('colors.gray.450') !important;
  }

  &:not(:disabled):hover {
    background-color: theme('colors.gray.100');
    g {
      fill: theme('colors.gray.700') !important;
    }
  }

  &:not(:disabled):active {
    background-color: theme('colors.core.50');
    g {
      fill: theme('colors.core.500') !important;
    }
  }

  &:disabled {
    g {
      fill: theme('colors.gray.200') !important;
    }
  }
}
</style>
