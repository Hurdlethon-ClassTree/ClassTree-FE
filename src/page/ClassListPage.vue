<template>
  <div class="classlist">
    <div>
      <div class="classlist-title">24년 2학기 개설목록</div>
    </div>

    <!-- 로딩 중 -->
    <div v-if="loading" class="loading">
      <div class="spinner"></div>
      <p>로딩중...</p>
    </div>

    <!-- 클래스 목록 -->
    <div v-else>
      <div v-if="error" class="error-message">{{ error }}</div>
      <div class="class-row">
        <div class="class" v-for="(subject, index) in subjects" :key="index">
          <div class="class-icon"></div>
          <div class="class-subject-name">{{ subject.lecture_name }}</div>
          <div class="class-professor-name">{{ subject.lecture_code }}</div>
          <div class="class-in-btn-cover">
            <button
              class="class-in-btn"
              @click="enterClass(subject.lecture_id)"
            >
              입장하기
            </button>
          </div>
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
      subjects: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      // 캐싱된 데이터 확인
      // const cachedData = localStorage.getItem("cachedSubjects");
      // if (cachedData) {
      //   // 캐싱된 데이터 사용
      //   this.subjects = JSON.parse(cachedData);
      //   this.loading = false;
      //   return;
      // }

      // 서버에서 데이터 가져오기
      try {
        const response = await lectureListApi.lectureList();
        this.subjects = response.data;
        console.log(this.subjects);
        // 데이터 캐싱
        // localStorage.setItem("cachedSubjects", JSON.stringify(this.subjects));
      } catch (err) {
        console.error(err);
        this.error = "데이터를 불러오는 데 실패했습니다.";
      } finally {
        this.loading = false;
      }
    },
    enterClass(lectureId) {
      alert(`클래스 ${lectureId}에 입장합니다.`);
      // 실제 라우팅이나 로직 추가
    },
  },
};
</script>

<style scoped>
.classlist {
  margin: 2rem;
}

/* 클래스 목록 타이틀 */
.classlist-title {
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
}

/* 로딩 애니메이션 */
.loading {
  text-align: center;
  margin-top: 2rem;
}
.spinner {
  margin: 0 auto;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #66bb6a;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* 클래스 목록 */
.class-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

/* 클래스 카드 */
.class {
  padding: 1.5rem;
  background-color: #f9f9f9;
  border-radius: 0.5rem;
  text-align: center;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.class:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.class-icon {
  width: 60px;
  height: 60px;
  background-color: white;
  border: 2px solid #ddd;
  border-radius: 50%;
  margin: 0 auto 1rem;
}

/* 클래스 텍스트 */
.class-subject-name {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.class-professor-name {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

/* 입장 버튼 */
.class-in-btn-cover {
  display: flex;
  justify-content: center;
}
.class-in-btn {
  background-color: #66bb6a;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
}
.class-in-btn:hover {
  background-color: #4caf50;
}

/* 에러 메시지 */
.error-message {
  text-align: center;
  color: red;
  font-weight: bold;
  margin-bottom: 2rem;
}
</style>
