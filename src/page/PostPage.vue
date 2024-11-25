<template>
  <div class="post">
    <!-- 질문 헤더 -->
    <div class="question-header">
      <div class="question-header-right">
        <div class="ask-icon">?</div>
        <div>
          <div class="question-title">질문 제목</div>
          <div class="question-detail">과목명 - 교수이름</div>
        </div>
      </div>
      <div class="question-header-left">
        <button class="curious-btn">나도 궁금해요! 24</button>
        <div class="points">100</div>
      </div>
    </div>

    <!-- 질문 본문 -->
    <div class="question-body">질문 내용이 여기에 표시됩니다.</div>

    <!-- 답글 목록 -->
    <div class="reply-cover">
      <div class="reply" v-for="(reply, index) in replies" :key="index">
        <div class="reply-header">
          <div class="reply-user-info">
            <div class="reply-user-icon"></div>
            <div>별명{{ index + 1 }}</div>
          </div>
          <div class="reply-options">···</div>
        </div>
        <div class="reply-content">답글 내용 {{ index + 1 }}</div>
      </div>
    </div>

    <!-- 답글 입력 -->
    <div class="reply-input-area">
      <div
        class="reply-input"
        contenteditable="true"
        placeholder="내용을 입력하세요"
      ></div>
      <div class="reply-input-btn-cover">
        <button class="reply-input-btn">답글 달기</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      replies: Array(4).fill(""),
    };
  },
};
</script>

<style scoped>
/* 전체 페이지 */
.post {
  margin: 2rem 5rem;
  font-family: Arial, sans-serif;
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

.curious-btn {
  background-color: transparent;
  border: 1px solid #ddd;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  color: grey;
  cursor: pointer;
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
