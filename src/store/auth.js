import * as authApi from '@/api/user/auth';

export default {
  namespaced: true,
  state: {
    nickname: null,
    email: null
  },
  mutations: {
    setNickname(state, nickname){
      state.nickname = nickname;
    },
    setEmail(state, email){
      state.email = email;
    }
  },
  actions: {
    async login(context, { userId, password }) {
      try {
        const response = await authApi.login(userId, password);

        if (response.status === 200) {
          context.commit('setNickname', response.data.nickname);
          context.commit('setEmail', response.data.email);
        }
      } catch (e) {
        alert('아이디 혹은 비밀번호를 확인해주세요.');
      }
    },
    loginWithoutAsync(context, { userId, password }) {
      authApi.login(userId, password).then(response => {
        if (response.status === 200) {
          context.commit('setNickname', response.data.nickname);
          context.commit('setEmail', response.data.email);
        }
      }).catch(e => {
        alert('아이디 혹은 비밀번호를 확인해주세요.');
      });
    },
    logout(context){
      context.commit('setNickname', null);
      context.commit('setEmail', null);
    }
  }
}