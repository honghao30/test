<template>
  <section class="section section-careers">
    <div class="section-inner">
      <div
        class="m-auto w-[80%] min-w-[280px] max-w-[440px] md:min-w-[628px] md:max-w-[772px] lg:min-w-[772px] lg:max-w-[1200px]"
      >
        <div
          class="mb-[26px] flex flex-col gap-[18px] md:mb-[42px] md:gap-[20px] lg:mb-[44px] lg:gap-[16px]"
        >
          <div class="flex flex-col items-start">
            <p
              class="text-m-20-semibold text-black md:text-t-30-semibold lg:text-d-32-semibold"
            >
              Together,
            </p>

            <p
              class="text-m-20-regular text-left text-black md:text-t-30-regular lg:text-d-32-regular"
            >
              <span>let's build the future&nbsp;</span>
              <span>of real estate</span>
            </p>
          </div>
          <p
            class="text-m-13-medium w-[210px] text-left text-black md:text-t-16-medium md:w-[370px] lg:text-d-15-medium lg:w-[340px]"
          >
            <span>We're looking for passionate, </span>
            <span>talented teammates&nbsp;</span><span>to help grow</span>
            <span class="text-primary">&nbsp;Zenerate!</span>
          </p>
        </div>

        <div
          class="flex w-full flex-col gap-16 rounded-10 p-[26px] shadow-100 md:gap-26 md:px-[42px] md:py-[38px] lg:gap-26 lg:px-[50px] lg:py-[48px]"
        >
          <div>
            <h2
              class="text-m-14-semibold m-0 md:text-17 md:font-semibold lg:text-17 lg:font-semibold"
            >
              We're Hiring! 🚀
            </h2>
          </div>
          <div class="flex w-full flex-col gap-16">
            <template v-for="(job, idx) in JOBS">
              <div
                class="group flex min-h-38 w-full cursor-pointer flex-row gap-12 md:min-h-24 md:items-center lg:min-h-28 lg:items-center"
                @click="
                  ;[
                    router.push({
                      path: `/career/${job.key}`,
                      query: getCurrentUtmQuery(router),
                    }),
                  ]
                "
              >
                <span>{{ job.icon }}</span>
                <div
                  class="flex w-full flex-col items-start justify-between md:flex-row md:items-center lg:flex-row lg:items-center"
                >
                  <div
                    class="text-m-13-regular text-black group-hover:text-primary md:text-t-16-regular lg:text-d-18-regular"
                  >
                    {{ job.name }}
                  </div>
                  <span
                    class="text-12-medium w-[80px] text-left text-gray-450 group-hover:text-gray-700 md:text-13-medium md:pt-2 lg:text-13-medium lg:pt-6"
                    >{{ job.fulltime ? 'Full-time' : 'Part-time' }}</span
                  >
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-footer fp-auto-height">
      <Footer></Footer>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useHead } from '@vueuse/head'
import { getCurrentUtmQuery } from '/Utils/index'
import Footer from '/Components/Footer.vue'
const router = useRouter()
const posted = new Date(2021, 9, 17)
const today = new Date()

const careerId = ref(-1)
const scrollTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
}

const JOBS = [
  // {
  //   key: 'head-of-marketing',
  //   name: 'Head of Marketing, B2B SaaS',
  //   fulltime: true,
  // },
  // {
  //   key: 'graphic-designer',
  //   icon: `🎨`,
  //   name: 'Mid-level Graphic Designer',
  //   fulltime: true,
  // },
  // { key: 'head-of-sales', name: 'Head of Sales', fulltime: true },
  // {
  //   key: 'architect-architectural-designer',
  //   icon: '🏗️',
  //   name: 'Architect / Architectural Designer',
  //   fulltime: true,
  // },
  // {
  //   key: 'project-analyst-real-estate-development',
  //   icon: '📊',
  //   name: 'Project Analyst, Real Estate Development',
  //   fulltime: false,
  // },
  // {
  //   key: 'strategic-account-executive',
  //   icon: '🎯',
  //   name: 'Strategic Account Executive',
  //   fulltime: true,
  // },
  // {
  //   key: 'business-development-marketing-intern',
  //   icon: '💼',
  //   name: ' Business Development & Marketing Intern',
  //   fulltime: true,
  // },
]

useHead({
  title: `Zenerate Careers | Join us in revolutionizing real estate development`,
  htmlAttrs: { lang: 'en' },
  link: [{ rel: 'canonical', href: 'https://www.zenerate.ai/career' }],
  meta: [
    {
      name: `description`,
      content: `Ready to unlock your full potential and create meaningful work? Explore career opportunities available at Zenerate!`,
    },
    {
      hid: 'twitter:title',
      property: 'twitter:title',
      content: `Zenerate Careers | Join us in revolutionizing real estate development`,
    },
    {
      hid: 'twitter:description',
      property: 'twitter:description',
      content: `Ready to unlock your full potential and create meaningful work? Explore career opportunities available at Zenerate!`,
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
      content: 'https://www.zenerate.ai/career',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: `Zenerate Careers | Join us in revolutionizing real estate development`,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: `Ready to unlock your full potential and create meaningful work? Explore career opportunities available at Zenerate!`,
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
<style lang="scss" scoped>
.section-inner {
  @include en-desktop {
    padding: 0px 20px !important;
    height: 900px !important;
  }
}
</style>
