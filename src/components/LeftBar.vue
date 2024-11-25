<template>
  <div class="left-bar">
    <router-link to="/ask" class="link">
      <div class="left-bar-menu">질문하기</div>
    </router-link>
    <router-link to="/myclass" class="link">
      <div class="left-bar-menu">나의 강의실</div>
    </router-link>
    <router-link to="/nonans" class="link">
      <div class="left-bar-menu">미답변 질문</div>
    </router-link>
    <router-link to="/myquestion" class="link">
      <div class="left-bar-menu">나의 질문</div>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.left-bar {
  font-size: 1rem;
  background-color: rgb(235, 235, 235);
  width: 15vw;
  height: 100%;
  padding: 1.5rem;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* 메뉴 항목들을 상단에 정렬 */
}

.left-bar-menu {
  margin-bottom: 1rem; /* 메뉴 항목 간 간격을 설정 */
  padding: 0.8rem;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease;
}

.left-bar-menu:hover {
  background-color: #d4edda;
}
</style>
