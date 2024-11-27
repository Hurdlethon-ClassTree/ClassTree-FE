<template>
  <header>
    <div class="logo"></div>
    <div class="header-title">ClassTree: 수업 기반 Q&A 게시판</div>
    <div class="left-options">
      <div class="header-menu">
        <router-link to="/" class="link">
          <div class="header-menu-item">홈</div>
        </router-link>
        <router-link to="/classlist" class="link">
          <div class="header-menu-item">개설과목</div>
        </router-link>
        <router-link v-if="!loggedIn" to="/signup" class="link">
          <div class="header-menu-item">가입하기</div>
        </router-link>

        <router-link v-if="!loggedIn" to="/signin" class="link">
          <div class="header-menu-item">로그인</div>
        </router-link>
        <div v-else @click="logoutSequence" class="header-menu-item">
          로그아웃
        </div>

        <router-link v-if="loggedIn" to="/setting" class="link">
          <div class="header-menu-item">설정</div>
        </router-link>
      </div>
      <div class="search-box">
        <input
          class="search-box-input"
          placeholder="다른 사람의 질문과 강의실을 검색해 보세요!"
        />
        <img
          src="../../public/image/search-icon.png"
          alt="img"
          class="search-icon"
        />
      </div>
    </div>
  </header>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState("auth", ["loggedIn"]),
  },
  data() {},
  methods: {
    ...mapActions("auth", ["logout"]),
    logoutSequence() {
      this.logout();
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
header {
  background-color: white;
  display: flex;
  align-items: center;
  height: 3.5rem;
  padding: 0 2rem;
  border-bottom: 1px solid rgb(224, 224, 224);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20; /* 헤더가 다른 요소 위로 오도록 설정 */
  box-sizing: border-box; /* 패딩을 포함한 크기 계산 */
  overflow: hidden; /* header가 화면을 벗어나지 않도록 */
}

.logo {
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: rgb(230, 230, 230);
  margin-right: 1rem;
}

.header-title {
  font-size: 1.2rem;
  font-weight: bold;
  flex-grow: 1;
}

.left-options {
  display: flex;
  align-items: center;
}

.header-menu {
  display: flex;
  align-items: center;
  margin-right: 2rem;
}

.header-menu-item {
  margin-left: 1.3rem;
  font-size: 1rem;
  font-size: 0.9rem;
}

.header-menu-item:hover {
  font-weight: bold;
}

/* search box */

.search-box {
  height: 2.5rem;
  width: 19.5rem;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 0.25rem;
  padding-left: 0.2rem;
  display: flex;
  align-items: center;
  box-sizing: border-box; /* 패딩을 포함시켜 전체 크기 계산 */
}

.search-box-input {
  border: none;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  font-size: 0.9rem;
  box-sizing: border-box; /* 패딩을 포함시켜 크기 계산 */
}

.search-box-input::placeholder {
  font-size: 0.8rem;
  color: #aaa;
}

.search-box-input:focus {
  outline: none;
}

.search-icon {
  height: 2.7rem;
  margin-right: 0.4rem;
}
</style>
