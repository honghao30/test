import type { App, Plugin } from 'vue'
import { computed, onMounted, watch } from 'vue'

export default {
  install: (app: App) => {
    app.mixin({
      created() {
        ;(function (w, d, s, l, i) {
          // @ts-ignore
          window.dataLayer = window.dataLayer || []

          // @ts-ignore
          window.dataLayer.push({
            userId: 1,
            userAgent: window.navigator.userAgent,
          })

          onMounted(() => {
            // @ts-ignore
            window.dataLayer.push({
              event: 'login',
              userId: 2,
            })
          })

          w[l] = w[l] || []
          w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
          var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : ''

          // @ts-ignore
          j.async = true

          // @ts-ignore
          j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl
          f.parentNode.insertBefore(j, f)
        })(window, document, 'script', 'dataLayer', 'GTM-5MCJ25W')
      },
    })
  },
}
