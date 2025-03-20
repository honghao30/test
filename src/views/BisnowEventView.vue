<template>
  <section
    class="full-height top-0 left-0 flex w-[100vw] min-w-[340px] overflow-auto bg-core-500 md:min-w-[584px] lg:min-w-[584px]"
    :style="{
      justifyContent: 'safe center',
      alignItems: 'safe center',
    }"
  >
    <div
      class="bisnow-event-card isolate my-40 flex h-[600px] w-[320px] min-w-[320px] flex-col items-center overflow-hidden rounded-17 bg-white shadow-200 md:h-[954px] md:w-[564px] md:min-w-[564px] md:rounded-30 lg:h-[954px] lg:w-[564px] lg:min-w-[564px] lg:rounded-30"
    >
      <Calendly
        calendly-url="https://calendly.com/zenerate/zenerate-app-demo"
        class="bisnow-event-calendly"
      />
      <!-- <FormContent
        :sheet-name="sheetName"
        submit-btn-text="Submit"
        class="bisnow-event-form mb-34 md:mb-68 lg:mb-68"
      >
        <template #form-title>
          <img
            src="/img/logo_color.svg"
            alt="zenerate"
            class="mb-20 h-16 md:mb-30 md:h-28 lg:mb-30 lg:h-28"
          />

          <div
            class="text-center text-32 font-medium text-primary md:text-54 lg:text-54"
          >
            <span class="font-[900]">50% OFF</span><br />COUPON
          </div>
        </template>

        <template #after-submit-icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            class="mb-18 mt-40 md:hidden lg:hidden"
          >
            <ellipse cx="23.6415" cy="24" rx="23.6415" ry="24" fill="#EBEDFE" />
            <path
              d="M45.3564 3.63599L45.0989 3.94048L45.1063 3.94906L38.1615 12.1918L21.2702 32.2441C20.9104 32.6716 20.4298 32.8903 19.9481 32.8903C19.6597 32.8903 19.3714 32.8102 19.1064 32.653L20.128 33.6237L21.6707 35.0889C22.0133 35.4135 22.4273 35.575 22.8413 35.575C23.3231 35.575 23.8037 35.3577 24.1635 34.9288L47.9995 6.63376L45.3564 3.63599Z"
              fill="#4848FF"
            />
            <path
              d="M38.1563 12.1826L22.7031 30.5252L19.8591 27.8233L19.8505 27.8147L10.4745 18.9058L8.1333 22.2252L17.2579 30.894L17.2665 30.9026L19.1075 32.6523C19.3724 32.8096 19.6607 32.8897 19.9491 32.8897C20.4309 32.8897 20.9114 32.6724 21.2712 32.2435L38.1637 12.1926L38.1563 12.1826Z"
              fill="#4848FF"
              fill-opacity="0.4"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="85"
            height="84"
            viewBox="0 0 85 84"
            fill="none"
            class="mt-96 mb-24 hidden md:block lg:block"
          >
            <ellipse cx="41.8726" cy="42" rx="41.3726" ry="42" fill="#EBEDFE" />
            <path
              d="M79.8745 6.36299L79.4238 6.89586L79.4367 6.91087L67.2833 21.3357L37.7236 56.4272C37.094 57.1753 36.253 57.558 35.4098 57.558C34.9052 57.558 34.4006 57.4179 33.937 57.1427L35.7247 58.8414L38.4244 61.4057C39.0239 61.9735 39.7485 62.2562 40.473 62.2562C41.3162 62.2562 42.1572 61.876 42.7868 61.1255L84.4999 11.6091L79.8745 6.36299Z"
              fill="#4848FF"
            />
            <path
              d="M67.2737 21.3196L40.2305 53.4191L35.2536 48.6908L35.2385 48.6758L18.8305 33.0852L14.7334 38.8941L30.7014 54.0645L30.7165 54.0795L33.9382 57.1416C34.4018 57.4168 34.9064 57.5569 35.411 57.5569C36.2541 57.5569 37.0951 57.1766 37.7248 56.4261L67.2867 21.3371L67.2737 21.3196Z"
              fill="#4848FF"
              fill-opacity="0.4"
            />
          </svg>
        </template>

        <template #after-submit-subtitle>
          <div
            class="mb-10 text-center text-20 font-medium md:text-30 lg:text-30"
          >
            Your <span class="text-primary">50% discount</span> is<br />now
            active!
          </div>
        </template>

        <template v-slot:after-submit-text="slotProps">
          <div
            class="flex flex-col items-center text-center md:mb-[-32px] lg:mb-[-32px]"
          >
            <p
              class="mb-6 text-14 text-gray-700 md:mb-10 md:text-18 lg:mb-10 lg:text-18"
            >
              <span v-if="slotProps.submitSheetName === sheetName">
                Please use the same email address<br />when signing up for a
                free trial <br class="md:hidden lg:hidden" />or subscription.
              </span>
              <span v-else
                >You will soon receive an email<br />about your free trial
                account.<br />Please enjoy it for the next two weeks!</span
              >
            </p>
            <span class="text-14 text-gray-500 md:text-16 lg:text-16"
              >- Zenerate Team -</span
            >
          </div>
        </template>
      </FormContent> -->

      <!-- <button
        @click="openCalendlyPopup"
        class="demo-button-gtm flex h-44 w-[230px] flex-row items-center justify-center rounded-100 border-1 border-solid border-core-500 bg-white hover:bg-core-20 md:h-72 md:w-[326px] lg:h-72 lg:w-[326px]"
      >
        <span class="text-12 font-medium text-primary md:text-18 lg:text-18"
          >Schedule a Demo</span
        >
        <IconBase
          icon-name="arrow-right"
          iconColor="#4D49F4"
          class="pointer-events-none ml-6 h-16 w-16 md:ml-10 md:h-24 md:w-24 lg:ml-10 lg:h-24 lg:w-24"
        />
      </button> -->
    </div>
  </section>
</template>
<script lang="ts" setup>
// import Emitter from '/Libraries/bus'
// import { FormContent, IconBase } from '/Components/'
// import { MENU_EVENT } from '/Constants/eventConstant'
// import { SheetName } from '/Components/FormContent.vue'
import Calendly from '/Components/Calendly.vue'

// 이벤트 변경시 수정
// type EventType = 'phx' | 'boston' | 'la'
// const CURRENT_EVENT: EventType = 'la'
// const EVENT_SHEET_NAME_DICT: Record<EventType, SheetName> = {
//   phx: 'PHXDisc',
//   boston: 'BostonDisc',
//   la: 'LADisc',
// }
// const sheetName = EVENT_SHEET_NAME_DICT[CURRENT_EVENT]

// const openCalendlyPopup = () => {
//   Emitter.emit(MENU_EVENT.TOGGLE_CALENDLY_POPUP, {
//     flag: true,
//     trigger: 'bisnow',
//   })
// }
</script>
<style lang="scss" scoped>
.full-height {
  height: 100vh; /* Fallback for older browsers */
  height: 100dvh; /* New dynamic viewport unit */
}

// .bisnow-event-card {
//   user-select: none;
//   background-repeat: no-repeat;
//   background-position: center bottom;
//   background-color: theme('colors.white');
//   background-size: 100% auto;
//   background-image: url('/public/en/bisnow/card_background.png');
// }
</style>
<style lang="scss">
.bisnow-event-calendly {
  #calendly {
    height: 100%;
    max-height: 100% !important;
  }
}

// .bisnow-event-form {
//   .form {
//     margin-top: 8px;

//     @include en-mobile {
//       margin-top: 0px;
//     }

//     .form-row {
//       width: 326px;
//       margin-left: auto;
//       margin-right: auto;

//       @include en-mobile {
//         width: 230px;
//       }

//       .input-wrapper {
//         input {
//           width: 100%;
//           height: 48px;
//           border: solid 1px theme('colors.gray.350');
//           border-radius: 6px;
//           padding: 0 16px;
//           font-size: 16px;
//           &::placeholder {
//             font-size: 16px;
//           }

//           @include en-mobile {
//             height: 38px;
//             padding: 0 13px;
//             font-size: 13px;
//             &::placeholder {
//               font-size: 13px;
//             }
//           }
//         }
//       }
//     }
//   }

//   .submit-button {
//     width: 326px;
//     font-size: 16px;
//     height: 48px;
//     min-height: 48px;
//     border-radius: 8px;
//     margin-top: 20px;

//     @include en-mobile {
//       width: 230px;
//       font-size: 12px;
//       height: 36px;
//       min-height: 36px;
//       border-radius: 6px;
//       margin-top: 12px;
//     }

//     &.sub-submit-button {
//       margin-top: 6px;

//       @include en-mobile {
//         margin-top: 4px;
//       }
//     }

//     &:not(.sub-submit-button) {
//       background-color: theme('colors.black') !important;
//       &:hover {
//         background-color: theme('colors.gray.800') !important;
//       }
//       &.disabled {
//         background-color: theme('colors.gray.350') !important;
//       }
//     }
//   }
// }
</style>
