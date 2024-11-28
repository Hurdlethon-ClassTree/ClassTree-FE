import { createRouter, createWebHistory } from 'vue-router';
import Cookies from "js-cookie";
import store from "@/store";



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
      path: '/myquestion',
      name: 'myquestion',
      component: () => import('../page/MyQuestionPage.vue')
    },
    {
      path: '/nonchecked',
      name: 'noncheckedpage',
      component: () => import('../page/NonCheckedPage.vue')
    },
    {
      path: '/nonans',
      name: 'nonansweredpage',
      component: () => import('../page/NonAnsweredPage.vue')
    },
    {
      path: '/myclass',
      name: 'myclass',
      component: () => import('../page/MyClass.vue')
    }
  ],
});


// 공통 작업
router.beforeEach(async (to, from, next) => {

  await store.dispatch("auth/initialize");

  next(); // 반드시 호출해야 라우팅이 진행됨
});

export default router;