<template>
  <div class="classroom">
    <!-- 강의실 정보 -->
    <div class="class-info">
      <h2 class="class-name">{{ lecture_name }}</h2>
      <p class="class-professor">교수님: {{ professor_name }}</p>
      <p class="class-description">자유롭게 질문하세요!</p>
      <button class="ask-button" @click="moveToAskPage(lecture_id)">
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
          <!-- 헤더 -->
          <div class="question-row header">
            <div class="question-title">질문 제목</div>
            <div class="question-points">포인트</div>
            <div class="question-date">작성일</div>
            <div class="question-actions">궁금해요</div>
          </div>
          <!-- 데이터 -->
          <div
            v-for="question in questionList"
            :key="question.question_id"
            class="question-row"
            @click="enterQuestion(question)"
          >
            <div class="question-title">{{ question.title }}</div>
            <div class="question-points">+{{ question.point }}</div>
            <div class="question-date">
              {{ formatDate(question.created_at) }}
            </div>
            <button class="like-button">궁금해요 {{ question.curious }}</button>
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
    };
  },
  props: {
    lecture_id: {
      type: String,
      default: null,
    },
    lecture_name: {
      type: String,
      default: "강의 이름",
    },
    professor_name: {
      type: String,
      default: "교수님 이름",
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
        this.questionList = response.data.question_list;
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
    moveToAskPage(lecture_id) {
      if (this.loggedIn) {
        this.$router.push({
          path: `/class/${lecture_id}/ask`,
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
/* 전체 컨테이너 */
.classroom {
  margin: 2rem;
}

/* 강의실 정보 */
.class-info {
  text-align: center;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: #eaffea; /* 연한 연두색 배경 */
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
}

.class-name {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.class-professor {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 1rem;
}

.class-description {
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
}

/* 질문하기 버튼 */
.ask-button {
  background-color: #66bb6a;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
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
.questionlist-title {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
}

.question-table {
  border-top: 1px solid #ddd;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* 질문 행 */
.question-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  background-color: #f9f9f9;
  transition: background-color 0.3s ease;
}
.question-row:hover {
  background-color: #f0f0f0;
}

/* 질문 헤더 */
.header {
  font-weight: bold;
  background-color: #f1f1f1;
  border-bottom: 2px solid #ddd;
}

/* 질문 열 스타일 */
.question-title {
  flex: 3;
  font-size: 1rem;
  font-weight: bold;
  color: #333;
}
.question-points {
  flex: 1;
  text-align: center;
  font-size: 0.9rem;
  color: #4caf50;
}
.question-date {
  flex: 1;
  text-align: center;
  font-size: 0.9rem;
  color: #777;
}
.question-actions {
  flex: 1;
  text-align: center;
}

/* 궁금해요 버튼 */
.like-button {
  background-color: #ffeb3b;
  color: #333;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
}
.like-button:hover {
  background-color: #fdd835;
}

/* 에러 메시지 */
.error-message {
  text-align: center;
  color: red;
  font-weight: bold;
  margin-bottom: 2rem;
}
</style>
