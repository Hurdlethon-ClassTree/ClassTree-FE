import * as authApi from '@/api/user/auth';
import * as userApi from "@/api/user/getUserInfo";
import Cookies from "js-cookie";


export default {
  namespaced: true,
  state: {
    nickname: null,
    email: null,
    loggedIn: false,
    user_id: null
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
    },
    setUserId(state, user_id){
      state.user_id = user_id;
    }
  },
  actions: {
    logout(context){
      context.commit('setNickname', null);
      context.commit('setEmail', null);
      context.commit('setLoggedIn', false);
      Cookies.remove("csrftoken")
      alert("로그아웃되었습니다.")
    },
    async initialize({ commit }) {
      // 1. 쿠키에서 CSRF 토큰 읽기
      const csrfToken = Cookies.get("csrftoken");
      if (!csrfToken) {
        console.warn("CSRF 토큰이 없습니다.");
        commit('setLoggedIn', false);
        return;
      }

      const response = await userApi.getInfo();
        if (response && response.status === 200) {
          commit("setNickname", response.data.nickname);
          commit("setEmail", response.data.email);
          commit("setUserId", response.data.user_id);
          commit('setLoggedIn', true);
        } else {
          alert(response.message);
        }
    },
  }
}