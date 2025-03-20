<template>
  <section class="section section-contact">
    <div class="contact-hero-wrapper">
      <div
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
        <div class="flex flex-col">
          <div class="relative mb-40 flex flex-col gap-16">
            <div class="flex flex-nowrap">
              <Form
                :inputValue="contactForm.first_name.value"
                @update:inputValue="(v) => (contactForm.first_name.value = v)"
                @blur="() => validation('first_name')"
                :isValid="true"
                required
                size="large"
                placeholder="First Name"
                typeName="text"
                label="First Name"
                width="w-117"
                direction="col"
                autocomplete="new-first-name"
              />

              <Form
                class="ml-6"
                :inputValue="contactForm.last_name.value"
                @update:inputValue="(v) => (contactForm.last_name.value = v)"
                @blur="() => validation('last_name')"
                :isValid="true"
                required
                size="large"
                placeholder="Last Name"
                typeName="text"
                label="Last Name"
                width="w-117"
                direction="col"
                autocomplete="new-first-name"
              />
            </div>
            <Form
              :inputValue="contactForm.email.value"
              @update:inputValue="(v) => (contactForm.email.value = v)"
              @blur="() => validation('email')"
              :isValid="contactForm.email.valid !== false"
              size="large"
              direction="col"
              width="w-[240px]"
              required
              placeholder="Enter Email"
              typeName="email"
              label="Work email"
              autocomplete="new-email"
            >
            </Form>
            <Form
              :inputValue="contactForm.phone.value"
              @update:inputValue="(v) => (contactForm.phone.value = v)"
              @blur="() => validation('phone')"
              :isValid="contactForm.phone.valid !== false"
              size="large"
              direction="col"
              width="w-[240px]"
              placeholder="123-456.789"
              typeName="tel"
              label="Phone number"
              autocomplete="new-phonenumber"
            >
            </Form>
            <div class="flex flex-nowrap">
              <Form
                :inputValue="contactForm.city.value"
                @update:inputValue="(v) => (contactForm.city.value = v)"
                @blur="() => validation('city')"
                :isValid="true"
                size="large"
                placeholder="Los Angeles"
                typeName="text"
                label="City"
                width="w-117"
                direction="col"
                autocomplete="new-first-city"
              />

              <Form
                class="ml-6"
                :inputValue="contactForm.state.value"
                @update:inputValue="(v) => (contactForm.state.value = v)"
                @blur="() => validation('state')"
                :isValid="true"
                size="large"
                placeholder="Califonia"
                typeName="text"
                label="State"
                width="w-117"
                direction="col"
                autocomplete="new-state"
              />
            </div>
            <Form
              :inputValue="contactForm.company.value"
              @update:inputValue="(v) => (contactForm.company.value = v)"
              @blur="() => validation('company')"
              :isValid="contactForm.company.valid !== false"
              size="large"
              direction="col"
              width="w-[240px]"
              placeholder="Zenerate"
              typeName="text"
              label="Company name"
              autocomplete="new-company-name"
            >
            </Form>
            <Form
              :inputValue="contactForm.website.value"
              @update:inputValue="(v) => (contactForm.website.value = v)"
              @blur="() => validation('website')"
              :isValid="contactForm.website.valid !== false"
              size="large"
              direction="col"
              width="w-[240px]"
              placeholder="www.zenerate.ai"
              typeName="text"
              label="Company website"
              autocomplete="new-company-website"
            >
            </Form>
            <span
              class="text-12-medium absolute right-0 bottom-[-24px] w-full text-right text-primary"
              >*required</span
            >
          </div>
          <Button class="w-[240px]" @click="sendEmail"> Receive Access </Button>
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
                <a href="mailto: contact@zenerate.ai">contact@zenerate.ai</a>
              </p>
              <router-link
                class="link-button"
                :to="{ name: 'landing', query: getCurrentUtmQuery(router) }"
              >
                View Product Overview
                <IconBase
                  icon-name="arrow-right"
                  :width="22"
                  :height="22"
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
import ApiService from '/Services/api'
import Store from '/Store/index'
import Validation from '/Utils/Validation'
import { getCurrentUtmQuery } from '/Utils/index'
import Footer from '/Components/Footer.vue'
import { ModalLayout, Button, Form, IconBase } from '/Components/'
// const fullpage = computed(() => Store.state.root.FullPage)

// onMounted(() => {
//   if (fullpage.value) {
//     fullpage.value.destroy()
//   }
// })

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
  first_name: {
    value: '',
    validator: Validation.string,
    valid: null,
  },
  last_name: {
    value: '',
    validator: Validation.string,
    valid: null,
  },
  email: {
    value: '',
    validator: Validation.email,
    valid: null,
  },
  phone: {
    value: null,
    validator: (v) => true,
    valid: null,
  },
  city: {
    value: null,
    validator: (v) => true,
    valid: null,
  },
  state: {
    value: null,
    validator: (v) => true,
    valid: null,
  },
  company: {
    value: '',
    validator: (v) => true,
    valid: null,
  },
  website: {
    value: null,
    validator: (v) => true,
    valid: null,
  },
})

const validation = (item: string) => {
  contactForm[item].valid = contactForm[item].validator(contactForm[item].value)
}

const resetForm = () => {
  Object.assign(contactForm, {
    first_name: {
      value: '',
      validator: Validation.string,
      valid: null,
    },
    last_name: {
      value: '',
      validator: Validation.string,
      valid: null,
    },
    email: {
      value: '',
      validator: Validation.email,
      valid: null,
    },
    phone: {
      value: null,
      validator: (v) => true,
      valid: null,
    },
    city: {
      value: null,
      validator: (v) => true,
      valid: null,
    },
    state: {
      value: null,
      validator: (v) => true,
      valid: null,
    },
    company: {
      value: '',
      validator: Validation.string,
      valid: null,
    },
    website: {
      value: null,
      validator: (v) => true,
      valid: null,
    },
  })
}

const dummy = ref(null)

const sendEmail = async () => {
  if (sendEmailStatus.value == true) return
  dummy.value.focus()
  let isValid = true
  const form = { tag: 'Sign Up' }
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
const router = useRouter()
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

        @include en-tablet {
          @include semi-bold(17);
        }

        @include en-mobile {
          @include semi-bold(14);
        }
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
