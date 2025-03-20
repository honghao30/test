<template>
  <section id="fullpage-case-studies">
    <div class="section section-case-studies">
      <div class="section-inner inner-case-studies">
        <div class="case-studies-wrapper">
          <div class="title-wrapper">
            <h2>Case Studies</h2>
            <div class="divider"></div>
            <h5 class="hidden-mobile">
              Zenerate's AI solution examines
              <span
                ><strong>the profitability</strong> of real estate
                projects</span
              >
            </h5>
            <h5 class="hidden-desktop hidden-tablet">
              Zenerate's AI solution examines
              <strong>the profitability</strong> of real estate projects
            </h5>
          </div>

          <div class="case-wrapper">
            <div class="case la">
              <img src="/en/case_study_la.gif" />

              <div class="text-wrapper">
                <p class="text-title">1522 N Van Ness Ave, Los Angeles</p>
                <p class="text-content">
                  Based on one of the hottest sites in L.A. we zenerated over
                  10,000 designs and applied a CPIO sub-area bonus to optimize
                  project financing. Within the report you will see our
                  suggested top three solutions based on different unit mixes.
                </p>

                <a
                  class="download"
                  :href="`https://drive.google.com/file/d/${pdfFiles.solution.src}/view?usp=sharing`"
                  target="_blank"
                  >View solution report <i class="material-icons"> east </i></a
                >
              </div>
            </div>
            <div class="case highrise">
              <img src="/en/case_study_highrise.gif" />

              <div class="text-wrapper">
                <p class="text-title">High-rise Residential Condominium</p>
                <p class="text-content">
                  Read Zenerate’s case study project about high-rise residential
                  condominium in Seoul to learn more about our surprising
                  insights!
                </p>
                <!-- <a class="download" @click="showPdf('zenerate')"
                  >Download PDF <i class="material-icons"> east </i></a
                > -->
                <a
                  class="download"
                  :href="`https://drive.google.com/file/d/${pdfFiles.zenerate.src}/view?usp=sharing`"
                  target="_blank"
                  >View this case study <i class="material-icons"> east </i></a
                >
              </div>
            </div>
            <div class="case">
              <img
                data-src="/en/img/service_why2.jpg"
                src="/en/img/service_why2.jpg"
                alt="USC Village Residential Project"
              />
              <div class="text-wrapper">
                <p class="text-title">USC Village Residential Project</p>
                <p class="text-content">
                  Read to learn how CEO Benji Shin<br />
                  collaborated with the USC housing team to transform and
                  streamline the architectural design process.
                </p>
                <a
                  class="download"
                  href="http://read.nxtbook.com/acuho/talking_stick/july_august_2019/news_and_notes.html"
                  target="_blank"
                  >Read this article <i class="material-icons"> east </i></a
                >
              </div>
            </div>
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
import { ref, onMounted, onBeforeUnmount, computed, watch } from 'vue'
import { useHead } from '@vueuse/head'
import Store from '/Store/index'
import Footer from '/Components/Footer.vue'
import Arrow from '/Components/Arrow.vue'

const fullpage = computed(() => Store.state.root.FullPage)
onMounted(() => {
  fullpage.value.destroy()
})

useHead({
  title: `Case Studies Using Zenerate's AI-Powered Tool`,
  htmlAttrs: { lang: 'en' },
  link: [{ rel: 'canonical', href: 'https://www.zenerate.ai/case-studies' }],
  meta: [
    {
      name: `description`,
      content: `An average of 28% additional returns have been generated and hundreds of hours saved by utilizing Zenerate's AI-powered engine.`,
    },
    {
      hid: 'twitter:title',
      property: 'twitter:title',
      content: `Case Studies Using Zenerate's AI-Powered Tool`,
    },
    {
      hid: 'twitter:description',
      property: 'twitter:description',
      content: `An average of 28% additional returns have been generated and hundreds of hours saved by utilizing Zenerate's AI-powered engine.`,
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
      content: 'https://www.zenerate.ai/case-studies',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: `Case Studies Using Zenerate's AI-Powered Tool`,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: `An average of 28% additional returns have been generated and hundreds of hours saved by utilizing Zenerate's AI-powered engine.`,
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

const pdfFiles = {
  zenerate: {
    src: '1q2uBi_GU3MBLFb6tD8b9WvfWsxu7dRiu',
    name: 'Case_Study_Zenerate',
  },
  solution: {
    src: '1DmSfcT3idA_gc2xU0rJAD5IyCoqwhPGr',
    name: 'Case_Study_Solution_Report',
  },
}
</script>
<style lang="scss" scoped>
.pdf-popup-wrapper {
  @include absolute(top 0px left 0px);
  width: 100vw;
  height: 100%;
  z-index: 1001;

  .pdf-popup {
    @include fixed(top 0px left 50%);
    max-width: 1200px;
    width: 90%;
    height: 100%;
    transform: translateX(-50%);
    z-index: 1002;

    @include en-mobile {
      max-width: 600px;
    }
  }

  .pdf-popup-background {
    @include fixed(top 0px left 0px);
    width: 100%;
    height: 100%;
    background-color: $text-darken;
    opacity: 0.8;

    button {
      @include absolute(top 12px right 20px);
      background-color: transparent;
      color: $white;

      i {
        @include medium(34);
      }

      @include en-tablet {
        @include absolute(top 12px right 14px);
        i {
          @include medium(30);
        }
      }
      @include en-mobile {
        @include absolute(top 12px right 0px);
        i {
          @include medium(28);
        }
      }
    }
  }
}
.section-case-studies {
  @include relative;
  width: 100%;
  height: 100%;
  background-image: url('/en/img/background_wave.png');
  background-size: cover;
  background-repeat: no-repeat;

  .inner-case-studies {
    @include flex($dir: column);
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 160px 0px;

    @include en-tablet {
      padding: 132px 0px;
    }
    @include en-mobile {
      padding: 98px 0px;
    }

    .case-studies-wrapper {
      @include flex($justify: space-around);
      flex-direction: column;
      margin: 0px auto;
    }

    .title-wrapper {
      @include flex($dir: column);
      align-items: center;
      margin-bottom: 30px;

      @include en-tablet {
        max-width: 540px;
        margin-bottom: 10px;
        text-align: center;
      }

      @include en-mobile {
        max-width: 360px;
        margin-bottom: 4px;
        text-align: center;
      }

      h2 {
        @include bold(36);
        color: $text-darken;
        margin: 0px 0px 30px;
        @include en-mobile {
          @include bold(24);
        }
      }

      .divider {
        width: 56px;
        height: 2px;
        border-radius: 5px;
        margin: 0px 0px 40px;
        background-color: $text-darken;
      }

      h5 {
        @include regular(24);
        color: $text-darken;
        margin: 0px;

        @include en-tablet {
          width: 440px;
        }
        @include en-mobile {
          @include regular(14);
          width: 173px;
          text-align: center;
        }
      }
    }

    .case-wrapper {
      @include flex($justify: center);
      width: 100%;
      height: 100%;
      position: relative;
      margin: 0px auto;
      padding: 0px 40px;

      @include en-tablet {
        flex-direction: column;
        align-items: center;
        padding: 0px 20px;
      }

      @include en-mobile {
        flex-direction: column;
        align-items: center;
        padding: 0px 16px;
      }

      .case {
        @include relative();
        @include vertical-center();
        justify-content: flex-start;
        align-items: center;
        width: 540px;
        height: 600px;
        border-radius: 20px;
        margin-top: 50px;
        background-color: white;
        box-shadow: 10px 30px 60px rgba(211, 210, 242, 0.4);

        img {
          width: 100%;
          min-height: 330px;
          object-fit: cover;
          object-position: top;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
        }

        video {
          width: 100%;
          height: 360px;
          object-fit: cover;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
          pointer-events: none;
        }

        video::-webkit-media-controls-start-playback-button {
          display: none;
        }

        &:nth-child(2) {
          margin-left: 68px;
          margin-right: 68px;
          img {
            object-position: center -74px;
          }
        }

        @include en-tablet {
          &:nth-child(2) {
            margin-left: 0px;
            margin-right: 0px;
          }

          &:not(:first-child) {
            margin-top: 60px;
          }
        }

        @include en-mobile {
          margin-top: 30px;
          max-width: 288px;
          height: 100%;

          &:nth-child(2) {
            margin-left: 0px;
            margin-right: 0px;

            img {
              object-position: center -32px;
            }
          }

          &:not(:first-child) {
            margin-top: 32px;
          }

          img {
            width: 100%;
            min-height: 212px;
            height: 212px;
            object-fit: cover;

            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
          }

          video {
            width: 100%;
            height: 212px;
            object-fit: cover;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
          }
        }

        &.highrise {
          .text-wrapper {
            .text-content {
              padding-right: 150px;
            }
            @include en-mobile {
              .text-title {
                word-break: break-all;
                max-width: 223px;
                height: 28px;
                overflow-x: hidden;
                overflow-y: hidden;
              }
              .text-content {
                padding-right: 20px;
              }
            }
          }
        }

        &.la {
          .text-wrapper {
            .text-content {
              padding-right: 10px;
            }

            @include en-mobile {
              .text-title {
                word-break: break-all;
                font-size: 15px;
              }
              .text-content {
                padding-right: 4px;
                height: 100%;
              }
            }
          }
        }
        .text-wrapper {
          width: 100%;
          padding: 30px 40px;

          @include en-mobile {
            padding: 28px 16px 28px 20px;
          }
          .text-title {
            @include semi-bold(22);
            color: $text-darken;
            margin-bottom: 24px;

            @include en-mobile {
              @include semi-bold(16);
              margin-bottom: 20px;
            }
          }
          .text-content {
            @include regular(15);
            padding-right: 80px;
            margin-bottom: 24px;
            line-height: 21.2px;
            height: 114px;

            @include en-mobile {
              @include regular(12);
              padding-right: 40px;
              margin-bottom: 16px;
              line-height: 17.5px;
              height: 68px;
            }

            a {
              text-decoration: underline;
            }
          }

          .download {
            @include medium(17);
            @include flex();
            align-items: center;
            color: $navigation;

            i {
              @include medium(16);
              margin-left: 10px;
              line-height: 16px;
            }

            @include en-mobile {
              @include medium(14);
            }
          }
        }
      }
    }
  }
}
</style>
