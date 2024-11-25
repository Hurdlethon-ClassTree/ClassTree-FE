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
.classpage-title {
  font-size: 1.5rem;
  font-weight: bold;
  padding-left: 5rem;
  height: 10rem;
  line-height: 10rem;
  border-top: 1px solid rgb(230, 230, 230);
  border-bottom: 1px solid rgb(230, 230, 230);
}
.post {
  padding: 1rem 5rem;
  display: grid;
  grid-template-columns: 9fr 1fr;
}
.post-title {
  font-weight: bold;
  margin-bottom: 1rem;
}
.post-detail {
  font-size: 0.9rem;
  color: grey;
  margin-bottom: 0.3rem;
  height: 4rem;
}
.post-info {
  font-size: 0.9rem;
  display: flex;
}
.reply-num {
  margin-right: 1rem;
}
.write-time {
  color: rgb(104, 104, 104);
  margin-right: 1rem;
}
.post-point {
  margin-top: 5rem;
  font-size: 1.2rem;
  font-weight: bold;
}

.class-info {
  padding: 4rem 0;
}
.class-name {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
}
.class-professor-name {
  color: grey;
  font-size: 0.9rem;
  text-align: center;
  margin-bottom: 1.5rem;
}
.class-info-detail {
  text-align: center;
  font-size: 0.9rem;
  margin-bottom: 2rem;
}
.class-ask-btn-cover {
  display: flex;
  justify-content: center;
}
.class-ask-btn {
  height: 2.4rem;
  width: 10rem;
  background-color: rgb(102, 187, 106);
  border: none;
  border-radius: 0.2rem;
  color: white;
}

.semestar-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 2rem 5rem;
  text-align: center;
}
.semestar {
  width: 10rem;
  margin: 0 auto;
}
.semestar-body {
  height: 9rem;
  align-content: center;
  background-color: rgb(243, 243, 243);
  border-radius: 1rem 1rem 0 0;
}
.semestar-open-time {
  height: 6rem;
  width: 6rem;
  border-radius: 3rem;
  background-color: white;
  margin: 0 auto;
  line-height: 6rem;
}
.semestar-footer {
  background-color: rgb(102, 187, 106);
  height: 2rem;
  border-radius: 0 0 1rem 1rem;
  line-height: 2rem;
  font-size: 0.85rem;
  color: white;
}

.page-list-cover {
  margin: 3rem 0;
  width: 100%;
  display: flex;
}
.page-list {
  display: flex;
  margin: 0 auto;
}
.page-btn {
  color: grey;
  margin-right: 1.4rem;
}
.left-btn {
  color: grey;
  border: none;
  background: transparent;
}
.search-box-cover {
  display: flex;
  justify-content: center;
  height: 2rem;
  margin-bottom: 4rem;
}
.search-box {
  padding-left: 0.5rem;
  line-height: 2rem;
  width: 17rem;
  border-radius: 0.2rem;
  border: 1px solid rgb(229, 229, 229);
  margin-right: 1rem;
}
.search-box:focus {
  outline: none;
}
.question-btn {
  font-size: 0.8rem;
  border-radius: 1rem;
  height: 2rem;
  line-height: 2rem;
  background-color: rgb(102, 187, 106);
  padding: 0 0.8rem;
  color: white;
}
</style>