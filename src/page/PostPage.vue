<template>
  <div class="post">
    <div class="question-header">
      <div class="question-header-right">
        <div class="ask-icon">
          ?
        </div>
        <div>
          <div class="question-title">
            질문 제목
          </div>
          <div class="question-detail">
            과목명-교수이름
          </div>
        </div>
      </div>
      <div class="question-header-left">
        <button class="curious-btn">나도 궁금해요! 24</button>
        <div class="points">100</div>
      </div>
    </div>
    <div class="question-body">
      
    </div>
    <div class="reply-cover">
      <div class="reply">
        <div class="reply-header">
          <div class="reply-user-info">
            <div class="reply-user-icon"></div>
            <div>별명1</div>
          </div>
          <div class="reply-options">
            ···
          </div>
        </div>
      </div>
      <div class="reply">
        <div class="reply-header">
          <div class="reply-user-info">
            <div class="reply-user-icon"></div>
            <div>별명1</div>
          </div>
          <div class="reply-options">
            ···
          </div>
        </div>
      </div>
      <div class="reply">
        <div class="reply-header">
          <div class="reply-user-info">
            <div class="reply-user-icon"></div>
            <div>별명1</div>
          </div>
          <div class="reply-options">
            ···
          </div>
        </div>
      </div>
      <div class="reply">
        <div class="reply-header">
          <div class="reply-user-info">
            <div class="reply-user-icon"></div>
            <div>별명1</div>
          </div>
          <div class="reply-options">
            ···
          </div>
        </div>
      </div>
    </div>
    <div class="reply-input-area">
      <div class="reply-input" contenteditable="true" placeholder="내용을 입력하세요">

      </div>
      <div class="reply-input-btn-cover">
        <button class="reply-input-btn">답글 달기</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
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
  height: 10rem;
  margin-bottom: 2rem;
}

.reply {
  background-color: rgba(206, 233, 207, 0.26);
  padding: 0.7rem 1rem;
  border-radius: 0.5rem;
  height: 5rem;
  margin-bottom: 2rem;
}
.reply-options {
  position: absolute;
  right: 1rem;
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