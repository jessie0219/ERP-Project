import { createRouter, createWebHistory } from 'vue-router';

const routes = [

  {
    path: '/',
    name: 'Login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/homeStudent',
    name: 'Home',
    component: () => import('../views/student/HomeView.vue')
  },
  {
    path: '/createDiaryStudent',
    name: 'CreateDiaryStudent',
    component: () => import('../views/student/CreateDiaryView.vue')
  },
  {
    path: '/checkDiaryStudent',
    name: 'CheckDiaryStudent',
    component: () => import('../views/student/CheckDiaryView.vue')
  },
  {
    path: '/accountCheckController',
    name: 'AccountCheckController',
    component: () => import('../views/controller/AccountCheckView.vue')
  },
  {
    path: '/checkDiaryViewController',
    name: 'CheckDiaryViewController',
    component: () => import('../views/controller/CheckDiaryView.vue')
  },
  {
    path: '/checkDiaryViewCompany',
    name: 'CheckDiaryViewCompany',
    component: () => import('../views/company/CheckDiaryView.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
