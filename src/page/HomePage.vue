<template>
  <div class="body">
    <div class="banner">
      <div class="banner-title">ClassTree에 오신 것을 환영합니다!</div>
      <div>수업에서 여쭤보기 어려웠던 질문들 익명으로 질문하세요!</div>
    </div>
    <div class="home-content">
      <div class="main-title">누구보다 먼저 답변을 달아보세요!</div>
      <div class="main-detail">다른 학생들은 이런 질문을 하고 있어요</div>
      <div class="nonans-questions">
        <div class="nonans-question-card" v-for="question in 4" :key="question">
          <div class="nonans-question-subject-name">
            {{ nonansQ[0].lecture_name }}
          </div>
          <div class="nonans-question-body">
            <div class="nonans-question-title">
              {{ nonansQ[0].title }}
            </div>
            <div class="nonans-question-tags">
              <div class="nonans-question-tag">
                {{ nonansQ[0].code }}
              </div>
              <div class="nonans-question-tag">
                {{ nonansQ[0].professor }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="load-more">+ 더보기</button>
    </div>

    <div class="home-content">
      <div class="main-title">강의실에 새 질문이 달렸어요!</div>
      <div class="new-questions">
        <div class="new-question" v-for="question in 3" :key="question">
          <div class="new-question-subject-name">
            {{ newQ_lecture[0].lecture_name }}
          </div>
          <div class="new-question-professor-name">
            {{ newQ_lecture[0].professor }}
          </div>
          <div class="new-question-subject-code">
            {{ newQ_lecture[0].code }}
          </div>
        </div>
      </div>
    </div>

    <div class="user-info-area">
      <div class="user-info-body">
        <div class="user-icon"></div>
        <div class="user-info">
          <div class="user-name">이용자 별명</div>
          <div class="user-history">N년 전부터 활동 중</div>
        </div>
      </div>
      <button class="user-info-modify-btn">프로필 수정하기</button>
    </div>

    <div class="home-content">
      <div class="main-title">나의 미답변 질문 목록</div>
      <div class="main-detail">당신의 답변을 기다리고 있어요!</div>

      <div class="question-list">
        <div class="question-item" v-for="question in 4" :key="question">
          {{ my_nonansQ[0].title }}
          <span class="subject">{{ my_nonansQ[0].lecture_name }}</span>
        </div>
      </div>
      <button class="load-more">+ 더보기</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nonansQ: [
        {
          question_id: 1,
          lecture_name: "과목명1",
          title: "제목",
          code: "코드",
          professor: "교수 이름1",
        },
      ],
      newQ_lecture: [
        {
          question_id: 1,
          lecture_name: "과목명1",
          title: "제목",
          code: "코드",
          professor: "교수 이름1",
        },
      ],
      my_nonansQ: [
        {
          question_id: 1,
          lecture_name: "과목명1",
          title: "제목",
          code: "코드",
          professor: "교수 이름1",
        },
      ],
    };
  },
  methods: {
    enterSubject(subjectId) {
      alert(`입장한 과목 ID: ${subjectId}`);
      // 원하는 로직 추가 (라우팅 등)
    },
  },
};
</script>

<style scoped>
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
.nonans-questions {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding: 0 0.5rem;
  font-size: 0.9rem;
  gap: 20px;
}
.nonans-question-card {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
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
.load-more {
  width: 100%;
  height: 2.3rem;
  color: rgb(99, 99, 99);
  background-color: white;
  border: 1px solid rgb(99, 99, 99);
  border-radius: 0.3rem;
  margin-top: 1rem;
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

/*user-info-modify*/
.user-info-area {
  height: 10rem;
  align-items: center;
  padding: 0 2rem;
  display: flex;
  background-color: rgb(130, 177, 132);
}
.user-icon {
  width: 6rem;
  height: 6rem;
  background-color: rgba(217, 217, 217, 0.5);
  border-radius: 4rem;
  margin-right: 1.5rem;
}
.user-info-modify-btn {
  background-color: black;
  height: 2.3rem;
  color: white;
  border: none;
  padding: 0 0.7rem;
  border-radius: 0.3rem;
  right: 3rem;
  position: absolute;
}
.user-info-body {
  display: flex;
  align-content: center;
}
.user-name {
  margin-top: 1.5rem;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
}
.user-history {
  color: white;
  font-size: 0.9rem;
}

/*미답변 질문 목록*/

.container {
  width: 90%;
  max-width: 800px;
  text-align: center;
}

h1 {
  font-size: 1.5rem;
  margin-bottom: 0.8rem;
}

.subtitle {
  color: #666;
  margin-bottom: 1.3rem;
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
</style>
