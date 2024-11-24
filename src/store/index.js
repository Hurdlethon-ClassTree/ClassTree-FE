import { createStore } from 'vuex';

// 개별 모듈 가져오기
import auth from './auth';
import error from './error';

// Vuex 스토어 생성
export default createStore({
  state: {
    // 전역 상태 정의
  },
  mutations: {
    // 전역 뮤테이션 정의
  },
  actions: {
    // 전역 액션 정의
  },
  modules: {
    // 모듈 통합
    auth,
    error,
  },
});
