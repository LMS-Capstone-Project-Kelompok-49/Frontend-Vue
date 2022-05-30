import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePageLayout from '@/layout/HomeLayout.vue'
import HomeView from '../views/HomeView.vue'
import ProgramsView from '../views/ProgramsView.vue'
import CoursesView from '../views/CoursesView.vue'
import ContactView from '../views/ContactView.vue'
import LoginRegisterView from '../views/LoginRegisterView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: HomePageLayout,
    children: [
      {
        path: "",
        name: "HomeView",
        component: HomeView,
      },
    ],
  },
  {
    path: "/programs",
    component: HomePageLayout,
    children: [
      {
        path: "",
        name: "ProgramsView",
        component: ProgramsView,
      },
    ],
  },
  {
    path: "/courses",
    component: HomePageLayout,
    children: [
      {
        path: "",
        name: "CoursesView",
        component: CoursesView,
      },
    ],
  },
  {
    path: "/contact",
    component: HomePageLayout,
    children: [
      {
        path: "",
        name: "ContactView",
        component: ContactView,
      },
    ],
  },
  {
    path: "/login",
    component: HomePageLayout,
    children: [
      {
        path: "",
        name: "LoginRegisterView",
        component: LoginRegisterView,
      },
    ],
  },
];
  

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;