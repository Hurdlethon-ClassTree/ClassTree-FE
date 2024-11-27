<template>
  <!-- 로딩 -->
  <div v-if="loading && storeInitialized"></div>

  <div>
    <!-- 배너 -->
    <section class="banner">
      <h1 class="banner-title">ClassTree에 오신 것을 환영합니다!</h1>
      <p>수업에서 여쭤보기 어려웠던 질문들 익명으로 질문하세요!</p>
    </section>

    <div class="home">
      <!-- 좌우 분할: 답변 요청과 미답변 질문 목록 -->
      <div class="split-sections">
        <!-- 답변 요청 -->
        <section class="content-section">
          <h2 class="section-title">누구보다 먼저 답변을 달아보세요!</h2>
          <p class="section-detail">다른 학생들은 이런 질문을 하고 있어요</p>
          <div class="question-list">
            <div
              v-for="question in nonAnsweredQuestions"
              :key="question.id"
              class="question-item"
            >
              <div class="question-title">{{ question.title }}</div>
              <div class="question-meta">
                {{ question.subject }} | {{ question.professor }}
              </div>
            </div>
          </div>
          <div class="button-container">
            <button @click="loadMoreNonAnswered" class="button">
              + 더보기
            </button>
          </div>
        </section>

        <!-- 나의 미답변 질문 목록 -->
        <section class="content-section" v-if="loggedIn">
          <h2 class="section-title">나의 미답변 질문 목록</h2>
          <p class="section-detail">당신의 답변을 기다리고 있어요!</p>
          <div class="question-list">
            <div
              v-for="question in myUnansweredQuestions.slice(0, 3)"
              :key="question"
              class="question-item"
            >
              <div class="question-title">{{ question.title }}</div>
              <div class="question-meta">{{ question.lecture_id }} | {{}}</div>
            </div>
          </div>
          <div class="button-container">
            <button @click="loadMoreMyQuestions" class="button">
              + 더보기
            </button>
          </div>
        </section>
      </div>

      <!-- 강의실에 새 질문 -->
      <section class="content-section">
        <h2 class="section-title">강의실에 새 질문이 달렸어요!</h2>
        <div class="new-questions-grid">
          <div
            v-for="question in newQuestions"
            :key="question.id"
            class="new-question-card"
          >
            <div class="subject-title">{{ question.subject }}</div>
            <div class="new-question-meta">
              <p class="new-question-code">{{ question.code }}</p>
              <p class="new-question-professor">
                {{ question.professor }} 교수님
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 사용자 정보 -->
      <section class="user-info-section">
        <div class="user-info">
          <div class="user-avatar"></div>
          <div>
            <h3 class="user-name">이용자 별명</h3>
            <p class="user-history">N년 전부터 활동 중</p>
          </div>
        </div>
        <button @click="editProfile" class="button profile-edit">
          프로필 수정하기
        </button>
      </section>
    </div>
  </div>
</template>

<script>
import * as myunansquestionApi from "@/api/question/myunansQuestionList";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("auth", ["nickname", "email", "loggedIn"]),
    storeInitialized() {
      return this.loggedIn !== undefined; // 상태가 정의되어 있을 때만 렌더링
    },
  },
  data() {
    return {
      nonAnsweredQuestions: [
        { id: 1, title: "질문 1", subject: "과목명 1", professor: "교수님 1" },
        { id: 2, title: "질문 2", subject: "과목명 2", professor: "교수님 2" },
        { id: 3, title: "질문 1", subject: "과목명 1", professor: "교수님 1" },
      ],
      newQuestions: [
        { id: 1, subject: "과목명 1", professor: "교수님 1", code: "코드 1" },
        { id: 2, subject: "과목명 2", professor: "교수님 2", code: "코드 2" },
        { id: 3, subject: "과목명 3", professor: "교수님 3", code: "코드 3" },
      ],
      myUnansweredQuestions: [],
      loading: true,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    loadMoreNonAnswered() {
      alert("더 많은 답변 요청 질문을 불러옵니다.");
    },
    editProfile() {
      this.$router.push("/setting");
    },
    loadMoreMyQuestions() {
      this.$router.push("/nonans");
    },
    async fetchData() {
      console.log(this.loggedIn);
      if (this.loggedIn != undefined && this.loggedIn == true) {
        try {
          const response_myunans =
            await myunansquestionApi.myunansQuestionList();
          this.myUnansweredQuestions = response_myunans.data;
          console.log(this.myUnansweredQuestions);
        } catch (err) {
          alert("질문을 불러오는 도중 문제가 발생하였습니다.");
        } finally {
          this.loading = false;
        }
      }
    },
  },
};
</script>

<style scoped>
/* 공통 스타일 */
.home {
  font-family: Arial, sans-serif;
}

/* 배너 */
.banner {
  background-color: #66bb6a;
  color: white;
  text-align: center;
  padding: 2.5rem 1rem;
}

.banner-title {
  font-size: 1.8rem;
  font-weight: bold;
}

/* 좌우 분할 섹션 */
.split-sections {
  display: flex;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e7e7e7;
}

.content-section {
  flex: 1;
  padding: 1.5rem;
  padding-top: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.section-title {
  margin: 0 0.5rem 0.8rem;
}

.section-detail {
  font-size: 0.9rem;
  margin: 0 0.5rem 1.5rem;
}

.question-list {
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
}

.question-item {
  display: flex;
  justify-content: space-between;
  background-color: #f9f9f9;
  padding: 0.8rem 1rem;
  margin-bottom: 0.4rem;
  border-radius: 0.3rem;
}

.question-meta {
  font-size: 0.9rem;
  color: #666;
  text-align: right;
}

/* 더보기 버튼 */
.button-container {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.button {
  background-color: #66bb6a;
  color: white;
  border: none;
  padding: 0.6rem 1.5rem; /* 얇은 버튼 */
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #81c784;
}

/* 강의실 새 질문 */
.new-questions-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 1rem;
}

.new-question-card {
  background-color: #f3f3f3;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  margin: 0 1rem;
}

.subject-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #000000;
}

.new-question-meta {
  font-size: 0.9rem;
  color: #5d5d5d;
}

.new-question-code {
  font-size: 1rem;
  margin-top: 0.3rem;
}

.new-question-professor {
  margin-bottom: 0.3rem;
}

/* 사용자 정보 */
.user-info-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #82b184;
  padding: 2.5rem 3rem;
  margin-top: 2rem;
}

.user-info {
  display: flex;
  align-items: center;
}

.user-avatar {
  width: 5rem;
  height: 5rem;
  background-color: #d9d9d980;
  border-radius: 50%;
  margin-right: 1.5rem;
}

.user-name {
  font-weight: bold;
  color: white;
}

.user-history {
  font-size: 0.9rem;
  color: white;
}

.profile-edit {
  background-color: black;
  color: white;
  border: none;
  padding: 0.8rem 1rem;
  border-radius: 8px;
}

/* 로딩 애니메이션 */
.loading {
  text-align: center;
  margin-top: 2rem;
}
.spinner {
  margin: 0 auto;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #66bb6a;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
