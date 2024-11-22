<template>
  <div class="signup">
    <div class="signup-title">
      가입하기
    </div>
    <div class="signup-input-cover">
      <label>ID</label>
      <input type="text" placeholder="생성할 아이디를 입력해 주세요" />
      <label>Password</label>
      <input type="text" placeholder="비밀번호를 입력해 주세요" />
      <label>Confirm Password</label>
      <input type="text" placeholder="비밀번호를 다시 입력해 주세요" />
      <label>Email</label>
      <input type="text" placeholder="알림 받을 이메일 주소를 입력해 주세요" />
      <label>학교 인증하기</label>
      <input type="text" placeholder="학교 이메일 주소를 입력해 주세요" />
    </div>
    <button>가입하기</button>
  </div>
</template>

<script>

</script>

<style scoped>
.signup-title {
  font-size: 1.2rem;
  font-weight: bold;
}
.signup-input-cover {
  display: flex;
  flex-direction: column;
}
.signup {
  margin: 0 10rem;
}
</style>