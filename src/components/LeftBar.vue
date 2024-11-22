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
  font-size: 0.85rem;
  background-color: rgb(235, 235, 235);
  width: 10.5rem;
  padding: 1rem 1rem;
}
.left-bar-menu {
  margin-bottom: 1.2rem;
}
</style>
