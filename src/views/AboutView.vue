<template>
  <div class="min-w-[320px]">
    <!-- HERO -->
    <section class="hero">
      <div class="relative mx-auto mt-35 flex w-full justify-center">
        <video
          class="h-[428px] md:h-[575px] lg:h-full lg:w-[100vw]"
          :autoplay="true"
          :muted="true"
          :loop="true"
          :playsinline="true"
          src="/public/en/about/hero.mp4"
          alt=""
        />
        <div
          class="absolute left-0 top-0 right-0 bottom-0 flex flex-row items-center justify-center bg-[#22232780]/50"
        >
          <p
            class="text-center text-28 font-bold text-white md:text-40 lg:text-60"
          >
            Advancing Real Estate&nbsp;<br
              class="md:hidden lg:hidden"
            />Development<br />with the Power of AI.
          </p>
        </div>
      </div>
    </section>

    <!-- LEADERSHIP -->
    <section
      class="leadership flex flex-col items-center pt-174 md:pt-178 lg:pt-200"
    >
      <span class="mb-30 text-26 md:mb-46 md:text-40 lg:mb-46 lg:text-40"
        >Leadership</span
      >
      <div class="flex flex-col items-center lg:flex-row">
        <div
          v-for="(leader, leaderIdx) in LEADERSHIP_CONTENT"
          class="group relative isolate flex h-[370px] w-[320px] flex-col overflow-hidden rounded-6 shadow-200 not-last:mb-10 md:h-[416px] md:w-[360px] md:rounded-10 lg:!mb-0 lg:h-[416px] lg:w-[360px] lg:rounded-10 lg:not-last:mr-10"
          :class="leader.key"
        >
          <div
            class="image-wrapper h-[230px] min-h-[230px] border-b-gray-100 md:h-[260px] md:min-h-[260px] lg:h-[260px] lg:min-h-[260px]"
          />
          <div
            class="flex h-full w-full flex-col px-30 py-24 md:px-40 md:py-34 lg:py-34 lg:px-40"
          >
            <span class="text-18-semibold mb-6 md:text-20 lg:text-20">{{
              leader.name
            }}</span>
            <span class="text-16-regular">{{ leader.position }}</span>
          </div>
          <div
            class="absolute top-0 left-0 right-0 bottom-0 hidden select-none flex-row items-center justify-center bg-white/90 group-hover:flex"
          >
            <p
              class="text-14-regular w-[266px] text-gray-700 md:w-[300px] md:text-16 lg:w-[300px] lg:text-16"
            >
              {{ leader.description }}
            </p>
          </div>
        </div>
      </div>

      <p
        class="text-20-regular mt-30 w-[280px] text-center md:mt-46 md:w-[620px] md:text-20 lg:mt-46 lg:w-[720px] lg:text-20"
      >
        We are a team of architects, AI developers, designers, computational
        designers and software engineers who are passionate for innovating the
        real estate development, architecture, engineering and construction
        industries.
      </p>
    </section>

    <!-- OUR STORY -->
    <section class="our-story flex flex-col items-center pt-146 lg:pt-140">
      <span class="mb-8 text-26 md:text-40 lg:text-40">Our Story</span>
      <!-- <p
        class="text-16-regular mb-30 w-[240px] text-center text-gray-550 md:mb-36 md:w-[610px] md:text-20 lg:mb-36 lg:w-[700px] lg:text-20"
      >
        Founded by an architect, a mathematician, and a software engineer.
      </p> -->
      <p
        class="text-16-regular w-[280px] text-center md:w-[620px] md:text-20 lg:w-[740px] lg:text-20"
      >
        Benji worked as an architect in Los Angeles for six years. During this
        time, he became interested in automating the early design process for
        feasibility studies in real estate development to accelerate workflows
        and make them more efficient.<br /><br />
        With the assistance of his long-time friend, Jamie Jeong, PhD in
        mathematics from Caltech, they discovered that AI could not only help
        automate the design process but also maximize development returns in the
        pre-development phase. This was demonstrated through a student housing
        project at the University of Southern California, which became the
        foundation for their future startup.<br /><br />
        In 2020, Benji and Jamie decided to turn this passion project into a
        company. Since then, they have successfully raised multiple rounds of
        investment and are building web-based building design automation
        software for real estate development.
      </p>
    </section>

    <!-- FUNDED BY -->
    <section class="funded-by flex flex-col items-center pt-146 lg:pt-140">
      <span class="mb-8 text-26 md:text-40 lg:text-40">Funded By</span>
      <p
        class="text-16-regular mb-30 w-[240px] text-center text-gray-550 md:mb-46 md:w-[600px] md:text-20 lg:mb-46 lg:w-[700px] lg:text-20"
      >
        Real estate developers, investors, and venture capital.
      </p>
      <div
        class="isolate flex h-[420px] w-[320px] flex-row items-center justify-center overflow-hidden rounded-10 shadow-200 md:h-[330px] md:w-[720px] lg:h-[320px] lg:w-[1000px]"
      >
        <div
          class="image-wrapper h-[420px] w-[320px] md:h-[300px] md:w-[720px] lg:h-[320px] lg:w-[1000px]"
        />
      </div>
    </section>

    <!-- FEATURED PARTNERS -->
    <section
      class="featured-partners flex flex-col items-center pt-146 lg:pt-140"
    >
      <span class="mb-8 text-26 md:text-40 lg:text-40">Featured Partners</span>
      <p
        class="text-16-regular mb-30 w-[240px] text-center text-gray-550 md:mb-46 md:w-[600px] md:text-20 lg:mb-46 lg:w-[700px] lg:text-20"
      >
        Top developers, brokerages and investment firms in the world.
      </p>
      <div
        class="isolate flex h-[420px] w-[320px] flex-row items-center justify-center overflow-hidden rounded-10 shadow-200 md:h-[330px] md:w-[720px] lg:h-[320px] lg:w-[1000px]"
      >
        <div
          class="image-wrapper h-[420px] w-[320px] md:h-[300px] md:w-[720px] lg:h-[320px] lg:w-[1000px]"
        />
      </div>
    </section>

    <!-- ZENERATE IN THE NEWS -->
    <section
      class="zenerate-in-the-news flex flex-col items-center pt-146 pb-175 md:pb-178 lg:pt-140 lg:pb-200"
    >
      <span class="mb-8 text-26 md:text-40 lg:text-40"
        >Zenerate in the News</span
      >
      <p
        class="text-16-regular mb-30 w-[280px] text-center text-gray-550 md:mb-46 md:w-[600px] md:text-20 lg:mb-46 lg:w-[700px] lg:text-20"
      >
        Learn more about our latest projects and partnerships.
      </p>
      <div class="flex flex-col items-center lg:flex-row">
        <a
          v-for="news in NEWS_CONTENT"
          :href="news.url"
          class="isolate flex h-[500px] w-[320px] flex-col overflow-hidden rounded-8 shadow-200 hover:bg-gray-50 not-last:mb-20 md:h-[560px] md:w-[460px] md:not-last:mb-30 lg:!mb-0 lg:h-[560px] lg:w-[460px] lg:not-last:mr-30"
          :class="news.key"
        >
          <div
            class="image-wrapper h-[210px] min-h-[210px] border-b-gray-100 md:h-[260px] md:min-h-[260px] lg:h-[260px] lg:min-h-[260px]"
          />
          <div
            class="h-full w-full px-30 py-22 md:px-44 md:py-34 lg:py-34 lg:px-44"
          >
            <span
              class="text-14-semibold mb-6 text-core-500 md:text-16 lg:text-16"
              >{{ news.source }}</span
            >
            <span class="text-16-semibold mb-12 md:text-20 lg:text-20">{{
              news.title
            }}</span>
            <span class="text-14 text-gray-600 md:text-16 lg:text-16">{{
              news.description
            }}</span>
          </div>
        </a>
      </div>
    </section>

    <section class="blue-wave-wrapper relative h-[364px] bg-black lg:h-[328px]">
      <div
        class="absolute top-0 right-0 bottom-0 left-0 flex flex-col items-center bg-black/50 px-20 pt-88 md:pt-[114px] lg:pt-[100px]"
      >
        <span
          class="mb-30 w-[320px] text-center text-22 text-white md:mb-44 md:w-[680px] md:text-26 lg:w-[720px] lg:text-28"
          >Ready to step into the future of real estate development?</span
        >
        <div class="flex flex-col items-center md:flex-row lg:flex-row">
          <button
            class="demo-button-gtm text-16-semibold mx-auto mb-6 h-[48px] w-[250px] rounded-5 bg-primary text-center leading-[48px] !text-white duration-300 hover:!text-core-200 md:mr-10 md:mb-0 md:h-[56px] md:w-[236px] md:text-20 md:leading-[56px] lg:mb-0 lg:mr-10 lg:h-[56px] lg:w-[236px] lg:text-20 lg:leading-[56px]"
            @click="openCalendlyPopup"
          >
            Request a Demo
          </button>
          <router-link
            :to="{ name: 'contact', query: getCurrentUtmQuery(router) }"
            class="text-16-semibold mx-auto h-[48px] w-[250px] rounded-5 bg-white text-center leading-[48px] duration-300 hover:!bg-gray-200 md:h-[56px] md:w-[236px] md:text-20 md:leading-[56px] lg:h-[56px] lg:w-[236px] lg:text-20 lg:leading-[56px]"
            >Contact Us
          </router-link>
        </div>
      </div>
    </section>

    <section class="section section-footer fp-auto-height pt-52 md:pt-0">
      <Footer />
    </section>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useHead } from '@vueuse/head'
import Emitter from '/Libraries/bus'
import { getCurrentUtmQuery } from '/Utils/index'
import { MENU_EVENT } from '/Constants/eventConstant'
import Footer from '/Components/Footer.vue'

const router = useRouter()

// LEADERSHIP
const LEADERSHIP_CONTENT = [
  {
    key: 'benji',
    name: 'Benji Shin',
    position: 'CEO · Co-Founder · Architect',
    description:
      "His enthusiasm is centered around harnessing the power of AI to simplify, expedite, and enhance the profitability of real estate development and architectural design. Following three years of dedicated research, he, along with two partners, co-founded Zenerate. His pre-Zenerate experience spans a range of high-rise residential and mixed-use developments in Los Angeles. He holds a Master's degree in Architecture from Harvard.",
  },
  {
    key: 'jamie',
    name: 'Jamie Jeong',
    position: 'CTO · Co-Founder · AI Developer',
    description:
      'She is a mathematician driven by the desire to create technology that meaningfully contributes to solving challenges closely tied to the real world. Fueled by a passion for addressing housing-related problems, she co-founded the company. Prior to founding Zenerate, she earned a Ph.D. in pure mathematics from Caltech and worked at Samsung F&M, specializing in the planning, development, and operation of AI products and services.',
  },
  // {
  //   key: 'hak',
  //   name: 'Hak Lee',
  //   position: 'Co-Founder · Software Engineer',
  //   description:
  //     'Based on expertise in both architecture and programming, he is leading the way in defining and solving design automation problems in the field of architecture with co-founders at Zenerate. After creating Rhino3d plugins for automated residential design, and working as a game client maintainer at Ngine studios, he is continuing his journey as a software engineer at Zenerate. He is majoring in architecture and media art, and also minoring computer science and engineering at Seoul National University.',
  // },
]

// ZENERATE IN THE NEWS
const NEWS_CONTENT = [
  {
    key: 'news_sola',
    source: 'Yahoo Finance',
    title:
      'Partnering with SoLa Impact to Automate Affordable/Modular Housing Developments',
    description:
      "Learn about how our collaboration helps dramatically accelerate the speed of planning, configuration, design, and the permit approval process for a wide range of SoLa's affordable housing projects.",
    url:
      'https://finance.yahoo.com/news/zenerate-innovative-ai-startup-partners-160000114.html?fr=sycsrp_catchall',
  },
  {
    key: 'news_google',
    source: 'Forbes',
    title: "Zenerate Selected for Google's Asia-Pacific Women Founders Fund",
    description:
      'Learn more about why Google for Startups chose Jamie Jeong, CTO of Zenerate, as an awardee for their first batch of AI startups. Zenerate will receive $100,000 in financing without giving up equity, as well as mentorship and networking assistance from Google.',
    url:
      'https://www.forbes.com/sites/johnkang/2023/10/10/googles-asia-pacific-women-founders-fund-picks-first-batch-of-ai-startups/?sh=332fb0bf5a61',
  },
]

const openCalendlyPopup = () => {
  Emitter.emit(MENU_EVENT.TOGGLE_CALENDLY_POPUP, {
    flag: true,
    trigger: 'aboutus',
  })
}

useHead({
  title: `About Zenerate | Learn about how we're advancing RE development with the Power of AI`,
  htmlAttrs: { lang: 'en' },
  link: [{ rel: 'canonical', href: 'https://www.zenerate.ai/about' }],
  meta: [
    {
      name: `description`,
      content: `Zenerate provides AI-powered feasibility solutions for real estate development in order to maximize returns while saving time.`,
    },
    {
      hid: 'twitter:title',
      property: 'twitter:title',
      content: `About Zenerate | Learn about how we're advancing RE development with the Power of AI`,
    },
    {
      hid: 'twitter:description',
      property: 'twitter:description',
      content: `Zenerate provides AI-powered feasibility solutions for real estate development in order to maximize returns while saving time.`,
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
      content: 'https://www.zenerate.ai/about',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: `About Zenerate | Learn about how we're advancing RE development with the Power of AI`,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: `Zenerate provides AI-powered feasibility solutions for real estate development in order to maximize returns while saving time.`,
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
.leadership {
  .benji {
    .image-wrapper {
      background-image: url('/public/en/about/benji_desktop_tablet.png');
      background-size: cover;
      @include en-tablet {
        background-image: url('/public/en/about/benji_desktop_tablet.png');
      }
      @include en-mobile {
        background-image: url('/public/en/about/benji_mobile.png');
      }
    }
  }

  .jamie {
    .image-wrapper {
      background-image: url('/public/en/about/jamie_desktop_tablet.png');
      background-size: cover;
      @include en-tablet {
        background-image: url('/public/en/about/jamie_desktop_tablet.png');
      }
      @include en-mobile {
        background-image: url('/public/en/about/jamie_mobile.png');
      }
    }
  }

  .hak {
    .image-wrapper {
      background-image: url('/public/en/about/hak_desktop_tablet.png');
      background-size: cover;
      @include en-tablet {
        background-image: url('/public/en/about/hak_desktop_tablet.png');
      }
      @include en-mobile {
        background-image: url('/public/en/about/hak_mobile.png');
      }
    }
  }
}

.funded-by {
  .image-wrapper {
    background-image: url('/public/en/about/funded_by_desktop.png');
    background-size: cover;
    @include en-tablet {
      background-image: url('/public/en/about/funded_by_tablet.png');
    }
    @include en-mobile {
      background-image: url('/public/en/about/funded_by_mobile.png');
    }
  }
}

.featured-partners {
  .image-wrapper {
    background-image: url('/public/en/about/featured_partners_desktop.png');
    background-size: cover;
    @include en-tablet {
      background-image: url('/public/en/about/featured_partners_tablet.png');
    }
    @include en-mobile {
      background-image: url('/public/en/about/featured_partners_mobile.png');
    }
  }
}

.zenerate-in-the-news {
  .news_sola {
    .image-wrapper {
      background-image: url('/public/en/about/news_sola_desktop_tablet.png');
      background-size: cover;
      @include en-tablet {
        background-image: url('/public/en/about/news_sola_desktop_tablet.png');
      }
      @include en-mobile {
        background-image: url('/public/en/about/news_sola_mobile.png');
      }
    }
  }

  .news_google {
    .image-wrapper {
      background-image: url('/public/en/about/news_google_desktop_tablet.png');
      background-size: cover;
      @include en-tablet {
        background-image: url('/public/en/about/news_google_desktop_tablet.png');
      }
      @include en-mobile {
        background-image: url('/public/en/about/news_google_mobile.png');
      }
    }
  }
}

.blue-wave-wrapper {
  background-image: url('/public/en/img/blue_wave.png');
  background-repeat: no-repeat;
  background-position: bottom center;
}
</style>
