import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePageLayout from '@/layout/HomeLayout.vue'
import TemplateViewPages from '@/layout/DefaultView.vue'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomePageLayout,
    children: [
      {
        path: '',
        component: TemplateViewPages,
        children: [
          {
            path: '',
            name: 'Home',
            component: HomeView,
            meta: {
              title: 'Home Page - Example App',
              metaTags: [
                {
                  name: 'description',
                  content: 'The home page of our example app.'
                },
                {
                  property: 'og:description',
                  content: 'The home page of our example app.'
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
