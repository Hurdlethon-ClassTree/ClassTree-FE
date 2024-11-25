<template>
  <div class="signup">
    <!-- 타이틀 -->
    <div class="signup-title">가입하기</div>

    <!-- 입력 폼 -->
    <form @submit.prevent="handleSignup">
      <!-- ID -->
      <label class="label">ID</label>
      <div class="signup-input-area">
        <input
          type="text"
          v-model="form.id"
          placeholder="생성할 아이디를 입력해 주세요"
        />
        <button
          type="button"
          class="signup-input-btn"
          @click="checkDuplicateId"
        >
          중복검사
        </button>
      </div>

      <!-- Password -->
      <label class="label">Password</label>
      <input
        class="signup-input"
        type="password"
        v-model="form.password"
        placeholder="비밀번호를 입력해 주세요"
      />

      <!-- Confirm Password -->
      <label class="label">Confirm Password</label>
      <input
        class="signup-input"
        type="password"
        v-model="form.confirmPassword"
        placeholder="비밀번호를 다시 입력해 주세요"
      />

      <!-- Email -->
      <label class="label">Email</label>
      <input
        class="signup-input"
        type="email"
        v-model="form.email"
        placeholder="알림 받을 이메일 주소를 입력해 주세요"
      />

      <!-- 학교 인증 -->
      <label class="label">학교 인증하기</label>
      <div class="signup-input-area">
        <input
          type="email"
          v-model="form.schoolEmail"
          placeholder="학교 이메일 주소를 입력해 주세요"
        />
        <button
          type="button"
          class="signup-input-btn"
          @click="sendVerificationCode"
        >
          인증 번호 발송하기
        </button>
      </div>

      <!-- 가입하기 버튼 -->
      <div class="signup-btn-cover">
        <button type="submit" class="signup-btn">가입하기</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        id: "",
        password: "",
        confirmPassword: "",
        email: "",
        schoolEmail: "",
      },
    };
  },
  methods: {
    checkDuplicateId() {
      if (!this.form.id) {
        alert("아이디를 입력하세요.");
        return;
      }
      alert(`ID "${this.form.id}"의 중복을 확인합니다.`);
    },
    sendVerificationCode() {
      if (!this.form.schoolEmail) {
        alert("학교 이메일을 입력하세요.");
        return;
      }
      alert(`"${this.form.schoolEmail}"로 인증 번호를 발송합니다.`);
    },
    handleSignup() {
      if (!this.validateForm()) return;
      alert("가입이 완료되었습니다!");
    },
    validateForm() {
      const { id, password, confirmPassword, email, schoolEmail } = this.form;
      if (!id || !password || !confirmPassword || !email || !schoolEmail) {
        alert("모든 항목을 입력해주세요.");
        return false;
      }
      if (password !== confirmPassword) {
        alert("비밀번호가 일치하지 않습니다.");
        return false;
      }
      return true;
    },
  },
};
</script>

<style scoped>
/* 전체 레이아웃 */
.signup {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  max-width: 100%;
  box-sizing: border-box;
}

/* 타이틀 */
.signup-title {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
}

/* 라벨 */
.label {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

/* 입력 필드와 버튼 */
.signup-input-area {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.signup-input-area input {
  flex: 1;
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
}
.signup-input-btn {
  background-color: #66bb6a;
  color: white;
  border: none;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.3s ease;
}
.signup-input-btn:hover {
  background-color: #4caf50;
}

/* 일반 입력 필드 */
.signup-input {
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
}
.signup-input:focus {
  border-color: #66bb6a;
  outline: none;
}

/* 가입하기 버튼 */
.signup-btn {
  width: 100%;
  background-color: #66bb6a;
  color: white;
  border: none;
  padding: 1rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.signup-btn:hover {
  background-color: #4caf50;
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .signup-input-btn {
    font-size: 0.9rem;
    padding: 0.6rem 1rem;
  }
}
</style>
