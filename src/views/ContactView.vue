<template>
  <section class="section section-contact">
    <div class="contact-hero-wrapper">
      <div
        id="contact-form-gtm"
        class="contact-form-wrapper"
        :class="{ done: sendEmailStatus }"
        v-if="!sendEmailStatus"
      >
        <div class="hero-text-wrapper">
          <p class="title">Contact Us</p>
          <p class="text">We'd love to hear from you</p>
          <div class="image-wrapper">
            <img
              class="title-image"
              src="/en/img/contact_email.png"
              alt="contact us"
            />
          </div>
        </div>
        <div class="contact-text-wrapper">
          <div class="form-text">
            <div class="label-text">
              <p class="label-title">Your Company</p>
              <input
                type="text"
                placeholder="Zenerate"
                v-model="contactForm.company.value"
                class="first-input-gtm"
                @blur="(v) => validation('company')"
              />
              <p
                class="label-error"
                :class="{ active: contactForm.company.valid === false }"
              >
                Please Enter!
              </p>
            </div>
            <div class="label-dropdown">
              <SelectInput
                placeholder="Select"
                :items="items"
                title="Inquiries"
                :skipTranslate="true"
                :selected="contactForm.purpose.value"
                :valid="contactForm.purpose.valid"
                @onSelect="
                  (v) => (
                    (contactForm.purpose.value = v), validation('purpose')
                  )
                "
              >
                <template #label>
                  <p class="label-title">Inquiries</p>
                </template>
              </SelectInput>
            </div>

            <div class="label-text">
              <p class="label-title">Name</p>
              <input
                type="text"
                v-model="contactForm.name.value"
                @blur="(v) => validation('name')"
              />
              <p
                class="label-error"
                :class="{ active: contactForm.name.valid === false }"
              >
                Please Enter!
              </p>
            </div>

            <div class="label-text">
              <p class="label-title">Email Address</p>
              <input
                type="text"
                placeholder="abcd@zenerate.ai"
                autocomplete="new-email"
                inputmode="email"
                v-model="contactForm.email.value"
                @blur="(v) => validation('email')"
              />
              <p
                class="label-error"
                :class="{ active: contactForm.email.valid === false }"
              >
                Please Enter Valid Email Address!
              </p>
            </div>
          </div>
          <div class="label-textarea">
            <p class="label-title">Message</p>
            <textarea
              v-model="contactForm.message.value"
              :rows="7"
              @blur="(v) => validation('message')"
            />
          </div>
          <div class="form-send-wrapper">
            <div class="dummy" ref="dummy"></div>
            <button
              class="send-button-gtm form-send start-button hover-pointer bg-primary text-white hover:text-core-200 active:bg-core-700 active:text-white"
              :class="{ disabled: sendEmailStatus }"
              @click="() => sendEmail()"
            >
              {{ sendEmailStatus ? 'DONE' : 'SUBMIT' }}
            </button>
          </div>
        </div>
      </div>
      <transition name="fade">
        <div class="contact-form-success" v-if="sendEmailStatus">
          <div class="contact-form-inner">
            <div class="check-wrapper">
              <div class="circle">
                <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m121.428.845-.836.845.024.024-22.525 22.892-54.788 55.688a6.006 6.006 0 0 1-7.018 1.136l3.313 2.695 5.004 4.07a6.013 6.013 0 0 0 3.797 1.35 5.99 5.99 0 0 0 4.289-1.795L130 9.17 121.428.845Z"
                    fill="#4848FF"
                  />
                  <path
                    d="m98.07 24.582-50.122 50.94-9.225-7.503-.028-.024-30.41-24.742L.69 52.472l29.596 24.074.028.024 5.971 4.86c.86.436 1.795.659 2.73.659a5.99 5.99 0 0 0 4.289-1.795l54.79-55.684-.023-.028Z"
                    fill="#4848FF"
                    fill-opacity=".4"
                  />
                </svg>
              </div>
            </div>
            <div class="inner-content">
              <p class="content-heading">Thank you!</p>
              <p class="content-text">
                We'll get back to you as soon as possible.
              </p>
              <p class="content-contact">
                <span>If you do not receive a reply&nbsp;</span>
                <span>within 2 business days</span> <br />
                please email
                <a href="mailto: contact@zenerate.ai">contact@zenerate.ai </a>
              </p>
              <router-link
                class="link-button"
                :to="{ name: 'landing', query: getCurrentUtmQuery(router) }"
              >
                View Product Overview
                <IconBase
                  icon-name="arrow-right"
                  :width="24"
                  :height="24"
                  iconColor="#4D49F4"
                  class="ml-8"
                />
              </router-link>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div class="section section-footer">
      <Footer />
    </div>
  </section>
</template>
<script lang="ts" setup>
import { reactive, ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useHead } from '@vueuse/head'
import ApiService from '/Services/api'
import Store from '/Store/index'
import Validation from '/Utils/Validation'
import { getCurrentUtmQuery } from '/Utils/index'
import Footer from '/Components/Footer.vue'
import SelectInput from '/Components/SelectInput.vue'
import { IconBase } from '/Components/'
// const fullpage = computed(() => Store.state.root.FullPage)

// onMounted(() => {
//   if (fullpage.value) {
//     fullpage.value.destroy()
//   }
// })

const router = useRouter()

type Item = {
  id: number
  value: string
  label: string
  ref?: string
}

const items: Item[] = [
  {
    id: 1,
    value: 'product_service',
    label: 'Product / Service',
  },
  {
    id: 2,
    value: 'billing',
    label: 'Billing',
  },
  {
    id: 3,
    value: 'partnerships_investments',
    label: 'Partnerships & Investments',
  },
  {
    id: 4,
    value: 'pr_media',
    label: 'PR / Media',
  },
  {
    id: 5,
    value: 'careers',
    label: 'Careers',
  },
  {
    id: 6,
    value: 'other',
    label: 'Other',
  },
]
const sendEmailStatus = ref(false)

const contactForm = reactive({
  company: {
    value: '',
    validator: Validation.string,
    valid: null,
  },
  name: {
    value: '',
    validator: Validation.string,
    valid: null,
  },
  email: {
    value: '',
    validator: Validation.email,
    valid: null,
  },
  purpose: {
    value: null,
    validator: (v) => true,
    valid: null,
  },
  message: {
    value: '',
    validator: (v) => true,
    valid: true,
  },
})

const validation = (item: string) => {
  contactForm[item].valid = contactForm[item].validator(contactForm[item].value)
}

const resetForm = () => {
  Object.assign(contactForm, {
    company: {
      value: '',
      validator: Validation.string,
      valid: null,
    },
    name: {
      value: '',
      validator: Validation.string,
      valid: null,
    },
    email: {
      value: '',
      validator: Validation.email,
      valid: null,
    },
    purpose: {
      value: null,
      validator: (v) => true,
      valid: null,
    },
    message: {
      value: '',
      validator: Validation.string,
      valid: null,
    },
  })
}

const dummy = ref(null)

const sendEmail = async () => {
  if (sendEmailStatus.value == true) return
  dummy.value.focus()
  let isValid = true
  const form = { tag: 'Contact' }
  for (const key in contactForm) {
    if (!contactForm[key].valid) {
      contactForm[key].valid = false
      isValid = false
    } else {
      if (key === 'purpose') {
        form[key] = contactForm[key].value.label
      } else {
        form[key] = contactForm[key].value
      }
    }
  }
  if (!isValid) return
  await ApiService.SEND_EMAIL(form)
  resetForm()
  sendEmailStatus.value = true

  setTimeout(() => {
    sendEmailStatus.value = false
  }, 10000)
}

useHead({
  title: `Contact Us At Zenerate`,
  htmlAttrs: { lang: 'en' },
  link: [{ rel: 'canonical', href: 'https://www.zenerate.ai/contact' }],
  meta: [
    {
      name: `description`,
      content: `Contact us! We'd love to talk about how we can work together. Get in touch and let us know how we can help.`,
    },
    {
      hid: 'twitter:title',
      property: 'twitter:title',
      content: `Contact Us At Zenerate`,
    },
    {
      hid: 'twitter:description',
      property: 'twitter:description',
      content: `Contact us! We'd love to talk about how we can work together. Get in touch and let us know how we can help.`,
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
      content: 'https://www.zenerate.ai/contact',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: `Contact Us At Zenerate`,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: `Contact us! We'd love to talk about how we can work together. Get in touch and let us know how we can help.`,
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
.section-contact {
  @include relative;
  min-width: 100%;
  width: 100%;
  .contact-hero-wrapper {
    @include relative;
    @include flex();
    flex-wrap: nowrap;
    padding-top: 100px;

    .image-wrapper {
      @include flex();
      width: 100%;
      object-fit: contain;
      margin-top: 46px;
      img {
        width: 157px;
      }

      @include en-tablet {
        margin-top: 36px;

        img {
          width: 120px;
        }
      }

      @include en-mobile {
        justify-content: flex-end;
        margin-top: 0px;
        img {
          width: 80px;
        }
      }
    }

    .hero-text-wrapper {
      p {
        color: $text-darken;
        &.title {
          @include semi-bold(30);

          @include en-tablet {
            @include semi-bold(27);
          }
          @include en-mobile {
            @include semi-bold(15);
          }
        }
        &.text {
          @include medium(18);
          @include en-tablet {
            @include medium(16);
            line-height: 20px;
          }
          @include en-mobile {
            @include medium(12);
            line-height: 16px;
          }
        }
      }

      @include en-desktop {
        margin-right: 100px;
      }

      @include en-tablet {
        margin-right: 70px;
      }

      @include en-mobile {
        margin-bottom: 24px;
      }
    }
  }

  .contact-text-wrapper {
    @include vertical-center();
    width: 360px;

    @include en-tablet {
      width: 350px;
    }

    @include en-mobile {
      width: 260px;
    }
  }
  .contact-form-success {
    @include center-center;
    width: 100%;
    height: 100%;
    background-color: $white;
    padding: 80px 0px 0px;
    z-index: 10;

    @include en-tablet {
      padding: 50px 0px 0px;
    }

    @include en-mobile {
      padding: 40px 0px 0px;
    }

    .contact-form-inner {
      text-align: center;

      .content-heading {
        @include semi-bold(40);
        color: $text-darken;
        margin-bottom: 12px;

        @include en-tablet {
          @include semi-bold(34);
        }

        @include en-mobile {
          @include semi-bold(30);
          margin-bottom: 6px;
        }
      }
      .content-text {
        @include medium(24);
        color: $text-darken;
        margin-bottom: 28px;

        @include en-tablet {
          @include medium(20);
        }

        @include en-mobile {
          @include medium(15);
          max-width: 170px;
          margin-bottom: 40px;
          line-height: 20px;
        }
      }

      .content-contact {
        @include regular(16);
        color: $text-darken;
        margin: 0px auto 160px;
        line-height: 24px;

        a {
          font-weight: 500;
          color: $core;
        }

        @include en-tablet {
          @include regular(12);
          margin: 0px auto 130px;
          line-height: 20px;
        }

        @include en-mobile {
          @include regular(12);
          max-width: 260px;
          margin: 0px auto 120px;
          line-height: 20px;
        }
      }
      .link-button {
        @include flex($justify: center);
        @include semi-bold(21);
        width: 300px;
        align-items: center;
        background: $white;
        margin: 0px auto;
        color: $navigation;
      }
    }
  }
  .contact-form-wrapper {
    @include flex();
    flex-wrap: nowrap;
    justify-content: center;
    margin: 0px auto;
    padding: 5% 10% 0px;
    background-color: $white;
    border-radius: 20px;
    @include en-mobile {
      flex-direction: column;
      padding: 40px 10% 0px;
    }

    .form-text {
      @include vertical-center;

      @include en-tablet {
        display: block;
      }
      @include en-mobile {
        display: block;
      }
    }
    .label-text {
      width: 100%;
      margin-bottom: 16px;
      input {
        @include border-set(1px, rgba($grey, 0.6), 6px);
        @include center-vertical();
        @include regular(17);
        width: 100%;
        height: 42px;
        padding: 0px 12px;
        color: $text-darken;
        &::placeholder {
          @include regular(17);
          color: rgba($black-1, 0.4);
        }
        &:focus {
          border: 1px solid #97a5f9;
        }
      }
      @include en-tablet {
        margin-bottom: 1px;

        input {
          @include regular(15);
          &::placeholder {
            @include regular(15);
          }
        }
      }
      @include en-mobile {
        margin-bottom: 1px;
        input {
          @include regular(15);
          &::placeholder {
            @include regular(15);
          }
        }
      }
    }
    .label-textarea {
      width: 100%;
      margin-bottom: 24px;
      textarea {
        @include border-set(1px, rgba($grey, 0.6), 6px);
        @include regular(17);
        width: 100%;
        height: 190px;
        padding: 4px 12px;
        color: $black-1;
        resize: none;

        &::placeholder {
          @include regular(17);
          color: rgba($black-1, 0.4);
        }
        &:focus {
          border: 1px solid #97a5f9;
        }

        @include en-tablet {
          @include regular(15);
          &::placeholder {
            @include regular(15);
          }
        }

        @include en-mobile {
          @include regular(15);
          &::placeholder {
            @include regular(15);
          }
        }
      }
    }
    .label-text,
    .label-dropdown,
    .label-textarea {
      .label-title {
        @include medium(14);
        color: $text-darken;
        margin-bottom: 8px;

        @include en-tablet {
          @include medium(12);
        }

        @include en-mobile {
          @include medium(12);
        }
      }
      .label-error {
        @include regular(12);
        width: 100%;
        color: transparent;
        text-align: right;
        &.active {
          color: #ff8686;
        }
      }
    }
    .form-send-wrapper {
      width: 100%;
      text-align: center;
      .start-button {
        @include semi-bold(18);
        width: 100%;
        height: 60px;
        margin-top: 40px;
        border-radius: 10px;
        letter-spacing: 0.1em;
        transition: all ease-in-out 0.2s;

        a {
          @include center-center();
          width: 100%;
          height: 100%;
          vertical-align: center;
          text-align: center;
        }

        // &:hover {
        //   @include elevation-3;
        //   color: rgba($white, 0.6);
        //   transform: translateY(-2px);
        // }

        // &:active {
        //   @include elevation-3;
        //   color: rgba($white, 0.6);
        //   transform: translateY(-2px);
        // }
      }
    }
    input::placeholder {
      color: $bt-secondary-stroke-disabled;
    }
  }

  .check-wrapper {
    @include relative;
    @include center-center;
    margin-bottom: 52px;

    @include en-mobile {
      @include medium(13);
      margin-bottom: 40px;
    }
    .circle {
      @include relative;
      width: 138px;
      height: 138px;
      background-color: #ebedfe;
      border-radius: 50%;
      svg {
        @include absolute(top 50% left 50%);
        transform: translate(-40%, -60%);
        width: 130px;
        height: 90px;
      }
    }

    @include en-mobile {
      .circle {
        @include relative;
        width: 110px;
        height: 110px;
        svg {
          @include absolute(top 3% left 3%);
          transform: scale(0.8);
        }
      }
    }
  }
  .section-footer {
    margin-top: 320px;
  }
}
</style>
