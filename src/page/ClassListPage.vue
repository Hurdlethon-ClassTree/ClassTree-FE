<template>
  <div class="classlist">
    <div>
      <div class="classlist-title">24년 2학기 개설목록</div>
    </div>
    <div class="class-row">
      <div class="class" v-for="(subject, index) in subjects" :key="index">
        <div class="class-icon"></div>
        <div class="class-subject-name">{{ subject.name }}</div>
        <div class="class-professor-name">{{ subject.professor }}</div>
        <div class="class-in-btn-cover">
          <button class="class-in-btn">입장하기</button>
        </div>
      </div>
    </div>
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
        { id: 1, name: "과목명1", professor: "교수 이름1" },
        { id: 2, name: "과목명2", professor: "교수 이름2" },
        { id: 3, name: "과목명3", professor: "교수 이름3" },
        { id: 4, name: "과목명4", professor: "교수 이름4" },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.classlist-title {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  height: 10rem;
  line-height: 10rem;
}
.class-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  gap: 20px;
}
.class-row:not(:last-child) {
  border-bottom: 1px solid rgb(27, 145, 27);
}
.class {
  margin: 0 2.5rem;
  padding: 2rem 0 3.5rem;
  background-color: rgb(242, 242, 242);
  border-radius: 2rem;
}
.classlist {
  min-height: 100vh;
  margin: 0 5rem;
}
.class-subject-name,
.class-professor-name {
  text-align: center;
}
.class-professor-name {
  color: grey;
  font-size: 0.8rem;
  margin-top: 0.4rem;
}
.class-icon {
  height: 6rem;
  width: 6rem;
  border: 1px solid rgb(182, 182, 182);
  background-color: white;
  border-radius: 3rem;
  margin: 0 auto;
  margin-bottom: 2rem;
}
.class-in-btn {
  border: none;
  background-color: rgb(102, 187, 106);
  color: white;
  height: 2rem;
  width: 5rem;
  border-radius: 1rem;
  position: absolute;
  margin: 0 auto;
}
.class-in-btn-cover {
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
}
</style>
