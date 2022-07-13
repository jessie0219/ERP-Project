import { createRouter, createWebHistory } from 'vue-router';

const routes = [
<<<<<<< HEAD

=======
  // ========= login-page ===========
>>>>>>> c5ced5541d5b31503619431ad5d33c1dddc1fd2d
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/LoginView.vue')
<<<<<<< HEAD
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
=======
  },
  // ============= user-page ==============
  {
    path: '/user/punch',
    name: 'UserPunch',
    component: () => import('../views/UserPunchView.vue')
  },
  {
    path: '/user/learn',
    name: 'Learn',
    component: () => import('../views/learnView.vue')
  },
  {
    path: '/userpunch',
    name: 'Punch',
    component: () => import('../views/PunchView.vue')
  },
  // ========== manager-page ==============
  {
    path: '/manager/attendanceinfo',
    name: 'ManagerAttendanceInfo',
    component: () => import('../views/ManagerAttendanceInfoView.vue')
  },
  // ========== corporate-page ===============
>>>>>>> c5ced5541d5b31503619431ad5d33c1dddc1fd2d
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
