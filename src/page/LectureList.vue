<template>
  <div class="container">
    <main>
      <h2>24년 2학기 개설 과목</h2>
      <div class="subject-list">
        <div
          class="subject-card"
          v-for="(subject, index) in subjects"
          :key="index"
        >
          <p class="subject-name">{{ subject.name }}</p>
          <p class="subject-professor">{{ subject.professor }}</p>
          <button @click="enterSubject(subject.id)">입장하기</button>
        </div>
      </div>
    </main>

    <footer>
      <p>© 2022 Classroom Q&A. All Rights Reserved</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subjects: [
        { id: 1, name: "과목명1", professor: "교수 이름1" },
        { id: 2, name: "과목명2", professor: "교수 이름2" },
        { id: 3, name: "과목명3", professor: "교수 이름3" },
        { id: 4, name: "과목명4", professor: "교수 이름4" },
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

<style>
.container {
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
}

.header h1 {
  font-size: 20px;
}

.search-bar {
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

main {
  margin-top: 20px;
}

h2 {
  font-size: 24px;
  margin-bottom: 30px;
}

.subject-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.subject-card {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.subject-icon {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}

.subject-name {
  font-size: 18px;
  font-weight: bold;
}

.subject-professor {
  font-size: 14px;
  color: #666;
}

button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #444;
}

footer {
  margin-top: 50px;
  font-size: 12px;
  color: #aaa;
}
</style>
