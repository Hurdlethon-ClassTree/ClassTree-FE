<template>
  <SiteHeader />
  <main>
    <LeftBar />
    <div class="router">
      <router-view />
    </div>
  </main>
</template>

<script>
import SiteHeader from "./components/SiteHeader.vue";
import LeftBar from "./components/LeftBar.vue";

export default {
  components: {
    SiteHeader,
    LeftBar,
  },
};
</script>

<style>
/* 전체 페이지에서 스크롤을 막고, 스크롤바를 숨깁니다 */
html,
body {
  height: 100%;
  margin: 0;
  overflow: hidden; /* 페이지 전체에서 스크롤을 막음 */
}

main {
  display: flex;
  height: 100vh; /* 전체 화면 크기 */
  margin-top: 3.5rem; /* 헤더 높이만큼 여백을 둡니다. */
}

.router {
  flex-grow: 1; /* 남은 공간을 채워줍니다 */
  overflow-y: auto; /* 라우팅된 컴포넌트에서만 스크롤 가능 */
  height: calc(100vh - 3.5rem); /* 헤더 높이를 제외한 화면 높이 */
}

/* 링크에 밑줄 효과 */
.link {
  text-decoration: none; /* 기본 밑줄 제거 */
  color: inherit; /* 텍스트 색상 상속 */
}
</style>
