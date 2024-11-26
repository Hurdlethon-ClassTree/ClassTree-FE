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
      path: '/class/:class_id/ask',
      name: 'ask',
      component: () => import('../page/AskPage.vue'),
      props : true
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
      path: '/classlist',
      name: 'classlist',
      component: () => import('../page/ClassListPage.vue')
    },
    {
      path: '/class/:lecture_id',
      name: 'class',
      component: () => import('../page/ClassPage.vue'),
      props : true
    },
    {
      path: '/post/:question_id',
      name: 'post',
      component: () => import('../page/PostPage.vue'),
      props: true
    },
    {
      path: '/searchhistory',
      name: 'searchhistory',
      component: () => import('../page/SearchPage.vue')
    },
    {
      path: '/myquestion',
      name: 'myquestion',
      component: () => import('../page/MyQuestionPage.vue')
    },
    {
      path: '/nonans',
      name: 'nonansquestion',
      component: () => import('../page/NonansPage.vue')
    },
    {
      path: '/myclass',
      name: 'myclass',
      component: () => import('../page/MyClass.vue')
    }
  ],
});

export default router;