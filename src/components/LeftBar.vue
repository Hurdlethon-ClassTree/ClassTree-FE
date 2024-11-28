<template>
  <div class="left-bar">
    <router-link to="/myclass" class="link">
      <div class="left-bar-menu-cover">
        <img
          src="../../public/image/myclass-icon.png"
          class="left-bar-icon"
          alt="img"
        />
        <div class="left-bar-menu">나의 강의실</div>
      </div>
    </router-link>
    <router-link to="/nonchecked" class="link">
      <div class="left-bar-menu-cover">
        <img
          src="../../public/image/nonans-icon.png"
          class="left-bar-icon"
          alt="img"
        />
        <div class="left-bar-menu">나의 미채택 질문</div>
      </div>
    </router-link>
    <router-link to="/myquestion" class="link">
      <div class="left-bar-menu-cover">
        <img
          src="../../public/image/question-icon.png"
          class="left-bar-icon"
          alt="img"
        />
        <div class="left-bar-menu">나의 질문</div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.left-bar {
  padding: 1.4rem 1.2rem;
  font-size: 1rem;
  background-color: rgb(235, 235, 235);
  width: 15rem;
  height: 100%;
  box-sizing: border-box;
  position: sticky;
  top: 0;
}

.left-bar-menu {
  padding: 0;
  font-size: 0.9rem;
  font-weight: bold;
  margin-top: 0.4rem;
}

.left-bar-menu-cover {
  margin-bottom: 1rem;
  display: flex;
}

.left-bar-icon {
  height: 1.8rem;
  margin-right: 0.8rem;
}
</style>
