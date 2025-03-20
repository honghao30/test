<template>
  <div
    class="product-card flex h-fit w-[320px] min-w-[320px] flex-col overflow-hidden rounded-10 bg-white shadow-200 md:h-[468px] md:w-[708px] lg:h-[648px] lg:min-w-[980px]"
    :class="product"
  >
    <div class="h-[388px] md:h-fit">
      <template v-if="product === 'zmaps'">
        <ZmapsLogo class="ml-28 mt-30 mb-16 md:hidden lg:hidden" />
        <ZmapsLogo
          size="medium"
          class="mt-77 ml-60 mb-13 hidden md:block lg:hidden"
        />
        <ZmapsLogo size="large" class="mt-107 ml-84 mb-18 hidden lg:block" />
        <p
          class="ml-28 text-18 font-light md:ml-60 md:mb-30 md:w-[240px] md:text-23 lg:ml-84 lg:mb-41 lg:w-[280px] lg:text-32"
        >
          The Ultimate
          <span class="font-medium">Real Estate Development Map</span>
        </p>
        <a
          :href="CARD_DATA[product].buttonLinkedTo"
          class="text-13-medium ml-60 hidden h-34 w-[116px] rounded-4 bg-primary text-center leading-[34px] !text-core-10 duration-300 hover:!text-core-200 md:block lg:ml-84 lg:block lg:h-48 lg:w-[160px] lg:text-18 lg:leading-[48px]"
          >{{ CARD_DATA[product].buttonText }}</a
        >
      </template>

      <template v-else-if="product === 'zenerate-modular'">
        <img
          :src="`/en/modular/modular_logo.svg`"
          alt=""
          class="ml-28 mt-30 mb-10 w-[200px] md:mt-94 md:ml-60 md:mb-14 md:w-[270px] lg:ml-84 lg:mt-[100px] lg:mb-18 lg:w-[360px]"
        />
        <p
          class="ml-28 text-18 font-light md:ml-60 md:mb-34 md:text-24 lg:mb-52 lg:ml-84 lg:text-32"
        >
          <span class="font-medium">AI-Powered, Real-time,</span><br />
          Feasibility Studies<br />for Modular Housing
        </p>
        <router-link
          :to="{
            name: CARD_DATA[product].buttonLinkedTo,
            query: getCurrentUtmQuery(router),
          }"
          class="learn-more-button text-18-medium ml-60 hidden w-fit flex-row items-center !text-primary hover:!text-core-700 md:text-16-medium md:flex lg:ml-84 lg:flex"
          :class="product"
          >{{ CARD_DATA[product].buttonText
          }}<IconBase
            icon-name="arrow-right"
            :width="24"
            :height="24"
            class="ml-8"
        /></router-link>
      </template>

      <template v-else-if="product === 'ai-consulting'">
        <div
          class="ml-28 mt-30 mb-16 text-22 text-white md:mt-72 md:ml-60 md:mb-12 md:text-28 lg:ml-84 lg:mt-100 lg:mb-18 lg:text-38"
        >
          <span class="font-semibold">Zenerate</span>&nbsp;AI Consulting
        </div>
        <p
          class="ml-28 text-18 font-light text-white md:ml-60 md:mb-30 md:w-[260px] md:text-22 lg:ml-84 lg:mb-52 lg:w-[360px] lg:text-30"
        >
          <span class="font-medium">Explore all development<br /></span
          >&nbsp;<span class="font-medium">possibilities</span>&nbsp;to
          determine<br />the highest & best use
        </p>
        <router-link
          :to="{
            name: CARD_DATA[product].buttonLinkedTo,
            query: getCurrentUtmQuery(router),
          }"
          class="learn-more-button text-16-medium ml-60 hidden w-fit flex-row items-center !text-white hover:!text-gray-200 md:flex lg:text-18-medium lg:ml-84 lg:flex"
          :class="product"
          >{{ CARD_DATA[product].buttonText
          }}<IconBase
            icon-name="arrow-right"
            :width="20"
            :height="20"
            class="ml-8"
        /></router-link>
      </template>

      <template v-else-if="product === 'zen-app'">
        <img
          :src="`/en/zen_app/zen_app_logo.svg`"
          alt=""
          class="ml-28 mt-30 mb-10 w-[148px] md:mt-94 md:ml-60 md:mb-14 md:w-[198px] lg:ml-84 lg:mt-[100px] lg:mb-18 lg:w-[268px]"
        />
        <p
          class="ml-28 text-18 font-light md:ml-60 md:mb-34 md:text-24 lg:mb-52 lg:ml-84 lg:text-32"
        >
          <span class="font-medium">AI-Powered, Real-time,</span><br />
          Automated Design Solution
        </p>
        <router-link
          :to="{
            name: CARD_DATA[product].buttonLinkedTo,
            query: getCurrentUtmQuery(router),
          }"
          class="learn-more-button text-18-medium ml-60 hidden w-fit flex-row items-center !text-primary hover:!text-core-700 md:text-16-medium md:flex lg:ml-84 lg:flex"
          :class="product"
          >{{ CARD_DATA[product].buttonText
          }}<IconBase
            icon-name="arrow-right"
            :width="24"
            :height="24"
            class="ml-8"
        /></router-link>
      </template>
    </div>

    <div class="inner-shadow mt-auto h-fit py-20 px-22 md:px-60 lg:pl-84">
      <div class="mb-24 pl-8 md:mb-14 md:pl-0 lg:pl-0">
        <span
          class="mb-10 text-14 font-semibold text-primary md:hidden lg:hidden"
          >Best for</span
        >
        <span
          class="mb-8 hidden text-11 font-medium md:block lg:mb-12 lg:block lg:text-14"
          :class="product === 'ai-consulting' ? 'text-white' : 'text-primary'"
          >Made for</span
        >

        <div
          class="flex flex-row flex-wrap"
          :class="
            product === 'zenerate-modular'
              ? 'md:w-[240px] lg:w-[320px]'
              : 'md:w-[300px] lg:w-[360px]'
          "
        >
          <span
            v-for="userKey in CARD_DATA[product].bestFor"
            class="text-13-medium mb-6 mr-6 h-29 w-fit rounded-60 bg-coolgray-50 px-12 leading-[29px] md:text-11-medium md:h-27 md:leading-[27px] lg:text-14-medium lg:mb-10 lg:h-36 lg:leading-[36px]"
            :class="
              product === 'ai-consulting' ? 'md:bg-white lg:bg-white' : ''
            "
          >
            <span class="whitespace-nowrap md:hidden lg:hidden"
              >{{ ROLES[userKey].icon }}&nbsp;&nbsp;{{
                ROLES[userKey].shortenText ?? ROLES[userKey].text
              }}</span
            >
            <span class="hidden whitespace-nowrap md:block lg:block"
              >{{ ROLES[userKey].icon }}&nbsp;&nbsp;{{
                ROLES[userKey].text
              }}</span
            >
          </span>
        </div>
      </div>

      <a
        v-if="product === 'zmaps'"
        :href="CARD_DATA[product].buttonLinkedTo"
        class="text-16-semibold block h-38 rounded-6 bg-core-500 text-center leading-[38px] !text-white duration-300 hover:!text-core-200 md:hidden lg:hidden"
        >{{ CARD_DATA[product].buttonText }}</a
      >
      <router-link
        v-else
        :to="{
          name: CARD_DATA[product].buttonLinkedTo,
          query: getCurrentUtmQuery(router),
        }"
        class="text-16-semibold block h-38 rounded-6 bg-core-500 text-center leading-[38px] !text-white duration-300 hover:!text-core-200 md:hidden lg:hidden"
      >
        {{ CARD_DATA[product].buttonText }}</router-link
      >
    </div>
  </div>
</template>
<script lang="ts" setup>
import { PropType, computed } from 'vue'
import { useRouter } from 'vue-router'
import { getCurrentUtmQuery } from '/Utils/index'
import { ROLES } from '/Constants/roles'
import IconBase from './ui/IconBase.vue'
import { ZmapsLogo } from '/Components/'

const props = defineProps({
  product: String as PropType<
    'zmaps' | 'zenerate-modular' | 'ai-consulting' | 'zen-app'
  >,
})

const router = useRouter()

const product = computed(() => props.product)

const CARD_DATA = {
  zmaps: {
    bestFor: [
      'developer_investor',
      'architect',
      'broker',
      'financial',
      'bd',
      'government',
    ],
    buttonText: 'Go to Z-maps',
    buttonLinkedTo: 'https://zmaps.ai',
  },
  'zenerate-modular': {
    bestFor: ['developer', 'architect', 'manufacturer', 'consultant'],
    buttonText: 'Learn More About the App',
    buttonLinkedTo: 'modular',
  },
  'ai-consulting': {
    bestFor: ['developer_investor', 'architect'],
    buttonText: 'Learn More About AI Consulting',
    buttonLinkedTo: 'ai-consulting',
  },
  'zen-app': {
    bestFor: ['developer', 'architect', 'broker'],
    buttonText: 'Learn More About the App',
    buttonLinkedTo: 'zen-app',
  },
}
</script>
<style lang="scss" scoped>
.product-card {
  background-repeat: no-repeat;

  &.zmaps {
    background-image: url('/public/en/products/zmaps_phaseout_desktop_new.png');
    background-size: 980px 648px;
    background-position: center right;
    @include en-tablet {
      background-size: 708px 468px;
      background-image: url('/public/en/products/zmaps_phaseout_tablet_new.png');
    }
    @include en-mobile {
      background-image: url('/public/en/products/zmaps_phaseout_mobile_new.png');
      background-size: 320px 388px;
      background-position: bottom 272px center;
    }
  }

  &.zenerate-modular {
    background-image: url('/public/en/products/zenerate_modular_desktop.png');
    background-size: 980px 648px;
    background-position: center;
    @include en-tablet {
      background-size: 708px 468px;
      background-image: url('/public/en/products/zenerate_modular_tablet.png');
    }
    @include en-mobile {
      background-image: url('/public/en/products/zenerate_modular_mobile.png');
      background-size: 320px 388px;
      background-position: bottom 203px center;
    }
  }

  &.ai-consulting {
    background-image: url('/public/en/products/ai_consulting_desktop.png');
    background-position: center;
    @include en-tablet {
      background-image: url('/public/en/products/ai_consulting_tablet.png');
    }
    @include en-mobile {
      background-image: url('/public/en/products/ai_consulting_mobile_new.png');
      background-size: 320px 388px;
      background-position: bottom 203px center;
    }
  }

  &.zen-app {
    background-image: url('/public/en/products/zen_app_desktop_new_new.png');
    background-size: 980px 648px;
    background-position: center;
    @include en-tablet {
      background-image: url('/public/en/products/zen_app_tablet_new_new.png');
      background-size: 708px 468px;
    }
    @include en-mobile {
      background-image: url('/public/en/products/zen_app_mobile_new_new.png');
      background-size: 320px 388px;
      background-position: bottom 194px center;
    }
  }

  .learn-more-button {
    &.zenerate-modular,
    &.zen-app {
      svg {
        :deep(path) {
          fill: theme('colors.primary.DEFAULT') !important;
        }
      }

      &:hover {
        svg {
          :deep(path) {
            fill: theme('colors.core.700') !important;
          }
        }
      }
    }

    &.ai-consulting {
      svg {
        :deep(path) {
          fill: white !important;
        }
      }

      &:hover {
        svg {
          :deep(path) {
            fill: theme('colors.gray.200') !important;
          }
        }
      }
    }
  }

  .inner-shadow {
    @include en-mobile {
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.15);
    }
  }
}
</style>
