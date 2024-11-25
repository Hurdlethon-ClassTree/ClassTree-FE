<template>
  <div class="post">
    <div v-if="loading">로딩중</div>
    <div v-else>
      <div class="question-header">
        <div class="question-header-right">
          <div class="ask-icon">
            ?
          </div>
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
          <button class="curious-btn" @click="increaseCurious">나도 궁금해요! {{ this.curious }}</button>
          <div class="points">{{ this.question.curious }}</div>
        </div>
      </div>
      <div class="question-body">
        {{ this.question.content }}
      </div>
    
      <div class="reply-cover">
        <div v-for="answer in question.answers" :key="answer.id" class="reply">
          <div class="reply-header">
            <div class="reply-user-info">
              <div class="reply-user-icon"></div>
              <div>{{ answer.user_id }}</div>
            </div>
            <div class="reply-options">
              ···
            </div>
          </div>
          <div class="reply-body">
            {{ answer.content }}
          </div>
        </div>
      </div>

      <div class="reply-input-area">
        <div class="reply-input" contenteditable="true" ref="answer" placeholder="내용을 입력하세요" spellcheck="false">

        </div>
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
import * as questionPut from "@/api/question/putQuestion";

export default {
  data() {
    return {
      loading: true,
      question: {},
      content: "",
      curious: 0,
    }
  },
  props: {
    question_id: {
      type: String,
      default: "0",
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await questionApi.questionDetail(this.question_id);
        this.question = response.data;
      } catch(err) {
        alert("질문을 불러오는 도중 문제가 발생하였습니다.");
      } finally {
        this.loading = false;
        this.curious = this.question.curious;
      }
    }
  },
  async postAnswer() {
    const answer = this.$refs.answer.innerText;
    try {
      const response = await answerPost.postAnswer(this.question_id, answer);
      if (!response) {
        alert("답글 게시 중 문제가 발생하였습니다.");
      }
    } catch(err) {
      alert("답글 게시 중 문제가 발생하였습니다.");
    } finally {
      this.$refs.answer.innerText = "";
    }
  },
  async increaseCurious() {
    try {
      questionPut.putQuestion(this.question_id, this.question.title, this.question.content, this.curious + 1);
    } finally {
      this.curious = this.question.curious + 1;
    }
  }
}
</script>

<style scoped>
.post {
  margin: 0 5rem;
}
.question-header {
  border-bottom: 1px solid rgb(219, 219, 219);
  position: relative;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  padding-top: 3rem;
}
.question-detail {
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
  color: grey;
}
.reply-header {
  display: flex;
  position: relative;
}
.reply-user-info {
  display: flex;
  align-items: center;
  font-size: 0.8rem;
}
.reply-user-icon {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: rgb(212, 212, 212);
  margin-right: 0.4rem;
}
.question-body {
  border: 1px solid rgba(34, 124, 49, 0.37);
  border-radius: 1rem;
  min-height: 10rem;
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

.reply-input-area {
  display: grid;
  grid-template-columns: 9fr 1fr;
  height: 6rem;
  border: 1px solid rgba(102, 187, 106, 0.56);
  margin-bottom: 5rem;
}
.reply-input:empty::before, .post-input:empty::before {
  content: attr(placeholder);
  color: grey;
  font-size: 0.9rem;
}
.reply-input {
  padding: 0.5rem;
  font-size: 0.9rem;
}
.reply-input:focus {
  outline: none;
}
.reply-input-btn {
  color: white;
  background-color: rgb(102, 187, 106);
  border: 0;
  height: 2rem;
  border-radius: 1rem;
  padding: 0 0.8rem;
}
.reply-input-btn-cover {
  display: flex;
  align-items: center;
}

.points {
  border-radius: 1rem;
  text-align: center;
  padding: 0.05rem 0;
  background-color: rgb(206, 233, 207);
  width: 3.5rem;
  font-size: 0.9rem;
}
.question-header-left {
  font-size: 0.9rem;
  display: flex;
  right: 0;
  position: absolute;
}
.curious-btn {
  margin-right: 0.5rem;
  border: none;
  background: transparent;
  color: grey;
  font-size: 0.9rem;
}
.question-header-right {
  display: flex;
  align-items: center;
}
.ask-icon {
  height: 2.3rem;
  width: 2.3rem;
  line-height: 2.2rem;
  text-align: center;
  border-radius: 3rem;
  background: rgb(78, 197, 61);
  color: white;
  font-weight: bold;
  margin-right: 0.5rem;
}
</style>