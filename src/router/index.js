import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(''),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/HomePage.vue'),
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../components/SignIn.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../components/SignUp.vue'),
    },
    {
      path: '/ask',
      name: 'ask',
      component: () => import('../components/AskPage.vue'),
    },
    {
      path: '/post',
      name: 'post',
      component: () => import('../components/PostPage.vue')
    },
    {
      path: '/setting',
      name:'setting',
      component: () => import('../components/SettingPage.vue'),
    },
    {
      path: '/class',
      name: 'class',
      component: () => import('../components/ClassListPage.vue')
    }
  ],
});

export default router;