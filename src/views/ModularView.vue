<template>
  <div class="relative mx-auto min-w-[320px]">
    <!-- HERO -->
    <section class="mx-auto h-[692px] max-w-[1100px] md:h-[988px] lg:h-[712px]">
      <div
        class="z-[1] mx-auto mt-[152px] w-[320px] min-w-[320px] md:mt-[170px] md:w-[644px] lg:absolute lg:mt-[200px] lg:ml-100 lg:w-[440px]"
      >
        <div class="flex flex-col items-center lg:items-start">
          <img
            :src="`/en/modular/modular_logo.svg`"
            alt=""
            class="mb-14 w-[296px] md:mb-10 md:w-[360px] lg:mb-16 lg:w-[360px]"
          />

          <span
            class="mb-24 w-[320px] text-center text-30 md:mb-20 md:w-[600px] md:text-44 lg:mb-14 lg:w-[600px] lg:text-left lg:text-42 lg:font-light"
          >
            <span class="inline font-medium">AI-powered, Real-time,</span>
            <span>Feasibility Studies<br />for Modular Housing</span>
          </span>

          <p
            class="mb-30 w-[300px] text-center text-16 text-gray-700 md:mb-40 md:w-[500px] md:text-18 lg:mb-30 lg:mb-36 lg:w-full lg:w-[400px] lg:text-left lg:text-18 lg:leading-27"
          >
            Instantly gain optimized<br
              class="md:hidden lg:hidden"
            />&nbsp;design options with financial analysis using your own
            modules.
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
        class="z-[-1] mx-auto h-[457px] w-full max-w-[1200px] md:h-[602px] lg:!h-[648px] lg:w-fit lg:pt-140 lg:pl-[290px]"
      >
        <video
          class="h-full w-full"
          :autoplay="true"
          :muted="true"
          :loop="true"
          :playsinline="true"
          src="/en/modular/hero.mp4"
          alt=""
        />
      </div>
    </section>

    <!-- PRODUCT DESCRIPTION -->
    <section
      class="product-description flex flex-col items-center pt-80 md:pt-30 lg:pt-70"
    >
      <div
        v-for="(data, idx) in PRODUCT_DESCRIPTION"
        class="card mb-20 shadow-200 md:mb-23 md:items-center lg:mb-30 lg:items-center"
        :class="`card${idx + 1}`"
      >
        <video
          v-if="data.imgType === 'video'"
          class="z-[0] h-fit w-full md:h-full md:w-fit lg:h-full lg:w-fit"
          :autoplay="true"
          :muted="true"
          :loop="true"
          :playsinline="true"
          :src="`/en/modular/${data.imgUrl}`"
          alt=""
        />

        <div
          v-else
          class="z-[0] flex h-[292px] w-[320px] flex-row items-center justify-center overflow-hidden md:h-[352px] md:w-[420px] lg:h-[450px] lg:w-[542px]"
        >
          <img
            :src="`/en/modular/${data.imgUrls.desktop}`"
            width="455"
            class="ml-auto mt-40 hidden lg:block"
          />
          <img
            :src="`/en/modular/${data.imgUrls.tablet}`"
            width="358"
            class="ml-auto mt-30 hidden md:block lg:hidden"
          />
          <img
            :src="`/en/modular/${data.imgUrls.mobile}`"
            width="296"
            class="ml-auto mt-20 md:hidden lg:hidden"
          />
        </div>

        <div
          class="content-area inner-shadow z-[2] flex flex-col justify-center"
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
    <section class="how-it-works pt-80 md:pt-110 lg:pt-200">
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
          <span class="text-18-medium mb-36 text-center">{{ data.title }}</span>
        </template>
      </Carousel>
      <div class="mx-auto flex w-fit flex-row items-center">
        <div
          class="mr-20 flex hidden w-[378px] flex-col md:block md:w-[330px] lg:block"
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
              class="text-20 md:text-18"
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
              class="ml-14"
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
            :src="`/en/modular/how_it_works1_small.mp4`"
            alt=""
          />
          <video
            class="how-it-works0 hidden h-full w-full lg:block"
            :class="howItWorksIdx !== 0 && '!hidden'"
            :autoplay="true"
            :muted="true"
            :loop="true"
            :playsinline="true"
            :src="`/en/modular/how_it_works1_big.mp4`"
            alt=""
          />
          <video
            class="how-it-works1 h-full w-full lg:hidden"
            :class="howItWorksIdx !== 1 && '!hidden'"
            :autoplay="true"
            :muted="true"
            :loop="true"
            :playsinline="true"
            :src="`/en/modular/how_it_works2_small.mp4`"
            alt=""
          />
          <video
            class="how-it-works1 hidden h-full w-full lg:block"
            :class="howItWorksIdx !== 1 && '!hidden'"
            :autoplay="true"
            :muted="true"
            :loop="true"
            :playsinline="true"
            :src="`/en/modular/how_it_works2_big.mp4`"
            alt=""
          />
          <video
            class="how-it-works2 h-full w-full lg:hidden"
            :class="howItWorksIdx !== 2 && '!hidden'"
            :autoplay="true"
            :muted="true"
            :loop="true"
            :playsinline="true"
            :src="`/en/modular/how_it_works3_small.mp4`"
            alt=""
          />
          <video
            class="how-it-works2 hidden h-full w-full lg:block"
            :class="howItWorksIdx !== 2 && '!hidden'"
            :autoplay="true"
            :muted="true"
            :loop="true"
            :playsinline="true"
            :src="`/en/modular/how_it_works3_big.mp4`"
            alt=""
          />
          <video
            class="how-it-works3 h-full w-full lg:hidden"
            :class="howItWorksIdx !== 3 && '!hidden'"
            :autoplay="true"
            :muted="true"
            :loop="true"
            :playsinline="true"
            :src="`/en/modular/how_it_works4_small.mp4`"
            alt=""
          />
          <video
            class="how-it-works3 hidden h-full w-full lg:block"
            :class="howItWorksIdx !== 3 && '!hidden'"
            :autoplay="true"
            :muted="true"
            :loop="true"
            :playsinline="true"
            :src="`/en/modular/how_it_works4_big.mp4`"
            alt=""
          />
          <video
            class="how-it-works4 h-full w-full lg:hidden"
            :class="howItWorksIdx !== 4 && '!hidden'"
            :autoplay="true"
            :muted="true"
            :loop="true"
            :playsinline="true"
            :src="`/en/modular/how_it_works5_small.mp4`"
            alt=""
          />
          <video
            class="how-it-works4 hidden h-full w-full lg:block"
            :class="howItWorksIdx !== 4 && '!hidden'"
            :autoplay="true"
            :muted="true"
            :loop="true"
            :playsinline="true"
            :src="`/en/modular/how_it_works5_big.mp4`"
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
        Made for everyone involved in modular housing development
      </div>
      <div
        v-for="(data, dataIdx) in WHO_USES_IT"
        class="card mx-auto mb-10 flex h-fit flex-col px-26 pt-24 pb-32 shadow-200 md:mb-10 md:flex-row md:items-center md:px-24 md:py-20 md:pt-16 md:pb-20 lg:mb-12 lg:flex-row lg:items-center lg:pl-30 lg:pr-38 lg:pt-26 lg:pb-30"
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

    <!-- CREATE AND USE YOUR OWN MODULES -->
    <section class="create-and-use-your-own-modules pt-80 md:pt-130 lg:pt-190">
      <div
        class="mx-auto mb-6 w-[260px] text-center text-26 md:w-full lg:w-full"
      >
        Create and Use Your Own Modules
      </div>
      <div
        class="mx-auto mb-36 w-[300px] text-center text-18 text-gray-550 md:mb-50 md:w-[420px] lg:mb-50 lg:w-full"
      >
        Implement your very own modular units and core elements to their
        specific dimensions
      </div>
      <Carousel
        :key="moduleIdx"
        :initial-slide="moduleIdx"
        :slideCount="CREATE_AND_USE_YOUR_OWN_MODULES.length"
        :mouseWheelControl="false"
        @on-slide-change="(idx) => setModuleIdx(idx)"
        class="create-and-use-your-own-modules-carousel mb-34 h-96 w-[320px] select-none md:hidden lg:hidden"
      >
        <template
          v-for="(data, idx) in CREATE_AND_USE_YOUR_OWN_MODULES"
          #[`slide${idx}`]
        >
          <span class="text-18-medium mb-36 min-w-fit">{{ data.title }}</span>
        </template>
      </Carousel>
      <div class="mx-auto flex w-fit flex-row items-center">
        <div
          class="isolate h-[320px] w-[320px] overflow-hidden rounded-8 bg-slate-200 shadow-200 md:w-[380px] lg:w-[520px]"
        >
          <video
            class="modular0 h-full w-full md:hidden lg:hidden"
            :class="moduleIdx !== 0 && '!hidden'"
            :autoplay="true"
            :muted="true"
            :loop="true"
            :playsinline="true"
            :src="`/en/modular/module1_mobile.mp4`"
            alt=""
          />
          <video
            class="modular0 hidden h-full w-full md:block lg:hidden"
            :class="moduleIdx !== 0 && '!hidden'"
            :autoplay="true"
            :muted="true"
            :loop="true"
            :playsinline="true"
            :src="`/en/modular/module1_tablet.mp4`"
            alt=""
          />
          <video
            class="modular0 hidden h-full w-full lg:block"
            :class="moduleIdx !== 0 && '!hidden'"
            :autoplay="true"
            :muted="true"
            :loop="true"
            :playsinline="true"
            :src="`/en/modular/module1_desktop.mp4`"
            alt=""
          />
          <template v-if="moduleIdx !== 0">
            <img
              class="h-full w-full md:hidden lg:hidden"
              :src="`/en/modular/module${moduleIdx + 1}_mobile.png`"
              alt=""
            />
            <img
              class="hidden h-full w-full md:block lg:hidden"
              :src="`/en/modular/module${moduleIdx + 1}_tablet.png`"
              alt=""
            />
            <img
              class="hidden h-full w-full md:hidden lg:!block"
              :src="`/en/modular/module${moduleIdx + 1}_desktop.png`"
              alt=""
            />
          </template>
        </div>
        <div
          class="ml-50 flex hidden w-[360px] flex-col md:ml-20 md:block md:w-[300px] lg:block"
        >
          <div
            v-for="(data, idx) of CREATE_AND_USE_YOUR_OWN_MODULES"
            class="flex h-72 w-full cursor-pointer flex-row items-center rounded-10 pl-30 not-last:mb-10 md:pl-20"
            :class="
              moduleIdx === idx ? 'bg-core-10' : 'bg-white hover:bg-coolgray-50'
            "
            @click="() => setModuleIdx(idx)"
          >
            <IconBase
              :icon-name="(data.iconName as TIconName)"
              :width="24"
              :height="24"
              :icon-color="moduleIdx === idx ? '#4D49F4' : '#6A6D73'"
              class="mr-10"
            />
            <span
              class="text-20 md:text-18"
              :class="
                moduleIdx === idx
                  ? 'font-medium text-black'
                  : 'font-regular text-gray-600'
              "
              >{{ data.title }}</span
            >
          </div>
        </div>
      </div>
    </section>

    <!-- CUSTOMIZE -->
    <section class="customize pt-80 md:pt-110 lg:pt-200">
      <div
        class="mx-auto mb-6 w-[320px] text-center text-26 md:w-full lg:w-full"
      >
        Customize Floor Plans and Add Other Uses
      </div>
      <div
        class="mx-auto mb-36 w-[300px] text-center text-18 text-gray-550 md:mb-36 md:w-full lg:mb-60 lg:w-full"
      >
        Edit residential or parking layouts and change use of any space
      </div>
      <Carousel
        :key="customizeIdx"
        :initial-slide="customizeIdx"
        :slideCount="CUSTOMIZE.length"
        :mouseWheelControl="false"
        @on-slide-change="(idx) => setCustomizeIdx(idx)"
        class="customize-carousel mb-34 h-96 w-[320px] select-none md:hidden lg:hidden"
      >
        <template v-for="(data, idx) in CUSTOMIZE" #[`slide${idx}`]>
          <span class="text-18-medium mb-36 min-w-fit text-center">{{
            data.title
          }}</span>
        </template>
      </Carousel>
      <div class="mx-auto flex w-fit flex-row items-center">
        <div
          class="mr-20 flex hidden w-[378px] flex-col md:block md:w-[330px] lg:block"
        >
          <div
            v-for="(data, idx) of CUSTOMIZE"
            class="flex h-72 w-full cursor-pointer flex-row items-center rounded-10 pl-30 md:pl-20"
            :class="
              customizeIdx === idx
                ? 'bg-core-10'
                : 'bg-white  hover:bg-coolgray-50'
            "
            @click="() => setCustomizeIdx(idx)"
          >
            <div
              class="text-18-semibold mr-14 flex h-28 max-h-28 min-h-28 w-28 min-w-28 max-w-28 items-center justify-center rounded-14 text-white md:mr-10 md:h-26 md:max-h-26 md:min-h-26 md:w-26 md:min-w-26 md:max-w-26 md:text-16"
              :class="customizeIdx === idx ? 'bg-primary' : 'bg-gray-400'"
            >
              {{ idx + 1 }}
            </div>
            <span
              class="text-20 md:text-18"
              :class="
                customizeIdx === idx
                  ? 'font-medium text-black'
                  : 'font-regular text-gray-600'
              "
              >{{ data.title }}</span
            >
            <IconBase
              v-if="customizeIdx === idx"
              icon-name="arrow-right"
              :width="24"
              :height="24"
              iconColor="#7D8AFF"
              class="ml-14"
            />
          </div>
        </div>

        <div
          class="isolate h-[320px] w-[320px] overflow-hidden rounded-8 bg-slate-200 shadow-200 md:h-[360px] md:w-[360px] lg:h-[360px] lg:w-[520px]"
        >
          <video
            class="customize0 h-full w-full lg:hidden"
            :class="customizeIdx !== 0 && '!hidden'"
            :autoplay="true"
            :muted="true"
            :loop="true"
            :playsinline="true"
            :src="`/en/modular/customize1_small.mp4`"
            alt=""
          />
          <video
            class="customize0 hidden h-full w-full lg:block"
            :class="customizeIdx !== 0 && '!hidden'"
            :autoplay="true"
            :muted="true"
            :loop="true"
            :playsinline="true"
            :src="`/en/modular/customize1_big.mp4`"
            alt=""
          />
          <video
            class="customize1 h-full w-full lg:hidden"
            :class="customizeIdx !== 1 && '!hidden'"
            :autoplay="true"
            :muted="true"
            :loop="true"
            :playsinline="true"
            :src="`/en/modular/customize2_small.mp4`"
            alt=""
          />
          <video
            class="customize1 hidden h-full w-full lg:block"
            :class="customizeIdx !== 1 && '!hidden'"
            :autoplay="true"
            :muted="true"
            :loop="true"
            :playsinline="true"
            :src="`/en/modular/customize2_big.mp4`"
            alt=""
          />
          <video
            class="customize2 h-full w-full lg:hidden"
            :class="customizeIdx !== 2 && '!hidden'"
            :autoplay="true"
            :muted="true"
            :loop="true"
            :playsinline="true"
            :src="`/en/modular/customize3_small.mp4`"
            alt=""
          />
          <video
            class="customize2 hidden h-full w-full lg:block"
            :class="customizeIdx !== 2 && '!hidden'"
            :autoplay="true"
            :muted="true"
            :loop="true"
            :playsinline="true"
            :src="`/en/modular/customize3_big.mp4`"
            alt=""
          />
          <video
            class="customize3 h-full w-full lg:hidden"
            :class="customizeIdx !== 3 && '!hidden'"
            :autoplay="true"
            :muted="true"
            :loop="true"
            :playsinline="true"
            :src="`/en/modular/customize4_small.mp4`"
            alt=""
          />
          <video
            class="customize3 hidden h-full w-full lg:block"
            :class="customizeIdx !== 3 && '!hidden'"
            :autoplay="true"
            :muted="true"
            :loop="true"
            :playsinline="true"
            :src="`/en/modular/customize4_big.mp4`"
            alt=""
          />
          <video
            class="customize4 h-full w-full lg:hidden"
            :class="customizeIdx !== 4 && '!hidden'"
            :autoplay="true"
            :muted="true"
            :loop="true"
            :playsinline="true"
            :src="`/en/modular/customize5_small.mp4`"
            alt=""
          />
          <video
            class="customize4 hidden h-full w-full lg:block"
            :class="customizeIdx !== 4 && '!hidden'"
            :autoplay="true"
            :muted="true"
            :loop="true"
            :playsinline="true"
            :src="`/en/modular/customize5_big.mp4`"
            alt=""
          />
        </div>
      </div>
    </section>

    <!-- NEED CUSTOMIZATION? -->
    <section
      class="need-customization pt-80 pb-136 md:pt-130 md:pb-136 lg:pt-200 lg:pb-200"
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
          class="mb-12 flex h-[210px] w-[354px] flex-col rounded-10 px-30 py-20 shadow-200 md:h-[135px] md:w-[580px] md:flex-row md:py-24 md:px-20 md:not-last:mb-10 lg:h-[252px] lg:not-last:mr-12"
        >
          <img
            :src="`/en/modular/${data.iconName}.png`"
            width="52"
            height="52"
            class="md:mr-20 lg:mb-6"
            alt=""
          />
          <div class="flex flex-col md:w-[426px]">
            <span class="text-20-medium mb-8">{{ data.title }}</span>
            <span class="text-16 text-gray-600 md:text-18 lg:text-18">{{
              data.description
            }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- DEMO FORM -->
    <!-- <section
      ref="modularLink"
      class="beta-tester relative pt-80 pb-136 md:pt-130 md:pb-136 lg:pt-200 lg:pb-200"
    >
      <div class="absolute top-[-90px] h-0 w-full" ref="betaTester" />
      <FormWrapper
        sheet-name="Modular"
        id="modular-form-gtm"
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
            ref="modularFormInput"
          >
            <div class="absolute top-[-250px] h-0 w-full" />
            Request Access to
            <span class="font-semibold text-primary lg:font-medium"
              >Zenerate Modular!</span
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

    <!-- WAVE BANNER -->
    <!-- <section
      class="blue-wave-wrapper relative h-[406px] bg-black md:h-[363px] lg:h-[326px]"
    >
      <div
        class="absolute top-0 right-0 bottom-0 left-0 flex flex-col items-center bg-black/50 px-20 pt-76 md:pt-[85px] lg:pt-[67px]"
      >
        <span
          class="mb-18 w-[260px] text-center text-22 text-white md:mb-12 md:w-full md:text-26 lg:mb-12 lg:w-full lg:text-28"
          >Interested in Non-Modular or Stick-Build Solutions?</span
        >
        <span
          class="mb-30 w-[300px] text-center text-16 text-white md:mb-40 md:w-full md:text-18 lg:mb-32 lg:w-full lg:text-20"
          >Join the waitlist now for early access
          <br class="md:hidden lg:hidden" />and exclusive discounts on Zenerate
          App, <br class="lg:hidden" />launching in June 2024.</span
        >

        <div
          class="flex h-58 w-[330px] flex-row items-center justify-center rounded-6 border-gray-100 bg-white p-4 shadow-200 md:w-[380px] lg:w-[380px]"
        >
          <template v-if="bannerEmail.isSent">
            <div
              class="flex h-24 w-24 items-center justify-center rounded-12 bg-core-20"
            >
              <IconBase
                icon-name="checkmark-bold"
                icon-color="#5C6DFF"
                :width="16"
                :height="16"
                class="h-16 w-16"
              />
            </div>
            <span class="text-16-medium ml-10">Thank you for Signing Up!</span>
          </template>
          <template v-else>
            <div class="relative">
              <input
                id="modular-waitlist-input-gtm"
                ref="bannerEmailInput"
                type="text"
                inputmode="email"
                :spellcheck="false"
                placeholder="Email Address"
                v-model="bannerEmail.inputValue"
                class="h-50 w-[188px] border-none pl-12 md:w-[211px] lg:w-[211px]"
                @focus="bannerEmail.showErrorMsg = false"
              />

              <span
                v-if="bannerEmail.showErrorMsg"
                @click="hideBannerEmailErrorMsg"
                class="absolute top-0 left-0 flex h-50 w-[188px] items-center bg-white px-12 py-4 text-12 text-red-500 md:w-[211px] md:text-14 lg:w-[211px] lg:text-14"
                >Please enter a valid email.</span
              >
            </div>
            <button
              id="modular-waitlist-submit-button-gtm"
              class="text-14-medium ml-4 h-50 w-[130px] min-w-[130px] rounded-4 bg-primary text-white hover:bg-core-700 md:w-[157px] md:min-w-[157px] lg:w-[157px] lg:min-w-[157px]"
              @click="sendBannerEmail"
            >
              Join Waitlist
            </button>
          </template>
        </div>
      </div>
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
    trigger: 'modularlandingpage',
  })
}

const betaTester = ref(null)
const moveToBetaTesterElement = () => {
  betaTester.value.scrollIntoView({ behavior: 'smooth' })
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
const sendBannerEmail = async () => {
  const isValid =
    Validation.email(bannerEmail.value.inputValue) &&
    bannerEmail.value.inputValue.trim() !== ''
  if (isValid) {
    try {
      bannerEmail.value.isLoading = true
      await ApiService.XSLX_TEST('AppWaitlist', {
        email: bannerEmail.value.inputValue,
      })
      // await ApiService.ACTIVE_CAMPAIGN({
      //   email: bannerEmail.value.inputValue,
      //   tag: 'modular',
      // })
      bannerEmail.value.isLoading = false
      bannerEmail.value.isSent = true
      bannerEmail.value.inputValue = ''
    } catch (e) {
      console.error(e)
    }
  } else {
    showBannerEmailErrorMsg()
  }
}

// TODO: thumbnail
useHead({
  title: `About the Zenerate Modular | AI-powered, Real-time, Feasibility Studies
for Modular Housing`,
  htmlAttrs: { lang: 'en' },
  link: [{ rel: 'canonical', href: 'https://www.zenerate.ai/modular' }],
  meta: [
    {
      name: `description`,
      content: `Instantly gain optimized
 design options with financial analysis using your own modules.`,
    },
    {
      hid: 'twitter:title',
      property: 'twitter:title',
      content: `About the Zenerate Modular | AI-powered, Real-time, Feasibility Studies
for Modular Housing`,
    },
    {
      hid: 'twitter:description',
      property: 'twitter:description',
      content: `Instantly gain optimized
 design options with financial analysis using your own modules.`,
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
      content: 'https://www.zenerate.ai/modular',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: `About the Zenerate Modular | AI-powered, Real-time, Feasibility Studies
for Modular Housing`,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: `Instantly gain optimized
 design options with financial analysis using your own modules.`,
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
    imgUrl: 'product_description1.mp4',
    title: 'Instantly Generate and Compare Design Scenarios with:',
    content: [
      'Maximized FAR and Density',
      'Various unit mix options',
      'Diverse building layouts',
      'Different parking solutions: on-grade, above/underground',
      'Various construction types',
    ],
    contentOnRight: false,
  },
  {
    imgType: 'video',
    imgUrl: 'product_description2_new.mp4',
    title: 'Enter Design Inputs and Edit Solutions:',
    content: [
      'Select massing type(s) for your custom or automated design',
      'Add standalone buildings for parking, clubhouse, amenities, or similar',
      'Add driveway to generate surface parking in seconds',
      'Relocate or convert residential units, cores, amenities, or similar spaces',
      'Move entrances and ramps on the parking layout',
    ],
    contentOnRight: true,
  },
  {
    imgType: 'video',
    imgUrl: 'product_description2.mp4',
    title: 'View and Download Floor Plans that Include:',
    content: [
      'All levels',
      'Residential floor plans composed of modular units',
      'Ground floor plan with a lobby, electrical room, laundry room, etc.',
      'Parking layout with stalls, ramps, stairs and cores',
      'Layouts that you can manually adjust',
      'CAD exports',
    ],
    contentOnRight: false,
  },
  {
    imgType: 'image',
    imgUrls: {
      desktop: 'product_description3_desktop.png',
      tablet: 'product_description3_tablet.png',
      mobile: 'product_description3_mobile.png',
    },
    title: 'Swiftly Review Financial Analysis with Your Own Data Inputs',
    content: [
      'Construction Cost',
      'NOI and Project Cost',
      'Residual land value',
      'Yield on Cost',
    ],
    contentOnRight: true,
  },
]

const HOW_IT_WORKS = [
  {
    title: 'Draw Site Boundary',
    videoUrls: {
      desktop: 'how_it_works1_big.mp4',
      tabletMobile: 'how_it_works1_small.mp4',
    },
  },
  {
    title: 'Set Project Settings',
    videoUrls: {
      desktop: 'how_it_works2_big_new.mp4',
      tabletMobile: 'how_it_works2_small.mp4',
    },
  },
  {
    title: 'Select Module Types',
    videoUrls: {
      desktop: 'how_it_works3_big.mp4',
      tabletMobile: 'how_it_works3_small.mp4',
    },
  },
  {
    title: 'Input Design Settings',
    videoUrls: {
      desktop: 'how_it_works4_big.mp4',
      tabletMobile: 'how_it_works4_small.mp4',
    },
  },
  {
    title: 'Generate Design Solutions',
    videoUrls: {
      desktop: 'how_it_works5_big.mp4',
      tabletMobile: 'how_it_works5_small.mp4',
    },
  },
]

const WHO_USES_IT = [
  {
    userRoles: ['developer'],
    description:
      'Quickly evaluate modular development potential and identify the highest and best use design solution',
  },
  {
    userRoles: ['architect'],
    description:
      'Eliminate the tedious process of conducting massing / layout studies to maximize density or floor area ratio',
  },
  {
    userRoles: ['manufacturer', 'consultant'],
    description:
      'Upsell modular to developers and project partners by quickly showing site feasibility and providing a cost estimate',
  },
]

const CUSTOMIZE = [
  {
    title: 'Move Residential Units',
    videoUrls: {
      desktop: 'customize1_big.mp4',
      tabletMobile: 'customize1_small.mp4',
    },
  },
  {
    title: 'Change Use',
    videoUrls: {
      desktop: 'customize2_big.mp4',
      tabletMobile: 'customize2_small.mp4',
    },
  },
  {
    title: 'Edit Core',
    videoUrls: {
      desktop: 'customize3_big.mp4',
      tabletMobile: 'customize3_small.mp4',
    },
  },
  {
    title: 'Draw Parking Layouts',
    videoUrls: {
      desktop: 'customize4_big.mp4',
      tabletMobile: 'customize4_small.mp4',
    },
  },
  {
    title: 'Add Other Use',
    videoUrls: {
      desktop: 'customize5_big.mp4',
      tabletMobile: 'customize5_small.mp4',
    },
  },
]

const CREATE_AND_USE_YOUR_OWN_MODULES = [
  {
    imgType: 'video',
    videoUrls: {
      imgUrls: 'module1_desktop.mp4',
      tablet: 'module1_tablet.mp4',
      mobile: 'module1_mobile.mp4',
    },
    iconName: 'module-size',
    title: 'Module Sizes',
  },
  {
    imgType: 'image',
    imgUrls: {
      desktop: 'module2_desktop.png',
      tablet: 'module2_tablet.png',
      mobile: 'module2_mobile.png',
    },
    iconName: 'module-unit',
    title: 'Unit Types',
  },
  {
    imgType: 'image',
    imgUrls: {
      desktop: 'module3_desktop.png',
      tablet: 'module3_tablet.png',
      mobile: 'module3_mobile.png',
    },
    iconName: 'module-residential',
    title: 'Residential & Corridor',
  },
  {
    imgType: 'image',
    imgUrls: {
      desktop: 'module4_desktop.png',
      tablet: 'module4_tablet.png',
      mobile: 'module4_mobile.png',
    },
    iconName: 'module-core',
    title: 'Modularized Core Elements',
  },
]

const NEED_CUSTOMIZATION = [
  {
    iconName: 'document',
    title: 'Zoning Inputs',
    description: `Zoning groups and input settings based on your target jurisdiction's code.`,
  },
  {
    iconName: 'money_bag',
    title: 'Cost Estimate',
    description: `Share your cost estimation method with us to gain accurate estimates of the generated solutions' costs.`,
  },
  {
    iconName: 'wrench',
    title: 'Design Specific Inputs',
    description: 'Customize modules and manufacture specific kit of parts.',
  },
]

const DEMO_FORM = {
  title: 'Ready to Automate Feasibility Studies of Your Modular Projects?',
  descriptions: [
    'Sign up on the form to get a quick demo and gain access to Zenerate Modular.',
  ],
}

const onloadImages = {
  desktop: [
    '/en/modular/product_description3_desktop.png',
    '/en/modular/module2_desktop.png',
    '/en/modular/module3_desktop.png',
    '/en/modular/module4_desktop.png',
  ],
  tablet: [
    '/en/modular/product_description3_tablet.png',
    '/en/modular/module2_tablet.png',
    '/en/modular/module3_tablet.png',
    '/en/modular/module4_tablet.png',
  ],
  mobile: [
    '/en/modular/product_description3_mobile.png',
    '/en/modular/module2_mobile.png',
    '/en/modular/module3_mobile.png',
    '/en/modular/module4_mobile.png',
  ],
}

const commonPreloadImages = [
  '/en/modular/document.png',
  '/en/modular/money_bag.png',
  '/en/modular/wrench.png',
]

const onloadVideos = {
  desktop: [
    '/en/modular/how_it_works1_big.mp4',
    '/en/modular/how_it_works3_big.mp4',
    '/en/modular/how_it_works4_big.mp4',
    '/en/modular/how_it_works5_big.mp4',
    '/en/modular/module_desktop.mp4',
  ],
  tablet: [
    '/en/modular/how_it_works1_tablet_mobile.mp4',
    '/en/modular/how_it_works3_tablet_mobile.mp4',
    '/en/modular/how_it_works4_tablet_mobile.mp4',
    '/en/modular/how_it_works5_tablet_mobile.mp4',
    '/en/modular/module_tablet.mp4',
  ],
  mobile: [
    '/en/modular/how_it_works1_tablet_mobile.mp4',
    '/en/modular/how_it_works2_tablet_mobile_new.mp4',
    '/en/modular/how_it_works3_tablet_mobile.mp4',
    '/en/modular/how_it_works4_tablet_mobile.mp4',
    '/en/modular/how_it_works5_tablet_mobile.mp4',
    '/en/modular/module_mobile.mp4',
  ],
}

const commonPreloadVideos = [
  '/en/modular/hero.mp4',
  'en/modular/product_description1.mp4',
  'en/modular/product_description2_new.mp4',
  'en/modular/product_description2.mp4',
]

const mediaQueryDevice =
  window.innerWidth >= 1024
    ? 'desktop'
    : window.innerWidth >= 762
    ? 'tablet'
    : 'mobile'
const modularLink = ref<HTMLElement>(null)
const modularFormInput = ref<HTMLElement>(null)

onMounted(() => {
  const isFromBMAC = router.currentRoute.value.query?.utm_source === 'bmac2023'
  nextTick(() => {
    nextTick(() => {
      if (isFromBMAC) {
        scrollTo({ top: modularLink?.value?.getBoundingClientRect().top })
      }
      if (router.currentRoute.value.hash === '#form') {
        const offsetY = document.body.clientWidth > 761.9 ? 0 : 250
        setTimeout(() => {
          const target = document.querySelector('.beta-tester')
          const y =
            target.getBoundingClientRect().top + window.scrollY + offsetY
          window.scrollTo({ top: y })
        }, 100)
        setTimeout(() => {
          const target = document.querySelector('.beta-tester')
          const y =
            target.getBoundingClientRect().top + window.scrollY + offsetY
          window.scrollTo({ top: y })
        }, 500)

        setTimeout(() => {
          const target = document.querySelector('.beta-tester')
          const y =
            target.getBoundingClientRect().top + window.scrollY + offsetY
          window.scrollTo({ top: y })
        }, 1000)
      }
    })
  })

  ImagePreloader.sequential(commonPreloadImages)
  ImagePreloader.sequential(onloadImages[mediaQueryDevice])
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
      height: 450px;
      .description {
        width: 220px;
      }
    }
    @include en-tablet {
      height: 354px;
      .description {
        width: 176px;
      }
    }
    @include en-mobile {
      .title {
        width: 270px;
      }
      .description {
        width: 176px;
      }
    }
  }

  .card2 {
    @include en-desktop {
      height: 450px;
    }
    @include en-tablet {
      height: 354px;
    }
    @include en-mobile {
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
        width: 220px;
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
        width: 388px;
      }
    }
    @include en-tablet {
      height: 354px;
      .content-area {
        width: 288px;
      }
    }
    @include en-mobile {
      .title {
        width: 280px;
      }
    }
  }
}

.blue-wave-wrapper {
  background-image: url('/en/img/blue_wave.png');
  background-repeat: no-repeat;
  background-position: bottom center;
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
