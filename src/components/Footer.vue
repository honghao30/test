<template>
  <div class="flex h-auto w-full flex-col items-center">
    <div
      class="flex w-full max-w-[280px] flex-col py-46 md:max-w-[762px] md:py-80 md:px-65 lg:max-w-[1024px] lg:py-80"
    >
      <div
        class="flex flex-col border-b-gray-200 md:flex-row md:justify-between lg:flex-row lg:justify-between"
      >
        <div class="flex flex-nowrap">
          <div class="mr-32 md:mr-38 lg:mr-40">
            <IconBase
              icon-name="z-main"
              :width="38"
              :height="38"
              icon-color="#4D49F4"
            />
          </div>
          <div class="mb-34 flex flex-col md:mb-60 lg:mb-50">
            <div class="mb-18 flex flex-col lg:mb-22">
              <p class="mb-4 text-14 font-semibold text-black lg:mb-8">
                Headquarters
              </p>
              <p class="text-14 font-medium leading-[150%] text-gray-700">
                United States<br />
                222 N Pacific Coast Hwy F 10<br />
                El Segundo, CA 90245
              </p>
            </div>

            <!-- <div class="flex flex-col">
              <p class="mb-4 text-14 font-semibold text-black lg:mb-8">
                APAC Office
              </p>
              <p class="text-14 font-medium leading-[150%] text-gray-700">
                South Korea<br />
                Olympic-ro 362, 5F<br />
                Songpa-gu, Seoul 05544
              </p>
            </div> -->
          </div>
        </div>

        <div
          class="flex flex-col pb-36 md:items-end md:pb-16 lg:items-end lg:pb-60"
        >
          <div class="mb-24 flex flex-row md:mb-120 lg:mb-84">
            <div
              class="mr-40 flex flex-col md:mr-30 md:w-auto lg:mr-50 lg:w-auto"
            >
              <p
                class="mb-12 text-14 font-semibold text-black md:mb-18 lg:mb-18"
              >
                Products & Services
              </p>
              <p
                class="mb-8 text-14 font-medium text-gray-700 md:mb-10 lg:mb-14"
              >
                <router-link
                  :to="{
                    name: 'zen-app',
                    query: getCurrentUtmQuery(router),
                  }"
                >
                  Zenerate App
                </router-link>
              </p>
              <p
                class="mb-8 text-14 font-medium text-gray-700 md:mb-10 lg:mb-14"
              >
                <router-link
                  :to="{
                    name: 'modular',
                    query: getCurrentUtmQuery(router),
                  }"
                >
                  Zenerate Modular
                </router-link>
              </p>
              <p
                class="mb-8 text-14 font-medium text-gray-700 md:mb-10 lg:mb-14"
              >
                <router-link
                  :to="{
                    name: 'ai-consulting',
                    query: getCurrentUtmQuery(router),
                  }"
                >
                  AI Consulting
                </router-link>
              </p>
              <!-- <p
                class="mb-8 text-14 font-medium text-gray-700 md:mb-10 lg:mb-14"
              >
                <a :href="'https://www.zenerate.ai/ed1'">
                  ED 1 Feasibility Report
                </a>
              </p> -->
              <p class="text-14 font-medium text-gray-700">
                <a :href="'https://zmaps.ai'"> Z-maps </a>
              </p>
            </div>

            <div class="flex flex-col">
              <p
                class="mb-12 text-14 font-semibold text-black md:mb-18 lg:mb-18"
              >
                Company
              </p>
              <p
                class="mb-8 text-14 font-medium text-gray-700 md:mb-10 lg:mb-14"
              >
                <router-link
                  :to="{ name: 'about', query: getCurrentUtmQuery(router) }"
                >
                  About Us
                </router-link>
              </p>
              <!-- <p
                class="mb-8 text-14 font-medium text-gray-700 md:mb-10 lg:mb-14"
              >
                <router-link
                  :to="{ name: 'career', query: getCurrentUtmQuery(router) }"
                >
                  Careers
                </router-link>
              </p> -->
              <p class="text-14 font-medium text-gray-700">
                <router-link
                  :to="{
                    name: 'contact',
                    query: getCurrentUtmQuery(router),
                  }"
                >
                  Contact
                </router-link>
              </p>
            </div>
          </div>

          <div class="flex items-center text-14 font-regular text-gray-700">
            <p class="mr-10 font-semibold">Contact</p>
            <p>
              <a href="mailto:support@zenerate.ai">support@zenerate.ai</a>
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-col pt-20 md:pt-20 lg:pt-30">
        <div class="flex flex-row justify-between md:flex-row lg:flex-row">
          <div
            class="mb-40 flex w-fit flex-col text-14 font-semibold text-gray-700 md:mb-14 md:flex-row md:items-center lg:mb-18 lg:flex-row lg:items-center"
          >
            <p class="mb-18 md:mb-0 md:mr-30 lg:mb-0 lg:mr-30">
              <router-link
                :to="{
                  name: 'terms-and-conditions',
                  query: getCurrentUtmQuery(router),
                }"
              >
                Terms & Conditions
              </router-link>
            </p>
            <p class="mb-18 md:mb-0 md:mr-30 lg:mb-0 lg:mr-30">
              <router-link
                :to="{
                  name: 'privacy-policy',
                  query: getCurrentUtmQuery(router),
                }"
              >
                Privacy Policy
              </router-link>
            </p>
            <p class="mb-18 md:mb-0 md:mr-30 lg:mb-0 lg:mr-30">
              <router-link
                :to="{ name: 'contact', query: getCurrentUtmQuery(router) }"
              >
                Contact Us
              </router-link>
            </p>
            <div class="flex flex-1 flex-nowrap justify-between">
              <div class="group relative flex">
                <!-- <button
                  type="button"
                  class="peer flex flex-nowrap items-center px-0 text-14 font-semibold text-gray-700"
                >
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="mr-8"
                  >
                    <path
                      d="M16.8438 10.5C16.8438 14.0036 14.0036 16.8438 10.5 16.8438C6.99644 16.8438 4.15625 14.0036 4.15625 10.5C4.15625 6.99644 6.99644 4.15625 10.5 4.15625C14.0036 4.15625 16.8438 6.99644 16.8438 10.5Z"
                      stroke="#484A4F"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.3438 10.5C13.3438 14.4375 11.5873 16.8438 10.5 16.8438C9.41269 16.8438 7.65625 14.4375 7.65625 10.5C7.65625 6.5625 9.41269 4.15625 10.5 4.15625C11.5873 4.15625 13.3438 6.5625 13.3438 10.5Z"
                      stroke="#484A4F"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.375 10.5H16.625"
                      stroke="#484A4F"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p>ENG</p>
                </button>
                <div
                  class="invisible absolute top-[-10px] left-0 pt-36 text-14 font-medium hover:visible group-hover:visible"
                >
                  <div
                    class="flex w-66 flex-col items-center rounded-8 bg-white py-10 shadow-100"
                  >
                    <div class="mb-10 cursor-default px-18 py-2 text-gray-400">
                      ENG
                    </div>
                    <div
                      class="cursor-pointer px-18 py-2 text-gray-700 hover:text-primary"
                    >
                      <router-link :to="{ name: 'ModuleLayout' }">
                        KOR</router-link
                      >
                    </div>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
          <a
            href="https://www.linkedin.com/company/zenerate"
            class="hover-pointer linkedin-icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28px"
              height="28px"
              viewBox="0 0 20 20"
              version="1.1"
            >
              <g id="surface1">
                <path
                  fill="#666666"
                  d="M 9.972656 0 C 4.464844 0 0 4.464844 0 9.972656 C 0 15.484375 4.464844 19.949219 9.972656 19.949219 C 15.484375 19.949219 19.949219 15.484375 19.949219 9.972656 C 19.949219 4.464844 15.484375 0 9.972656 0 Z M 6.238281 16.726562 L 3.433594 16.726562 L 3.433594 7.707031 L 6.238281 7.707031 Z M 4.835938 6.472656 C 3.9375 6.472656 3.210938 5.746094 3.210938 4.847656 C 3.210938 3.949219 3.9375 3.222656 4.835938 3.222656 C 5.730469 3.222656 6.460938 3.949219 6.460938 4.847656 C 6.460938 5.742188 5.730469 6.472656 4.835938 6.472656 Z M 16.738281 16.726562 L 13.9375 16.726562 L 13.9375 12.339844 C 13.9375 11.292969 13.917969 9.949219 12.480469 9.949219 C 11.023438 9.949219 10.796875 11.085938 10.796875 12.265625 L 10.796875 16.726562 L 7.996094 16.726562 L 7.996094 7.707031 L 10.683594 7.707031 L 10.683594 8.9375 L 10.722656 8.9375 C 11.097656 8.230469 12.011719 7.480469 13.375 7.480469 C 16.214844 7.480469 16.738281 9.351562 16.738281 11.777344 Z M 16.738281 16.726562 "
                />
              </g>
            </svg>
          </a>
        </div>
        <p
          class="text-12 font-medium text-gray-700 md:text-14 md:font-regular lg:text-14 lg:font-regular"
        >
          © Zenerate, Inc. 2025. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { getCurrentUtmQuery } from '/Utils/index'
import IconBase from './ui/IconBase.vue'

const router = useRouter()
const showLang = ref(false)
const toggleLang = (flag?: boolean) => {
  const f = flag == null ? !showLang.value : flag
  showLang.value = f
}
</script>
<style lang="scss" scoped>
p,
span {
  cursor: default;
}

.section-footer {
  background-color: white;
  padding-top: 52px;
  padding-bottom: 28px;
  height: 500px !important;

  @include en-tablet {
    height: 580px !important;
  }
  @include en-mobile {
    height: 580px !important;
  }

  .footer-wrapper {
    background-color: white;
    width: 100%;
    height: 500px !important;
    margin: auto 0px;
    padding: 0px 100px;

    @include en-tablet {
      width: 100%;
      height: 580px !important;
      margin-right: 50px;
      padding: 0px 48px;
    }
    @include en-mobile {
      width: 100%;
      height: 580px !important;
      margin-right: 0px;
      padding: 0px 24px;
    }
    .footer-inner {
      .footer-contents-wrapper {
        @include flex($justify: space-between);
        width: 100%;
        margin-bottom: 108px;

        @include en-tablet {
          width: 100%;
        }
        @include en-mobile {
          width: 100%;
          margin-bottom: 40px;
        }
        .footer-locations {
          @include flex();

          margin-right: 120px;
          margin-bottom: 40px;

          @include en-tablet {
            width: 100%;
            margin-right: 0px;
            margin-bottom: 40px;
            padding-right: 0px;
            border-bottom: 1px solid rgba(22, 22, 22, 0.5);
          }
          @include en-mobile {
            width: 100%;
            margin-right: 0px;
            margin-bottom: 32px;
            padding-right: 0px;
            border-bottom: 1px solid rgba(22, 22, 22, 0.5);
          }

          .footer-location {
            @include flex;
            cursor: default;
            &:last-child p.title {
              margin-bottom: 0;
            }
            @include en-tablet {
              margin-bottom: 40px;
            }
            @include en-mobile {
              @include flex();
              flex-direction: column;
              margin-bottom: 32px;
            }
            .footer-add {
              width: 400px;
            }

            .location-content-wrapper {
              @include vertical-center();
            }
            p.title {
              @include bold(16);
              width: 100px;
              margin-right: 74px;
              margin-bottom: 72px;
              color: $text-grey;

              &.main-title {
                color: #161616;
              }
            }
            p.content {
              @include regular(16);
              color: $cr-fields-description;
            }

            @include en-tablet {
              p.title {
                margin-bottom: 12px;
                margin-right: 74px;
              }
              &.location-title {
                margin-bottom: 0;
                p.title {
                  margin-bottom: 8px;
                  margin-right: 74px;
                }
              }
            }
            @include en-mobile {
              p.title {
                @include bold(14);
                width: 70px;
                margin-bottom: 0px;
                margin-right: 24px;
              }
              &.location-title {
                margin-bottom: 0;
                p.title {
                  margin-bottom: 8px;
                  margin-right: 24px;
                }
              }
              p.content {
                @include regular(14);
              }
            }
          }
        }
        .footer-contact {
          @include flex();

          .contact-title {
            width: 100px;
            margin-right: 74px;
            color: #161616;
          }
          p {
            @include bold(16);
            line-height: 24px;
            margin-bottom: 24px;
            color: $text-grey;
            cursor: default;
          }
          a {
            @include regular(16);
            line-height: 24px;
            color: $cr-fields-description;
          }

          @include en-tablet {
            margin-top: 0px;
            .contact-title {
              margin-right: 74px;
            }
          }
          @include en-mobile {
            margin-top: 0px;

            .contact-title {
              @include bold(14);
              width: 70px;
              margin-right: 24px;
            }
            p {
              @include regular(14);
              margin-bottom: 0;
            }
            a {
              @include regular(14);
            }
          }
        }
      }

      .sns-wrapper {
        @include absolute(bottom -2px left 0px);
        @include flex($justify: space-between);
        align-items: flex-end;
        width: 100%;
        cursor: default;

        .copyright {
          @include regular(16);
          color: rgba($cr-fields-description, 0.8);
        }

        .footer-sns {
          @include flex($justify: space-between);
          width: 80px;
          margin-right: 10px;
          svg {
            cursor: pointer;
          }
        }

        @include en-tablet {
          bottom: -24px;
        }
        @include en-mobile {
          flex-direction: column;
          align-items: flex-start;
          top: 20px;
          height: 116px;
          .copyright {
            @include regular(14);
            margin-bottom: 32px;
          }
        }
      }

      .term-wrapper {
        @include relative();
        @include flex($justify: center);
        align-items: center;
        width: 100%;
        margin-bottom: 80px;
        z-index: 9;
        .term {
          @include regular(16);
          text-align: center;
          color: rgba($cr-fields-description, 0.8);
          cursor: pointer;
          z-index: 9;

          &:first-child {
            margin-right: 40px;
          }
        }

        @include en-tablet {
          justify-content: flex-start;
        }
        @include en-mobile {
          height: 40px;
          justify-content: flex-start;
          align-items: flex-start;
          margin-bottom: 0px;
          margin-bottom: 112px;

          .term {
            @include regular(14);

            &:first-child {
              margin-right: 20px;
            }
          }
        }
      }
    }
  }
  @include en-tablet {
    height: auto;
  }
  @include en-mobile {
    height: auto;
  }
}
</style>
