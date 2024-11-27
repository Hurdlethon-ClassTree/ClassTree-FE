<template>
  <div class="classroom">
    <!-- 강의실 정보 -->
    <div class="class-info">
      <h2 class="class-name">{{ lecture_name }}</h2>
      <p class="class-professor">{{ professor_name }}</p>
      <p class="class-description">어떤 질문이던 자유롭게 질문하세요!</p>
      <button
        class="ask-button"
        @click="moveToAskPage(lecture_id, lecture_name)"
      >
        질문하기
      </button>
    </div>

    <!-- 로딩 중 -->
    <div v-if="loading" class="loading">
      <div class="spinner"></div>
      <p>로딩중...</p>
    </div>

    <!-- 질문 목록 -->
    <div v-else>
      <div v-if="error" class="error-message">{{ error }}</div>
      <div class="questionlist">
        <div class="questionlist-title">질문 목록</div>
        <div class="question-table">
          <!-- 데이터 -->
          <div
            v-for="question in questionList"
            :key="question.question_id"
            class="question-row"
            @click="enterQuestion(question)"
          >
            <div>
              <div class="question-title">{{ question.title }}</div>
              <div class="question-content">{{ question.content }}</div>
              <div class="question-detail">
                <div class="question-date">
                  {{ formatDate(question.created_at) }}
                </div>
                <button class="like-button">
                  <img
                    src="../../public/image/curioius-icon.png"
                    class="curious-icon"
                    alt="curious"
                  />
                  <div>{{ question.curious }}</div>
                </button>
              </div>
            </div>
            <div class="question-points-cover">
              <img
                src="../../public/image/point-background.png"
                class="point-background-img"
                alt="img"
              />
              <div class="question-points">{{ question.point }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as lectureQuestionListApi from "@/api/board/lectureQuestionList";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("auth", ["loggedIn"]),
  },
  data() {
    return {
      loading: true,
      questionList: [],
      lecture_name: "강의명",
      professor_name: "교수명",
    };
  },
  props: {
    lecture_id: {
      type: String,
      default: null,
    },
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await lectureQuestionListApi.lectureQuestionList(
          this.lecture_id
        );
        this.questionList = response.data.questions;
        this.lecture_name = `${response.data.lecture.lecture_code}-${response.data.lecture.lecture_name}`;
        this.professor_name = response.data.lecture.professor;
      } catch (err) {
        alert("질문을 불러오는 도중 문제가 발생했습니다.");
        console.error(err);
      } finally {
        this.loading = false;
      }
    },
    formatDate(dateString) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(dateString).toLocaleDateString("ko-KR", options);
    },
    enterQuestion(question) {
      this.$router.push({
        path: `/post/${question.question_id}`,
      });
    },
    moveToAskPage(lecture_id, lecture_name) {
      if (this.loggedIn) {
        this.$router.push({
          path: `/class/${lecture_id}/ask`,
          query: { lecture_name },
        });
      } else {
        alert("먼저 로그인을 해주세요.");
        this.$router.push({
          path: `/signin`,
        });
      }
    },
  },
};
</script>

<style scoped>
/* 강의실 정보 */
.class-info {
  text-align: center;
  margin-bottom: 2rem;
  padding: 2.5rem;
  position: relative;
}

.class-name {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.class-professor {
  margin-top: 0;
  font-size: 0.9rem;
  margin-bottom: 1.8rem;
}

.class-description {
  font-size: 0.85rem;
  margin-bottom: 1rem;
}

/* 질문하기 버튼 */
.ask-button {
  background-color: #227c31;
  color: white;
  border: none;
  width: 13.5rem;
  padding: 0.6rem 0;
  border-radius: 4px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.ask-button:hover {
  background-color: #4caf50;
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

/* 질문 목록 */
.question-table {
  margin: 0 6rem;
}

.questionlist-title {
  font-size: 1.5rem;
  font-weight: bold;
  padding: 2rem 6rem;
  border-top: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
}

/* 질문 행 */
.question-row {
  font-size: 0.9rem;
  padding: 1rem;
  border-bottom: 1px solid #f2f2f2;
  display: grid;
  grid-template-columns: 9fr 1fr;
}

/* 질문 열 스타일 */
.question-title {
  flex: 3;
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
}

.question-content {
  color: grey;
  height: 3rem;
  text-overflow: hidden;
}

.question-detail {
  display: flex;
  font-size: 0.85rem;
}

.question-date {
  color: grey;
  margin-right: 0.5rem;
}

.question-points-cover {
  position: relative;
}

.question-points {
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  font-size: 1.4rem;
  font-weight: bold;
}

.point-background-img {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 6rem;
}

/* 궁금해요 버튼 */
.like-button {
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  color: #54c65a;
}
.curious-icon {
  height: 1.1rem;
  margin-right: 0.2rem;
}

/* 에러 메시지 */
.error-message {
  text-align: center;
  color: red;
  font-weight: bold;
  margin-bottom: 2rem;
}
</style>
