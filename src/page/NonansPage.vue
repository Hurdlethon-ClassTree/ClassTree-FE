<template>
  <!-- 로딩 -->
  <div v-if="loading" class="loading">
    <div class="spinner"></div>
    <p>로딩중...</p>
  </div>

  <!-- 미답변 질문 목록 -->
  <div v-else class="nonans-question">
    <div class="main-title">나의 미답변 질문 목록</div>
    <div class="main-detail">당신의 답변을 기다리고 있어요!</div>

    <div class="question-list">
      <div
        class="question-item"
        v-for="question in questions" :key="question">
        <div class="question-title">{{ question.title }}</div>
        <span class="subject">{{ question.lecture_id }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import * as myunansquestionApi from "@/api/question/myunansQuestionList";

export default {
  data() {
    return {
      questions: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await myunansquestionApi.myunansQuestionList();
        this.questions = response.data;
      } catch(err) {
        alert("질문을 불러오는 도중 문제가 발생하였습니다.");
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
/* 전체 컴포넌트 스타일 */
.nonans-question {
  margin: 3rem auto;
  padding: 1rem;
  max-width: 800px;
}

/* 제목 스타일 */
.main-title {
  font-size: 1.8rem;
  font-weight: bold;
  color: rgba(34, 124, 49);
  text-align: center;
  margin-bottom: 1rem;
}

.main-detail {
  font-size: 1rem;
  color: #555;
  text-align: center;
  margin-bottom: 2rem;
}

/* 질문 리스트 스타일 */
.question-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* 질문 아이템 카드 */
.question-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  transition: transform 0.2s ease;
}

.question-item:hover {
  transform: translateY(-3px);
}

/* 질문 제목 */
.question-title {
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

/* 수업 이름 */
.subject {
  font-size: 0.9rem;
  color: #666;
  padding-left: 1rem;
  border-left: 2px solid rgba(34, 124, 49, 0.3);
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
