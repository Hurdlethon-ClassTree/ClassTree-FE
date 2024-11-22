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
        <router-link to="/signup" class="link">
          <div class="header-menu-item">가입하기</div>
        </router-link>
        <router-link to="/signin" class="link">
          <div class="header-menu-item">로그인</div>
        </router-link>
        <router-link to="/setting" class="link">
          <div class="header-menu-item">설정</div>
        </router-link>
      </div>
      <div class="search-box">
        <input class="search-box-input" placeholder="다른 사람의 질문과 강의실을 검색해 보세요!" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {

  }
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
}
.logo {
  height: 1.8rem;
  width: 1.8rem;
  border-radius: 1rem;
  background-color: rgb(230, 230, 230);
  margin-right: 0.8rem;
}
.left-options {
  position: absolute;
  right: 2rem;
  display: flex;
}
.header-title {
  font-size: 1.1rem;
  font-weight: bold;
}
.header-menu {
  display: flex;
  align-items: center;
  margin-right: 2rem;
}
.header-menu-item {
  margin-left: 1rem;
  font-size: 0.9rem;
}
.search-box {
  height: 2rem;
  width: 17rem;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 0.2rem;
  padding-left: 0.5rem;
}
.search-box-input {
  border: none;
  width: 15rem;
  height: 2rem;
  line-height: 2rem;
  padding: 0;
}
.search-box-input::placeholder {
  font-size: 0.75rem;
}
.search-box-input:focus {
  outline: none;
}
</style>