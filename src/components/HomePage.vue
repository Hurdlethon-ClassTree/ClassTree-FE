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
  overflow-y: scroll;
}
.banner {
  background-color: rgb(82, 82, 82);
  color: white;
  height: 15rem;
  padding: 3rem 0;
}
.banner-title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
}
</style>