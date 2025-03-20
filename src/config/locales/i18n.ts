import { createI18n } from 'vue-i18n'

import tranEn from './translations/en.json'
import tranKo from './translations/ko.json'

import datetimeFormats from './datetimeFormats'

const resources = {
  en: tranEn,
  ko: tranKo,
}

const userLanguage = window.navigator.language.substring(0, 2)

// i18n.use(initReactI18next).init({
//   resources,
//   lng: localStorage.getItem('language') || userLanguage || 'ko',
//   fallbackLng: 'ko',
//   react: {
//     wait: true,
//   },
// })

const i18n = createI18n({
  legacy: false,
  locale: 'ko',
  fallbackLocale: 'ko',
  messages: resources,
  globalInjection: true,
  // @ts-ignore
  datetimeFormats,
})

export default i18n

export const languages = ['en', 'ko'] as const

export type Languages = typeof languages[number] // 'en' | 'ko'
