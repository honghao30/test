<template>
  <div v-if="!formSubmitted" class="form-wrapper flex flex-col items-center">
    <slot name="form-title"></slot>
    <div class="form mt-10 mb-0 w-full">
      <div
        v-if="
          contentList.includes('firstName') || contentList.includes('lastName')
        "
        class="form-row"
        :class="{ 'first-row': contentList[0] === 'firstName' }"
      >
        <div
          class="input-wrapper first-name"
          :class="{ error: SignUpForm.firstName.valid === false }"
        >
          <p class="error-message">Enter your first name.</p>
          <input
            type="text"
            placeholder="First Name"
            autocomplete="new-firstname"
            v-model="SignUpForm.firstName.value"
            class="first-input-gtm"
            @input="(v) => validation('firstName')"
          />
        </div>
        <div
          class="input-wrapper last-name"
          :class="{ error: SignUpForm.lastName.valid === false }"
        >
          <p class="error-message">Enter your last name.</p>
          <input
            type="text"
            placeholder="Last Name"
            autocomplete="new-lastname"
            v-model="SignUpForm.lastName.value"
            @input="(v) => validation('lastName')"
          />
        </div>
      </div>
      <div
        v-if="contentList.includes('email')"
        class="form-row"
        :class="{ 'first-row': contentList[0] === 'email' }"
      >
        <div
          class="input-wrapper email"
          :class="{ error: SignUpForm.email.valid === false }"
        >
          <p class="error-message">Invalid email address format.</p>
          <input
            type="text"
            placeholder="Enter Work Email"
            autocomplete="new-email"
            inputmode="email"
            v-model="SignUpForm.email.value"
            @input="(v) => validation('email')"
          />
          <p
            v-if="
              sheetName !== 'AppFreeTrial' &&
              sheetName !== 'ZenApp' &&
              sheetName !== 'AppWaitlist' &&
              sheetName !== 'PHXDisc' &&
              sheetName !== 'BostonDisc' &&
              sheetName !== 'LADisc'
            "
            class="mt-3 px-3 text-10 text-core-500"
          >
            *Company email preferred
          </p>
        </div>
      </div>
      <div
        v-if="contentList.includes('company')"
        class="form-row"
        :class="{ 'first-row': contentList[0] === 'company' }"
      >
        <div
          class="input-wrapper company"
          :class="{ error: SignUpForm.company.valid === false }"
        >
          <p class="error-message">Enter your company name.</p>
          <input
            type="text"
            placeholder="Enter Company"
            autocomplete="new-company"
            v-model="SignUpForm.company.value"
            @input="(v) => validation('company')"
          />
        </div>
      </div>
      <div
        v-if="contentList.includes('jobTitle')"
        class="form-row"
        :class="{ 'first-row': contentList[0] === 'jobTitle' }"
        ref="jobTitleDropdownContainer"
      >
        <div
          class="input-wrapper job-title"
          :class="{ error: SignUpForm.jobTitle.valid === false }"
        >
          <template v-if="jobTitleInputType === 'dropdown'">
            <Dropdown.Wrapper
              :container="jobTitleDropdownContainer"
              @apply-show="() => setDropdownOptionWidth()"
              class="text-13-regular h-fit w-fit overflow-hidden rounded-6 border-1 border-solid border-gray-350 text-gray-700 lg:text-16"
            >
              <template v-slot="slotProps">
                <div
                  ref="dropdownBtn"
                  class="flex h-38 w-full flex-row items-center pl-12 pr-6 lg:h-48 lg:pr-8"
                >
                  <span
                    class="text-13-medium lg:text-16"
                    :class="
                      SignUpForm.jobTitle.value === ''
                        ? 'text-13 text-[#c4c4c4] lg:text-16'
                        : slotProps.open
                        ? 'text-gray-450'
                        : 'text-black'
                    "
                    >{{
                      SignUpForm.jobTitle.value === ''
                        ? 'Select Job Title'
                        : SignUpForm.jobTitle.value
                    }}</span
                  >
                  <IconBase
                    class="ml-auto h-18 w-18"
                    :width="18"
                    :height="18"
                    :icon-name="slotProps.open ? 'caret-up' : 'caret-down'"
                    :icon-color="'#8D9095'"
                  />
                </div>
              </template>
              <template #popup>
                <Dropdown.Select class="w-fit overflow-hidden rounded-6">
                  <div
                    class="z-[1] h-fit overflow-y-auto rounded-6 bg-white p-4"
                    :style="`width: ${dropdownBtnWidth}px`"
                  >
                    <div v-for="option in JOB_OPTIONS" :key="option.key">
                      <Dropdown.Option
                        :value="option"
                        :show-checkmark="true"
                        :selected="option.value === SignUpForm.jobTitle.value"
                        class="h-36 rounded-4 py-6 px-8 text-13 lg:h-46 lg:text-16"
                        :class="
                          option.value === SignUpForm.jobTitle.value
                            ? '!text-primary'
                            : 'cursor-pointer text-gray-700  hover:bg-gray-70 '
                        "
                        @click="() => selectJobTitle(option.key)"
                      >
                        <span>{{ option.value }}</span>
                      </Dropdown.Option>
                    </div>
                  </div>
                </Dropdown.Select>
              </template>
            </Dropdown.Wrapper>
          </template>
          <template v-else>
            <p class="error-message">Enter your job title.</p>
            <div class="relative h-fit w-full">
              <input
                type="text"
                placeholder="Enter Job Title"
                autocomplete="new-job-title"
                v-model="SignUpForm.jobTitle.value"
                @input="(v) => validation('jobTitle')"
              />
              <button
                type="button"
                class="absolute right-6 top-[50%] flex h-28 w-28 min-w-28 translate-y-[-50%] flex-row items-center justify-center rounded-16 border-1 border-solid border-gray-350 bg-white shadow-200 hover:bg-gray-70 lg:right-8 lg:h-32 lg:w-32 lg:min-w-32"
                @click="() => toggleJobTitleInputType('dropdown')"
              >
                <IconBase
                  icon-name="close"
                  icon-color="#484A4F"
                  class="h-16 w-16 min-w-16 max-w-16 lg:h-18 lg:w-18 lg:min-w-18 lg:max-w-18"
                />
              </button>
            </div>
          </template>
        </div>
      </div>
      <div
        v-if="contentList.includes('address')"
        class="form-row"
        :class="{ 'first-row': contentList[0] === 'address' }"
      >
        <div
          class="input-wrapper address"
          :class="{ error: SignUpForm.address.valid === false }"
        >
          <p class="error-message">Enter your address.</p>
          <input
            type="text"
            placeholder="Address (Los Angeles only)"
            autocomplete="new-address"
            v-model="SignUpForm.address.value"
            @input="(v) => validation('address')"
          />
        </div>
      </div>
      <div
        v-if="contentList.includes('lotSize')"
        class="form-row"
        :class="{ 'first-row': contentList[0] === 'lotSize' }"
      >
        <div class="input-wrapper lotSize">
          <input
            type="text"
            placeholder="Lot Size (If known)"
            autocomplete="new-lot-size"
            v-model="SignUpForm.lotSize.value"
          />
        </div>
      </div>
      <div
        v-if="contentList.includes('message')"
        class="form-row"
        :class="{ 'first-row': contentList[0] === 'message' }"
      >
        <div class="input-wrapper message">
          <textarea
            type="text"
            :spellcheck="false"
            placeholder="Message (Optional)"
            autocomplete="new-message"
            v-model="SignUpForm.message.value"
          />
        </div>
      </div>
      <div
        v-if="contentList.includes('projectDetail')"
        class="form-row"
        :class="{ 'first-row': contentList[0] === 'projectDetail' }"
      >
        <div class="input-wrapper projectDetail">
          <textarea
            type="text"
            :spellcheck="false"
            placeholder="Tell us more about your project.
(ex. 1 story podium parking preferred)"
            autocomplete="new-projectDetail"
            v-model="SignUpForm.projectDetail.value"
          />
        </div>
      </div>
      <div
        v-if="contentList.includes('interest')"
        class="form-row mb-8"
        :class="{ 'first-row': contentList[0] === 'interest' }"
      >
        <div class="input-wrapper">
          <div
            class="hover-pointer flex flex-row items-center"
            @click="
              () =>
                (SignUpForm.interest.value =
                  SignUpForm.interest.value === 'MODULAR' ? '' : 'MODULAR')
            "
          >
            <IconBase
              :icon-name="
                SignUpForm.interest.value === 'MODULAR'
                  ? 'checkbox-checked'
                  : 'checkbox'
              "
              :width="16"
              :height="16"
              class="w-16 min-w-16 max-w-16 lg:hidden"
            />
            <IconBase
              :icon-name="
                SignUpForm.interest.value === 'MODULAR'
                  ? 'checkbox-checked'
                  : 'checkbox'
              "
              :width="20"
              :height="20"
              class="hidden w-20 min-w-20 max-w-20 lg:block"
            />
            <span class="ml-8 text-12 md:text-12 lg:text-14"
              >I am interested in an app for modular housing</span
            >
          </div>
        </div>
      </div>
    </div>
    <slot name="additional-text"></slot>

    <button
      type="button"
      class="submit-button-gtm submit-button"
      :disabled="!canSubmitForm"
      :class="{ disabled: !canSubmitForm }"
      @click="() => submitForm()"
    >
      <DotSpinnerWhite
        v-if="loading"
        :loading="true"
        class="pointer-events-none !mx-auto !w-fit"
      />
      <span v-else class="pointer-events-none">{{ submitBtnText }}</span>
    </button>

    <!-- !Temporary code for an event -->
    <button
      v-if="
        sheetName === 'PHXDisc' ||
        sheetName === 'BostonDisc' ||
        sheetName === 'LADisc'
      "
      type="button"
      class="submit-button-gtm submit-button sub-submit-button"
      :disabled="!canSubmitForm"
      :class="{ disabled: !canSubmitForm }"
      @click="
        () => {
          if (sheetName === 'PHXDisc') {
            submitForm('PHXTrial')
          }
          if (sheetName === 'BostonDisc') {
            submitForm('BostonTrial')
          }
          if (sheetName === 'LADisc') {
            submitForm('LATrial')
          }
        }
      "
    >
      <DotSpinnerWhite
        v-if="loading"
        :loading="true"
        class="pointer-events-none !mx-auto !w-fit"
      />
      <span v-else class="pointer-events-none"
        >Submit and Start a 2-week Trial</span
      >
    </button>

    <slot name="under-submit-btn-text"></slot>
  </div>
  <transition v-else name="fade">
    <div class="mt-40 flex flex-col items-center">
      <slot name="after-submit-title"></slot>
      <slot name="after-submit-icon">
        <svg
          width="100"
          height="101"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="mb-14"
        >
          <ellipse
            cx="49.2531"
            cy="50.4098"
            rx="49.2531"
            ry="50"
            fill="#EBEDFE"
          />
          <path
            d="M94.4934 7.98485L93.9568 8.61921L93.9723 8.63708L79.5039 25.8095L44.3138 67.5852C43.5642 68.4756 42.563 68.9313 41.5593 68.9313C40.9585 68.9313 40.3578 68.7645 39.8059 68.4369L41.9341 70.4592L45.1481 73.5118C45.8618 74.1879 46.7243 74.5244 47.5869 74.5244C48.5906 74.5244 49.5918 74.0717 50.3414 73.1783L99.9999 14.2302L94.4934 7.98485Z"
            fill="#4848FF"
          />
          <path
            d="M79.4926 25.7902L47.2983 64.0039L41.3734 58.375L41.3554 58.3572L21.8221 39.7968L16.9446 46.7123L35.9541 64.7723L35.9721 64.7901L39.8074 68.4355C40.3593 68.7631 40.96 68.9299 41.5607 68.9299C42.5645 68.9299 43.5657 68.4772 44.3153 67.5837L79.508 25.8111L79.4926 25.7902Z"
            fill="#4848FF"
            fill-opacity="0.4"
          />
        </svg>
      </slot>

      <slot name="after-submit-subtitle">
        <span class="mb-24 text-24 font-medium lg:text-28">Thank you!</span>
      </slot>

      <slot name="after-submit-text" :submitSheetName="submitSheetName"></slot>
    </div>
  </transition>
</template>
<script lang="ts" setup>
import { PropType, computed, ref } from 'vue'
import router from '/@/router'
import Emitter from '/Libraries/bus'
import ApiService from '/Services/api'
import Validation from '/Utils/Validation'
import { MENU_EVENT } from '/Constants/eventConstant'
import * as Dropdown from '/Components/ui/dropdown'
import IconBase from '/Components/ui/IconBase.vue'
import DotSpinnerWhite from '/Components/ui/DotSpinnerWhite.vue'

const props = defineProps({
  sheetName: {
    type: String as PropType<SheetName>,
    required: true,
  },
  submitBtnText: {
    type: String,
    default: 'Submit',
  },
})

export type SheetName =
  | 'Beta'
  | 'AIConsulting'
  | 'Modular'
  | 'ED1Report'
  | 'AppWaitlist'
  | 'AppFreeTrial'
  | 'ZenApp'
  | 'PHXDisc'
  | 'BostonDisc'
  | 'LADisc'
type InputType =
  | 'firstName'
  | 'lastName'
  | 'email'
  | 'company'
  | 'jobTitle'
  | 'address'
  | 'lotSize'
  | 'message'
  | 'projectDetail'
  | 'interest'
const CONTENT_LIST_DICT: Record<SheetName, InputType[]> = {
  Beta: [
    'firstName',
    'lastName',
    'email',
    'company',
    'jobTitle',
    'message',
    'interest',
  ],
  AIConsulting: [
    'firstName',
    'lastName',
    'email',
    'company',
    'jobTitle',
    'message',
  ],
  Modular: ['firstName', 'lastName', 'email', 'company', 'jobTitle', 'message'],
  ED1Report: [
    'firstName',
    'lastName',
    'email',
    'company',
    'address',
    'lotSize',
    'projectDetail',
  ],
  AppWaitlist: ['firstName', 'lastName', 'email', 'company', 'jobTitle'],
  AppFreeTrial: ['firstName', 'lastName', 'company', 'email'],
  ZenApp: ['firstName', 'lastName', 'email', 'company', 'jobTitle', 'message'],
  PHXDisc: ['firstName', 'lastName', 'company', 'email'],
  BostonDisc: ['firstName', 'lastName', 'company', 'email'],
  LADisc: ['firstName', 'lastName', 'company', 'email'],
}

const sheetName = computed(() => props.sheetName)
const submitSheetName = ref<string>(sheetName.value)
const contentList = computed(() => CONTENT_LIST_DICT[sheetName.value])

const jobTitleDropdownContainer = ref<HTMLElement>()
const dropdownBtn = ref<HTMLElement>()
const dropdownBtnWidth = ref(0)
const setDropdownOptionWidth = () => {
  dropdownBtnWidth.value = dropdownBtn.value?.offsetWidth
}
type JobOptionKey =
  | 'architect'
  | 'developer'
  | 'investor'
  | 'general_contractor'
  | 'broker'
  | 'other'
const JOB_OPTIONS: { key: JobOptionKey; value: string }[] = [
  { key: 'architect', value: 'Architect' },
  { key: 'developer', value: 'Developer' },
  { key: 'investor', value: 'Investor' },
  { key: 'general_contractor', value: 'General Contractor' },
  { key: 'broker', value: 'Broker' },
  { key: 'other', value: 'Other' },
]
type JobTitleInputType = 'dropdown' | 'input'
const jobTitleInputType = ref<JobTitleInputType>('dropdown')
const toggleJobTitleInputType = (type: JobTitleInputType) => {
  jobTitleInputType.value = type
  SignUpForm.value.jobTitle.value = ''
  SignUpForm.value.jobTitle.valid = null
}
const selectJobTitle = (key: JobOptionKey) => {
  if (key === 'other') {
    toggleJobTitleInputType('input')
    return
  }
  SignUpForm.value.jobTitle.value = JOB_OPTIONS.find(
    (option) => option.key === key
  )?.value
  SignUpForm.value.jobTitle.valid = true
}

const SignUpForm = ref<
  Record<
    InputType,
    {
      value: string
      validator?: (v: any) => boolean
      valid: boolean
    }
  >
>({
  firstName: {
    value: '',
    validator: Validation.string,
    valid: null,
  },
  lastName: {
    value: '',
    validator: Validation.string,
    valid: null,
  },
  email: {
    value: '',
    validator: Validation.email,
    valid: null,
  },
  company: {
    value: '',
    validator: Validation.string,
    valid: null,
  },
  jobTitle: {
    value: '',
    validator: Validation.string,
    valid: null,
  },
  address: {
    value: '',
    validator: Validation.string,
    valid: null,
  },
  lotSize: {
    value: '',
    valid: true,
  },
  message: {
    value: '',
    valid: true,
  },
  projectDetail: {
    value: '',
    valid: true,
  },
  interest: {
    value: '',
    valid: true,
  },
})

const canSubmitForm = computed(
  () =>
    Object.keys(SignUpForm.value)
      .filter((key) => contentList.value.includes(key as InputType))
      .every((key) => SignUpForm.value[key].valid) || loading.value
)

const loading = ref(false)
const formSubmitted = ref(false)

const validation = (item: string) => {
  const inputValue = SignUpForm.value[item].value
  SignUpForm.value[item].valid =
    SignUpForm.value[item].validator(inputValue) && inputValue.trim() !== ''
}

const submitForm = async (newSheetName?: string) => {
  submitSheetName.value = newSheetName ?? sheetName.value

  const form = {}
  for (const key in SignUpForm.value) {
    if (contentList.value.includes(key as InputType)) {
      form[key] = String(SignUpForm.value[key].value)
    }
  }

  const emailForm = {
    ...form,
    tag:
      sheetName.value === 'Modular'
        ? 'Modular'
        : sheetName.value === 'Beta'
        ? 'Zenerate App'
        : sheetName.value === 'AIConsulting'
        ? 'AI Consulting'
        : sheetName.value === 'ED1Report'
        ? 'ED1 Report'
        : sheetName.value === 'AppWaitlist'
        ? 'app_waitlist'
        : sheetName.value === 'AppFreeTrial'
        ? 'App Free Trial'
        : sheetName.value === 'ZenApp'
        ? 'Zen App'
        : sheetName.value === 'PHXDisc'
        ? 'PHX'
        : sheetName.value === 'BostonDisc'
        ? 'Boston'
        : sheetName.value === 'LADisc'
        ? 'LA'
        : '',
  }

  const currentParams = { ...router.currentRoute.value.query }
  for (const key of ['utm_source', 'utm_medium']) {
    form[key] = currentParams[key]
  }

  try {
    loading.value = true

    if (sheetName.value === 'Modular') {
      Emitter.emit(MENU_EVENT.TOGGLE_CALENDLY_POPUP, {
        flag: true,
        trigger: 'modularlandingpage',
      })
    }

    await ApiService.XSLX_TEST(submitSheetName.value, form)
    await ApiService.SEND_EMAIL(emailForm)

    if (sheetName.value === 'Modular') {
      const activeCampaignForm = {
        email: SignUpForm.value.email.value,
        firstName: SignUpForm.value.firstName.value,
        lastName: SignUpForm.value.lastName.value,
        company: SignUpForm.value.company.value,
        jobTitle: SignUpForm.value.jobTitle.value,
        note: SignUpForm.value.message.value,
        tag: 'modular',
      }

      await ApiService.ACTIVE_CAMPAIGN(activeCampaignForm)
    }

    if (sheetName.value === 'ED1Report') {
      const activeCampaignForm = {
        email: SignUpForm.value.email.value,
        firstName: SignUpForm.value.firstName.value,
        lastName: SignUpForm.value.lastName.value,
        company: SignUpForm.value.company.value,
        ed1_address: SignUpForm.value.address.value,
        ed1_lot_size: SignUpForm.value.lotSize.value,
        ed1_message: SignUpForm.value.projectDetail.value,
        tag: 'ed1_report',
      }

      await ApiService.ACTIVE_CAMPAIGN(activeCampaignForm)
    }

    loading.value = false
    formSubmitted.value = true
  } catch (e) {}
}
</script>
<style lang="scss" scoped>
.form-wrapper {
  width: 100%;
}

.form {
  input {
    width: 100%;
    height: 50px;
    border: solid 1px theme('colors.gray.350');
    border-radius: 6px;
    padding: 0 16px;
    font-size: 16px;
    &::placeholder {
      font-size: 16px;
    }

    @include en-tablet {
      height: 40px;
      padding: 0 13px;
      font-size: 13px;
      &::placeholder {
        font-size: 13px;
      }
    }
    @include en-mobile {
      height: 40px;
      padding: 0 13px;
      font-size: 13px;
      &::placeholder {
        font-size: 13px;
      }
    }
  }

  textarea {
    width: 100%;
    height: 100px;
    border: solid 1px theme('colors.gray.350');
    border-radius: 6px;
    padding: 14px 16px;
    font: inherit;
    resize: none;
    font-size: 16px;
    &::placeholder {
      font-size: 16px;
    }

    @include en-tablet {
      height: 80px;
      padding: 11px 13px;
      font-size: 13px;
      &::placeholder {
        font-size: 13px;
      }
    }
    @include en-mobile {
      height: 80px;
      padding: 11px 13px;
      font-size: 13px;
      &::placeholder {
        font-size: 13px;
      }
    }
  }

  .form-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }

  .input-wrapper {
    width: 100%;
    &.first-name {
      margin-right: 4px;
    }

    .error-message {
      height: 0;
      overflow: hidden;
      color: transparent;
      font-size: 12px;

      @include en-tablet {
        font-size: 10px;
      }

      @include en-mobile {
        font-size: 10px;
      }
    }

    &.error {
      input {
        border: solid 1px theme('colors.red.400');
      }
      .error-message {
        color: theme('colors.red.500');
        height: fit-content;
        margin-bottom: 4px;
      }
    }
  }
}

.form-row.first-row {
  .error-message {
    height: fit-content;
    margin-bottom: 4px;
  }
}

.submit-button {
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  height: 48px;
  min-height: 48px;
  margin-top: 10px;
  border-radius: 6px;
  color: white;
  background-color: theme('colors.primary.DEFAULT');
  &:hover {
    background-color: theme('colors.core.700');
  }
  &.disabled {
    background-color: theme('colors.gray.350');
    cursor: not-allowed;
  }

  @include en-tablet {
    font-size: 13px;
    height: 36px;
    min-height: 36px;
  }
  @include en-mobile {
    font-size: 13px;
    height: 36px;
    min-height: 36px;
  }
}
</style>
