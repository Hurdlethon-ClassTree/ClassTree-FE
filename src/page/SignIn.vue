<template>
  <div class="signin">
    <div class="signin-banner">
      <h1>로그인</h1>
    </div>
    <div class="signin-form-container">
      <div class="signin-form">
        <div class="input-box">
          <label>ID</label>
          <input type="text" placeholder="아이디를 입력해 주세요" />
        </div>
        <div class="input-box">
          <label>Password</label>
          <input type="text" placeholder="비밀번호를 입력해 주세요" />
        </div>
        <div class="login-btn-cover">
          <button class="search-account-btn">아이디/비밀번호 찾기</button>
          <button class="login-btn">로그인</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.signin {
  width: 100%;
  height: calc(100vh - 3.5rem - 1px);
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.signin-banner {
  align-content: center;
  padding-left: 10rem;
}
label {
  margin-bottom: 0.5rem;
  font-weight: bold;
  font-size: 0.9rem;
}
.signin-form {
  width: 25rem;
}
.signin-form-container {
  margin-left: 3rem;
  align-content: center;
}
.input-box {
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
}
.input-box > input:focus {
  outline: none;
}
input {
  height: 2rem;
  border: 1px solid rgb(230, 230, 230);
  margin: 0;
  padding: 0 0.5rem;
  border-radius: 0.3rem;
}
input::placeholder {
  font-size: 0.8rem;
  line-height: 1.3rem;
}
.login-btn-cover {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 2.3rem;
}
.login-btn {
  border: 1px solid black;
  background-color: black;
  color: white;
  border: none;
  border-radius: 0.4rem;
  margin-left: 0.3rem;
}
.search-account-btn {
  border: 1px solid black;
  background-color: white;
  border-radius: 0.4rem;
  margin-right: 0.3rem;
}
</style>