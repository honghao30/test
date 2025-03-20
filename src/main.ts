// import devtools from '@vue/devtools'
// devtools.connect()
import { createApp } from 'vue'
import VueGtag from 'vue-gtag-next'
import { createHead } from '@vueuse/head'
import i18n from '/Config/locales/i18n'
import App from './App.vue'
import Router from './router'
import Store from './store'
import FloatingVue from 'floating-vue'
import gtmPlugin from '/Utils/gtm'
import 'vue-slider-component/theme/default.css'
import 'vue3-carousel/dist/carousel.css'
import 'aos/dist/aos.css'
import 'sweetalert2/src/sweetalert2.scss'
import 'floating-vue/dist/style.css'
import '/Assets/font.css'
import '/Assets/scss/common.scss'
import '/Assets/scss/transitions.scss'
import '/Assets/scss/components.scss'
import '/Assets/scss/timeline.scss'
import '/Assets/scss/en.scss'
import '/Assets/css/tailwind.css'
import '/Plugins/FontObserver'

const head = createHead()

const app = createApp(App)
app.use(Router)
app.use(i18n)
app.use(Store.original)
app.use(FloatingVue)
app.use(gtmPlugin)
app.use(VueGtag, {
  property: [{ id: 'UA-212995971-1' }, { id: 'UA-214276888-1' }],
})
app.use(head)
app.mount('#app')

export { app }
