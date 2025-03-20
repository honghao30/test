<template>
  <div class="relative mx-auto min-w-[320px]">
    <section
      class="hero mx-auto h-[692px] max-w-[1600px] md:h-[988px] lg:h-[712px] lg:w-[1340px]"
    >
      <div
        class="z-[1] mx-auto mt-[152px] w-[320px] min-w-[320px] md:mt-[170px] md:w-[644px] lg:absolute lg:mt-[200px] lg:ml-100 lg:w-[440px]"
      >
        <div class="flex flex-col items-center lg:items-start">
          <div class="mb-16 flex flex-row items-center justify-center lg:mb-18">
            <div
              class="mr-8 text-30 text-primary md:mr-10 md:text-36 lg:text-36"
            >
              <span class="font-semibold">Zenerate</span>&nbsp;AI Consulting
            </div>
          </div>

          <span
            class="mb-24 w-[300px] text-center text-30 md:mb-20 md:w-[600px] md:text-44 lg:mb-14 lg:w-[600px] lg:text-left lg:text-42 lg:font-light"
          >
            <span class="inline font-medium">Using AI to Maximize Returns</span>
            by Exploring All Possibilities
          </span>

          <p
            class="mb-30 w-[280px] text-center text-16 md:mb-40 md:w-[420px] md:text-18 md:text-gray-700 lg:mb-30 lg:mb-36 lg:w-full lg:text-left lg:text-18 lg:leading-27 lg:text-gray-700"
          >
            A project-by-project service utilizing Zenerate's AI engine to
            explore all development possibilities and determine true highest &
            best use.
          </p>

          <div class="flex flex-col items-center md:flex-row lg:flex-row">
            <button
              class="text-18-semibold h-48 w-[134px] rounded-5 bg-primary text-center leading-[48px] !text-white duration-300 hover:!text-core-200 md:mb-0 md:mr-10 md:h-54 md:w-[144px] md:text-20 md:leading-[54px] lg:mr-10 lg:mb-0 lg:h-54 lg:w-[144px] lg:text-20 lg:leading-[54px]"
              @click="moveToBetaTesterElement"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>

    <section
      class="product-description flex flex-col items-center pt-107 md:pt-134 lg:pt-180"
    >
      <div
        class="mb-6 w-[280px] text-center text-22 md:w-full md:text-26 lg:w-full lg:text-26"
      >
        Why Zenerate AI Consulting Is Game-Changing
      </div>
      <div
        class="mx-auto mb-36 w-[200px] text-center text-16 text-gray-550 md:mb-48 md:w-full md:text-18 lg:mb-56 lg:w-full lg:text-18"
      >
        Upgrade your early-stage design process with AI
      </div>

      <div class="flex flex-col lg:flex-row">
        <div
          v-for="data in PRODUCT_DESCRIPTION"
          class="card mb-20 h-fit flex-col shadow-200 md:mb-36 md:!w-[440px] md:flex-col md:items-center lg:h-[740px] lg:!w-[440px] lg:not-last:mr-20"
          :class="data.key"
        >
          <div
            class="text-18-medium px-28 pt-30 pb-26 md:px-48 md:py-40 md:text-24 lg:px-48 lg:py-40 lg:text-24"
          >
            <span class="mb-8 text-core-500">{{ data.subtitle }}</span>
            <span v-if="data.key === 'without_zenerate'"
              >Explore Few Possibilities Resulting in Unfulfilled Returns</span
            >
            <span v-if="data.key === 'with_zenerate'"
              >Explore All Possibilities to<br />Find True Highest and Best
              Use</span
            >
          </div>

          <div
            class="image-wrapper h-[218px] w-full md:h-[292px] lg:h-[292px]"
          ></div>

          <div
            class="px-32 pt-20 pb-34 md:px-40 md:pt-34 md:pb-36 lg:px-40 lg:pt-34 lg:pb-36"
          >
            <span class="description-title mb-12 md:text-18 lg:text-18">{{
              data.descriptionTitle
            }}</span>
            <div
              class="descriptions flex flex-col text-14 md:text-16 lg:text-16"
            >
              <div
                v-for="description in data.descriptions"
                class="description flex flex-row items-start not-last:mb-8 md:w-[340px] lg:w-[340px]"
              >
                <div
                  class="mr-12 mt-3 flex h-16 min-h-16 w-16 min-w-16 items-center justify-center rounded-16 lg:mr-12 lg:h-16 lg:min-h-13 lg:w-16 lg:min-w-16 lg:rounded-16"
                  :class="
                    data.key === 'without_zenerate'
                      ? 'bg-gray-100'
                      : 'bg-core-30'
                  "
                >
                  <IconBase
                    :icon-name="
                      data.key === 'without_zenerate' ? 'subtract' : 'add'
                    "
                    :icon-color="
                      data.key === 'without_zenerate' ? '#7B7E84' : '#4D49F4'
                    "
                    :width="16"
                    :height="16"
                  />
                </div>
                <div class="md:leading-24 lg:leading-24">{{ description }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="case-study pt-60 text-14 md:pt-124 lg:pt-90">
      <div class="card relative mx-auto flex-col shadow-200">
        <div
          class="text-12-semibold absolute top-0 left-18 h-28 w-84 rounded-b-5 bg-core-20 text-center leading-28 text-primary md:left-40 md:h-40 md:w-136 md:rounded-b-10 md:text-18 md:leading-40 lg:left-50 lg:h-40 lg:w-136 lg:rounded-b-10 lg:text-18 lg:leading-40"
        >
          Case Study
        </div>

        <div
          class="px-24 pt-60 pb-44 md:px-42 md:pt-86 lg:px-50 lg:pt-84 lg:pb-52"
        >
          <span
            class="mb-30 w-[240px] text-20 md:mb-34 md:w-[500px] md:text-30 lg:mb-42 lg:w-[600px] lg:text-36"
            ><span class="font-medium">Maximizing Returns</span> for a 3-acre
            Multifamily Project in the Midwest</span
          >
          <div
            class="md:mr-12 md:flex md:flex-row lg:mr-32 lg:flex lg:flex-row"
          >
            <div class="mb-28 w-[260px] md:w-[232px] lg:mb-36 lg:w-[292px]">
              <div
                class="mb-4 font-medium text-primary md:mb-8 md:text-16 lg:mb-8 lg:text-16"
              >
                {{ CASE_STUDY.objective.title }}
              </div>
              <div class="lg:text-16">{{ CASE_STUDY.objective.content }}</div>
            </div>
            <div class="mb-28 lg:mb-36">
              <span
                class="mb-4 font-medium text-primary md:text-16 lg:text-16"
                >{{ CASE_STUDY.background.title }}</span
              >
              <div
                v-for="content in CASE_STUDY.background.contents"
                class="flex w-[204px] flex-col not-last:mb-4 md:w-full lg:w-full"
              >
                <div class="flex flex-row items-start">
                  <span class="mx-8">&#8226;</span>
                  <span class="lg:text-16">{{ content }}</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="mb-4 md:mb-8 lg:mb-8">
              <span
                v-for="title in CASE_STUDY.selectedSolution.title"
                class="font-medium text-primary md:text-16 lg:text-16"
                >{{ title }}&nbsp;</span
              >
            </div>
            <span class="lg:text-16">{{
              CASE_STUDY.selectedSolution.content
            }}</span>
          </div>
        </div>

        <div
          class="md:mx-42 md:mb-60 md:flex md:flex-row md:justify-between lg:mx-50 lg:mb-42 lg:flex lg:flex-row lg:justify-between"
        >
          <div
            class="selected-result-image-wrapper relative h-[244px] w-full overflow-hidden md:w-[388px] md:rounded-10 md:shadow-200 lg:h-[312px] lg:w-[480px] lg:rounded-10 lg:shadow-200"
          >
            <div
              class="text-16-medium absolute top-0 left-0 flex h-34 w-154 items-center justify-center rounded-br-8 bg-core-500 leading-34 text-white lg:h-43 lg:w-198 lg:rounded-br-10 lg:text-20 lg:leading-43"
            >
              Selected Result
            </div>
            <div
              class="lg:rounded-108 text-16-medium absolute left-11 bottom-10 flex h-32 w-80 items-center justify-center rounded-84 bg-coolgray-70 lg:left-15 lg:bottom-13 lg:h-40 lg:w-100 lg:text-20"
            >
              Type 5A
            </div>
          </div>

          <div
            class="px-50 pt-50 pb-58 text-16 md:h-[244px] md:w-[228px] md:rounded-10 md:py-30 md:px-23 md:shadow-200 lg:h-[312px] lg:w-[306px] lg:rounded-10 lg:py-40 lg:px-36 lg:shadow-200"
          >
            <div
              class="mb-22 text-center font-medium text-core-500 md:text-14-semibold md:mb-16 lg:text-18-semibold lg:mb-18"
            >
              *Compared to Original Plan
            </div>
            <div class="flex-flex-col">
              <div
                v-for="data in CASE_STUDY.compare"
                class="flex flex-row items-center justify-between not-last:mb-8 md:not-last:mb-8 lg:not-last:mb-10"
              >
                <span class="font-medium lg:text-20">{{ data.kpi }}</span>
                <div
                  class="flex h-32 w-78 flex-row items-center justify-between rounded-4 pl-13 pr-7 font-medium md:h-30 md:font-semibold lg:h-36 lg:w-92 lg:rounded-6 lg:font-semibold"
                  :class="
                    data.isIncreased
                      ? 'bg-green-350 text-white'
                      : 'bg-coolgray-50 text-gray-600'
                  "
                >
                  <span class="w-34 text-center lg:text-20">
                    {{ data.result }}</span
                  >
                  <IconBase
                    :icon-name="data.isIncreased ? 'up' : 'down'"
                    :icon-color="data.isIncreased ? 'white' : '#6A6D73'"
                    :width="24"
                    :height="24"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="mb-10 bg-coolgray-50 px-13 pt-46 pb-43 text-center md:mx-42 md:mb-14 md:rounded-10 md:px-50 md:pt-40 md:pb-54 lg:mx-50 lg:mb-20 lg:rounded-10 lg:px-56 lg:pt-42 lg:pb-44"
        >
          <div
            class="mx-auto mb-12 flex w-fit flex-row items-center md:mx-0 md:mb-14 lg:mx-0 lg:mb-14"
          >
            <div
              class="mr-12 flex h-20 w-20 items-center justify-center rounded-10 bg-core-500"
            >
              <IconBase
                icon-name="checkmark-bold"
                icon-color="white"
                :width="14"
                :height="14"
                class="h-14 w-14"
              />
            </div>
            <div class="text-18-medium text-left md:text-22 lg:text-22">
              Construction&nbsp;<br class="md:hidden lg:hidden" />Types
              Comparision
            </div>
          </div>
          <p
            class="mb-50 md:mb-46 md:w-[540px] md:text-left md:text-16 lg:mb-44 lg:w-[620px] lg:text-left lg:text-16"
          >
            Although Type 3A allowed for an additional floor and more units
            compared to Type 5A, the project cost outweighed the increased NOI.
          </p>

          <div
            class="flex flex-col md:mx-4 md:flex-row md:items-end md:justify-between lg:mx-2 lg:flex-row lg:items-end lg:justify-between"
          >
            <div class="flex flex-col items-center md:h-[296px] lg:h-[390px]">
              <div
                class="mb-6 font-medium md:order-2 lg:order-2 lg:mb-8 lg:text-18"
              >
                Type 3A
              </div>
              <div
                class="mb-18 text-gray-700 md:order-3 md:mb-0 lg:order-3 lg:mb-0 lg:text-18"
              >
                5 Residential Floors
              </div>
              <div
                class="mx-auto mb-24 flex h-188 w-[232px] flex-col overflow-hidden rounded-8 md:mb-62 md:h-184 lg:mb-80 lg:h-[246px] lg:w-[308px]"
              >
                <div
                  class="text-12-medium h-32 w-full bg-white leading-32 text-gray-600 md:h-28 md:leading-28 lg:h-38 lg:text-16 lg:leading-38"
                >
                  Solution WA8-157
                </div>
                <div
                  class="comparision1-before-image-wrapper h-full w-full"
                ></div>
              </div>
            </div>

            <div class="relative md:h-[340px] lg:h-[448px]">
              <div
                class="absolute top-[-36px] left-[50%] z-[1] flex h-42 w-42 translate-x-[-50%] items-center justify-center rounded-21 bg-white font-medium text-gray-600 shadow-200 md:top-[118px] md:left-[-6px] lg:top-[154px] lg:left-[-10px] lg:h-56 lg:w-56 lg:rounded-30 lg:text-18"
              >
                VS
              </div>
              <div
                class="mx-auto mb-18 flex h-[276px] w-[272px] flex-col overflow-hidden rounded-8 md:mb-18 md:h-[272px] lg:mb-22 lg:h-[362px] lg:w-[356px]"
              >
                <div
                  class="text-12-medium h-32 w-full bg-core-30 leading-32 text-primary md:h-28 md:leading-28 lg:h-38 lg:h-38 lg:text-16 lg:leading-38"
                >
                  Selected Solution : WA6-155
                </div>
                <div
                  class="comparision1-after-image-wrapper relative h-full w-full"
                >
                  <div
                    class="mx-auto flex h-38 w-120 flex-row items-center justify-center rounded-b-8 bg-core-500 text-16 text-white lg:h-48 lg:w-154 lg:rounded-b-10 lg:text-20"
                  >
                    <span class="mr-8">Profit</span>
                    <span class="text-14-semibold mr-4 lg:text-18">37%</span>
                    <IconBase
                      icon-name="up"
                      icon-color="white"
                      :width="16"
                      :height="16"
                      class="lg:hidden"
                    />
                    <IconBase
                      icon-name="up"
                      icon-color="white"
                      :width="22"
                      :height="22"
                      class="hidden lg:block"
                    />
                  </div>
                  <div
                    class="absolute bottom-18 flex w-full flex-row items-center justify-center text-white lg:bottom-24"
                  >
                    <div
                      class="mr-4 flex h-50 w-fit flex-col items-center justify-center rounded-4 bg-black/70 px-7 lg:mr-6 lg:h-64 lg:rounded-6 lg:px-10"
                    >
                      <div class="text-11-medium mb-3 lg:mb-4 lg:text-14">
                        FAR
                      </div>
                      <div class="flex flex-row items-center">
                        <span class="text-14-medium mr-2 lg:mr-3 lg:text-18"
                          >0.77</span
                        >
                        <IconBase
                          icon-name="down"
                          icon-color="white"
                          :width="15"
                          :height="15"
                          class="lg:hidden"
                        />
                        <IconBase
                          icon-name="down"
                          icon-color="white"
                          :width="20"
                          :height="20"
                          class="hidden lg:block"
                        />
                      </div>
                    </div>
                    <div
                      class="mr-4 flex h-50 w-fit flex-col items-center justify-center rounded-4 bg-black/70 px-7 lg:mr-6 lg:h-64 lg:rounded-6 lg:px-10"
                    >
                      <div class="text-11-medium mb-3 lg:mb-4 lg:text-14">
                        # Units
                      </div>
                      <div class="flex flex-row items-center">
                        <span class="text-14-medium mr-2 lg:mr-3 lg:text-18"
                          >54 units</span
                        >
                        <IconBase
                          icon-name="down"
                          icon-color="white"
                          :width="15"
                          :height="15"
                          class="lg:hidden"
                        />
                        <IconBase
                          icon-name="down"
                          icon-color="white"
                          :width="20"
                          :height="20"
                          class="hidden lg:block"
                        />
                      </div>
                    </div>
                    <div
                      class="flex h-50 w-fit flex-col items-center justify-center rounded-4 bg-black/70 px-7 lg:mr-6 lg:h-64 lg:rounded-6 lg:px-10"
                    >
                      <div class="text-11-medium mb-3 lg:mb-4 lg:text-14">
                        Project Cost
                      </div>
                      <div class="flex flex-row items-center">
                        <span class="text-14-medium mr-2 lg:mr-3 lg:text-18"
                          >34 %</span
                        >
                        <IconBase
                          icon-name="down"
                          icon-color="white"
                          :width="15"
                          :height="15"
                          class="lg:hidden"
                        />
                        <IconBase
                          icon-name="down"
                          icon-color="white"
                          :width="20"
                          :height="20"
                          class="hidden lg:block"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-6 font-medium lg:mb-8 lg:text-18">Type 5A</div>
              <div class="text-gray-700 lg:text-18">4 Residential Floors</div>
            </div>
          </div>
        </div>

        <div
          class="bg-coolgray-50 px-13 pt-46 pb-43 text-center md:mx-42 md:mb-42 md:rounded-10 md:px-50 md:pt-40 md:pb-54 lg:mx-50 lg:mb-50 lg:rounded-10 lg:px-56 lg:pt-42 lg:pb-44"
        >
          <div
            class="mx-auto mb-12 flex w-fit flex-row items-center md:mx-0 md:mb-14 lg:mx-0 lg:mb-14"
          >
            <div
              class="mr-12 flex h-20 w-20 items-center justify-center rounded-10 bg-core-500"
            >
              <IconBase
                icon-name="checkmark-bold"
                icon-color="white"
                :width="14"
                :height="14"
                class="h-14 w-14"
              />
            </div>
            <div class="text-18-medium text-left md:text-22 lg:text-22">
              Parking Structure&nbsp;<br class="md:hidden lg:hidden" />Options
              Comparision
            </div>
          </div>
          <p
            class="mb-50 md:mb-46 md:w-[520px] md:text-left md:text-16 lg:mb-44 lg:w-[580px] lg:text-left lg:text-16"
          >
            Although underground parking allowed for additional units and
            increased NOI, the project cost outweighed the increased NOI.
          </p>

          <div
            class="flex flex-col md:mx-4 md:flex-row md:items-end md:justify-between lg:mx-2 lg:flex-row lg:items-end lg:justify-between"
          >
            <div class="flex flex-col items-center md:h-[296px] lg:h-[390px]">
              <div
                class="mb-6 font-medium md:order-2 lg:order-2 lg:mb-8 lg:text-18"
              >
                Underground Parking Included
              </div>
              <div
                class="mb-18 text-gray-700 md:order-3 md:mb-0 lg:order-3 lg:mb-0 lg:text-18"
              >
                B1~4F
              </div>
              <div
                class="mx-auto mb-24 flex h-188 w-[232px] flex-col overflow-hidden rounded-8 md:mb-62 md:h-184 lg:mb-80 lg:h-[246px] lg:w-[308px]"
              >
                <div
                  class="text-12-medium h-32 w-full bg-white leading-32 text-gray-600 md:h-28 md:leading-28 lg:h-38 lg:text-16 lg:leading-38"
                >
                  Solution WB4-136
                </div>
                <div
                  class="comparision2-before-image-wrapper h-full w-full"
                ></div>
              </div>
            </div>

            <div class="relative md:h-[340px] lg:h-[448px]">
              <div
                class="absolute top-[-36px] left-[50%] z-[1] flex h-42 w-42 translate-x-[-50%] items-center justify-center rounded-21 bg-white font-medium text-gray-600 shadow-200 md:top-[118px] md:left-[-6px] lg:top-[154px] lg:left-[-10px] lg:h-56 lg:w-56 lg:rounded-30 lg:text-18"
              >
                VS
              </div>
              <div
                class="mx-auto mb-18 flex h-[276px] w-[272px] flex-col overflow-hidden rounded-8 md:mb-18 md:h-[272px] lg:mb-22 lg:h-[362px] lg:w-[356px]"
              >
                <div
                  class="text-12-medium h-32 w-full bg-core-30 leading-32 text-primary md:h-28 md:leading-28 lg:h-38 lg:h-38 lg:text-16 lg:leading-38"
                >
                  Selected Solution : WA8-157
                </div>
                <div
                  class="comparision2-after-image-wrapper relative h-full w-full"
                >
                  <div
                    class="mx-auto flex h-38 w-120 flex-row items-center justify-center rounded-b-8 bg-core-500 text-16 text-white lg:h-48 lg:w-154 lg:rounded-b-10 lg:text-20"
                  >
                    <span class="mr-8">Profit</span>
                    <span class="text-14-semibold mr-4 lg:text-18">29%</span>
                    <IconBase
                      icon-name="up"
                      icon-color="white"
                      :width="16"
                      :height="16"
                      class="lg:hidden"
                    />
                    <IconBase
                      icon-name="up"
                      icon-color="white"
                      :width="22"
                      :height="22"
                      class="hidden lg:block"
                    />
                  </div>
                  <div
                    class="absolute bottom-18 flex w-full flex-row items-center justify-center text-white lg:bottom-24"
                  >
                    <div
                      class="mr-4 flex h-50 w-fit flex-col items-center justify-center rounded-4 bg-black/70 px-7 lg:mr-6 lg:h-64 lg:rounded-6 lg:px-10"
                    >
                      <div class="text-11-medium mb-3 lg:mb-4 lg:text-14">
                        FAR
                      </div>
                      <div class="flex flex-row items-center">
                        <span class="text-14-medium mr-2 lg:mr-3 lg:text-18"
                          >0.11</span
                        >
                        <IconBase
                          icon-name="up"
                          icon-color="white"
                          :width="15"
                          :height="15"
                          class="lg:hidden"
                        />
                        <IconBase
                          icon-name="up"
                          icon-color="white"
                          :width="20"
                          :height="20"
                          class="hidden lg:block"
                        />
                      </div>
                    </div>
                    <div
                      class="mr-4 flex h-50 w-fit flex-col items-center justify-center rounded-4 bg-black/70 px-7 lg:mr-6 lg:h-64 lg:rounded-6 lg:px-10"
                    >
                      <div class="text-11-medium mb-3 lg:mb-4 lg:text-14">
                        # Units
                      </div>
                      <div class="flex flex-row items-center">
                        <span class="text-14-medium mr-2 lg:mr-3 lg:text-18"
                          >20 units</span
                        >
                        <IconBase
                          icon-name="up"
                          icon-color="white"
                          :width="15"
                          :height="15"
                          class="lg:hidden"
                        />
                        <IconBase
                          icon-name="up"
                          icon-color="white"
                          :width="20"
                          :height="20"
                          class="hidden lg:block"
                        />
                      </div>
                    </div>
                    <div
                      class="flex h-50 w-fit flex-col items-center justify-center rounded-4 bg-black/70 px-7 lg:mr-6 lg:h-64 lg:rounded-6 lg:px-10"
                    >
                      <div class="text-11-medium mb-3 lg:mb-4 lg:text-14">
                        Project Cost
                      </div>
                      <div class="flex flex-row items-center">
                        <span class="text-14-medium mr-2 lg:mr-3 lg:text-18"
                          >4.8 %</span
                        >
                        <IconBase
                          icon-name="up"
                          icon-color="white"
                          :width="15"
                          :height="15"
                          class="lg:hidden"
                        />
                        <IconBase
                          icon-name="up"
                          icon-color="white"
                          :width="20"
                          :height="20"
                          class="hidden lg:block"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-6 font-medium lg:mb-8 lg:text-18">
                No Underground Parking
              </div>
              <div class="text-gray-700 lg:text-18">1~6F</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="how-it-works pt-80 md:pt-90 lg:pt-150">
      <div class="mb-6 text-center text-26">How It Works</div>
      <div
        class="mx-auto mb-44 w-[280px] text-center text-18 text-gray-550 md:mb-42 md:w-[420px] lg:mb-42 lg:w-full"
      >
        As simple as sharing a site address with us
      </div>
      <div
        v-for="(data, idx) in HOW_IT_WORKS"
        class="card mx-auto mb-12 h-fit px-30 pt-24 pb-42 shadow-200 md:mb-15 md:items-start md:pt-24 md:pr-36 md:pb-28 md:pl-20 lg:mb-12 lg:items-start lg:pt-24 lg:pr-36 lg:pb-28 lg:pl-24"
      >
        <div class="flex flex-col md:flex-row lg:flex-row lg:items-center">
          <img
            :src="`/en/ai_consulting/${data.icon}`"
            width="52"
            height="52"
            alt=""
            class="mb-10 md:mb-0 md:mr-20 lg:mb-0 lg:mr-16"
          />
          <div class="flex flex-col lg:flex-row lg:items-center">
            <span
              v-if="idx === 1"
              class="text-18-medium mb-8 md:mb-6 md:text-20 lg:mb-0 lg:mr-40 lg:w-[180px] lg:min-w-[180px] lg:text-20"
              >Generate&nbsp;<br class="hidden lg:block" />& Analyze
              Solutions</span
            >
            <span
              v-else
              class="text-18-medium mb-8 md:mb-6 md:text-20 lg:mb-0 lg:mr-40 lg:w-[180px] lg:min-w-[180px] lg:text-20"
              >{{ data.title }}</span
            >
            <span
              class="w-[258px] text-16 text-gray-600 md:w-[580px] md:text-18 lg:w-full lg:text-18"
              >{{ data.description }}</span
            >
          </div>
        </div>
      </div>
    </section>

    <section class="other-challenges pt-60 md:pt-75 lg:pt-98">
      <div
        class="card mx-auto flex h-fit flex-col shadow-200 md:flex-row lg:flex-row"
      >
        <div
          class="image-wrapper h-[320px] w-[320px] md:h-[400px] md:w-[280px] md:min-w-[280px] lg:h-[516px] lg:w-[424px] lg:min-w-[424px]"
        ></div>
        <div
          class="inner-shadow h-fit w-full px-26 pt-32 pb-40 md:px-56 md:pt-50 md:pb-40 lg:pl-75 lg:pr-56 lg:pt-102 lg:pb-106"
        >
          <span
            class="mb-20 text-18 md:mb-28 md:w-[220px] md:text-26 lg:mb-32 lg:w-[220px] lg:text-26"
            >{{ OTHER_CHALLENGES.title }}</span
          >
          <div
            class="flex w-[260px] flex-col text-16 text-gray-600 md:w-[300px] lg:w-full"
          >
            <div
              v-for="description in OTHER_CHALLENGES.descriptions"
              class="flex flex-row items-start not-last:mb-10 md:not-last:mb-12"
            >
              <div
                class="mr-10 mt-3 flex h-16 min-h-16 w-16 min-w-16 items-center justify-center rounded-16 bg-core-30 md:mr-12 lg:mr-12 lg:h-16 lg:min-h-13 lg:w-16 lg:min-w-16 lg:rounded-16"
              >
                <IconBase
                  icon-name="checkmark-bold"
                  icon-color="#5C6DFF"
                  :width="10"
                  :height="10"
                />
              </div>
              <div class="text-16 text-gray-700">
                {{ description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="who-uses-it bg- pt-80 md:pt-90 lg:pt-150">
      <div class="mb-6 text-center text-26">Who Uses It</div>
      <div
        class="mx-auto mb-30 w-[240px] text-center text-18 text-gray-550 md:mb-46 md:w-full lg:mb-42 lg:w-full"
      >
        Made for everyone involved in real estate development
      </div>
      <div
        v-for="(data, dataIdx) in WHO_USES_IT"
        class="card mx-auto mb-10 flex h-fit flex-col px-26 pt-24 pb-32 shadow-200 md:mb-10 md:flex-row md:px-24 md:py-20 md:pt-16 md:pb-20 lg:mb-12 lg:flex-row lg:pl-30 lg:pr-38 lg:pt-26 lg:pb-30"
      >
        <div
          class="mb-15 md:mb-0 md:mr-30 md:w-[198px] md:min-w-[198px] lg:mb-0 lg:mr-120 lg:w-[245px] lg:min-w-[245px]"
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
        <div class="flex flex-col">
          <div
            v-for="(description, descriptionIdx) in data.descriptions"
            class="flex flex-row items-start not-last:mb-8 lg:not-last:mb-10"
          >
            <div
              class="mr-16 mt-3 flex h-16 min-h-16 w-16 min-w-16 items-center justify-center rounded-16 bg-core-30 lg:mr-12 lg:h-16 lg:min-h-13 lg:w-16 lg:min-w-16 lg:rounded-16"
            >
              <IconBase
                icon-name="checkmark-bold"
                icon-color="#5C6DFF"
                :width="10"
                :height="10"
              />
            </div>

            <div
              class="text-16 text-gray-700 lg:text-18"
              :class="[
                dataIdx === 0 &&
                  descriptionIdx === 0 &&
                  'md:w-[380px] lg:w-[420px]',
                dataIdx === 0 &&
                  descriptionIdx === 2 &&
                  'w-[200px] md:w-full lg:w-full',
              ]"
            >
              {{ description }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="beta-tester relative pt-70 pb-80 md:pt-80 md:pb-116 lg:pt-98 lg:pb-88"
    >
      <div class="absolute top-[-90px] h-0 w-full" ref="betaTester"></div>
      <FormWrapper
        sheet-name="AIConsulting"
        class="min-h-[779px] md:min-h-[535px] lg:min-h-[631px]"
      >
        <template #description>
          <div
            class="flex flex-col items-center pt-43 pb-41 text-center text-white md:items-start md:px-42 md:pt-72 md:pb-120 md:text-left lg:items-start lg:px-40 lg:pb-150 lg:pt-104 lg:text-left"
          >
            <span class="mb-30 text-22 lg:text-30">
              <span class="font-semibold">+28% Additional Returns</span
              >Generated on Average Compared to Original Plans</span
            >
            <span
              class="w-[220px] text-18 md:w-[240px] lg:w-[240px] lg:text-20"
            >
              on the 50+ projects we've worked on so far</span
            >
          </div>
        </template>
        <template #form-title>
          <span
            class="mb-6 w-[200px] text-center text-18 md:pt-8 lg:w-[260px] lg:pt-8 lg:text-22"
          >
            Have a Project in Mind? Let's Talk!
          </span>
          <span class="text-center text-14 text-gray-550 lg:text-16"
            >We'll be in touch soon.</span
          >
        </template>
        <template #after-submit-title>
          <span class="mb-40 text-center text-18 md:pt-8 lg:pt-8 lg:text-22">
            Your request has been submitted!
          </span>
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

const betaTester = ref(null)
const moveToBetaTesterElement = () => {
  betaTester.value.scrollIntoView({ behavior: 'smooth' })
}

useHead({
  title: `About the Zenerate AI Consulting | Using AI to Maximize Returns by Exploring All Possibilities`,
  htmlAttrs: { lang: 'en' },
  link: [{ rel: 'canonical', href: 'https://www.zenerate.ai/ai-consulting' }],
  meta: [
    {
      name: `description`,
      content: `A project-by-project service utilizing Zenerate's AI engine to explore all development possibilities and determine true highest & best use.`,
    },
    {
      hid: 'twitter:title',
      property: 'twitter:title',
      content: `About the Zenerate AI Consulting | Using AI to Maximize Returns by Exploring All Possibilities`,
    },
    {
      hid: 'twitter:description',
      property: 'twitter:description',
      content: `A project-by-project service utilizing Zenerate's AI engine to explore all development possibilities and determine true highest & best use.`,
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
      content: 'https://www.zenerate.ai/ai-consulting',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: `About the Zenerate AI Consulting | Using AI to Maximize Returns by Exploring All Possibilities`,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: `A project-by-project service utilizing Zenerate's AI engine to explore all development possibilities and determine true highest & best use.`,
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
    key: 'without_zenerate',
    subtitle: 'Without AI',
    imgUrl: 'without_zenerate.png',
    descriptionTitle: 'Problems with current feasibility studies:',
    descriptions: [
      'Few design options',
      'Applying flat rates for revenue estimation',
      'Tedious iteration process factoring in both design and financial analysis',
    ],
  },
  {
    key: 'with_zenerate',
    subtitle: "With Zenerate's AI Engine",
    imgUrl: 'with_zenerate.png',
    descriptionTitle: 'Solutions using our AI engine:',
    descriptions: [
      'Various buidling massing, layout and unit mix options',
      'Realistic / differential AI pricing for accurate revenue estimation',
      'Integrated process of design and financial analysis',
    ],
  },
]

const CASE_STUDY = {
  objective: {
    title: 'Objective',
    content:
      'Find the most profitable solution considering construction type and parking structure options.',
  },
  background: {
    title: 'Background',
    contents: [
      'Type IIIA and a maximum of 300 units were considered.',
      'A 7-year holding period after completion was assumed.',
    ],
  },
  selectedSolution: {
    title: ['Selected Solution -', 'Out of 2,582 Generated Solutions'],
    content:
      'Compared to original plans, the selected solution estimated a 37% higher net profit, despite having fewer units and NOI. This is primarily due to the use of Type V construction, which costs 34% less than Type IIIA.',
  },
  compare: [
    { kpi: 'Net Profit', result: '37%', isIncreased: true },
    { kpi: '#Units', result: '39', isIncreased: false },
    { kpi: 'NOI', result: '19%', isIncreased: false },
    { kpi: 'Project Cost', result: '34%', isIncreased: false },
  ],
}

const HOW_IT_WORKS = [
  {
    icon: 'icon_barchart_new.png',
    title: 'Assess Project',
    description:
      'Provide us any data and info on the project you have. We then propose a fee and timeline.',
  },
  {
    icon: 'icon_linechart_new.png',
    title: 'Generate & Analyze Solutions',
    description:
      'Considering entitlement strategies, building massings & layouts, unit mix options, parking structures, pro forma, etc., we generate and evalute various scenarios.',
  },
  {
    icon: 'icon_document_new.png',
    title: 'Delivery of Report',
    description:
      'We provide a feasibility report containing recommended solutions along with CAD floor plans and Excel files.',
  },
]

const WHO_USES_IT = [
  {
    userRoles: ['developer', 'owner_investor'],
    descriptions: [
      'Evaluate all possible development scenarios to find the most profitable solution',
      'Save time on back and forth between architects for early-stage feasibility studies',
      'Optimize complex project scenarios in a short amount of time',
    ],
  },
  {
    userRoles: ['architect'],
    descriptions: [
      'Gain a design starting point that is backed by financial analysis',
      'Create designs that make financial sense to avoid numerous rounds of design iteration',
    ],
  },
]

const OTHER_CHALLENGES = {
  title: "Other Challenges We've Covered ",
  descriptions: [
    'Testing various entitlement strategies',
    'Building massing and layout iterations',
    'Finding the most appropriate unit mix',
    'Finding the ideal ratio of residential and commercial area',
    'Testing various construction types',
    'TIF offsets evaluation',
  ],
}

const onloadImages = {
  desktop: [
    '/en/zenerate_app/how_it_works_step1_desktop.png',
    '/en/zenerate_app/how_it_works_step2_desktop.png',
    '/en/zenerate_app/how_it_works_step3_desktop.png',
  ],
  tablet: [
    '/en/zenerate_app/how_it_works_step1_tablet.png',
    '/en/zenerate_app/how_it_works_step2_tablet.png',
    '/en/zenerate_app/how_it_works_step3_tablet.png',
  ],
  mobile: [
    '/en/zenerate_app/how_it_works_step1_mobile.png',
    '/en/zenerate_app/how_it_works_step2_mobile.png',
    '/en/zenerate_app/how_it_works_step3_mobile.png',
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
  width: 320px;
  min-width: 320px;
  border-radius: 10px;
  overflow: hidden;

  @include en-tablet {
    width: 708px;
  }

  @include en-desktop {
    width: 900px;
  }

  .inner-shadow {
    @include en-mobile {
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.15);
    }
  }
}

.hero {
  background-repeat: no-repeat;
  background-image: url('/en/ai_consulting/hero_desktop.png');
  background-position: bottom right;
  @include en-tablet {
    background-image: url('/en/ai_consulting/hero_tablet_new.png');
    background-size: 1200px 548px;
    background-position: bottom center;
  }
  @include en-mobile {
    background-image: url('/en/ai_consulting/hero_mobile_new.png');
    background-size: 768px 246px;
    background-position: bottom center;
  }
}

.product-description {
  .with_zenerate {
    &.card {
      background-color: black;
      color: white;
    }
    .image-wrapper {
      background-repeat: no-repeat;
      background-size: contain;
      background-image: url('/en/ai_consulting/with_zenerate_tablet.png');
      background-position: bottom center;
      @include en-tablet {
        background-image: url('/en/ai_consulting/with_zenerate_tablet.png');
      }
      @include en-mobile {
        background-image: url('/en/ai_consulting/with_zenerate_mobile_new.png');
        background-size: 320px 212px;
      }
    }

    .description {
      @include en-mobile {
        width: 238px;
      }
      color: theme('colors.gray.300');
    }
  }
  .without_zenerate {
    .image-wrapper {
      background-repeat: no-repeat;
      background-size: contain;
      background-image: url('/en/ai_consulting/without_zenerate_tablet.png');
      background-position: bottom center;
      @include en-tablet {
        background-image: url('/en/ai_consulting/without_zenerate_tablet.png');
      }
      @include en-mobile {
        background-image: url('/en/ai_consulting/without_zenerate_mobile_new.png');
        background-size: 320px 212px;
      }
    }
    .description-title {
      @include en-mobile {
        width: 200px;
      }
    }
    .description {
      color: theme('colors.gray.700');
      &:nth-child(2) {
        @include en-mobile {
          width: 200px;
        }
      }
    }
  }
}

.case-study {
  .selected-result-image-wrapper {
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url('/en/ai_consulting/selected_result_desktop.png');
    background-position: bottom center;
    @include en-tablet {
      background-image: url('/en/ai_consulting/selected_result_tablet.png');
    }
    @include en-mobile {
      background-image: url('/en/ai_consulting/selected_result_mobile_new.png');
      background-size: 320px 244px;
    }
  }
  .comparision1-before-image-wrapper {
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url('/en/ai_consulting/comparision1_before_desktop.png');
    background-position: bottom center;
    @include en-tablet {
      background-image: url('/en/ai_consulting/comparision1_before_tablet.png');
    }
    @include en-mobile {
      background-image: url('/en/ai_consulting/comparision1_before_mobile_new.png');
      background-size: 232px 156px;
    }
  }
  .comparision1-after-image-wrapper {
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url('/en/ai_consulting/comparision1_after_desktop.png');
    background-position: bottom center;
    @include en-tablet {
      background-image: url('/en/ai_consulting/comparision1_after_tablet.png');
    }
    @include en-mobile {
      background-image: url('/en/ai_consulting/comparision1_after_mobile_new.png');
      background-size: 272px 244px;
    }
  }
  .comparision2-before-image-wrapper {
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url('/en/ai_consulting/comparision2_before_desktop.png');
    background-position: bottom center;
    @include en-tablet {
      background-image: url('/en/ai_consulting/comparision2_before_tablet.png');
    }
    @include en-mobile {
      background-image: url('/en/ai_consulting/comparision2_before_mobile_new.png');
      background-size: 232px 156px;
    }
  }
  .comparision2-after-image-wrapper {
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url('/en/ai_consulting/comparision2_after_desktop.png');
    background-position: bottom center;
    @include en-tablet {
      background-image: url('/en/ai_consulting/comparision2_after_tablet.png');
    }
    @include en-mobile {
      background-image: url('/en/ai_consulting/comparision2_after_mobile_new.png');
      background-size: 272px 244px;
    }
  }
}

.other-challenges {
  .image-wrapper {
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url('/en/ai_consulting/other_challenges_desktop.png');
    background-position: bottom center;
    @include en-tablet {
      background-image: url('/en/ai_consulting/other_challenges_tablet.png');
    }
    @include en-mobile {
      background-image: url('/en/ai_consulting/other_challenges_mobile_new.png');
      background-size: 320px 320px;
    }
  }
}
</style>
