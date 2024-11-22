<template>
  <div class="nonans-question">
    <div class="main-title">나의 미답변 질문 목록</div>
    <div class="main-detail">당신의 답변을 기다리고 있어요!</div>

    <div class="question-list">
      <div class="question-item">
        질문
        <span class="subject">수업 이름</span>
      </div>
      <div class="question-item">
        질문
        <span class="subject">수업 이름</span>
      </div>
      <div class="question-item">
        질문제목
        <span class="subject">수업 이름</span>
      </div>
      <div class="question-item">
        lorem ipsum
        <span class="subject">수업 이름</span>
      </div>
      <div class="question-item">
        질문
        <span class="subject">수업 이름</span>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>
.main-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: rgba(34, 124, 49);
}
.main-detail {
  font-size: 0.9rem;
  margin-bottom: 2rem;
}

.question-list {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.question-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.5rem 0.6rem;
  font-size: 0.85rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.question-item .subject {
  color: #666;
  margin-left: 0.6rem;
  font-size: 0.8rem;
}
.subject {
  padding-left: 1rem;
  border-left: 1px solid rgb(198, 198, 198);
}

.nonans-question {
  margin: 3rem 5rem;
}
</style>