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

    <div v-else class="question-list">
      <div
        class="question-item"
        v-for="question in questions.slice(0, 10)"
        :key="question"
        @click="questionLink(question.question_id)"
      >
        <div class="question-title">{{ question.title }}</div>
        <span class="subject">{{ question.lecture_name }}</span>
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

/* 질문 리스트 스타일 */
.question-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* 질문 아이템 카드 */
.question-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #f9f9f9;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  transition: transform 0.2s ease;
  font-size: 0.9rem;
}

.question-item:hover {
  filter: brightness(85%);
}

/* 질문 제목 */
.question-title {
  color: #333;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

/* 수업 이름 */
.subject {
  font-size: 0.9rem;
  color: #666;
  padding-left: 1rem;
  border-left: 1px solid #a8a8a8;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
