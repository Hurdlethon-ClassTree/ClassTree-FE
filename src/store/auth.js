import * as authApi from '@/api/user/auth';

export default {
  namespaced: true,
  state: {
    nickname: null,
    email: null,
    loggedIn: false
  },
  mutations: {
    setNickname(state, nickname){
      state.nickname = nickname;
    },
    setEmail(state, email){
      state.email = email;
    },
    setLoggedIn(state, loggedIn){
      state.loggedIn = loggedIn;
    }
  },
  actions: {
    logout(context){
      context.commit('setNickname', null);
      context.commit('setEmail', null);
      context.commit('setLoggedIn', false);
      alert("로그아웃되었습니다.")
    }
  }
}