<template>
  <div class="drawer-wrapper banner">
    <div class="drawer-dimmer" @click="close"></div>
    <div class="drawer-wrapper">
      <div class="drawer-items-wrapper">
        <div class="header-navigation-wrapper hidden-en-desktop">
          <div class="navgation-link-wrapper">
            <template v-for="(tab, idx) in MENU_DATA" :key="idx">
              <p class="navigation-link" @click="() => selectTab(tab.key)">
                {{ tab.title }}
                <IconBase
                  :icon-name="
                    toggleTab[tab.key] ? 'chevron-up' : 'chevron-down'
                  "
                  :width="32"
                  :height="32"
                  iconColor="black"
                />
              </p>
              <transition name="slide-up">
                <div v-show="toggleTab[tab.key]" class="navigation-link-list">
                  <template v-for="(nav, idx) in tab.children" :key="idx">
                    <router-link
                      :to="{
                        name: nav.to,
                        query: getCurrentUtmQuery(router),
                      }"
                      custom
                      v-slot="{ href, navigate }"
                    >
                      <a
                        :href="href"
                        @click="selectSubLink(navigate, $event)"
                        class="navigation-link sub"
                      >
                        <IconBase
                          :icon-name="nav.icon"
                          :width="26"
                          :height="26"
                          :transition="false"
                          class="sub-icon"
                        />
                        {{ nav.title }}
                      </a>
                    </router-link>

                    <template v-if="nav.to === 'ai-consulting'">
                      <!-- <a
                        :href="'https://www.zenerate.ai/ed1'"
                        class="navigation-link sub"
                        :class="nav.to"
                        @click="close"
                      >
                        <IconBase
                          :icon-name="'ed1-report'"
                          :width="26"
                          :height="26"
                          :transition="false"
                          class="sub-icon"
                        />
                        ED 1 Feasibility Report
                      </a> -->
                      <a
                        :href="'https://zmaps.ai'"
                        class="navigation-link sub"
                        :class="nav.to"
                        @click="close"
                      >
                        <component
                          :is="ZmapsIcon"
                          :width="26"
                          :height="26"
                          class="sub-icon"
                        />
                        Z-maps
                      </a>
                    </template>
                  </template>
                </div>
              </transition>
            </template>

            <button
              @click="openCalendlyPopup"
              class="demo-button-gtm demo-link navigation-link sub"
            >
              Request a Demo
              <IconBase
                icon-name="arrow-right"
                :width="24"
                :height="24"
                iconColor="#4D49F4"
                class="pointer-events-none ml-14"
              />
            </button>
          </div>
          <div class="info-wrapper">
            <span class="copyright"
              >© Zenerate, Inc. 2025. All rights reserved.</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Emitter from '/Libraries/bus'
import { getCurrentUtmQuery } from '/Utils/index'
import MENU_DATA from '/Constants/menu'
import { MENU_EVENT } from '/Constants/eventConstant'
import ZmapsIcon from './Icons/header/ZmapsIcon.vue'
import { IconBase } from '/Components/'

const props = defineProps({
  showDrawer: Boolean,
})

const router = useRouter()

const toggleTab = ref({
  product: false,
  resources: false,
  company: false,
})
const currentTab = ref(null)
const selectTab = (primary): void => {
  // if (currentTab.value == primary) {
  //   currentTab.value = null
  // } else {
  //   currentTab.value = primary
  // }
  toggleTab.value[primary] = !toggleTab.value[primary]
}

const goToKrPage = () => {
  window.open('https://www.zenerate.ai/kr', '_blank')
}

const openCalendlyPopup = () => {
  Emitter.emit(MENU_EVENT.TOGGLE_CALENDLY_POPUP, {
    flag: true,
    trigger: 'header',
  })
}

const emit = defineEmits(['close'])
const close = () => {
  emit('close')
}
const selectSubLink = (navigate, event) => {
  emit('close')
  navigate(event)
}
</script>
<style lang="scss" scoped>
.drawer-wrapper {
  @include relative;
  min-width: 260px;
  z-index: 9998;
}

.drawer-dimmer {
  @include fixed(left 0 top 0);
  width: 100vw;
  height: 100vh;
  background: rgba($text-darkgrey, 0.6);
  z-index: 9996;
}
.drawer-wrapper {
  @include fixed(top 0px right -2px);
  @include flex($dir: column, $justify: flex-end);
  width: calc(100% + 8px);
  height: 100%;
  background-color: white;
  z-index: 9997;

  &.banner {
    // banner top
    @include fixed(top 36px right -2px);
    height: calc(100% - 36px);

    .drawer-items-wrapper {
      height: calc(100% - 106px);

      @include en-mobile {
        height: calc(100% - 94px);
      }
    }

    @include mobile-banner-large {
      @include fixed(top 50px right -2px);
      height: calc(100% - 50px);

      .drawer-items-wrapper {
        height: calc(100% - 108px);
      }
    }
  }
}

.drawer-logo {
  @include flex($justify: space-between);
  align-items: flex-start;
  width: 100%;
  height: 70px;

  @include en-mobile {
    height: 58px;
  }

  img {
    height: 100%;
  }

  .icon-close {
    color: theme('colors.gray.700');
    font-size: 28px;
  }
}
.drawer-items-wrapper {
  height: calc(100% - 70px);
  padding: 0px;

  @include en-mobile {
    height: calc(100% - 58px);
  }
  .header-navigation-wrapper {
    @include flex($dir: column, $justify: space-between);
    height: 100%;
    flex-wrap: nowrap;
    max-height: calc(100vh - 58px);
    overflow-y: auto;
    .navgation-link-wrapper {
      @include flex($dir: column);

      &:first-child {
        border-top: 1px solid theme('colors.gray.100');
      }

      .navigation-link-list {
        @include vertical-center();
        padding: 8px 0px;
        border-bottom: 1px solid theme('colors.gray.100');
        background-color: #fafbfe;
      }

      .navigation-link {
        @include flex($justify: space-between);
        @include medium(16);
        align-items: center;
        height: 70px;
        padding: 0 24px;
        cursor: pointer;
        @include en-mobile {
          height: 62px;
        }

        &:not(.sub) {
          border-bottom: 1px solid theme('colors.gray.100');
        }

        &.sub {
          @include medium(16);
          @include flex();
          height: 54px;
          padding: 14px 24px;
          align-items: center;
          color: theme('colors.gray.700');

          .sub-icon {
            margin-right: 8px;
            :deep(path) {
              fill: theme('colors.gray.700');
            }
          }

          &:hover,
          :active {
            color: theme('colors.primary.DEFAULT');

            :deep(path) {
              fill: theme('colors.primary.DEFAULT');
            }
          }
        }

        &.demo-link {
          @include semi-bold(16);
          @include flex();
          height: 66px;
          align-items: center;
          color: theme('colors.primary.DEFAULT');

          &:hover,
          :active {
            color: theme('colors.core.700');

            :deep(path) {
              fill: theme('colors.core.700');
            }
          }
        }
      }
    }

    .info-wrapper {
      @include flex($dir: column);
      padding: 20px 48px;

      @include en-mobile {
        padding: 20px 24px;
      }

      .lang-button {
        @include flex($justify: space-between);
        @include bold(18);
        align-items: center;
        width: 214px;
        height: 28px;
        margin-bottom: 28px;
        padding: 0px;
        color: $text-darken-5;

        i:last-child {
          @include bold(18);
        }

        @include en-mobile {
          margin-bottom: 16px;
        }
      }

      .copyright {
        @include regular(13);
        font-weight: 500;
        color: theme('colors.gray.700');
      }
    }
  }
}
</style>
