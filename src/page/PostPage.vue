<template>
  <div class="post">
    <!-- 로딩 중 -->
    <div v-if="loading" class="loading">
      <div class="spinner"></div>
      <p>로딩중...</p>
    </div>
    <div v-else>
      <!-- 질문 헤더 -->
      <div class="question-header">
        <div class="question-header-right">
          <div class="ask-icon">?</div>
          <div>
            <div class="question-title">
              {{ this.question.title }}
            </div>
            <div class="question-detail">
              {{ this.question.lecture_name }}
            </div>
          </div>
        </div>
        <div class="question-header-left">
          <button
            class="curious-btn"
            :class="{ active: curiousState }"
            @click="increaseCurious"
          >
            나도 궁금해요!
          </button>
          <div class="points">{{ this.curious }}</div>
        </div>
      </div>

      <!-- 질문 본문 -->
      <div class="question-body">
        {{ this.question.content }}
      </div>

      <!-- 답글 목록 -->
      <div class="reply-cover">
        <div v-for="answer in question.answers" :key="answer.id" class="reply">
          <div class="reply-header">
            <div class="reply-user-info">
              <div class="reply-user-icon"></div>
              <div>{{ answer.user_id }}</div>
            </div>
            <div class="reply-options">···</div>
          </div>
          <div class="reply-body">
            {{ answer.content }}
          </div>
        </div>
      </div>

      <!-- 답글 입력 -->
      <div class="reply-input-area">
        <div
          class="reply-input"
          contenteditable="true"
          ref="answer"
          placeholder="내용을 입력하세요"
          spellcheck="false"
        ></div>
        <div class="reply-input-btn-cover">
          <button class="reply-input-btn" @click="postAnswer">답글 달기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as questionApi from "@/api/board/questionDetail";
import * as answerPost from "@/api/answer/postAnswer";
import * as curiousApi from "@/api/question/curious";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("auth", ["loggedIn"]),
  },
  data() {
    return {
      loading: true,
      question: {},
      content: "",
      curious: 0,
      curiousState: false,
    };
  },
  props: {
    question_id: {
      type: String,
      default: "0",
    },
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await questionApi.questionDetail(this.question_id);
        this.question = response.data;
      } catch (err) {
        alert("질문을 불러오는 도중 문제가 발생하였습니다.");
      } finally {
        this.loading = false;
        this.curious = this.question.curious;
      }
    },
    async postAnswer() {
      if (this.loggedIn) {
        const answer = this.$refs.answer.innerText;
        try {
          const response = await answerPost.postAnswer(
            this.question_id,
            answer
          );
          if (!response) {
            alert("답글 게시 중 문제가 발생하였습니다.");
          }
        } catch (err) {
          alert("답글 게시 중 문제가 발생하였습니다.");
        } finally {
          this.$refs.answer.innerText = "";
          this.fetchData();
        }
      } else {
        alert("먼저 로그인을 해주세요.");
      }
    },
    async increaseCurious() {
      if (this.loggedIn) {
        try {
          const response = await curiousApi.curious(this.question_id);
          this.curious = response.data.curious_count;
          this.curiousState = response.data.state;
        } catch (err) {
          console.error(err);
        }
      } else {
        alert("먼저 로그인을 해주세요.");
      }
    },
  },
};
</script>

<style scoped>
/* 전체 페이지 */
.post {
  margin: 2rem 5rem;
  font-family: Arial, sans-serif;
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

/* 질문 헤더 */
.question-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(219, 219, 219);
  padding: 1.5rem 0;
  margin-bottom: 1.5rem;
}

.question-header-right {
  display: flex;
  align-items: center;
}

.ask-icon {
  height: 2.3rem;
  width: 2.3rem;
  line-height: 2.3rem;
  text-align: center;
  border-radius: 50%;
  background-color: rgb(78, 197, 61);
  color: white;
  font-weight: bold;
  margin-right: 1rem;
}

.question-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.2rem;
}

.question-detail {
  font-size: 0.9rem;
  color: grey;
}

.question-header-left {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* "궁금해요" 버튼 기본 스타일 */
.curious-btn {
  background-color: white;
  border: 1px solid #ddd;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  color: grey;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* 활성화된 상태 */
.curious-btn.active {
  background-color: #d8f3dc; /* 연초록색 */
  color: #4caf50; /* 초록색 텍스트 */
  border: 1px solid #4caf50;
}

.points {
  padding: 0.5rem 1rem;
  background-color: rgb(206, 233, 207);
  font-size: 0.9rem;
  text-align: center;
  border-radius: 1rem;
}

/* 질문 본문 */
.question-body {
  border: 1px solid rgba(34, 124, 49, 0.37);

  border-radius: 0.5rem;
  height: 10rem;
  padding: 1rem;
  margin-bottom: 2rem;
  padding: 0.5rem 0.7rem;
}

.reply {
  background-color: rgba(206, 233, 207, 0.26);
  padding: 0.7rem 1rem;
  border-radius: 0.5rem;
  min-height: 5rem;
  margin-bottom: 2rem;
}
.reply-options {
  position: absolute;
  right: 1rem;
}
.reply-body {
  margin-top: 0.2rem;
}
/* 답글 목록 */
.reply-cover {
  margin-bottom: 2rem;
}

.reply {
  padding: 1rem;
  border-bottom: 1px solid #ddd;
}

.reply-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.reply-user-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.reply-user-icon {
  width: 2rem;
  height: 2rem;
  background-color: rgb(212, 212, 212);
  border-radius: 50%;
}

.reply-content {
  font-size: 0.9rem;
  color: #333;
}

/* 답글 입력 */
.reply-input-area {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid rgba(102, 187, 106, 0.56);
  align-items: center;
}

.reply-input {
  flex: 1;
  font-size: 1rem;
  border: none;
  outline: none;
}

.reply-input::placeholder {
  color: grey;
}

.reply-input-btn {
  background-color: rgb(102, 187, 106);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
}

.reply-input-btn:hover {
  background-color: #4caf50;
}
</style>
