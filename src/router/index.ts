import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { trackRouter } from 'vue-gtag-next'
import MainLayout from '/Layouts/MainLayout.vue'

import AboutView from '/Views/AboutView.vue'
import CaseStudiesView from '/Views/CaseStudiesView.vue'
import CareerContent from '/src/components/CareerContent.vue'
import ContactView from '/Views/ContactView.vue'
import LandingView from '/Views/LandingView.vue'
import TermsAndConditionsView from '/Views/TermsAndConditionsView.vue'
import PrivacyPolicyView from '/Views/PrivacyPolicyView.vue'
import PrivacyPolicyNewView from '/Views/PrivacyPolicyNewView.vue'
import SignUpView from '/Views/SignUpView.vue'
import AIConsultingVIew from '/Views/AIConsultingView.vue'
import ModularView from '/Views/ModularView.vue'
import AppAIAView from '/Views/AppAIAView.vue'
import AppWaitlistView from '/Views/AppWaitlistView.vue'
import AppView from '/Views/AppView.vue'
import BisnowEventView from '/@/views/BisnowEventView.vue'
import BlogList from '/@/views/BlogList.vue'
import BlogPost from '/@/views/BlogPost.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'MainLayout',
    component: MainLayout,
    children: [
      {
        path: '/',
        name: 'landing',
        component: LandingView,
      },
      {
        path: '/app',
        name: 'app-aia',
        component: AppAIAView,
      },
      {
        path: '/zen-app',
        name: 'zen-app',
        component: AppView,
      },
      // /zenerate-app -> /zen-app redirect
      {
        path: '/zenerate-app',
        redirect: '/zen-app',
      },
      {
        path: '/app-waitlist',
        name: 'app-waitlist',
        component: AppWaitlistView,
      },
      {
        path: '/ai-consulting',
        name: 'ai-consulting',
        component: AIConsultingVIew,
      },
      {
        path: '/modular',
        name: 'modular',
        component: ModularView,
      },
      {
        path: '/about',
        name: 'about',
        component: AboutView,
      },
      {
        path: '/case-studies',
        name: 'case-studies',
        component: CaseStudiesView,
      },
      {
        path: '/career/:id',
        name: 'career-detail',
        component: CareerContent,
        props: true,
      },
      {
        path: '/contact',
        name: 'contact',
        component: ContactView,
      },
      {
        path: '/beta',
        redirect: '/modular',
      },
      {
        path: '/signup',
        name: 'signup',
        component: SignUpView,
      },
      {
        path: '/demo',
        name: 'demo',
        component: BisnowEventView,
      },
      {
        path: '/terms-and-conditions',
        name: 'terms-and-conditions',
        component: TermsAndConditionsView,
      },
      {
        path: '/privacy-policy',
        name: 'privacy-policy',
        component: PrivacyPolicyNewView,
      },
      {
        path: '/privacy-policy-11292021',
        name: 'privacy-policy-11292021',
        component: PrivacyPolicyView,
      },
      {
        path: '/BlogList',
        name: 'BlogList',
        component: BlogList,
      },        
      {
        path: '/posts/:id',
        name: 'BlogPost',
        component: BlogPost,
        props: true
      },   
    ],
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // if (to.hash) {
    //   return { el: to.hash }
    // }
    // always scroll to top
    return { top: 0, left: 0 }
  },
})

trackRouter(router, {
  useScreenview: true,
})

router.beforeEach((to, from, next) => {
  if (to.name === 'zmaps') {
    window.open('https://zmaps.ai')
  } else {
    next()
  }
})

export default router
