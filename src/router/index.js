import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

/* Layout */
import Layout from '@/layout'

const routes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/about/About.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirecet'),
    hidden: true
  }
]

const router = new VueRouter({
  routes,
  // mode: 'history', // require service support 先不用吧 后面试试
  linkActiveClass: 'active'
})

export default router
