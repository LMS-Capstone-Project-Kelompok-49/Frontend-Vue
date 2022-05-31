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
          },
          {
            path: 'programs',
            name: 'ProgramPage',
            component: () => import('../views/ProgramsView.vue')
          },
          {
            path: 'courses',
            name: 'CoursesPage',
            component: () => import('../views/CoursesView.vue')
          },
          {
            path: 'contact',
            name: 'ContactPage',
            component: () => import('../views/ContactView.vue')
          },
          {
            path: 'login',
            name: 'LoginPage',
            component: () => import('../views/LoginView.vue')
          },
          {
            path: 'register',
            name: 'RegisterPage',
            component: () => import('../views/RegisterView.vue')
          }
        ]
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router
