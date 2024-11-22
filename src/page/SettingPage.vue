<template>
  <div class="user-info-area">
    <div class="user-info-body">
      <div class="user-icon"></div>
      <div class="user-info">
        <div class="user-name">{{ name }}</div>
        <div class="user-email">{{ email }}</div>
      </div>
    </div>
  </div>

  <div class="setting">
    <div class="setting-banner">
      <h1>프로필 수정하기</h1>
    </div>
    <div class="setting-form-container">
      <div class="setting-form">
        <div class="input-box">
          <label>별명</label>
          <input type="text" placeholder="아이디를 입력해 주세요" />
        </div>
        <div class="input-box">
          <label>이메일</label>
          <input type="text" placeholder="이메일을 입력해 주세요" />
        </div>
        <div class="login-btn-cover">
          <button class="cancel-btn">취소</button>
          <button class="modify-btn">수정하기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "이름",
      email: "email",
    };
  },
};
</script>

<style scoped>
.user-info-area {
  height: 13rem;
  align-items: center;
  padding: 0 10rem;
  display: flex;
  background-color: rgb(103, 103, 103);
}
.user-icon {
  width: 6rem;
  height: 6rem;
  background-color: rgba(217, 217, 217, 0.5);
  border-radius: 4rem;
  margin-right: 1.5rem;
}
.user-info-body {
  display: flex;
  align-content: center;
}
.user-name {
  margin-top: 1.2rem;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.8rem;
}
.user-email {
  color: white;
  font-size: 0.9rem;
  color: black;
  background-color: rgb(194, 194, 194);
  padding: 0 0.4rem;
  border-radius: 0.1rem;
}

.setting {
  margin-top: 4.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 55vh;
}
.setting-banner {
  align-content: center;
  padding-left: 5rem;
}
label {
  margin-bottom: 0.5rem;
  font-weight: bold;
  font-size: 0.9rem;
}
.setting-form {
  width: 25rem;
}
.setting-form-container {
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
.modify-btn {
  border: 1px solid black;
  background-color: black;
  color: white;
  border: none;
  border-radius: 0.4rem;
  margin-left: 0.3rem;
}
.cancel-btn {
  border: 1px solid black;
  background-color: white;
  border-radius: 0.4rem;
  margin-right: 0.3rem;
}
</style>
