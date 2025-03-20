<template>
  <div class="calendly-wrapper">
    <div
      class="calendly-inline-widget"
      id="calendly"
      :data-url="calendlyUrl"
    ></div>
  </div>
</template>
<script lang="ts" setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { getCurrentUtmQuery } from '/Utils/index'

const props = defineProps({
  calendlyUrl: String,
})

const router = useRouter()

const calendlyUrl = computed(() => props.calendlyUrl)

onMounted(() => {
  const head = document.querySelector('head')
  const script = document.createElement('script')
  script.setAttribute(
    'src',
    'https://assets.calendly.com/assets/external/widget.js'
  )
  head.appendChild(script)

  try {
    Calendly.initInlineWidget({
      url: calendlyUrl.value,
      utm: {
        utmCampaign: getCurrentUtmQuery(router).utm_campaign,
        utmSource: getCurrentUtmQuery(router).utm_source,
        utmMedium: getCurrentUtmQuery(router).utm_medium,
      },
    })
  } catch (error) {
    console.error(error)
  }
})

onUnmounted(() => {
  try {
    document.body
      .querySelectorAll('.calendly-spinner')
      .forEach((el) => el.remove())
    document.body
      .querySelectorAll("iframe[title='Select a Date & Time - Calendly']")
      .forEach((el) => el.remove())
  } catch (error) {
    console.error(error)
  }
})
</script>
<style lang="scss" scoped>
.calendly-wrapper {
  width: 100%;

  #calendly {
    display: relative;
    width: 100%;
    min-width: 320px;
    height: 1300px;
    max-height: 624px;
  }
}
</style>
