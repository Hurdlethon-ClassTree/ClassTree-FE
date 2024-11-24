<template>
  <div class="classlist">
    <div>
      <div class="classlist-title">24년 2학기 개설목록</div>
    </div>
    <div v-if="loading">로딩중</div>
    <div class="class-row" v-else>
      <div class="class" v-for="(subject, index) in subjects" :key="index">
        <div class="class-icon"></div>
        <div class="class-subject-name">{{ subject.lecture_name }}</div>
        <div class="class-professor-name">{{ subject.lecture_code }}</div>
        <div class="class-in-btn-cover">
          <button class="class-in-btn">입장하기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as lectureListApi from "@/api/board/lectureList";

export default {
  data() {
    return {
      loading: true,
      error: null,
      subjects: [
        {
          lecture_id: 2,
          lecture_name: "네트워크",
          lecture_code: "CSE-1232",
          lecture_day: "0101000",
          lecture_time: "14:00:00 ~ 15:00:00",
          semester: "1",
          year: "2024",
        },
      ],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await lectureListApi.lectureList();
        this.subjects = response.data.lecture_list;
      } catch (err) {
        console.error(err);
      } finally {
        this.loading = false;
      }
    },
  },
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
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  gap: 5rem;
}
.class-row:not(:last-child) {
  border-bottom: 1px solid rgb(27, 145, 27);
}
.class {
  margin: 0 2.5rem;
  padding: 2rem 0 3.5rem;
  width: 15vw;
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
