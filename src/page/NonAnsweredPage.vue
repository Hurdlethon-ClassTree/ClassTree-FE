<template>
  <!-- 미답변 질문 목록 -->
  <div class="nonans-question">
    <div class="main-title">전체 미답변 질문 목록</div>
    <div class="main-detail">답변을 기다리고 있어요!</div>

    <!-- 로딩 -->
    <div v-if="loading" class="loading">
      <div class="spinner"></div>
      <p>로딩중...</p>
    </div>

    <!-- <div v-else class="question-list">
      <div
        class="question-item"
        v-for="question in questions.slice(0, 10)"
        :key="question"
        @click="questionLink(question.question_id)"
      >
        <div class="question-title">{{ question.title }}</div>
        <span class="subject">{{ question.lecture_name }}</span>
      </div>
    </div> -->
    <div class="question-table">
      <!-- 데이터 -->
      <div
        v-for="question in questions"
        :key="question.question_id"
        class="question-row"
        @click="enterQuestion(question)"
      >
        <div>
          <span v-if="question.checked" class="checked-badge"> ✅ 채택됨 </span>
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
              <div>{{ question.curious_count }}</div>
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
</template>

<script>
import * as nonansApi from "@/api/board/nonanswer";

export default {
  data() {
    return {
      questions: [],
      loading: true,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    questionLink(question_id) {
      this.$router.push(`/post/${question_id}`);
    },
    async fetchData() {
      try {
        const response = await nonansApi.nonanswer();
        this.questions = response.data.no_answer_questions;
      } catch (err) {
        alert("질문을 불러오는 도중 문제가 발생하였습니다.");
      } finally {
        this.loading = false;
      }
    },
    formatDate(dateString) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(dateString).toLocaleDateString("ko-KR", options);
    },
  },
};
</script>

<style scoped>
/* 전체 컴포넌트 스타일 */
.nonans-question {
  margin: 3rem;
}

/* 제목 스타일 */
.main-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: rgba(34, 124, 49);
  margin-bottom: 1rem;
}

.main-detail {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 2rem;
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
