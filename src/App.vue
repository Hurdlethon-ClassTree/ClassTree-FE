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

/* 스크롤바 숨기기 */
.router::-webkit-scrollbar {
  display: none; /* 웹킷 기반 브라우저에서 스크롤바 숨김 */
}

.left-bar {
  position: fixed;
  top: 3.5rem; /* 헤더 바로 아래에 위치 */
  left: 0;
  width: 12rem;
  height: calc(100vh - 3.5rem); /* 전체 화면 높이에서 헤더 크기만큼 뺀 높이 */
  background-color: rgb(235, 235, 235);
  padding: 1.5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 10; /* 사이드바가 다른 요소 위로 오도록 설정 */
}

.left-bar-menu {
  margin-bottom: 1rem;
  padding: 0.8rem;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.left-bar-menu:hover {
  background-color: #d4edda; /* 연한 초록색 */
  color: #155724; /* 어두운 초록색 텍스트 */
}

header {
  background-color: white;
  display: flex;
  align-items: center;
  height: 3.5rem;
  padding: 0 2rem;
  border-bottom: 1px solid rgb(224, 224, 224);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20; /* 헤더가 다른 요소 위로 오도록 설정 */
  box-sizing: border-box; /* 패딩을 포함한 크기 계산 */
  overflow: hidden; /* header가 화면을 벗어나지 않도록 */
}

.search-box {
  height: 2.5rem;
  max-width: 100%; /* 화면 크기를 넘지 않도록 설정 */
  width: 18rem;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 0.25rem;
  padding-left: 0.5rem;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}

.search-box-input {
  border: none;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  font-size: 0.9rem;
  box-sizing: border-box;
}

.search-box-input::placeholder {
  color: #aaa;
}

/* 메뉴 버튼 스타일 */
.header-menu-item {
  margin-left: 1rem;
  font-size: 0.9rem;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.header-menu-item:hover {
  background-color: rgba(0, 123, 255, 0.1); /* 클릭 시 음영 효과 */
  color: #007bff; /* 하이퍼링크 색상 */
  cursor: pointer;
}

/* 링크에 밑줄 효과 */
.link {
  text-decoration: none; /* 기본 밑줄 제거 */
  color: inherit; /* 텍스트 색상 상속 */
}

.header-menu {
  display: flex;
  align-items: center;
  margin-right: 2rem;
}
</style>
