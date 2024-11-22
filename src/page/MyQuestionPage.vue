<template>
  <div>
    <div class="myquestion-list">
      나의 질문 목록
    </div>
    <div class="nonans-questions">
      <div class="nonans-question-row">
        <div class="nonans-question">
          <div class="nonans-question-subject-name">과목명</div>
          <div class="nonans-question-body">
            <div class="nonans-question-title">제목</div>
            <div class="nonans-question-tags">
              <div class="nonans-question-tag">게시일자</div>
              <div class="nonans-question-tag">교수명</div>
            </div>
          </div>
        </div>
        <div class="nonans-question">
          <div class="nonans-question-subject-name">과목명</div>
          <div class="nonans-question-body">
            <div class="nonans-question-title">제목</div>
            <div class="nonans-question-tags">
              <div class="nonans-question-tag">게시일자</div>
              <div class="nonans-question-tag">교수명</div>
            </div>
          </div>
        </div>
      </div>
      <div class="nonans-question-row">
        <div class="nonans-question">
          <div class="nonans-question-subject-name">과목명</div>
          <div class="nonans-question-body">
            <div class="nonans-question-title">제목</div>
            <div class="nonans-question-tags">
              <div class="nonans-question-tag">게시일자</div>
              <div class="nonans-question-tag">교수명</div>
            </div>
          </div>
        </div>
        <div class="nonans-question">
          <div class="nonans-question-subject-name">과목명</div>
          <div class="nonans-question-body">
            <div class="nonans-question-title">제목</div>
            <div class="nonans-question-tags">
              <div class="nonans-question-tag">게시일자</div>
              <div class="nonans-question-tag">교수명</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.myquestion-list {
  font-size: 1.5rem;
  font-weight: bold;
  padding-left: 5rem;
  height: 10rem;
  line-height: 10rem;
  border-bottom: 1px solid rgb(236, 236, 236);
}

.nonans-questions {
  margin: 3rem 10rem;
}
.nonans-question-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 8rem;
  margin-bottom: 2rem;
}
.nonans-question {
  border: 1px solid rgb(232, 232, 232);
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  font-size: 0.9rem;
}
.nonans-question:first-child {
  margin-right: 1.5rem;
}
.nonans-question:last-child {
  margin-left: 1.5rem;
}
.nonans-question-subject-name {
  height: 6rem;
  width: 6rem;
  border-radius: 3rem;
  background-color: rgb(217, 217, 217);
  line-height: 6rem;
  text-align: center;
  margin-right: 1rem;
}
.nonans-question-title {
  margin-bottom: 0.5rem;
}
.nonans-question-tags {
  display: flex;
}
.nonans-question-tag {
  font-size: 0.8rem;
  background-color: rgb(239, 239, 239);
  height: 1.3rem;
  line-height: 1.3rem;
  padding: 0 0.3rem;
  margin-right: 0.5rem;
  border-radius: 0.1rem;
}
</style>