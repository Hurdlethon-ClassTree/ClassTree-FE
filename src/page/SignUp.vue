<template>
  <div class="signup">
    <div class="signup-title">
      가입하기
    </div>
    <div class="signup-input-cover">
      <label class="label">ID</label>
      <div class="signup-input-area">
        <input type="text" placeholder="생성할 아이디를 입력해 주세요" />
        <button class="signup-input-btn">중복검사</button>
      </div>
      <label class="label">Password</label>
      <input class="signup-input-area" type="text" placeholder="비밀번호를 입력해 주세요" />
      <label class="label">Confirm Password</label>
      <input class="signup-input-area" type="text" placeholder="비밀번호를 다시 입력해 주세요" />
      <label class="label">Email</label>
      <input class="signup-input-area" type="text" placeholder="알림 받을 이메일 주소를 입력해 주세요" />
      <label class="label">학교 인증하기</label>
      <div class="signup-input-area">
        <input type="text" placeholder="학교 이메일 주소를 입력해 주세요" />
        <button class="signup-input-btn">인증 번호 발송하기</button>
      </div>
    </div>
    <div class="signup-btn-cover">
      <button class="signup-btn">가입하기</button>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
input {
  height: 2rem;
  font-size: 0.8rem;
  padding-left: 0.5rem;
  border: none;
}
.signup-title {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  line-height: 10rem;
  height: 10rem;
}
.signup-input-cover {
  position: relative;
  display: flex;
  flex-direction: column;
}
.signup-input-area > input {
  width: 80%;
}
.signup-input-btn {
  height: 1.8rem;
  border-radius: 0.3rem;
  position: absolute;
  right: 0.2rem;
  border: none;
  background-color: black;
  color: white;
  width: 9rem;
}
.signup-input-area {
  margin-bottom: 3rem;
  display: flex;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 0.2rem;
  align-items: center;
}
.signup {
  margin: 0 10rem 7rem;
}
input:focus {
  outline: none;
}
input::placeholder {
  font-size: 0.8rem;
}
.signup-btn-cover {
  position: relative;
}
.signup-btn {
  margin-top: 1rem;
  background-color: black;
  color: white;
  height: 2.2rem;
  width: 12rem;
  border: none;
  border-radius: 0.4rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>