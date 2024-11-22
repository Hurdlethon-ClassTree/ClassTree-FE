<template>
  <div class="main-page">
    <div class="left-bar">
      <router-link to="/ask" class="link">
        <div class="left-bar-menu">질문하기</div>
      </router-link>
      <router-link to="/class" class="link">
        <div class="left-bar-menu">나의 강의실</div>
      </router-link>
      <div class="left-bar-menu">미답변 질문</div>
      <div class="left-bar-menu">나의 질문</div>
    </div>
    <div class="body">
      <div class="banner">
        <div class="banner-title">ClassTree에 오신 것을 환영합니다!</div>
        <div>수업에서 여쭤보기 어려웠던 질문들 익명으로 질문하세요!</div>
      </div>
      <div class="home-content">
        <div class="main-title">누구보다 먼저 답변을 달아보세요!</div>
        <div class="main-detail">다른 학생들은 이런 질문을 하고 있어요</div>
        <div class="nonans-questions">
          <div class="nonans-question-row">
            <div class="nonans-question">
              <div class="nonans-question-subject-name">과목명</div>
              <div class="nonans-question-body">
                <div class="nonans-question-title">제목</div>
                <div class="nonans-question-tags">
                  <div class="nonans-question-tag">과목코드</div>
                  <div class="nonans-question-tag">교수명</div>
                </div>
              </div>
            </div>
            <div class="nonans-question">
              <div class="nonans-question-subject-name">과목명</div>
              <div class="nonans-question-body">
                <div class="nonans-question-title">제목</div>
                <div class="nonans-question-tags">
                  <div class="nonans-question-tag">과목코드</div>
                  <div class="nonans-question-tag">교수명</div>
                </div>
              </div>
            </div>
            <div class="nonans-question">
              <div class="nonans-question-subject-name">과목명</div>
              <div class="nonans-question-body">
                <div class="nonans-question-title">제목</div>
                <div class="nonans-question-tags">
                  <div class="nonans-question-tag">과목코드</div>
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
                  <div class="nonans-question-tag">과목코드</div>
                  <div class="nonans-question-tag">교수명</div>
                </div>
              </div>
            </div>
            <div class="nonans-question">
              <div class="nonans-question-subject-name">과목명</div>
              <div class="nonans-question-body">
                <div class="nonans-question-title">제목</div>
                <div class="nonans-question-tags">
                  <div class="nonans-question-tag">과목코드</div>
                  <div class="nonans-question-tag">교수명</div>
                </div>
              </div>
            </div>
            <div class="nonans-question">
              <div class="nonans-question-subject-name">과목명</div>
              <div class="nonans-question-body">
                <div class="nonans-question-title">제목</div>
                <div class="nonans-question-tags">
                  <div class="nonans-question-tag">과목코드</div>
                  <div class="nonans-question-tag">교수명</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="nonans-question-showmore">+ 더보기</button>
      </div>


      <div class="home-content">
        <div class="main-title">강의실에 새 질문이 달렸어요!</div>
        <div class="new-questions">
          <div class="new-question">
            <div class="new-question-subject-name">과목명</div>
            <div class="new-question-professor-name">교수명</div>
            <div class="new-question-subject-code">과목코드</div>
          </div>
          <div class="new-question">
            <div class="new-question-subject-name">과목명</div>
            <div class="new-question-professor-name">교수명</div>
            <div class="new-question-subject-code">과목코드</div>
          </div>
          <div class="new-question">
            <div class="new-question-subject-name">과목명</div>
            <div class="new-question-professor-name">교수명</div>
            <div class="new-question-subject-code">과목코드</div>
          </div>
        </div>
      </div>

      <div class="user-info">
        <div>
          <div class="user-icon"></div>
          <div>
            <div>이용자 별명</div>
            <div>N년 전부터 활동 중</div>
          </div>
        </div>
        <button>프로필 수정하기</button>
      </div>

      <div class="home-content">
        <div class="main-title">나의 미답변 질문 목록</div>
        <div class="main-detail">당신의 답변을 기다리고 있어요!</div>
      </div>

    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.left-bar {
  font-size: 0.85rem;
  background-color: rgb(235, 235, 235);
  width: 10.5rem;
  position: fixed;
  padding: 1rem 1rem;
  height: 100%;
}
.left-bar-menu {
  margin-bottom: 1.2rem;
}
.body {
  position: absolute;
  left: 12.5rem;
  width: calc(100% - 12.5rem);
}
.banner {
  background-color: rgb(102, 187, 106);
  color: white;
  height: 6rem;
  padding: 3rem 0;
  text-align: center;
}
.banner-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}
.main-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.main-detail {
  font-size: 0.9rem;
  margin-bottom: 2rem;
}
.nonans-question-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 8rem;
  margin-bottom: 1rem;
}
.nonans-question {
  border: 1px solid rgb(232, 232, 232);
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  font-size: 0.9rem;
}
.nonans-question:not(:last-child) {
  margin-right: 1.5rem;
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
.nonans-question-showmore {
  width: 100%;
  height: 2rem;
  color: rgb(99, 99, 99);
  background-color: white;
  border: 1px solid rgb(99, 99, 99);
  border-radius: 0.3rem;
}
.home-content {
  border-bottom: 1px solid rgb(230, 230, 230);
  padding: 3rem 5rem;
}

/*new-questions*/
.new-questions {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
}
.new-question-subject-name {
  background-color: rgb(213, 213, 213);
  width: 12rem;
  height: 12rem;
  border-radius: 6rem;
  line-height: 12rem;
  margin: 0 auto;
  margin-bottom: 1rem;
}
.new-question-professor-name {
  font-size: 0.9rem;
}
.new-question-subject-code {
  font-size: 0.8rem;
}
.new-questions {
  margin-top: 2rem;
}
</style>