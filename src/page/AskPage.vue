<template>
  <div class="ask-page">
    <!-- 상단 로고 및 설명 -->
    <div class="ask-page-header">
      <div class="ask-page-logo">💡 질문하기</div>
      <p>궁금한 내용을 입력하고 다른 사람들의 도움을 받아보세요!</p>
    </div>

    <!-- 입력 폼 -->
    <form class="ask-page-form">
      <div class="ask-page-input">
        <label class="ask-page-input-label">제목</label>
        <input
          class="ask-page-input-area"
          type="text"
          placeholder="제목을 입력하세요"
        />
      </div>
      <div class="ask-page-input">
        <label class="ask-page-input-label">수업명</label>
        <input
          class="ask-page-input-area"
          type="text"
          placeholder="수업명을 선택해 주세요"
        />
      </div>
      <div class="ask-page-input">
        <label class="ask-page-input-label">내용</label>
        <div
          class="ask-page-input-area ask-page-input-body"
          spellcheck="false"
          placeholder="내용을 입력하세요"
          contenteditable="true"
        ></div>
      </div>
      <div class="ask-page-input">
        <label class="ask-page-input-label">리워드 걸기</label>
        <input
          class="ask-page-input-area"
          type="text"
          placeholder="0점 이상의 포인트를 입력하세요"
        />
      </div>
    </form>

    <!-- 별명 가리기 토글 -->
    <div class="name-hide-area">
      <div class="name-hide-label">별명을 가리겠습니까?</div>
      <div class="name-hide-toggle">
        <input type="checkbox" id="name-hide-checkbox" />
        <label for="name-hide-checkbox" class="toggle-switch"></label>
      </div>
    </div>

    <!-- 게시 버튼 -->
    <div class="post-btn-cover">
      <button class="post-btn">게시하기</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* 질문하기 페이지 */
.ask-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 3.5rem); /* 헤더 높이 제외 */
  padding: 2rem;
  box-sizing: border-box;
  background-color: #f9f9f9;
  overflow-y: auto;
}

/* 상단 로고 및 설명 */
.ask-page-header {
  text-align: center;
  margin-top: 15rem;
  margin-bottom: 2rem;
}

.ask-page-logo {
  font-size: 2.5rem;
  font-weight: bold;
  color: #66bb6a;
  margin-bottom: 0.5rem;
}

.ask-page-header p {
  font-size: 1rem;
  color: #666;
}

/* 입력 폼 */
.ask-page-form {
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.ask-page-input {
  display: flex;
  flex-direction: column;
}

.ask-page-input-label {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #555;
}

.ask-page-input-area {
  border: 1px solid #ddd;
  line-height: 2rem;
  font-size: 1rem;
  border-radius: 4px;
  padding: 0 0.8rem;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
}

.ask-page-input-area:focus {
  border-color: #66bb6a;
  outline: none;
  box-shadow: 0 0 4px rgba(102, 187, 106, 0.4);
}

.ask-page-input-area::placeholder {
  color: #aaa;
}

.ask-page-input-body {
  min-height: 200px;
  padding: 0.8rem;
  resize: none;
}

.ask-page-input-body:empty::before {
  content: attr(placeholder);
  color: #aaa;
}

/* 별명 가리기 토글 */
.name-hide-area {
  margin-top: 2rem;
  text-align: center;
}

.name-hide-label {
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #555;
}

.name-hide-toggle {
  position: relative;
  width: 50px;
  height: 26px;
  margin: 0 auto;
}

.name-hide-toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-switch {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 26px;
  transition: 0.4s;
}

.toggle-switch:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  border-radius: 50%;
  transition: 0.4s;
}

input:checked + .toggle-switch {
  background-color: #66bb6a;
}

input:checked + .toggle-switch:before {
  transform: translateX(24px);
}

/* 게시 버튼 */
.post-btn-cover {
  margin-top: 2rem;
  text-align: center;
}

.post-btn {
  background-color: #66bb6a;
  color: white;
  border: none;
  padding: 0.6rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.post-btn:hover {
  background-color: #4caf50;
}
</style>
