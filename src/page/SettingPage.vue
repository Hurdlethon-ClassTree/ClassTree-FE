<template>
  <div>
    <!-- 사용자 정보 영역 -->
    <div class="user-info-area">
      <div class="user-info-body">
        <div class="user-icon"></div>
        <div class="user-info">
          <div class="user-name">{{ name }}</div>
          <div class="user-email">{{ email }}</div>
        </div>
      </div>
    </div>

    <!-- 프로필 수정 -->
    <div class="setting">
      <div class="setting-banner">
        <h1>프로필 수정하기</h1>
      </div>
      <form class="setting-form">
        <div class="input-group">
          <label for="nickname">별명</label>
          <input
            id="nickname"
            type="text"
            placeholder="별명을 입력해 주세요"
            v-model="name"
          />
        </div>
        <div class="input-group">
          <label for="email">이메일</label>
          <input
            id="email"
            type="email"
            placeholder="이메일을 입력해 주세요"
            v-model="email"
          />
        </div>
        <button type="submit" class="modify-btn" @click="saveEdit">
          수정하기
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import * as editApi from "@/api/user/editUserInfo";

export default {
  computed: {
    ...mapState("auth", ["nickname", "email", "loggedIn"]),
  },
  data() {
    return {
      tmpNickname: this.nickname,
      tmpEmail: this.email,
    };
  },
  mounted() {
    if (!this.loggedIn) {
      window.location.assign("/");
    }
  },
  methods: {
    async saveEdit(event) {
      try {
        // API 호출
        const response = await editApi.editUserInfo(
          this.tmpNickname,
          this.tmpEmail
        );
        if (response && response.status === 200) {
          // this.$store.commit("auth/setLoggedIn", true);
          // this.$store.commit("auth/setNickname", response.data.user.NICKNAME);
          // this.$store.commit("auth/setEmail", response.data.user.email);
        } else {
          alert(response.message);
        }
      } catch (err) {
        console.error(err);
        alert("서버 오류가 발생했습니다. 다시 시도해 주세요.");
      }
    },
  },
};
</script>

<style scoped>
/* 사용자 정보 */
.user-info-area {
  display: flex;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: #66bb6a;
  margin-bottom: 2rem;
}

.user-info-body {
  display: flex;
  align-items: center;
}

.user-icon {
  width: 80px;
  height: 80px;
  background-color: #ddd;
  border-radius: 50%;
  margin-right: 1rem;
}

.user-info {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
}

.user-email {
  font-size: 0.9rem;
  color: white;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  margin-top: 0.5rem;
}

/* 프로필 수정 */
.setting {
  padding: 0 2rem;
}

.setting-banner {
  margin-bottom: 2rem;
  text-align: center;
}

.setting-banner h1 {
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
}

.setting-form {
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.input-group {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #333;
}

input {
  height: 2.5rem;
  padding: 0 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
}

input:focus {
  border-color: #4caf50;
  outline: none;
  box-shadow: 0 0 4px rgba(76, 175, 80, 0.4);
}

input::placeholder {
  color: #aaa;
}

/* 버튼 */
.button-group {
  display: flex;
  justify-content: space-between;
}

button {
  width: 48%;
  height: 2.5rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cancel-btn {
  background-color: white;
  border: 1px solid #999;
  color: #333;
}

.cancel-btn:hover {
  background-color: #f1f1f1;
  border-color: #666;
}

.modify-btn {
  background-color: #66bb6a;
  border: none;
  color: white;
}

.modify-btn:hover {
  background-color: #4caf50;
}
</style>
