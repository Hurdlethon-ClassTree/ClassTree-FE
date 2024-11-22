import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(''),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../page/HomePage.vue'),
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../page/SignIn.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../page/SignUp.vue'),
    },
    {
      path: '/ask',
      name: 'ask',
      component: () => import('../page/AskPage.vue'),
    },
    {
      path: '/post',
      name: 'post',
      component: () => import('../page/PostPage.vue')
    },
    {
      path: '/setting',
      name:'setting',
      component: () => import('../page/SettingPage.vue'),
    },
    {
      path: '/class',
      name: 'class',
      component: () => import('../page/ClassListPage.vue')
    }
  ],
});

export default router;