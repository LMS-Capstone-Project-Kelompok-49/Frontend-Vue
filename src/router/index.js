import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePageLayout from '@/layout/HomeLayout.vue'
import TemplateViewPages from '@/layout/DefaultView.vue'
import DashboardTemplate from '@/layout/DashboardLayout.vue'
import HomeView from '../views/HomeView.vue'
import CoursesView from '../views/CoursesView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: TemplateViewPages,
    children: [
      {
        path: '',
        component: HomePageLayout,
        children: [
          {
            path: '',
            name: 'Home',
            component: HomeView,
          },
          {
            path: 'courses',
            name: 'CoursesPage',
            component: CoursesView,
          },
          {
            path: 'courses/detail',
            name: 'DetailCoursePage',
            component: () => import('../views/DetailCourseView.vue')
          },
          {
            path: 'contact',
            name: 'ContactPage',
            component: () => import('../views/ContactView.vue')
          },
          {
            path: 'request',
            name: 'RequestPage',
            component: () => import('../views/RequestView.vue')
          }
        ]
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
      },
      {
        path: 'dashboard',
        component: DashboardTemplate,
        children: [
          {
            path: '',
            name: 'HomeDashboard',
            component: () => import('../views/dashboard/HomeView.vue')
          },
          {
            path: 'courses',
            name: 'CoursesDashboard',
            component: () => import('../views/dashboard/CourseView.vue')
          },
          {
            path: 'certificate',
            name: 'CertificateDashboard',
            component: () => import('../views/dashboard/CertificateView.vue')
          },
          {
            path: ''
          }
        ]
      },
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router
