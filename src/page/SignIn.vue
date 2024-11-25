<template>
  <div class="signin">
    <div class="signin-banner">
      <h1 class="banner-title">로그인</h1>
      <p class="banner-description">ClassTree에 오신 것을 환영합니다!</p>
    </div>
    <form class="signin-form">
      <div class="input-box">
        <label for="username">ID</label>
        <input id="username" type="text" placeholder="아이디를 입력해 주세요" />
      </div>
      <div class="input-box">
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="비밀번호를 입력해 주세요"
        />
      </div>
      <div class="login-btn-cover">
        <button type="button" class="search-account-btn">
          아이디/비밀번호 찾기
        </button>
        <button type="submit" class="login-btn">로그인</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    handleLogin(event) {
      event.preventDefault();
      alert("로그인 버튼 클릭됨");
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
  min-height: 100vh;
  background-color: #f9f9f9;
  padding: 2rem;
}

/* 배너 스타일 */
.signin-banner {
  text-align: center;
  margin-bottom: 2rem;
}

.banner-title {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
}

.banner-description {
  font-size: 1rem;
  color: #666;
  margin-top: 0.5rem;
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
}

.search-account-btn {
  flex: 1;
  background-color: white;
  border: 1px solid #666;
  color: #666;
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
