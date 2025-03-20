<template>
  <swiper
    :navigation="navigation"
    :pagination="pagnation ? { clickable: true } : false"
    :mousewheel="mouseWheelControl"
    :keyboard="keyboardControl"
    :loop="infiniteLoop"
    :modules="[Navigation, Pagination, Mousewheel, Keyboard]"
    :initialSlide="initialSlide"
    class="custom-carousel h-full w-full"
    @slideChange="onSlideChange"
  >
    <template v-for="idx in slideCount">
      <swiper-slide class="flex items-center justify-center px-60">
        <slot :name="`slide${idx - 1}`">Slide {{ idx }}</slot>
      </swiper-slide>
    </template>
  </swiper>
</template>
<script setup>
import { computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const props = defineProps({
  slideCount: { type: Number, default: 5 },
  navigation: { type: Boolean, default: true },
  pagnation: { type: Boolean, default: true },
  mouseWheelControl: { type: Boolean, default: true },
  keyboardControl: { type: Boolean, default: true },
  infiniteLoop: { type: Boolean, default: true },
  initialSlide: { type: Number, default: 0 },
})

const slideCount = computed(() => props.slideCount)
const navigation = computed(() => props.navigation)
const pagnation = computed(() => props.pagnation)
const mouseWheelControl = computed(() => props.mouseWheelControl)
const keyboardControl = computed(() => props.keyboardControl)
const infiniteLoop = computed(() => props.infiniteLoop)
const initialSlide = computed(() => props.initialSlide)

const emit = defineEmits(['onSlideChange'])
const onSlideChange = (v) => {
  emit('onSlideChange', v.realIndex)
}
</script>
<style lang="scss">
.custom-carousel {
  .swiper-button-prev,
  .swiper-button-next {
    color: theme('colors.gray.550');
    z-index: 1 !important;

    &:after {
      font-size: 40px;
      padding: 20px !important;
      @include en-tablet {
        font-size: 36px;
      }
      @include en-mobile {
        font-size: 28px;
      }
    }
  }

  .swiper-button-prev:hover,
  .swiper-button-next:hover {
    color: theme('colors.gray.700');
  }

  .swiper-button-disabled {
    color: theme('colors.gray.200');
  }

  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background-color: theme('colors.gray.300');
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    width: 20px;
    border-radius: 10px;
    background-color: theme('colors.core.500');
  }
}
</style>
