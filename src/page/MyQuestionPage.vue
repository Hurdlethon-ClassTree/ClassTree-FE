<template>
  <div class="myquestion-container">
    <!-- 타이틀 -->
    <div class="myquestion-header">나의 질문 목록</div>

    <!-- 질문 목록 -->
    <div class="nonans-questions">
      <div
        class="nonans-question"
        v-for="question in questionList"
        :key="question"
      >
        <div class="nonans-question-subject-name">{{ question.lecture_id }}</div>
        <div class="nonans-question-body">
          <div class="nonans-question-title">{{ question.title }}</div>
          <div class="nonans-question-tags">
            <div class="nonans-question-tag">{{ question.created_at.substring(0, 10) }}</div>
            <!--<div class="nonans-question-tag">{{ question.professor }}</div>-->
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
  padding: 2rem;
}

/* 헤더 */
.myquestion-header {
  font-size: 1.8rem;
  font-weight: bold;
  padding-left: 1rem;
  border-bottom: 2px solid rgb(236, 236, 236);
  margin-bottom: 2rem;
  color: #333;
}

/* 질문 목록 */
.nonans-questions {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1200px;
}

.nonans-question {
  width: 45%;
  margin-right: 2%;
  gap: 2rem;
  margin-bottom: 2rem;
}

/* 질문 카드 */
.nonans-question {
  border: 1px solid #ddd;
  background-color: #f9f9f9;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 1rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.nonans-question:hover {
  transform: translateY(-4px);
}

/* 과목명 아이콘 */
.nonans-question-subject-name {
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: #d7e9d6;
  color: #333;
  font-size: 0.9rem;
  text-align: center;
  line-height: 60px;
  font-weight: bold;
  margin-right: 1rem;
}

/* 질문 제목 */
.nonans-question-title {
  font-size: 1rem;
  font-weight: bold;
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
</style>
