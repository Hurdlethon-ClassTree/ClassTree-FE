<template>
  <div>
    <!-- 기존 코드 유지 -->
    <div class="user-info-area">
      <div class="user-info-body">
        <div class="user-icon"></div>
        <div class="user-info">
          <div class="user-name">{{ tmpNickname }}</div>
          <div class="user-email">{{ tmpEmail }}</div>
        </div>
      </div>
    </div>

    <!-- 기존 프로필 수정 코드 유지 -->
    <div class="setting">
      <div class="setting-banner">
        <h1>프로필 수정하기</h1>
      </div>
      <form class="setting-form" @submit.prevent="saveEdit">
        <div class="input-group">
          <label for="nickname">별명</label>
          <input
            id="nickname"
            type="text"
            placeholder="별명을 입력해 주세요"
            v-model="tmpNickname"
          />
        </div>
        <div class="input-group">
          <label for="email">이메일</label>
          <input
            id="email"
            type="email"
            placeholder="이메일을 입력해 주세요"
            v-model="tmpEmail"
          />
        </div>
        <!-- 선호 과목 선택 -->
        <div class="lecture-selection">
          <h2>선호 과목 선택</h2>
          <div
            v-for="(selection, index) in selectedLectures"
            :key="index"
            class="lecture-dropdown"
          >
            <select
              v-model="selectedLectures[index]"
              @change="updateAvailableLectures"
            >
              <option
                v-for="lecture in availableLectures(index)"
                :key="lecture.value"
                :value="lecture.value"
              >
                {{ lecture.text }}
              </option>
            </select>
            <button
              type="button"
              @click="removeLecture(index)"
              class="remove-btn"
            >
              &times;
            </button>
          </div>
          <div class="add-btn-wrapper">
            <button type="button" @click="addLecture" class="add-btn">
              과목 추가
            </button>
          </div>
        </div>
        <button type="submit" class="modify-btn">수정하기</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import * as editApi from "@/api/user/editUserInfo";
import * as userApi from "@/api/user/getUserInfo";
import * as lectureListApi from "@/api/board/lectureList";

export default {
  computed: {
    ...mapState("auth", ["nickname", "email", "loggedIn"]),
  },
  data() {
    return {
      tmpNickname: this.nickname,
      tmpEmail: this.email,
      lectureList: ["Math", "Science", "History", "Art", "Music"], // 선택 가능한 과목
      selectedLectures: [], // 사용자가 선택한 과목
    };
  },
  mounted() {
    if (!this.loggedIn) {
      window.location.assign("/");
    }
    this.fetchData();
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
          this.fetchData();
        } else {
          alert(response.message);
        }
      } catch (err) {
        console.error(err);
        alert("서버 오류가 발생했습니다. 다시 시도해 주세요.");
      }
    },
    async fetchData() {
      try {
        // API 호출
        const response = await userApi.getInfo();
        if (response && response.status === 200) {
          this.$store.commit("auth/setNickname", response.data.nickname);
          this.$store.commit("auth/setEmail", response.data.email);
          this.tmpNickname = response.data.nickname;
          this.tmpEmail = response.data.email;
        } else {
          alert(response.message);
        }

        const response1 = await lectureListApi.lectureList();
        if (response1 && response1.status === 200) {
          this.lectureList = response1.data.lecture_list.map((lecture) => ({
            value: lecture.lecture_id, // 드롭다운 값 (id)
            text: `${lecture.lecture_code} - ${lecture.lecture_name}`, // 표시될 문자열
          }));
        } else {
          alert(response1.message);
        }
      } catch (err) {
        console.error(err);
        alert("서버 오류가 발생했습니다. 다시 시도해 주세요.");
      }
    },
    addLecture() {
      if (this.selectedLectures.length < this.lectureList.length) {
        this.selectedLectures.push(""); // 새로운 빈 드롭다운 추가
      } else {
        alert("더 이상 선택할 과목이 없습니다!");
      }
    },
    removeLecture(index) {
      this.selectedLectures.splice(index, 1); // 특정 드롭다운 삭제
    },
    updateAvailableLectures() {
      // 선택 가능한 과목을 업데이트
      this.selectedLectures = this.selectedLectures.filter((lecture) =>
        this.lectureList.some((item) => item.value === lecture)
      );
    },
    availableLectures(index) {
      // 선택 가능한 과목 필터링
      const selectedSet = new Set(this.selectedLectures);
      selectedSet.delete(this.selectedLectures[index]); // 현재 드롭다운 선택 항목은 제외
      return this.lectureList.filter(
        (lecture) => !selectedSet.has(lecture.value)
      );
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

/* 선호 과목 섹션 */
.lecture-selection {
  margin: 2rem 0;
}

.lecture-dropdown {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

select {
  flex: 1;
  height: 2.5rem;
  margin-right: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.remove-btn {
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #e53935;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.remove-btn:hover {
  background-color: #d32f2f;
}

/* 과목 추가 버튼 */
.add-btn-wrapper {
  text-align: center;
  margin-top: 1rem;
}

.add-btn {
  background-color: #66bb6a;
  color: white;
  font-size: 0.9rem;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.add-btn:hover {
  background-color: #4caf50;
}
</style>
