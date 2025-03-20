<!-- ! DEPRECATED -->

<template>
  <div class="relative mx-auto min-w-[280px] max-w-[1200px]">
    <section class="hero lg:h-[712px]">
      <div
        class="z-[1] mx-auto mt-[168px] w-[320px] min-w-[280px] md:mt-[162px] md:w-[644px] lg:absolute lg:mt-[200px] lg:ml-100 lg:w-[440px]"
      >
        <div class="mb-20 flex flex-col items-center lg:items-start">
          <div class="mb-16 flex flex-row items-center justify-center lg:mb-18">
            <div
              class="mr-8 text-30 text-primary md:mr-10 md:text-36 lg:mr-10 lg:text-36"
            >
              <span class="font-semibold">Zenerate</span>&nbsp;App
            </div>
            <div
              class="flex h-30 w-56 items-center justify-center rounded-[55px] bg-primary text-16 text-white md:h-36 md:w-68 md:rounded-[66px] md:text-20 lg:h-36 lg:w-68 lg:rounded-[66px] lg:text-20"
            >
              Beta
            </div>
          </div>

          <p
            class="mb-24 text-center text-30 md:mb-20 md:text-44 lg:mb-14 lg:text-left lg:text-42 lg:font-light"
          >
            <span class="font-medium">AI-powered, Real-time,</span>Feasibility
            Study Tool
          </p>

          <p
            class="mb-30 w-[280px] text-center text-16 md:mb-40 md:w-[600px] md:text-18 md:text-gray-700 lg:mb-30 lg:mb-36 lg:w-full lg:text-left lg:text-18 lg:text-gray-700"
          >
            Instantly evaluate the development potential of any site by
            generating solutions with 3D models, floor plans and financial
            analysis.
          </p>

          <div class="flex flex-col items-center md:flex-row lg:flex-row">
            <button
              type="button"
              class="text-18-semibold mb-10 h-48 w-[156px] rounded-5 bg-primary text-center leading-[48px] !text-white duration-300 hover:!text-core-200 md:mb-0 md:mr-10 md:h-54 md:w-[168px] md:text-20 md:leading-[54px] lg:mr-10 lg:mb-0 lg:h-54 lg:w-[168px] lg:text-20 lg:leading-[54px]"
              @click="moveToBetaTesterElement"
            >
              Try It For Free
            </button>
            <button
              class="demo-button-gtm text-18-semibold h-48 w-[156px] rounded-5 border-1 border-solid border-primary bg-white text-center leading-[48px] !text-primary duration-300 hover:!bg-core-50 md:h-54 md:w-[168px] md:text-20 md:leading-[54px] lg:h-54 lg:w-[168px] lg:text-20 lg:leading-[54px]"
              @click="openCalendlyPopup"
            >
              Request a Demo
            </button>
          </div>
        </div>
      </div>

      <div
        class="z-[-1] mx-auto w-full max-w-[1200px] lg:my-auto lg:mr-0 lg:w-[70%] lg:pt-120"
      >
        <video
          class="w-full"
          :autoplay="true"
          :muted="true"
          :loop="true"
          :playsinline="true"
          src="/public/en/zenerate_app/app_hero.mp4"
          alt=""
        />
      </div>
    </section>

    <section
      class="product-description flex flex-col items-center pt-80 md:pt-30 lg:pt-30"
    >
      <div
        v-for="(data, idx) in PRODUCT_DESCRIPTION"
        class="card mb-20 h-fit shadow-200 md:mb-23 md:h-[354px] md:items-center lg:mb-30 lg:h-[450px] lg:items-center"
        :class="`card${idx + 1}`"
      >
        <video
          v-if="data.imgType === 'video'"
          class="h-full w-full md:w-fit lg:w-fit"
          :autoplay="true"
          :muted="true"
          :loop="true"
          :playsinline="true"
          :src="`/en/zenerate_app/${data.imgUrl}`"
          alt=""
        />
        <div
          class="h-[292px] w-[320px] overflow-hidden md:h-[352px] md:w-[420px] lg:h-[450px] lg:w-[542px]"
          v-else
        >
          <img
            :src="`/en/zenerate_app/${data.imgUrls.desktop}`"
            width="523"
            height="441"
            class="hidden lg:block"
          />
          <img
            :src="`/en/zenerate_app/${data.imgUrls.tablet}`"
            width="421"
            height="352"
            class="hidden md:block lg:hidden"
          />
          <img
            :src="`/en/zenerate_app/${data.imgUrls.mobile}`"
            width="321"
            height="292"
            class="md:hidden lg:hidden"
          />
        </div>

        <div
          class="content-area flex flex-col justify-center"
          :class="data.contentOnRight && 'content-right'"
        >
          <div class="title text-18-medium mb-10 lg:mb-14 lg:text-24">
            {{ data.title }}
          </div>
          <div
            v-for="contentData in data.content"
            class="flex flex-row items-start not-last:mb-6 lg:not-last:mb-8"
          >
            <div
              class="bg-core mr-8 mt-3 flex h-13 min-h-13 w-13 min-w-13 items-center justify-center rounded-13 bg-core-30 lg:mr-12 lg:h-16 lg:min-h-13 lg:w-16 lg:min-w-16 lg:rounded-16"
            >
              <IconBase
                class="lg:hidden"
                icon-name="checkmark-bold"
                icon-color="#5C6DFF"
                :width="9"
                :height="9"
              />
              <IconBase
                class="hidden lg:block"
                icon-name="checkmark-bold"
                icon-color="#5C6DFF"
                :width="12"
                :height="12"
              />
            </div>
            <div class="description text-13 text-gray-700 lg:text-16">
              {{ contentData }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="how-it-works pt-60 md:pt-107 lg:pt-116">
      <div class="mb-6 text-center text-26">How It Works</div>
      <div
        class="mx-auto mb-36 w-[360px] text-center text-18 text-gray-550 md:w-[420px] lg:w-full"
      >
        Simple & intuitive process generating powerful results
      </div>
      <div
        v-for="(data, idx) in HOW_IT_WORKS"
        class="card mx-auto mb-20 h-fit shadow-200 md:mb-15 md:h-[244px] md:items-center lg:mb-20 lg:h-[312px] lg:items-center"
        :class="`card${idx + 1}`"
      >
        <div
          class="image-wrapper h-[200px] w-full md:h-[244px] md:min-w-[356px] md:max-w-[356px] lg:h-[312px] lg:min-w-[452px] lg:max-w-[452px]"
        ></div>
        <div class="content-area flex items-center">
          <div class="flex h-fit flex-row">
            <div
              class="text-12-semibold mr-12 mt-3 flex h-20 min-h-20 w-20 min-w-20 items-center justify-center rounded-10 bg-black text-white lg:mr-14 lg:h-28 lg:min-h-28 lg:w-28 lg:min-w-28 lg:rounded-14 lg:text-18"
            >
              {{ idx + 1 }}
            </div>
            <div>
              <div class="title text-18-medium mb-10 lg:text-24">
                {{ data.title }}
              </div>
              <div class="description text-14 text-gray-700 lg:text-18">
                {{ data.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="who-uses-it bg- pt-60 md:pt-[105px] lg:pt-[126px]">
      <div class="mb-6 text-center text-26">Who Uses It</div>
      <div
        class="mx-auto mb-36 w-[280px] text-center text-18 text-gray-550 md:mb-46 md:w-full lg:mb-46 lg:w-full"
      >
        Made for everyone involved in real estate development
      </div>
      <div
        v-for="data in WHO_USES_IT"
        class="card mx-auto mb-20 flex h-fit pl-24 pr-28 pt-16 pb-20 shadow-200 md:mb-10 md:items-center md:py-20 md:px-24 lg:mb-12 lg:items-center lg:py-24 lg:px-32"
      >
        <div
          class="mb-15 md:mb-0 md:mr-30 md:min-w-[198px] lg:mb-0 lg:mr-45 lg:min-w-[245px]"
        >
          <span
            v-for="userKey in data.userRoles"
            class="text-16-medium mb-5 mr-6 h-34 w-fit rounded-60 bg-coolgray-50 px-14 leading-[34px] md:text-16-medium md:mr-0 md:h-34 md:leading-[34px] md:last:mb-0 lg:text-20-medium lg:mr-0 lg:h-44 lg:leading-[44px] lg:last:mb-0"
          >
            <span class="whitespace-nowrap"
              >{{ ROLES[userKey].icon }}&nbsp;&nbsp;{{
                ROLES[userKey].text
              }}</span
            >
          </span>
        </div>
        <div class="text-16 text-gray-600 lg:text-18">
          {{ data.description }}
        </div>
      </div>
    </section>

    <section class="beta-tester relative pt-60 pb-120 md:pt-120 lg:pt-120">
      <div class="absolute top-[-90px] h-0 w-full" ref="betaTester"></div>
      <FormWrapper
        sheet-name="Beta"
        class="min-h-[856px] md:min-h-[546px] lg:min-h-[628px]"
      >
        <template #description>
          <div
            class="flex flex-col items-center px-31 pt-29 pb-38 text-white md:items-start md:px-48 md:pt-84 md:pb-84 md:text-left lg:items-start lg:px-66 lg:pb-84 lg:pt-92 lg:text-left"
          >
            <div
              class="text-22-semibold mb-20 text-center md:pl-22 md:text-left lg:mb-24 lg:pl-28 lg:text-left lg:text-28"
            >
              Zenerate App<br />Beta Tester Program
            </div>
            <div class="flex flex-col">
              <div
                v-for="data in BETA_TESTER"
                class="flex flex-row not-last:mb-9 lg:not-last:mb-12"
              >
                <IconBase
                  icon-name="checkmark"
                  icon-color="white"
                  :width="18"
                  :height="18"
                  class="mr-8 mt-1 w-18 min-w-18 max-w-18 lg:hidden"
                />
                <IconBase
                  icon-name="checkmark-bold"
                  icon-color="white"
                  :width="20"
                  :height="20"
                  class="mt-2 mr-10 hidden w-20 min-w-20 max-w-20 lg:block"
                />
                <div v-html="data" class="text-13-medium lg:text-16"></div>
              </div>
            </div>
          </div>
        </template>
        <template #form-title>
          <div class="text-center text-17 lg:text-22">
            Sign Up to Beta Test<br /><span class="font-semibold text-primary"
              >The Zenerate App!</span
            >
          </div>
        </template>
        <template #after-submit-title>
          <span class="mb-40 text-center text-18 md:pt-8 lg:pt-8 lg:text-22">
            Your request has been submitted!
          </span>
        </template>
        <template #after-submit-text>
          <span class="text-center text-13 text-gray-700 lg:text-16"
            >We'll be in touch soon.</span
          >
        </template>
      </FormWrapper>
    </section>

    <section class="section section-footer fp-auto-height">
      <Footer />
    </section>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, onBeforeMount, ref } from 'vue'
import { useHead } from '@vueuse/head'
import { useGtag } from 'vue-gtag-next'

import IconBase from '/Components/ui/IconBase.vue'
import { FormWrapper, Footer } from '/Components/'
import { ROLES } from '/Constants/roles'

import ImagePreloader from '/Utils/ImagePreloader'
import Emitter from '/Libraries/bus'
import { MENU_EVENT } from '/Constants/eventConstant'

useHead({
  title: `About the Zenerate App | AI-powered, Real-time, Feasibility Study Tool`,
  htmlAttrs: { lang: 'en' },
  link: [{ rel: 'canonical', href: 'https://www.zenerate.ai/zenerate-app' }],
  meta: [
    {
      name: `description`,
      content: `Instantly evaluate the development potential of any site by generating solutions with 3D models, floor plans and financial analysis.`,
    },
    {
      hid: 'twitter:title',
      property: 'twitter:title',
      content: `About the Zenerate App | AI-powered, Real-time, Feasibility Study Tool`,
    },
    {
      hid: 'twitter:description',
      property: 'twitter:description',
      content: `Instantly evaluate the development potential of any site by generating solutions with 3D models, floor plans and financial analysis.`,
    },
    { name: 'keywords', content: 'zenerate' },
    {
      hid: 'twitter:image',
      property: 'twitter:image',
      content: 'https://www.zenerate.ai/img/thumbnail.png',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://www.zenerate.ai/zenerate-app',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: `About the Zenerate App | AI-powered, Real-time, Feasibility Study Tool`,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: `Instantly evaluate the development potential of any site by generating solutions with 3D models, floor plans and financial analysis.`,
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:image:url',
      property: 'og:image:url',
      content: 'https://www.zenerate.ai/img/thumbnail.png',
    },
    {
      hid: 'og:image:type',
      property: 'og:image:type',
      content: 'image/png',
    },
  ],
})

const openCalendlyPopup = () => {
  Emitter.emit(MENU_EVENT.TOGGLE_CALENDLY_POPUP, {
    flag: true,
    trigger: 'zenapp',
  })
}

const betaTester = ref(null)
const moveToBetaTesterElement = () => {
  betaTester.value.scrollIntoView({ behavior: 'smooth' })
}

const PRODUCT_DESCRIPTION = [
  {
    imgType: 'video',
    imgUrl: 'product_description1.mp4',
    title: 'Evaluate Development Potential with Various Considerations',
    content: [
      'Max out FAR and/or Density',
      'Unit mix ratios',
      'Parking options: on-grade, above/underground',
      'Building uses',
      'Construction types & building layouts',
    ],
    contentOnRight: false,
  },
  {
    imgType: 'video',
    imgUrl: 'product_description2.mp4',
    title: 'Generated Realistic Floor Plans',
    content: [
      'Actual Parking layout with circulation, stalls, etc.',
      'All floor plans from basement to roof',
      'Residential units, corridor, elevators, stairs, amenities, etc.',
      'Exportable Floor Plans in CAD',
    ],
    contentOnRight: true,
  },
  {
    imgType: 'image',
    imgUrls: {
      desktop: 'product_description3_desktop.png',
      tablet: 'product_description3_tablet.png',
      mobile: 'product_description3_mobile_new.png',
    },
    title: 'Quick Financial Analysis Set to Your Own Metrics',
    content: [
      'Input your rent prices & construction cost',
      'Residual land value',
      'Yield on Cost',
      'Excel Export',
    ],
    contentOnRight: false,
  },
]

const HOW_IT_WORKS = [
  {
    title: 'Click on a Site',
    description:
      'Select a site, review the details of the parcel and zoning requirements.',
  },
  {
    title: 'Set Inputs and Generate Solutions',
    description:
      'Set zoning related requirements and boundaries. Then, generate multiple solutions in real-time.',
  },
  {
    title: 'Explore & Review Solutions',
    description:
      'Quickly view FAR, Density, floor plans, etc. of generated solutions along with financial analysis.',
  },
  {
    title: 'Adjust Settings to Generate More Solutions',
    description: 'Create iterations and test out more scenarios.',
  },
]

const WHO_USES_IT = [
  {
    userRoles: ['developer', 'owner_investor'],
    description:
      'Quickly evaluate go/no-go decisions of various scenarios based on realistic financial projections and actual floor plans & designs',
  },
  {
    userRoles: ['architect'],
    description:
      'Eliminate the tedious process of conducting massing / layout studies to maximize density or floor area ratio',
  },
  {
    userRoles: ['broker'],
    description:
      'Instantly answer your client\'s question of "what can I build here" with accurate floor plans and returns',
  },
]

const BETA_TESTER = [
  'Receive early access to the newest version of the Zenerate App to test out',
  'Play a direct role in shaping and refining our innovative tool',
  'Major discounts upon official launch',
  'Available for modular housing.<br/><i>Check the box in the form if you are interested</i>',
]

const onloadImages = {
  desktop: [
    '/en/zenerate_app/how_it_works_step1_desktop.png',
    '/en/zenerate_app/how_it_works_step2_desktop.png',
    '/en/zenerate_app/how_it_works_step3_desktop.png',
    '/en/zenerate_app/how_it_works_step4_desktop.png',
  ],
  tablet: [
    '/en/zenerate_app/how_it_works_step1_tablet.png',
    '/en/zenerate_app/how_it_works_step2_tablet.png',
    '/en/zenerate_app/how_it_works_step3_tablet.png',
    '/en/zenerate_app/how_it_works_step4_tablet.png',
  ],
  mobile: [
    '/en/zenerate_app/how_it_works_step1_mobile.png',
    '/en/zenerate_app/how_it_works_step2_mobile.png',
    '/en/zenerate_app/how_it_works_step3_mobile.png',
    '/en/zenerate_app/how_it_works_step4_mobile.png',
  ],
}

const commonPreloadImages = ['/en/zenerate_app/product_description3.png']

const mediaQueryDevice =
  window.innerWidth >= 1024
    ? 'desktop'
    : window.innerWidth >= 762
    ? 'tablet'
    : 'mobile'

onMounted(() => {
  ImagePreloader.sequential(commonPreloadImages)
  ImagePreloader.sequential(onloadImages[mediaQueryDevice])
})

// GTM
const { event } = useGtag()
const goToApp = () => {
  event('generate_lead', {
    event_category: 'engagement',
    event_label: '(not yet)',
  })
}
</script>
<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: row;
  width: 900px;
  border-radius: 10px;
  overflow: hidden;
  isolation: isolate;
  background-color: white;

  @include en-tablet {
    width: 708px;
  }

  @include en-mobile {
    flex-direction: column;
    width: 320px;
    min-width: 320px;
  }
}

.content-area {
  width: 358px;
  height: 100%;
  width: 100%;

  @include en-mobile {
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.15);
  }
}

.how-it-works {
  .content-area {
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.15);
  }
}

.product-description {
  .content-area {
    @include en-desktop {
      &.content-right {
        padding-left: 50px;
        padding-right: 40px;
      }
      &:not(.content-right) {
        padding-left: 66px;
        padding-right: 32px;

        order: -1;
      }
    }
    @include en-tablet {
      &.content-right {
        padding-left: 36px;
        padding-right: 40px;
      }
      &:not(.content-right) {
        padding-left: 52px;
        padding-right: 30px;
        order: -1;
      }
    }
    @include en-mobile {
      padding: 24px 30px 30px 30px;
    }
  }

  .card1 {
    @include en-desktop {
      .description {
        width: 280px;
      }
    }
  }

  .card2 {
    @include en-desktop {
      .title {
        width: 240px;
      }
    }
    @include en-tablet {
      .title {
        width: 200px;
      }
    }
    @include en-mobile {
      .title {
        width: 200px;
      }
    }
  }
  .card3 {
    .content-area {
      @include en-desktop {
        width: 388px;
      }
      @include en-tablet {
        width: 288px;
      }
    }

    @include en-mobile {
      .title {
        width: 200px;
      }
      .description {
        width: 200px;
      }
    }
  }
}

.how-it-works {
  .content-area {
    @include en-desktop {
      padding: 0 30px 0 50px;
    }
    @include en-tablet {
      padding: 0 24px 0 38px;
    }
    @include en-mobile {
      padding: 26px 20px 30px 26px;
    }
  }

  .card1 {
    .image-wrapper {
      background-image: url('/public/en/zenerate_app/how_it_works_step1_desktop.png');
      background-position: left -1px bottom -1px;
      @include en-tablet {
        background-image: url('/public/en/zenerate_app/how_it_works_step1_tablet.png');
        background-position: left center;
      }
      @include en-mobile {
        background-image: url('/public/en/zenerate_app/how_it_works_step1_mobile_new.png');
        background-position: left -1px center;
        background-size: 321px 200px;
      }
    }
    @include en-mobile {
      .description {
        width: 220px;
      }
    }
  }
  .card2 {
    .image-wrapper {
      background-image: url('/public/en/zenerate_app/how_it_works_step2_desktop.png');
      background-position: left -1px center;
      @include en-tablet {
        background-image: url('/public/en/zenerate_app/how_it_works_step2_tablet.png');
        background-position: left center;
      }
      @include en-mobile {
        background-image: url('/public/en/zenerate_app/how_it_works_step2_mobile_new.png');
        background-position: left -1px center;
        background-size: 321px 200px;
      }
    }
    @include en-desktop {
      .title {
        width: 260px;
      }
    }
    @include en-tablet {
      .title {
        width: 180px;
      }
    }
    @include en-mobile {
      .title {
        width: 180px;
      }
      .description {
        @include en-mobile {
          width: 208px;
        }
      }
    }
  }
  .card3 {
    .image-wrapper {
      background-image: url('/public/en/zenerate_app/how_it_works_step3_desktop_edited.png');
      background-position: left -1px top -1px;
      @include en-tablet {
        background-image: url('/public/en/zenerate_app/how_it_works_step3_tablet_edited.png');
        background-position: left top -1px;
      }
      @include en-mobile {
        background-image: url('/public/en/zenerate_app/how_it_works_step3_mobile_edited.png');
        background-position: left -1px center;
        background-size: 321px 200px;
      }
    }
  }
  .card4 {
    .image-wrapper {
      background-image: url('/public/en/zenerate_app/how_it_works_step4_desktop.png');
      background-position: left -1px center;

      @include en-tablet {
        background-image: url('/public/en/zenerate_app/how_it_works_step4_tablet.png');
        background-position: left center;
      }
      @include en-mobile {
        background-image: url('/public/en/zenerate_app/how_it_works_step4_mobile_new.png');
        background-position: left -1px center;
        background-size: 321px 200px;
      }
    }
    @include en-desktop {
      .title {
        width: 300px;
      }
      .description {
        width: 280px;
      }
    }
    @include en-tablet {
      .title {
        width: 204px;
      }
      .description {
        width: 200px;
      }
    }
    @include en-mobile {
      .title {
        width: 204px;
      }
      .description {
        width: 200px;
      }
    }
  }
}
</style>
