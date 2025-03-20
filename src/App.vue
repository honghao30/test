<template>
  <router-view></router-view>
</template>

<script lang="ts" name="App" setup>
import { watch, onMounted, reactive, computed } from 'vue'
import AOS from 'aos'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Zenerate: Creating AI-Powered Tools for Real Estate Development',
  htmlAttrs: { lang: 'en' },
  link: [{ rel: 'canonical', href: 'https://www.zenerate.ai' }],
  meta: [
    {
      name: `description`,
      content: `Zenerate provides AI-powered feasibility solutions for real estate development in order to maximize returns while saving time.`,
    },
    {
      hid: 'twitter:title',
      property: 'twitter:title',
      content:
        'Zenerate: Creating AI-Powered Tools for Real Estate Development',
    },
    {
      hid: 'twitter:description',
      property: 'twitter:description',
      content: `Zenerate provides AI-powered feasibility solutions for real estate development in order to maximize returns while saving time.`,
    },
    { name: 'keywords', content: 'zenerate' },
    {
      hid: 'twitter:image',
      property: 'twitter:image',
      content: 'https://www.zenerate.ai/img/thumbnail.png',
    },
    {
      hid: 'twitter:card',
      property: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://www.zenerate.ai/',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content:
        'Zenerate: Creating AI-Powered Tools for Real Estate Development',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: `Zenerate provides AI-powered feasibility solutions for real estate development in order to maximize returns while saving time.`,
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

onMounted(() => {
  AOS.init()
  setTimeout(() => {
    document.querySelectorAll('.aos-init').forEach((doc: HTMLElement) => {
      doc.classList.remove('aos-animate')
    })
  }, 0)
  window.addEventListener('load', AOS.refresh)
})
</script>

<style lang="scss" scoped></style>
