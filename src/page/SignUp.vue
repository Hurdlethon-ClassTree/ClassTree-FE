<template>
  <div class="signup">
    <!-- 타이틀 -->
    <div class="signup-title">가입하기</div>

    <!-- 입력 폼 -->
    <form @submit.prevent="handleSignup">
      <!-- ID -->
      <div class="form-group">
        <label class="label">ID</label>
        <input
          type="text"
          v-model="form.username"
          placeholder="생성할 아이디를 입력해 주세요"
          class="input"
        />
      </div>

      <!-- Password -->
      <div class="form-group">
        <label class="label">Password</label>
        <input
          type="password"
          v-model="form.password"
          placeholder="비밀번호를 입력해 주세요"
          class="input"
        />
      </div>

      <!-- Confirm Password -->
      <div class="form-group">
        <label class="label">Confirm Password</label>
        <input
          type="password"
          v-model="form.confirmPassword"
          placeholder="비밀번호를 다시 입력해 주세요"
          class="input"
        />
      </div>

      <!-- Email -->
      <div class="form-group">
        <label class="label">Email</label>
        <input
          type="email"
          v-model="form.email"
          placeholder="알림 받을 이메일 주소를 입력해 주세요"
          class="input"
        />
      </div>

      <!-- 학교 인증 -->
      <div class="form-group">
        <label class="label">학교 인증하기</label>
        <div class="input-area">
          <input
            type="email"
            v-model="form.schoolEmail"
            placeholder="학교 이메일 주소를 입력해 주세요"
            class="input"
          />
          <button type="button" class="button" @click="sendVerificationCode">
            인증번호 발송
          </button>
        </div>
      </div>

      <!-- 인증코드확인 -->
      <div class="form-group">
        <label class="label">인증코드</label>
        <div class="input-area">
          <input
            type="text"
            v-model="form.verificationCode"
            placeholder="인증코드를 입력해 주세요"
            class="input"
          />
          <button
            type="button"
            class="button"
            @click="checkCode"
            v-bind:disabled="!codeSended"
          >
            인증코드 확인
          </button>
        </div>
      </div>

      <!-- 닉네임 -->
      <div class="form-group">
        <label class="label">닉네임</label>
        <input
          type="text"
          v-model="form.nickName"
          placeholder="닉네임을 입력해주세요"
          class="input"
        />
      </div>

      <!-- 학번 -->
      <div class="form-group">
        <label class="label">학번</label>
        <input
          type="text"
          v-model="form.student_number"
          placeholder="학번을 입력해주세요"
          class="input"
        />
      </div>

      <!-- 전공 -->
      <div class="form-group">
        <label class="label">전공</label>
        <input
          type="text"
          v-model="form.major"
          placeholder="전공을 입력해주세요"
          class="input"
        />
      </div>

      <!-- 가입하기 버튼 -->
      <div class="form-group">
        <button
          type="submit"
          class="signup-btn"
          v-bind:disabled="!emailChecked"
        >
          가입하기
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import * as signupApi from "@/api/user/signup";
import * as sendCodeApi from "@/api/user/emailVerification";
import * as checkCodeApi from "@/api/user/codeVerification";

export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
        schoolEmail: "",
        verificationCode: "",
        nickName: "",
        student_number: "",
        major: "",
      },
      emailChecked: false,
      codeSended: false,
    };
  },
  methods: {
    async sendVerificationCode() {
      if (!this.form.schoolEmail) {
        alert("학교 이메일을 입력하세요.");
        return;
      }
      try {
        const response = await sendCodeApi.emailVerification(
          this.form.schoolEmail
        );
        if (response && response.status === 200) {
          alert("인증번호가 전송되었습니다.");
          this.codeSended = true;
        } else {
          alert(response.message);
        }
      } catch (error) {
        alert("인증번호 발송 중 문제가 발생했습니다.");
      }
    },
    async checkCode() {
      if (!this.form.verificationCode) {
        alert("인증번호를 입력하세요.");
        return;
      }
      if (Number.isNaN(Number(this.form.verificationCode))) {
        alert("인증번호 형식이 잘못되었습니다.");
        return;
      }
      try {
        const response = await checkCodeApi.codeVerification(
          this.form.schoolEmail,
          Number(this.form.verificationCode)
        );
        if (response && response.status === 200) {
          alert("인증되었습니다.");
          this.emailChecked = true;
        } else {
          alert(response.message);
        }
      } catch (error) {
        alert("인증번호 확인 중 문제가 발생했습니다.");
      }
    },
    async handleSignup() {
      if (!this.validateForm()) return;

      try {
        const response = await signupApi.signup(this.form);
        if (response && response.status === 200) {
          alert("회원가입에 성공하였습니다.");
          this.$router.push("/signin");
        } else {
          alert(response.message);
        }
      } catch (error) {
        alert("가입 중 문제가 발생했습니다.");
      }
    },
    validateForm() {
      const {
        username,
        password,
        confirmPassword,
        email,
        schoolEmail,
        nickName,
        student_number,
        major,
      } = this.form;

      if (
        !username ||
        !password ||
        !confirmPassword ||
        !email ||
        !schoolEmail ||
        !nickName ||
        !student_number ||
        !major
      ) {
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
.signup {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 600px; /* 모든 필드의 최대 너비 설정 */
  margin: 0 auto; /* 가운데 정렬 */
  margin-top: 5rem;
  box-sizing: border-box;
}

.signup-title {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  width: 100%; /* 부모 컨테이너 기준 너비 100% */
  margin-bottom: 2rem;
}

.label {
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

.input-area {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%; /* 버튼 포함 필드도 부모 기준 100% */
}

.input {
  padding: 0.7rem 0.8rem;
  flex: 1; /* 입력창이 남은 공간을 차지 */
  font-size: 0.9rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  box-sizing: border-box;
  margin: 0;
}

.input:focus {
  border-color: #66bb6a;
  outline: none;
  box-shadow: 0 0 4px rgba(102, 187, 106, 0.4);
}

.input::placeholder {
  color: #aaa;
}

.button {
  flex-shrink: 0; /* 버튼의 크기를 고정 */
  background-color: #66bb6a;
  color: white;
  border: none;
  padding: 0.7rem 1rem;
  font-size: 0.9rem;
  border-radius: 0.5rem;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #4caf50;
}

.button:disabled {
  background-color: #4caf50; /* 동일한 배경색 유지 */
  color: white; /* 동일한 글자색 유지 */
  opacity: 0.5; /* 흐리게 처리 */
  cursor: not-allowed; /* 클릭 불가 */
}

.signup-btn {
  width: 100%; /* 가입하기 버튼도 최대 너비 */
  background-color: #66bb6a;
  color: white;
  border: none;
  padding: 0.8rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.signup-btn:hover {
  background-color: #4caf50;
}

.signup-btn:disabled {
  background-color: #4caf50; /* 동일한 배경색 유지 */
  color: white; /* 동일한 글자색 유지 */
  opacity: 0.5; /* 흐리게 처리 */
  cursor: not-allowed; /* 클릭 불가 */
}
</style>
