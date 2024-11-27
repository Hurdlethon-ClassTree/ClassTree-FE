<template>
  <div class="myquestion-container">
    <!-- 타이틀 -->
    <div class="myquestion-header">나의 질문 목록</div>

    <!-- 로딩 -->
    <div v-if="loading" class="loading">
      <div class="spinner"></div>
      <p>로딩중...</p>
    </div>

    <!-- 질문 목록 -->
    <div v-else class="nonans-questions">
      <div
        class="nonans-question"
        v-for="question in questionList"
        :key="question"
      >
        <div class="nonans-question-body">
          <div class="nonans-question-title">{{ question.title }}</div>
          <div class="nonans-question-tags">
            <div class="nonans-question-tag">{{ question.lecture_id }} ({{ question.professor }})</div>
            <div class="nonans-question-tag">{{ question.created_at.slice(0, 10) }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as myquestionApi from "@/api/user/myQuestion";

export default {
  data() {
    return {
      loading: true,
      questionList: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await myquestionApi.myQuestion();
        this.questionList = response.data;
      } catch (err) {
        alert("질문을 불러오는 도중 문제가 발생하였습니다");
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
/* 전체 컨테이너 */
.myquestion-container {
  margin: 3rem;
}

/* 헤더 */
.myquestion-header {
  font-size: 1.5rem;
  font-weight: bold;
  color: rgba(34, 124, 49);
  margin-bottom: 2rem;
}

/* 질문 목록 */
.nonans-questions {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 auto;
  max-width: 1200px;
  gap: 2rem;
}

/* 질문 카드 */
.nonans-question {
  border: 1px solid #ddd;
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  padding: 1rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.nonans-question:hover {
  transform: translateY(-1px);
}

/* 질문 제목 */
.nonans-question-title {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: #333;
}

/* 질문 태그 */
.nonans-question-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.nonans-question-tag {
  font-size: 0.8rem;
  background-color: #eef5ee;
  color: #666;
  border-radius: 4px;
  padding: 0.2rem 0.5rem;
  white-space: nowrap;
}

/* 반응형 */
@media (max-width: 768px) {
  .nonans-question-row {
    grid-template-columns: 1fr;
  }
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
