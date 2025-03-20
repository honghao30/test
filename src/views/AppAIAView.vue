<!-- !FOR AIA -->
<template>
  <div
    class="relative mx-auto min-h-[816px] min-w-[280px] max-w-[1200px] md:min-h-[546px] lg:min-h-[628px]"
  >
    <section
      class="relative pt-136 pb-36 md:pt-156 md:pb-54 lg:pt-[160px] lg:pb-124"
    >
      <!-- <div class="mx-auto">
        <iframe
          style="border: 1px solid rgba(0, 0, 0, 0.1)"
          width="1200"
          height="824"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FONKXAJYIqIpbHmibaNA3w0%2FUX-Test-(5%252F21)%3Fnode-id%3D4129-113667%26t%3D2klvlrif825IZo87-1%26scaling%3Dscale-down-width%26page-id%3D4129%253A53082%26starting-point-node-id%3D4129%253A65673"
        ></iframe>
      </div> -->

      <!-- App WaitList Form -->
      <div
        class="app-wait-list-form mx-auto flex w-[320px] min-w-[320px] flex-col overflow-hidden rounded-10 bg-white shadow-200 md:w-[714px] md:flex-row lg:min-w-[1070px] lg:flex-row"
      >
        <div
          class="relative flex h-[450px] w-[320px] flex-row justify-center !overflow-hidden md:h-[450px] md:w-[434px] md:min-w-[434px] lg:h-[600px] lg:w-[644px] lg:min-w-[644px]"
        >
          <video
            class="absolute left-[-234px] h-full md:static lg:static"
            :autoplay="true"
            :muted="true"
            :loop="true"
            :playsinline="true"
            src="/en/app/hero_cropped.mp4"
            alt=""
          />
          <div
            class="absolute flex h-full w-full flex-col items-center bg-gradient-to-b from-[rgba(34,35,39,0.50)] via-[rgba(34,35,39,0.50)] to-[rgba(0,7,41,0.60)] px-18 pt-32 pb-26 text-white md:items-start md:pl-38 md:pr-20 md:pt-44 md:pb-38 md:text-left lg:items-start lg:pt-72 lg:pr-40 lg:pb-50 lg:pl-60 lg:text-left"
          >
            <!-- <div class="mb-4 flex flex-row items-center md:mb-8 lg:mb-12">
              <img
                class="lg:hidden"
                :src="`/img/logo_white.svg`"
                alt="logo"
                :height="34"
              />
              <img
                class="hidden md:hidden lg:block"
                :src="`/img/logo_white.svg`"
                alt="logo"
                :height="45"
              />
              <span
                class="ml-12 pb-4 font-poppins text-34 font-semibold lg:ml-16 lg:pb-6 lg:text-46"
                >App</span
              >
            </div> -->
            <span
              class="mb-auto text-center text-22 font-bold md:text-left md:text-26 lg:mb-auto lg:text-left lg:text-34"
            >
              AI-powered, Real-time,<br />Automated Design Solution
            </span>
            <span
              class="text-center text-16 font-bold md:text-left md:text-18 lg:text-left lg:text-26"
              >Generate optimized designs for<br />FAR & Density or manually
              edit <br class="md:hidden lg:hidden" />floor plans</span
            >
          </div>
        </div>

        <div
          class="my-auto flex h-[500px] min-h-full w-full flex-col items-center bg-white px-45 pb-50 pt-10 md:h-[450px] md:px-24 md:pt-0 md:pb-36 lg:px-50 lg:pt-0"
        >
          <FormContent sheet-name="AppFreeTrial">
            <template #form-title>
              <div
                class="mt-36 text-center text-20 text-primary md:mt-24 lg:mb-6 lg:mt-8 lg:text-27"
              >
                Sign up for
                <br /><span class="font-semibold text-primary"
                  >2-week free trial</span
                >
              </div>
              <span class="mb-[-6px] text-10 text-gray-450 lg:text-12"
                >*Trials can be extended upon request.</span
              >
            </template>
            <template #under-submit-btn-text>
              <div
                class="mt-16 flex w-full flex-col rounded-8 bg-coolgray-50 py-12 px-10 md:mt-8"
              >
                <div class="ml-6 mb-6 text-9 text-gray-700 lg:mb-10 lg:text-13">
                  After the free trial period, you can purchase<br />a
                  subscription plan at the discounted prices below.
                </div>
                <div
                  v-for="pricePlan in PRICE_PLAN_DICT"
                  :key="pricePlan.key"
                  class="ml-4 mb-2 flex h-14 flex-row items-center text-10 lg:text-14"
                >
                  <span class="mx-6 text-gray-500 lg:mx-8">&#x2022;</span>
                  <span
                    class="w-[26px] font-light text-gray-500 line-through lg:w-[38px]"
                    >${{ pricePlan.currentPrice }}</span
                  >
                  <IconBase
                    icon-name="arrow-right"
                    :width="14"
                    :height="14"
                    icon-color="#B9BAC1"
                    class="mr-4 lg:hidden"
                  />
                  <IconBase
                    icon-name="arrow-right"
                    :width="18"
                    :height="18"
                    icon-color="#B9BAC1"
                    class="mr-6 hidden lg:block"
                  />
                  <span class="mr-4 font-medium text-gray-700"
                    >${{ pricePlan.discountPrice }}</span
                  >
                  <span class="text-gray-700">{{ pricePlan.description }}</span>
                </div>
              </div>
            </template>
            <template #after-submit-icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                class="mb-14 mt-120 lg:hidden"
              >
                <ellipse
                  cx="29.5519"
                  cy="30"
                  rx="29.5519"
                  ry="30"
                  fill="#EBEDFE"
                />
                <path
                  d="M56.6963 4.54523L56.3744 4.92584L56.3836 4.93657L47.7026 15.24L26.5885 40.3054C26.1388 40.8397 25.538 41.1131 24.9358 41.1131C24.5754 41.1131 24.2149 41.013 23.8838 40.8165L25.1607 42.0298L27.0891 43.8614C27.5173 44.267 28.0348 44.469 28.5524 44.469C29.1546 44.469 29.7553 44.1974 30.2051 43.6613L60.0002 8.29243L56.6963 4.54523Z"
                  fill="#4848FF"
                />
                <path
                  d="M47.6958 15.2285L28.3792 38.1567L24.8243 34.7794L24.8135 34.7687L13.0935 23.6325L10.167 27.7817L21.5727 38.6177L21.5835 38.6285L23.8847 40.8157C24.2158 41.0122 24.5763 41.1123 24.9367 41.1123C25.5389 41.1123 26.1396 40.8407 26.5894 40.3046L47.705 15.241L47.6958 15.2285Z"
                  fill="#4848FF"
                  fill-opacity="0.4"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="71"
                height="70"
                viewBox="0 0 71 70"
                fill="none"
                class="mb-18 mt-120 hidden lg:block"
              >
                <ellipse
                  cx="34.9767"
                  cy="35"
                  rx="34.4772"
                  ry="35"
                  fill="#EBEDFE"
                />
                <path
                  d="M66.6455 5.30236L66.2699 5.74641L66.2807 5.75892L56.1529 17.7796L31.5198 47.0226C30.995 47.6459 30.2942 47.9649 29.5916 47.9649C29.1711 47.9649 28.7506 47.8481 28.3643 47.6188L29.854 49.0344L32.1038 51.1712C32.6034 51.6445 33.2071 51.8801 33.8109 51.8801C34.5136 51.8801 35.2144 51.5632 35.7391 50.9378L70.5 9.6741L66.6455 5.30236Z"
                  fill="#4848FF"
                />
                <path
                  d="M56.1449 17.7663L33.6089 44.5158L29.4615 40.5756L29.4489 40.5631L15.7756 27.5709L12.3613 32.4117L25.668 45.0537L25.6806 45.0662L28.3653 47.6179C28.7517 47.8472 29.1721 47.964 29.5926 47.964C30.2953 47.964 30.9961 47.6471 31.5208 47.0217L56.1557 17.7809L56.1449 17.7663Z"
                  fill="#4848FF"
                  fill-opacity="0.4"
                />
              </svg>
            </template>
            <template #after-submit-text>
              <span
                class="mt-[-16px] w-fit text-center text-13 text-gray-700 lg:mt-[-14px] lg:text-16"
                >We'll contact you via E-mail shortly.</span
              >
            </template>
          </FormContent>
        </div>
      </div>
    </section>

    <section class="section section-footer fp-auto-height">
      <Footer />
    </section>
  </div>
</template>
<script lang="ts" setup>
import { nextTick, onMounted } from 'vue'
import { useHead } from '@vueuse/head'
import router from '/@/router'

import { Footer, FormContent } from '/Components/'
import IconBase from '/Components/ui/IconBase.vue'

const PRICE_PLAN_DICT = [
  {
    key: '1user',
    currentPrice: 150,
    discountPrice: 30,
    description: 'for 1 user monthly',
  },
  {
    key: '3users',
    currentPrice: 250,
    discountPrice: 50,
    description: 'for up to 3 users monthly',
  },
  {
    key: '10users',
    currentPrice: 500,
    discountPrice: 100,
    description: 'for up to 10 users monthly',
  },
]

onMounted(() => {
  nextTick(() => {
    nextTick(() => {
      if (router.currentRoute.value.hash === '#form') {
        const offsetY = document.body.clientWidth > 761.9 ? -160 : -64
        setTimeout(() => {
          const target = document.querySelector('.app-wait-list-form')
          const y =
            target.getBoundingClientRect().top + window.scrollY + offsetY
          window.scrollTo({ top: y })
        }, 100)
        setTimeout(() => {
          const target = document.querySelector('.app-wait-list-form')
          const y =
            target.getBoundingClientRect().top + window.scrollY + offsetY
          window.scrollTo({ top: y })
        }, 500)

        setTimeout(() => {
          const target = document.querySelector('.app-wait-list-form')
          const y =
            target.getBoundingClientRect().top + window.scrollY + offsetY
          window.scrollTo({ top: y })
        }, 1000)
      }
    })
  })
})

useHead({
  title: `About the Zenerate App | AI-powered, Real-time, Feasibility Solution`,
  htmlAttrs: { lang: 'en' },
  link: [{ rel: 'canonical', href: 'https://www.zenerate.ai/app' }],
  meta: [
    {
      name: `description`,
      content: `Generate optimized designs for FAR & Density or manually edit floor plans.`,
    },
    {
      hid: 'twitter:title',
      property: 'twitter:title',
      content: `About the Zenerate App | AI-powered, Real-time, Feasibility Solution`,
    },
    {
      hid: 'twitter:description',
      property: 'twitter:description',
      content: `Generate optimized designs for FAR & Density or manually edit floor plans.`,
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
      content: 'https://www.zenerate.ai/app',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: `About the Zenerate App | AI-powered, Real-time, Feasibility Solution`,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: `Generate optimized designs for FAR & Density or manually edit floor plans.`,
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
</script>
<style lang="scss"></style>
