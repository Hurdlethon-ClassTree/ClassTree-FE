<template>
  <div class="class-page">
    <!-- 수업 정보 -->
    <section class="class-info">
      <h1 class="class-name">수업1</h1>
      <p class="class-professor-name">교수 이름</p>
      <p class="class-info-detail">어떤 질문이던 자유롭게 질문하세요!</p>
      <button class="class-ask-btn">질문하기</button>
    </section>

    <!-- 질문 목록 -->
    <section class="question-list-section">
      <h2 class="section-title">질문 목록</h2>
      <div class="post-list">
        <div class="post" v-for="(post, index) in posts" :key="index">
          <div class="post-main">
            <h3 class="post-title">{{ post.title }}</h3>
            <p class="post-detail">{{ post.detail }}</p>
            <div class="post-info">
              <span class="reply-num">답변 {{ post.replies }}</span>
              <span class="write-time">{{ post.date }}</span>
              <span class="best-btn">좋아요 {{ post.likes }}</span>
            </div>
          </div>
          <div class="post-point">{{ post.points }}</div>
        </div>
      </div>
      <div class="pagination">
        <button class="page-btn" v-for="page in totalPages" :key="page">
          {{ page }}
        </button>
        <button class="next-btn">다음 ></button>
      </div>
    </section>

    <!-- 역대 개설 과목 -->
    <section class="previous-courses">
      <h2 class="section-title">역대 개설 과목</h2>
      <div class="semestar-list">
        <div
          class="semestar"
          v-for="course in previousCourses"
          :key="course.semester"
        >
          <div class="semestar-body">
            <span class="semestar-open-time">{{ course.semester }}</span>
          </div>
          <div class="semestar-footer">입장하기</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          title: "질문 제목 1",
          detail: "내용 1",
          replies: 0,
          date: "2024-11-25",
          likes: 24,
          points: 100,
        },
        {
          title: "질문 제목 2",
          detail: "내용 2",
          replies: 3,
          date: "2024-11-24",
          likes: 15,
          points: 150,
        },
        {
          title: "질문 제목 3",
          detail: "내용 3",
          replies: 1,
          date: "2024-11-23",
          likes: 8,
          points: 50,
        },
      ],
      totalPages: [1, 2, 3, 4, 5],
      previousCourses: [
        { semester: "24-1" },
        { semester: "23-2" },
        { semester: "23-1" },
        { semester: "22-2" },
      ],
    };
  },
};
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
