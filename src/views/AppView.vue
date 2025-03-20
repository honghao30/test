<template>
  <div class="relative mx-auto min-w-[320px]">
    <!-- HERO -->
    <section class="mx-auto h-fit max-w-[1100px]">
      <div
        class="z-[1] mx-auto mt-[152px] mb-6 w-[320px] min-w-[320px] md:mb-42 md:mt-[170px] md:w-[644px] lg:absolute lg:mt-[200px] lg:ml-100 lg:w-[440px]"
      >
        <div class="flex flex-col items-center lg:items-start">
          <span
            class="mb-24 w-[320px] text-center text-30 md:mb-20 md:w-[600px] md:text-44 lg:mb-14 lg:w-[600px] lg:text-left lg:text-42 lg:font-light"
          >
            <span class="inline font-medium"
              >AI-powered, <br class="md:hidden lg:hidden" />Real-time,</span
            >
            <span
              >Automated <br class="md:hidden lg:hidden" />Design Solution</span
            >
          </span>

          <p
            class="mb-30 w-[300px] text-center text-16 text-gray-700 md:mb-40 md:w-[500px] md:text-18 lg:mb-36 lg:w-full lg:text-left lg:text-18 lg:leading-27"
          >
            Instantly generate optimized
            <br class="md:hidden lg:hidden" />design solutions.
          </p>

          <div class="flex flex-col items-center md:flex-row lg:flex-row">
            <button
              class="text-18-semibold h-48 w-[180px] rounded-5 bg-primary text-center leading-[48px] !text-white duration-300 hover:!text-core-200 md:mb-0 md:mr-10 md:h-54 md:w-[200px] md:text-20 md:leading-[54px] lg:mr-10 lg:mb-0 lg:h-54 lg:w-[200px] lg:text-20 lg:leading-[54px]"
              @click="openCalendlyPopup"
            >
              Request a Demo
            </button>
          </div>
        </div>
      </div>
      <div
        class="z-[-1] mx-auto h-[216px] w-full max-w-[1200px] md:h-[460px] lg:my-auto lg:mr-70 lg:h-[680px]"
      >
        <video
          class="h-full w-full md:hidden lg:hidden"
          :autoplay="true"
          :muted="true"
          :loop="true"
          :playsinline="true"
          src="/en/zen_app/header_mobile.mp4"
          alt=""
        />
        <video
          class="hidden h-full w-full md:block lg:hidden"
          :autoplay="true"
          :muted="true"
          :loop="true"
          :playsinline="true"
          src="/en/zen_app/header_tablet.mp4"
          alt=""
        />
        <video
          class="hidden h-full w-full md:hidden lg:block"
          :autoplay="true"
          :muted="true"
          :loop="true"
          :playsinline="true"
          src="/en/zen_app/header_desktop.mp4"
          alt=""
        />
      </div>
    </section>

    <!-- PRODUCT DESCRIPTION -->
    <section
      class="product-description flex flex-col items-center pt-[100px] md:pt-[116px] lg:pt-68"
    >
      <div
        v-for="(data, idx) in PRODUCT_DESCRIPTION"
        class="card flex shadow-200 not-last:mb-20 md:items-center md:py-10 md:not-last:mb-24 lg:items-center lg:not-last:mb-30"
        :class="`card${idx + 1}`"
      >
        <video
          class="z-[0] h-fit w-full md:w-[360px] lg:w-[484px]"
          :autoplay="true"
          :muted="true"
          :loop="true"
          :playsinline="true"
          :src="`/en/zen_app/${data.imgUrl}`"
          alt=""
        />

        <div
          class="content-area z-[2] flex flex-col justify-center"
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

    <!-- HOW IT WORKS -->
    <section class="how-it-works pt-80 md:pt-130 lg:pt-200">
      <div class="mb-6 text-center text-26">How It Works</div>
      <div
        class="mx-auto mb-36 w-[300px] text-center text-18 text-gray-550 md:mb-36 md:w-[420px] lg:mb-60 lg:w-full"
      >
        Simple & intuitive process generating powerful results
      </div>
      <Carousel
        :key="howItWorksIdx"
        :initial-slide="howItWorksIdx"
        :slideCount="HOW_IT_WORKS.length"
        :mouseWheelControl="false"
        @on-slide-change="(idx) => setHowItWorksIdx(idx)"
        class="how-it-works-carousel mb-34 h-96 w-[320px] select-none md:hidden lg:hidden"
      >
        <template v-for="(data, idx) in HOW_IT_WORKS" #[`slide${idx}`]>
          <div class="mb-36 flex flex-row items-center">
            <div
              class="mr-10 flex h-20 w-20 min-w-20 max-w-20 items-center justify-center rounded-20 bg-primary text-12 font-bold text-white"
            >
              {{ idx + 1 }}
            </div>
            <span
              class="text-18-medium min-w-fit"
              :class="idx === 2 && 'max-w-[160px]'"
              >{{ data.title }}</span
            >
          </div>
        </template>
      </Carousel>
      <div class="mx-auto flex w-fit flex-row items-center">
        <div
          class="mr-20 hidden w-[378px] flex-col md:block md:w-[330px] lg:block"
        >
          <div
            v-for="(data, idx) of HOW_IT_WORKS"
            class="flex h-72 w-full cursor-pointer flex-row items-center rounded-10 pl-30 md:pl-20"
            :class="
              howItWorksIdx === idx
                ? 'bg-core-10'
                : 'bg-white  hover:bg-coolgray-50'
            "
            @click="() => setHowItWorksIdx(idx)"
          >
            <div
              class="text-18-semibold mr-14 flex h-28 max-h-28 min-h-28 w-28 min-w-28 max-w-28 items-center justify-center rounded-14 text-white md:mr-10 md:h-26 md:max-h-26 md:min-h-26 md:w-26 md:min-w-26 md:max-w-26 md:text-16"
              :class="howItWorksIdx === idx ? 'bg-primary' : 'bg-gray-400'"
            >
              {{ idx + 1 }}
            </div>
            <span
              class="text-20 md:max-w-[204px] md:text-18 lg:max-w-[226px]"
              :class="
                howItWorksIdx === idx
                  ? 'font-medium text-black'
                  : 'font-regular text-gray-600'
              "
              >{{ data.title }}</span
            >
            <IconBase
              v-if="howItWorksIdx === idx"
              icon-name="arrow-right"
              :width="24"
              :height="24"
              iconColor="#7D8AFF"
              class="ml-14 min-w-24"
            />
          </div>
        </div>

        <div
          class="isolate h-[320px] w-[320px] overflow-hidden rounded-8 bg-slate-200 shadow-200 md:h-[360px] md:w-[360px] lg:h-[360px] lg:w-[520px]"
        >
          <video
            class="how-it-works0 h-full w-full lg:hidden"
            :class="howItWorksIdx !== 0 && '!hidden'"
            :autoplay="true"
            :muted="true"
            :loop="true"
            :playsinline="true"
            :src="`/en/zen_app/how_it_works1_tablet_mobile.mp4`"
            alt=""
          />
          <video
            class="how-it-works0 hidden h-full w-full lg:block"
            :class="howItWorksIdx !== 0 && '!hidden'"
            :autoplay="true"
            :muted="true"
            :loop="true"
            :playsinline="true"
            :src="`/en/zen_app/how_it_works1_desktop.mp4`"
            alt=""
          />
          <video
            class="how-it-works1 h-full w-full lg:hidden"
            :class="howItWorksIdx !== 1 && '!hidden'"
            :autoplay="true"
            :muted="true"
            :loop="true"
            :playsinline="true"
            :src="`/en/zen_app/how_it_works2_tablet_mobile.mp4`"
            alt=""
          />
          <video
            class="how-it-works1 hidden h-full w-full lg:block"
            :class="howItWorksIdx !== 1 && '!hidden'"
            :autoplay="true"
            :muted="true"
            :loop="true"
            :playsinline="true"
            :src="`/en/zen_app/how_it_works2_desktop.mp4`"
            alt=""
          />
          <video
            class="how-it-works2 h-full w-full lg:hidden"
            :class="howItWorksIdx !== 2 && '!hidden'"
            :autoplay="true"
            :muted="true"
            :loop="true"
            :playsinline="true"
            :src="`/en/zen_app/how_it_works3_tablet_mobile.mp4`"
            alt=""
          />
          <video
            class="how-it-works2 hidden h-full w-full lg:block"
            :class="howItWorksIdx !== 2 && '!hidden'"
            :autoplay="true"
            :muted="true"
            :loop="true"
            :playsinline="true"
            :src="`/en/zen_app/how_it_works3_desktop.mp4`"
            alt=""
          />
          <video
            class="how-it-works3 h-full w-full lg:hidden"
            :class="howItWorksIdx !== 3 && '!hidden'"
            :autoplay="true"
            :muted="true"
            :loop="true"
            :playsinline="true"
            :src="`/en/zen_app/how_it_works4_tablet_mobile.mp4`"
            alt=""
          />
          <video
            class="how-it-works3 hidden h-full w-full lg:block"
            :class="howItWorksIdx !== 3 && '!hidden'"
            :autoplay="true"
            :muted="true"
            :loop="true"
            :playsinline="true"
            :src="`/en/zen_app/how_it_works4_desktop.mp4`"
            alt=""
          />
          <video
            class="how-it-works4 h-full w-full lg:hidden"
            :class="howItWorksIdx !== 4 && '!hidden'"
            :autoplay="true"
            :muted="true"
            :loop="true"
            :playsinline="true"
            :src="`/en/zen_app/how_it_works5_tablet_mobile.mp4`"
            alt=""
          />
          <video
            class="how-it-works4 hidden h-full w-full lg:block"
            :class="howItWorksIdx !== 4 && '!hidden'"
            :autoplay="true"
            :muted="true"
            :loop="true"
            :playsinline="true"
            :src="`/en/zen_app/how_it_works5_desktop.mp4`"
            alt=""
          />
        </div>
      </div>
    </section>

    <!-- WHO USES IT -->
    <section class="who-uses-it pt-80 md:pt-130 lg:pt-200">
      <div class="mb-6 text-center text-26">Who Uses It</div>
      <div
        class="mx-auto mb-30 w-[280px] text-center text-18 text-gray-550 md:mb-46 md:w-full lg:mb-46 lg:w-full"
      >
        Made for everyone involved in multifamily housing development
      </div>
      <div
        v-for="(data, dataIdx) in WHO_USES_IT"
        class="card mx-auto flex h-fit flex-col px-26 pt-24 pb-32 shadow-200 not-last:mb-10 md:flex-row md:items-center md:px-24 md:py-20 md:pt-16 md:pb-20 lg:flex-row lg:items-center lg:pl-30 lg:pr-38 lg:pt-26 lg:pb-30 lg:not-last:mb-12"
      >
        <div
          class="mb-15 md:mb-0 md:mr-30 md:w-[193px] md:min-w-[193px] lg:mb-0 lg:mr-90 lg:w-[200px] lg:min-w-[200px]"
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
        <div
          class="flex items-center text-16 text-gray-600 md:w-[431px] md:text-16 lg:text-18"
        >
          {{ data.description }}
        </div>
      </div>
    </section>

    <!-- NEED CUSTOMIZATION? -->
    <section
      class="need-customization pt-80 pb-123 md:pt-130 md:pb-188 lg:pt-200 lg:pb-[266px]"
    >
      <div class="mb-6 text-center text-26">Need Customization?</div>
      <div
        class="mx-auto mb-30 w-[280px] text-center text-18 text-gray-550 md:mb-50 md:w-full lg:mb-46 lg:w-full"
      >
        Create an application customized for your organization's exact workflow
        and needs
      </div>
      <div
        class="mx-auto flex w-fit flex-col items-center md:flex-col lg:flex-row"
      >
        <div
          v-for="(data, dataIdx) in NEED_CUSTOMIZATION"
          class="flex h-fit w-[320px] flex-col rounded-10 px-24 pt-20 pb-34 shadow-200 not-last:mb-12 md:h-fit md:w-[708px] md:flex-row md:py-24 md:px-20 md:not-last:mb-10 lg:!mb-0 lg:h-[252px] lg:pl-30 lg:pr-24 lg:pt-30 lg:pb-26 lg:not-last:mr-12"
          :class="`card${dataIdx + 1}`"
        >
          <img
            :src="`/en/zen_app/${data.iconName}.png`"
            width="36"
            height="36"
            class="ml-4 mt-6 mb-12 md:mt-4 md:mr-36 md:ml-8 lg:mt-0 lg:mb-16"
            alt=""
          />
          <div class="flex w-[260px] flex-col md:w-[584px] lg:w-full">
            <span
              class="title text-16-medium mb-8 md:mb-4 md:text-20 lg:text-20"
              >{{ data.title }}</span
            >
            <span class="description text-gray-600 md:text-16 lg:text-18">{{
              data.description
            }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- DEMO FORM -->
    <!-- <section
      ref="zenAppLink"
      class="zen-app-form relative pt-80 pb-123 md:pt-130 md:pb-188 lg:pt-200 lg:pb-[266px]"
    >
      <div class="absolute top-[-90px] h-0 w-full" ref="formEl" />
      <FormWrapper
        sheet-name="ZenApp"
        class="min-h-[787px] md:min-h-[499px] lg:min-h-[590px]"
      >
        <template #description>
          <div
            class="flex flex-col px-42 pt-56 pb-56 text-white md:px-54 md:pt-106 md:pb-126 lg:px-76 lg:pt-132 lg:pb-150"
          >
            <span
              class="mb-20 text-20 font-semibold md:mb-20 md:text-22 md:font-semibold lg:mb-32 lg:text-28 lg:font-medium"
            >
              {{ DEMO_FORM.title }}</span
            >
            <div class="flex flex-col">
              <div
                v-for="description in DEMO_FORM.descriptions"
                class="flex flex-row items-start not-last:mb-4 md:not-last:mb-9 lg:not-last:mb-14"
              >
                <span
                  class="w-[210px] text-16 md:text-16 lg:w-[280px] lg:text-20"
                  >{{ description }}</span
                >
              </div>
            </div>
          </div>
        </template>
        <template #form-title>
          <div
            class="relative text-center text-16 first-letter:text-center md:text-17 lg:text-20"
            id="form"
            ref="zenAppFormInput"
          >
            <div class="absolute top-[-250px] h-0 w-full" />
            Request Access to<br />
            <span class="font-semibold text-primary lg:font-medium"
              >Zenerate!</span
            >
          </div>
        </template>
        <template #after-submit-title>
          <span class="mb-40 text-center text-18 md:pt-8 lg:pt-8 lg:text-22">
            Your request has been submitted!
          </span>
        </template>
        <template #after-submit-text>
          <span class="text-center text-13 text-gray-700 md:text-14 lg:text-18"
            >We'll contact you within<br />1~3 business days.</span
          >
        </template>
      </FormWrapper>
    </section> -->

    <section class="section section-footer fp-auto-height">
      <Footer />
    </section>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, watch, nextTick } from 'vue'
import { useHead } from '@vueuse/head'
import router from '/@/router'

import ApiService from '/Services/api'
import Validation from '/Utils/Validation'
import ImagePreloader from '/Utils/ImagePreloader'
import VideoPreloader from '/Utils/VideoPreloader'
import { ROLES } from '/Constants/roles'

import { TIconName } from '/Components/ui/a-icon-base'
import IconBase from '/Components/ui/IconBase.vue'
import { FormWrapper, Footer, Carousel } from '/Components/'
import Emitter from '/Libraries/bus'
import { MENU_EVENT } from '/Constants/eventConstant'

const openCalendlyPopup = () => {
  Emitter.emit(MENU_EVENT.TOGGLE_CALENDLY_POPUP, {
    flag: true,
    trigger: 'zenapp',
  })
}

const formEl = ref(null)
const moveToForm = () => {
  formEl.value.scrollIntoView({ behavior: 'smooth' })
}

const howItWorksIdx = ref<number>(0)
const setHowItWorksIdx = (idx: number) => {
  howItWorksIdx.value = idx
  document
    .querySelectorAll(`.how-it-works${howItWorksIdx.value}`)
    .forEach((video: HTMLVideoElement) => {
      video.pause()
      video.currentTime = 0
      video.play()
    })
}

const customizeIdx = ref<number>(0)
const setCustomizeIdx = (idx: number) => {
  customizeIdx.value = idx
  document
    .querySelectorAll(`.customize${customizeIdx.value}`)
    .forEach((video: HTMLVideoElement) => {
      video.pause()
      video.currentTime = 0
      video.play()
    })
}

const moduleIdx = ref<number>(0)
const setModuleIdx = (idx: number) => {
  moduleIdx.value = idx
  if (moduleIdx.value === 0) {
    document
      .querySelectorAll(`.module${moduleIdx.value}`)
      .forEach((video: HTMLVideoElement) => {
        video.pause()
        video.currentTime = 0
        video.play()
      })
  }
}

const bannerEmail = ref<{
  inputValue: string
  showErrorMsg: boolean
  isSent: boolean
  isLoading: boolean
}>({
  inputValue: '',
  showErrorMsg: false,
  isSent: false,
  isLoading: false,
})
const bannerEmailInput = ref()
const showBannerEmailErrorMsg = () => {
  bannerEmail.value.showErrorMsg = true
}
const hideBannerEmailErrorMsg = () => {
  bannerEmail.value.showErrorMsg = false
  bannerEmailInput.value.focus()
}

let timeoutId = null
watch(
  () => bannerEmail.value.showErrorMsg,
  (flag) => {
    if (flag === true) {
      timeoutId = setTimeout(() => {
        bannerEmail.value.showErrorMsg = false
      }, 1600)
    } else {
      clearTimeout(timeoutId)
    }
  }
)

// TODO: thumbnail
useHead({
  title: `About the Zenerate App | AI-powered, Real-time, Automated Design Solution`,
  htmlAttrs: { lang: 'en' },
  link: [{ rel: 'canonical', href: 'https://www.zenerate.ai/zen-app' }],
  meta: [
    {
      name: `description`,
      content: `Instantly generate optimized design solutions.`,
    },
    {
      hid: 'twitter:title',
      property: 'twitter:title',
      content: `About the Zenerate App | AI-powered, Real-time, Automated Design Solution`,
    },
    {
      hid: 'twitter:description',
      property: 'twitter:description',
      content: `IInstantly generate optimized design solutions.`,
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
      content: 'https://www.zenerate.ai/zen-app',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: `About the Zenerate App | AI-powered, Real-time, Automated Design Solution`,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: `Instantly generate optimized design solutions.`,
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

const PRODUCT_DESCRIPTION = [
  {
    imgType: 'video',
    imgUrl: 'product_description1_edited.mp4',
    title: 'Automated Building Design & Site Planning',
    content: [
      'With a few inputs, run our engine to generate various building and site plan options in real-time that meet your project objectives.',
    ],
    contentOnRight: false,
  },
  {
    imgType: 'video',
    imgUrl: 'product_description2_edited.mp4',
    title: 'Optimized Design Solutions',
    content: [
      'Optimize your design by maximizing floor area ratio or density, or specifying a unit mix.',
      'Quickly test diverse massing, building layout and parking options (podium, structure, surface).',
    ],
    contentOnRight: true,
  },
  {
    imgType: 'video',
    imgUrl: 'product_description3_edited.mp4',
    title: 'Manual Design',
    content: [
      'Easily insert and adjust parking and building layouts.',
      'Edit the floor plan by dragging and dropping residential units, stairs, elevators, retail/office space, drive aisles, parking stalls, etc.',
    ],
    contentOnRight: false,
  },
  {
    imgType: 'video',
    imgUrl: 'product_description4_edited.mp4',
    title: 'Pro Forma',
    content: [
      'Set financial assumptions to compute net operating income (NOI), construction cost, project cost, yield on cost or residual value.',
    ],
    contentOnRight: true,
  },
  {
    imgType: 'video',
    imgUrl: 'product_description5_edited.mp4',
    title: 'Export',
    content: [
      'Quickly generate PDF reports, export data in Excel, or download floor plans in CAD or Revit to further develop design.',
    ],
    contentOnRight: false,
  },
]

const HOW_IT_WORKS = [
  {
    title: 'Draw Site Boundary',
    videoUrls: {
      desktop: 'how_it_works1_desktop.mp4',
      tabletMobile: 'how_it_works1_tablet_mobile.mp4',
    },
  },
  {
    title: 'Set Regulations',
    videoUrls: {
      desktop: 'how_it_works2_desktop.mp4',
      tabletMobile: 'how_it_works2_tablet_mobile.mp4',
    },
  },
  {
    title: 'Apply Quick Concept or Start from Scratch',
    videoUrls: {
      desktop: 'how_it_works3_desktop.mp4',
      tabletMobile: 'how_it_works3_tablet_mobile.mp4',
    },
  },
  {
    title: 'Edit / Regenerate Design',
    videoUrls: {
      desktop: 'how_it_works4_desktop.mp4',
      tabletMobile: 'how_it_works4_tablet_mobile.mp4',
    },
  },
  {
    title: 'Export',
    videoUrls: {
      desktop: 'how_it_works5_desktop.mp4',
      tabletMobile: 'how_it_works5_tablet_mobile.mp4',
    },
  },
]

const WHO_USES_IT = [
  {
    userRoles: ['developer'],
    description:
      'Quickly evaluate site development potential and identify the highest and best use design solution.',
  },
  {
    userRoles: ['architect'],
    description:
      'Eliminate the tedious process of conducting massing/ layout studies to maximize the density of FAR (Floor Area Ratio).',
  },
  {
    userRoles: ['broker'],
    description:
      'Accurately assess the development potential of a property to enhance your upsell opportunities.',
  },
]

const NEED_CUSTOMIZATION = [
  {
    iconName: 'wrench',
    title: 'White Labeling',
    description: `Tailor Zenerate App to provide a professional and cohesive presentation of your service.`,
  },
  {
    iconName: 'money_bag',
    title: 'Pro Forma and/or Cost Estimate',
    description: `Integrate your pro forma and/or cost estimate methods into Zenerate App and accurately forecast project financials.`,
  },
  {
    iconName: 'gear',
    title: 'Residential Unit Design Integration',
    description:
      'Bring in your standardized residential unit design or prototype building layouts.',
  },
]

const DEMO_FORM = {
  title: 'Ready to Automate Feasibility Studies of Your Projects?',
  descriptions: [
    'Fill out the form to get a quick demo and gain access to Zenerate.',
  ],
}

const commonPreloadImages = [
  '/en/zen_app/wrench.png',
  '/en/zen_app/money_bag.png',
  '/en/zen_app/gear.png',
]

const onloadVideos = {
  desktop: [
    '/en/zen_app/header_desktop.mp4',
    '/en/zen_app/how_it_works1_desktop.mp4',
    '/en/zen_app/how_it_works2_desktop.mp4',
    '/en/zen_app/how_it_works3_desktop.mp4',
    '/en/zen_app/how_it_works4_desktop.mp4',
    '/en/zen_app/how_it_works5_desktop.mp4',
  ],
  tablet: [
    '/en/zen_app/header_tablet.mp4',
    '/en/zen_app/how_it_works1_tablet_mobile.mp4',
    '/en/zen_app/how_it_works2_tablet_mobile.mp4',
    '/en/zen_app/how_it_works3_tablet_mobile.mp4',
    '/en/zen_app/how_it_works4_tablet_mobile.mp4',
    '/en/zen_app/how_it_works5_tablet_mobile.mp4',
  ],
  mobile: [
    '/en/zen_app/header_mobile.mp4',
    '/en/zen_app/how_it_works1_tablet_mobile.mp4',
    '/en/zen_app/how_it_works2_tablet_mobile.mp4',
    '/en/zen_app/how_it_works3_tablet_mobile.mp4',
    '/en/zen_app/how_it_works4_tablet_mobile.mp4',
    '/en/zen_app/how_it_works5_tablet_mobile.mp4',
  ],
}

const commonPreloadVideos = [
  '/en/zen_app/product_description1_edited.mp4',
  '/en/zen_app/product_description2_edited.mp4',
  '/en/zen_app/product_description3_edited.mp4',
  '/en/zen_app/product_description4_edited.mp4',
  '/en/zen_app/product_description5_edited.mp4',
]

const mediaQueryDevice =
  window.innerWidth >= 1024
    ? 'desktop'
    : window.innerWidth >= 762
    ? 'tablet'
    : 'mobile'
const zenAppLink = ref<HTMLElement>(null)
const zenAppFormInput = ref<HTMLElement>(null)

onMounted(() => {
  nextTick(() => {
    nextTick(() => {
      if (router.currentRoute.value.hash === '#form') {
        const offsetY = document.body.clientWidth > 761.9 ? 0 : 250
        setTimeout(() => {
          const target = document.querySelector('.zen-app-form')
          const y =
            target.getBoundingClientRect().top + window.scrollY + offsetY
          window.scrollTo({ top: y })
        }, 100)
        setTimeout(() => {
          const target = document.querySelector('.zen-app-form')
          const y =
            target.getBoundingClientRect().top + window.scrollY + offsetY
          window.scrollTo({ top: y })
        }, 500)

        setTimeout(() => {
          const target = document.querySelector('.zen-app-form')
          const y =
            target.getBoundingClientRect().top + window.scrollY + offsetY
          window.scrollTo({ top: y })
        }, 1000)
      }
    })
  })

  ImagePreloader.sequential(commonPreloadImages)
  VideoPreloader.sequential(commonPreloadVideos)
  VideoPreloader.sequential(onloadVideos[mediaQueryDevice])
})
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

  @include en-mobile {
    .inner-shadow {
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.15);
    }
  }
}

.product-description {
  .content-area {
    @include en-desktop {
      &.content-right {
        padding-left: 42px;
      }
      &:not(.content-right) {
        padding-left: 66px;
        order: -1;
        margin-right: auto;
      }
    }
    @include en-tablet {
      &.content-right {
        padding-left: 50px;
      }
      &:not(.content-right) {
        padding-left: 52px;
        order: -1;
        margin-right: auto;
      }
    }
    @include en-mobile {
      padding: 18px 30px 40px 30px;
    }
  }

  .card1 {
    @include en-desktop {
      height: 450px;
      .title {
        width: 300px;
      }
      .description {
        width: 280px;
      }
    }
    @include en-tablet {
      height: 354px;
      .title {
        width: 236px;
      }
      .description {
        width: 240px;
      }
    }
    @include en-mobile {
      .title {
        width: 236px;
      }
      .description {
        width: 210px;
      }
    }
  }

  .card2 {
    @include en-desktop {
      height: 450px;
      .description {
        width: 268px;
      }
    }
    @include en-tablet {
      height: 354px;
      .description {
        width: 224px;
      }
    }
    @include en-mobile {
      .description {
        width: 224px;
      }
    }
  }

  .card3 {
    @include en-desktop {
      height: 450px;
      .title {
        width: 320px;
      }
      .description {
        width: 270px;
      }
    }
    @include en-tablet {
      height: 354px;
      .title {
        width: 200px;
      }
      .description {
        width: 262px;
      }
    }
    @include en-mobile {
      .title {
        width: 240px;
      }
      .description {
        width: 220px;
      }
    }
  }

  .card4 {
    @include en-desktop {
      height: 450px;
      .content-area {
        padding-left: 16px;
        width: 388px;
      }
    }
    @include en-tablet {
      height: 354px;
      .content-area {
        width: 284px;
      }
    }
    @include en-mobile {
      .title {
        width: 280px;
      }
    }
  }

  .card5 {
    @include en-desktop {
      height: 450px;
      .title {
        width: 320px;
      }
      .description {
        width: 288px;
      }
    }
    @include en-tablet {
      height: 354px;
      .title {
        width: 200px;
      }
      .description {
        width: 244px;
        margin-right: 32px;
      }
    }
    @include en-mobile {
      .title {
        width: 240px;
      }
      .description {
        width: 232px;
      }
    }
  }
}

.need-customization {
  .card1 {
    @include en-desktop {
      width: 344px;
    }
  }
  .card2 {
    @include en-desktop {
      width: 354px;
      .description {
        width: 268px;
      }
    }
  }
  .card3 {
    @include en-desktop {
      width: 368px;
      .description {
        width: 292px;
      }
    }
  }
}
</style>
<style lang="scss">
.how-it-works-carousel,
.create-and-use-your-own-modules-carousel,
.customize-carousel {
  .swiper-slide {
    padding: 0 46px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: theme('colors.gray.700');
    z-index: 1 !important;

    &:after {
      font-size: 16px;
      font-weight: 900;
      padding: 16px !important;
      padding-bottom: 52px !important;
    }
  }

  .swiper-button-prev:hover,
  .swiper-button-next:hover {
    color: theme('colors.gray.900');
  }

  .swiper-button-disabled {
    color: theme('colors.gray.200');
  }

  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    background-color: theme('colors.gray.300');
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    width: 16px;
    border-radius: 10px;
    background-color: theme('colors.primary.DEFAULT');
  }
}
</style>
<style lang="scss" scoped>
video {
  mask-image: -webkit-radial-gradient(white, black);
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
}
</style>
