<template>
  <div class="signin">
    <div class="signin-banner">
      <h1 class="banner-title">로그인</h1>
      <p class="banner-description">ClassTree에 오신 것을 환영합니다!</p>
    </div>
    <div class="signin-form">
      <div class="input-box">
        <label for="username">ID</label>
        <input
          type="text"
          v-model="username"
          placeholder="아이디를 입력해 주세요"
        />
      </div>
      <div class="input-box">
        <label for="password">Password</label>
        <input
          type="password"
          v-model="password"
          placeholder="비밀번호를 입력해 주세요"
        />
      </div>
      <div class="login-btn-cover">
        <!-- <button type="button" class="search-account-btn">
          아이디/비밀번호 찾기
        </button> -->
        <button class="login-btn" v-on:click="handleLogin">로그인</button>
      </div>
    </div>
  </div>
</template>

<script>
import * as loginApi from "@/api/user/auth";
import { mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    async handleLogin() {
      // 유효성 검사
      if (!this.username || !this.password) {
        alert("아이디와 비밀번호를 모두 입력해 주세요.");
        return;
      }

      try {
        // API 호출
        const response = await loginApi.login(this.username, this.password);
        console.log(response.data);
        if (response && response.status === 200) {
          this.$store.commit("auth/setLoggedIn", true);
          this.$store.commit("auth/setNickname", response.data.user.nickname);
          this.$store.commit("auth/setEmail", response.data.user.school_email);
          this.$store.commit("auth/setUserId", response.data.user.user_id);
          this.$router.push("/");
        } else {
          alert(response.message || "로그인에 실패했습니다.");
        }
      } catch (err) {
        console.error("로그인 에러:", err);
        alert("err");
      }
    },
  },
};
</script>

<style scoped>
/* 공통 스타일 */
.signin {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 100%;
}

/* 배너 스타일 */
.signin-banner {
  text-align: center;
  margin-bottom: 1.5rem;
}

.banner-title {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.banner-description {
  font-size: 1rem;
  color: #666;
}

/* 로그인 폼 스타일 */
.signin-form {
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.input-box {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 0.5rem;
  font-weight: bold;
  font-size: 0.9rem;
  color: #333;
}

input {
  height: 2.5rem;
  padding: 0 0.8rem;
  border: 1px solid #ccc;
  border-radius: 0.4rem;
  font-size: 0.9rem;
}

input:focus {
  border-color: #66bb6a;
  outline: none;
  box-shadow: 0 0 4px rgba(102, 187, 106, 0.4);
}

input::placeholder {
  color: #aaa;
}

/* 버튼 스타일 */
.login-btn-cover {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 2rem;
  margin-top: 0.5rem;
}

.search-account-btn {
  flex: 1;
  background-color: white;
  border: 1px solid #66bb6a;
  color: #66bb6a;
  border-radius: 0.4rem;
  padding: 0.6rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.search-account-btn:hover {
  background-color: #f1f1f1;
  border-color: #333;
  color: #333;
}

.login-btn {
  flex: 1;
  background-color: #66bb6a;
  color: white;
  border: none;
  border-radius: 0.4rem;
  padding: 0.6rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-btn:hover {
  background-color: #4caf50;
}
</style>
