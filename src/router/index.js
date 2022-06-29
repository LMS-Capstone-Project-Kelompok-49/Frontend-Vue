import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePageLayout from '@/layout/HomeLayout.vue'
import TemplateViewPages from '@/layout/DefaultView.vue'
import DashboardTemplate from '@/layout/DashboardLayout.vue'
import ParentTemplate from '@/layout/ParentView.vue'
import HomeView from '../views/HomeView.vue'

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
            component: ParentTemplate,
            children: [
              {
                path: '',
                name: 'CoursesPage',
                component: () => import('../views/CoursesView.vue')
              },
              {
                path: ':id',
                component: ParentTemplate,
                children: [
                  {
                    path: '',
                    name: 'DetailCoursePage',
                    component: () => import('../views/DetailCourseView.vue')
                  },
                  {
                    path: 'checkout',
                    name: 'CheckoutPage',
                    component: () => import('../views/transactions/CheckoutView.vue')
                  },
                ]
              },
            ]
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
          },
          {
            path: 'transaction',
            component: ParentTemplate,
            children: [
              {
                path: '',
                name: 'TransactionsPage',
                component: () => import('../views/transactions/TransactionsView.vue')
              },
              {
                path: ':code',
                name: 'PayPage',
                component: () => import('../views/transactions/PayView.vue')
              },
            ]
          },
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
            path: 'notification',
            name: 'NotificationDashboard',
            component: () => import('../views/dashboard/NotificationView.vue')
          },
          {
            path: 'profile',
            name: 'ProfileDashboard',
            component: () => import('../views/dashboard/ProfileView.vue')
          },
          {
            path: 'course',
            component: ParentTemplate,
            children: [
              {
                path: ':id',
                component: ParentTemplate,
                children: [
                  {
                    path: '',
                    name: 'DetailCourseDashboard',
                    component: () => import('../views/dashboard/DetailCourse.vue')
                  },
                  {
                    path: ':code',
                    name: 'DetailAssignmentDashboard',
                    component: () => import('../views/dashboard/DetailAssignment.vue')
                  },
                  {
                    path: 'material/:materialId',
                    name: 'DetailMaterialsDashboard',
                    component: () => import('../views/dashboard/DetailMaterials.vue')
                  },
                ]
              }
            ]
          },
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
