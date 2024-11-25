<template>
  <div v-if="loading">로딩중</div>
  <div v-else>
    <div class="class-info">
      <div class="class-name">{{ this.lecture_name }}</div>
      <div class="class-professor-name">{{ this.professor_name }}</div>
      <div class="class-info-detail">어떤 질문이던 자유롭게 질문하세요!</div>
      <div class="class-ask-btn-cover">
        <button class="class-ask-btn">질문하기</button>
      </div>
    </div>
    <div class="classpage-title">역대 개설 과목</div>
    <div class="semestar-list">
      <div v-for="semestar in this.semestarList" :key="semestar" class="semestar">
        <div class="semestar-body">
          <div class="semestar-open-time">{{ semestar }}</div>
        </div>
        <div class="semestar-footer">
          입장하기
        </div>
      </div>
    </div>
    <div class="classpage-title">질문 목록</div>
    <div v-for="question in questionList.slice(10 * (this.currentPage - 1), 10 * this.currentPage)" :key="question.question_id" class="post">
      <div class="post-main">
        <div class="post-title">{{ question.title }}</div>
        <div class="post-detail">
          {{ question.content }}
        </div>
        <div class="post-info">
          <div class="reply-num">답변 0</div>
          <div class="write-time">{{ question.created_at.substring(0, 10) }}</div>
          <div class="best-btn">궁금해요 {{ question.curious }}</div>
        </div>
      </div>
      <div class="post-point">
        {{ question.point }}
      </div>
    </div>
    <div class="page-list-cover">
      <div class="page-list">
        <div class="page-btn" v-for="page in pageList" :key="page" @click="() => {changePage(page)}">
          {{ page }}
        </div>
        <button class="left-btn">다음 ></button>
      </div>
    </div>
    <div class="search-box-cover">
      <input type="text" class="search-box" placeholder="제목과 내용을 검색해 보세요" />
      <div class="question-btn">질문하기</div>
    </div>
  </div>
</template>

<script>
import * as lectureQuestionListApi from "@/api/board/lectureQuestionList";

export default {
  data() {
    return {
      loading: true,
      semestarList: ["24-1", "23-2", "23-2", "22-2"],
      questionList: [],
      pageList: [],
      currentPage: 1,
    }
  },
  props: {
    lecture_id: {
      type: String,
      default: null,
    },
    lecture_name: {
      type: String,
      default: null,
    },
    professor_name: {
      type: String,
      default: null,
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await lectureQuestionListApi.lectureQuestionList(this.lecture_id);
        this.questionList = response.data.question_list;
      } catch(err) {
        alert("질문을 불러오는 도중 문제가 발생하였습니다.");
      } finally {
        this.loading = false;
        const pageNum = Math.ceil(this.questionList.length / 10);
        this.pageList = Array.from({ length: pageNum }, (_, i) => i + 1);
      }
    },
    changePage(page) {
      this.currentPage = page;
    }
  },
}
</script>

<style scoped>
/* 전체 페이지 스타일 */
.class-page {
  font-family: Arial, sans-serif;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: white;
}

/* 수업 정보 섹션 */
.class-info {
  text-align: center;
  margin-bottom: 2rem;
  padding: 2rem 0;
  border-bottom: 1px solid #ddd;
}

.class-name {
  font-size: 1.8rem;
  font-weight: bold;
}

.class-professor-name {
  font-size: 1rem;
  color: grey;
}

.class-info-detail {
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.class-ask-btn {
  background-color: #66bb6a;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.class-ask-btn:hover {
  background-color: #4caf50;
}

/* 질문 목록 섹션 */
.question-list-section {
  margin-bottom: 2rem;
}

.section-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.post-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.post {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding: 1rem 0;
}

.post-main {
  max-width: 80%;
}

.post-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.post-detail {
  font-size: 1rem;
  color: grey;
  margin-bottom: 1rem;
}

.post-info {
  font-size: 0.9rem;
  display: flex;
  gap: 1rem;
  color: #555;
}

.post-point {
  font-size: 1.5rem;
  font-weight: bold;
  color: #66bb6a;
  text-align: right;
}

/* 페이지네이션 */
.pagination {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
}

.page-btn,
.next-btn {
  background-color: #f1f1f1;
  color: #333;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
}

.page-btn:hover,
.next-btn:hover {
  background-color: #ddd;
}

/* 역대 개설 과목 */
.previous-courses {
  margin-top: 2rem;
}

.semestar-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 1.5rem;
}

.semestar-body {
  text-align: center;
  font-size: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid #ddd;
}

.semestar-open-time {
  font-size: 1.2rem;
  font-weight: bold;
}

.semestar-footer {
  text-align: center;
  padding: 0.5rem 0;
  font-size: 0.9rem;
  color: #66bb6a;
  cursor: pointer;
}

.semestar-footer:hover {
  text-decoration: underline;
}
</style>
